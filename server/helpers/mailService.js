const nodemailer = require("nodemailer");

let mailConfigCache = null;

function hasSmtpCredentials() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

function authConfig() {
  if (hasSmtpCredentials()) {
    const auth = {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    };
    return auth;
  }
  return null;
}

async function getinitializedMail() {
  const auth = authConfig();

  if (auth) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true" || false,
      auth: authConfig(),
    });
    try {
      await transporter.verify();
      console.log("Server is ready to take our messages");
    } catch (err) {
      console.error(err);
    }

    return {
      transporter,
      from: process.env.SMTP_FROM || auth.user
    }
  }

  if (process.env.MAIL_MODE === "Ethereal") {
    const testaccout = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: testaccout.smtp.host,
      port: testaccout.smtp.port,
      secure: testaccout.smtp.secure,
      auth: {
        user: testaccout.user,
        pass: testaccout.pass,
      },
    });

    return {
      transporter,
      from: '"Test Sender"<test@example.com>',
    };
  }
  console.warn("\n--- Mail not configured properly. ---");
  console.warn(
    "Add Gmail (or other SMTP) credentials to .env to send registration emails.",
  );
  return null;
}

async function getmailConfig(){
  if(!mailConfigCache){
    mailConfigCache =getinitializedMail().catch((err)=>{
       mailConfigCache=null;
       throw err;
    }); 
  } 
  return mailConfigCache; 
}


const sendMail = async function sendMail({ to, subject, template }) {
  const config = await getmailConfig();
  if (!config) {
    console.error("Mail is not configured properly");
    return null;
  }
  try {
    const { transporter, from } = config;
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html: template,
    });
    console.log("Message sent Properly");
    if (process.env.MAIL_MODE === "Ethereal") {
      console.log("Ethereal Preview Url", nodemailer.getTestMessageUrl(info));
    }
    return info;
  } catch (err) {
    console.log("Error while messaging");
  }
};

module.exports = {getmailConfig,sendMail};
