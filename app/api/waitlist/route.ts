import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, collectionType, feedbackFocus } = body;

    // Validate required fields
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Send notification email to you (admin)
    const adminEmailData = {
      from: 'LootLook Beta <hello@lootlook.app>',
      to: 'hello@lootlook.app',
      subject: '🎉 New Beta Waitlist Signup!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b;">New Beta Tester Signup</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
            ${collectionType ? `<p><strong>Collection Type:</strong> ${collectionType}</p>` : ''}
            ${feedbackFocus ? `<p><strong>Feedback Focus:</strong> ${feedbackFocus}</p>` : ''}
            <p><strong>Signed up:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This person has joined your TestFlight beta waitlist and wants to help test LootLook!
          </p>
        </div>
      `,
    };

    // Send welcome email to the user
    const userEmailData = {
      from: 'LootLook Beta <hello@lootlook.app>',
      to: email,
      subject: 'Welcome to the LootLook Beta Program! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #f59e0b, #f97316); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to LootLook Beta!</h1>
          </div>

          <div style="background-color: #f9fafb; padding: 30px 20px;">
            <p style="font-size: 16px; color: #111827;">Hi${name ? ` ${name}` : ''},</p>

            <p style="font-size: 16px; color: #111827; line-height: 1.6;">
              Thanks for joining the LootLook beta program! We're excited to have you on board as an early tester.
            </p>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <h3 style="color: #f59e0b; margin-top: 0;">What's Next?</h3>
              <ol style="color: #374151; line-height: 1.8;">
                <li>Join TestFlight using the link below</li>
                <li>Download LootLook and start testing</li>
                <li>Share your feedback with us</li>
                <li>Help shape the future of collection management!</li>
              </ol>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://testflight.apple.com/join/BFV58W4E"
                 style="background: linear-gradient(to right, #f59e0b, #f97316);
                        color: white;
                        padding: 15px 30px;
                        text-decoration: none;
                        border-radius: 8px;
                        font-weight: bold;
                        display: inline-block;">
                Join TestFlight Beta
              </a>
            </div>

            <p style="font-size: 14px; color: #6b7280; line-height: 1.6;">
              <strong>Your Testing Focus:</strong><br>
              ${feedbackFocus ? feedbackFocus : 'General feedback'}<br><br>
              ${collectionType ? `<strong>Collection Type:</strong> ${collectionType}<br><br>` : ''}
              We'll keep you updated on new features and improvements. Your feedback is invaluable to us!
            </p>

            <p style="font-size: 16px; color: #111827; margin-top: 30px;">
              Best regards,<br>
              <strong>The LootLook Team</strong>
            </p>
          </div>

          <div style="background-color: #111827; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              © 2025 LootLook. All rights reserved.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    try {
      await Promise.all([
        resend.emails.send(adminEmailData),
        resend.emails.send(userEmailData),
      ]);
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Continue even if emails fail - you might want to log this to a file or database
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
