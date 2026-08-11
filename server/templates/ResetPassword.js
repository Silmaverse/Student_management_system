const resetPassword = (Name, Reset_Password_URL, Company) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; color: #333333;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
        <!-- Header / Brand -->
        <tr>
            <td style="background-color: #0f172a; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">{${Company}}</h1>
            </td>
        </tr>
        <!-- Body Content -->
        <tr>
            <td style="padding: 40px 30px;">
                <h2 style="margin-top: 0; color: #111827; font-size: 20px; font-weight: 600;">Password Reset Request</h2>
                <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                    Hello {${Name}},<br><br>
                    We received a request to reset the password for your account. Click the button below to set up a new password. This link will expire in <strong>2 hours</strong>.
                </p>
                
                <!-- CTA Button -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 30px auto;">
                    <tr>
                        <td style="border-radius: 6px; background-color: #2563eb; text-align: center;">
                            <a href="${Reset_Password_URL}" target="_blank" style="background-color: #4160a1; border: 1px solid #2563eb; border-radius: 6px; color: #1f2937; display: inline-block; font-size: 16px; font-weight: 600; padding: 14px 28px; text-decoration: none;  transition: background-color 0.2s;">
                                Reset Password
                            </a>
                        </td>
                    </tr>
                </table>

                <!-- Helper Text -->
                <p style="color: #6b7280; font-size: 14px; line-height: 1.5; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
                    If the button above doesn't work, copy and paste this URL into your browser:<br>
                    <a href="${Reset_Password_URL}" style="color: #2563eb; text-decoration: underline; word-break: break-all;">{{Reset_Password_URL}}</a>
                </p>
                <p style="color: #6b7280; font-size: 14px; line-height: 1.5;">
                    If you didn't request a password reset, you can safely ignore this email. Your current password remains secure.
                </p>
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

module.exports = resetPassword;
