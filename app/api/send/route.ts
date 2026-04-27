import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      companyName,
      email,
      phone,
      services,
      message,
    } = body;

    const { data, error } = await resend.emails.send({
      from: "Rapid Solutions <onboarding@resend.dev>",
      to: ["rxasif31@gmail.com"],
      subject: `New Lead: ${firstName} ${lastName} ${companyName ? `from ${companyName}` : ""}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a202c; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase;">New Contact Request</h1>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #4a5568;">You have received a new message from your website contact form.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; font-weight: bold; width: 30%;">Full Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7;">${firstName} ${lastName}</td>
              </tr>
              ${
                companyName
                  ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; font-weight: bold;">Company:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7;">${companyName}</td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; font-weight: bold;">Services:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7;">
                  <span style="background-color: #f0fdf4; color: #166534; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">
                    ${services && services.length > 0 ? services.join(", ") : "Not specified"}
                  </span>
                </td>
              </tr>
            </table>

            <div style="margin-top: 30px; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
              <p style="margin: 0 0 10px 0; font-weight: bold; color: #0f172a;">Message Content:</p>
              <p style="margin: 0; color: #4a5568; white-space: pre-line;">${message}</p>
            </div>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
            This email was sent from the Rapid Solutions Contact Form.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
