const otpMailTemp = (Name, OTPCode, Company) => {
  return  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification Code</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; color: #333333;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
        <!-- Header / Brand -->
        <tr>
            <td style="background-color: #4f46e5; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">{${Company}}</h1>
            </td>
        </tr>
        <!-- Body Content -->
        <tr>
            <td style="padding: 40px 30px;">
                <h2 style="margin-top: 0; color: #111827; font-size: 20px; font-weight: 600;">Security Verification</h2>
                <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                    Hello {${Name}},<br><br>
                    We received a request to access your account. Please use the following One-Time Password (OTP) to complete your verification. This code is valid for <strong>10 minutes</strong>.
                </p>
                
                <!-- OTP Box -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 30px auto;">
                    <tr>
                        <td style="background-color: #f3f4f6; border: 1px dashed #cdcdd2; border-radius: 6px; padding: 15px 40px; text-align: center; letter-spacing: 6px; font-size: 32px; font-weight: 700; color: #111827;">
                            ${OTPCode}
                        </td>
                    </tr>
                </table>

                <!-- Security Notice -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width: 100%; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
                    <tr>
                        <td style="color: #6b7280; font-size: 14px; line-height: 1.5;">
                            • <strong>Do not share this code</strong> with anyone. Our support team will never ask for it.<br>
                            • If you did not request this code, you can safely ignore this email or secure your account.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <!-- Footer -->
        <tr>
            <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; font-size: 13px; color: #9ca3af; border-top: 1px solid #f3f4f6;">
                © 2026 {${Company}}. All rights reserved.
            </td>
        </tr>
    </table>
</body>
</html>`;
};

module.exports = otpMailTemp;
