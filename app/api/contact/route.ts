import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const request = await req.json();

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: request.email,
    to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO,
    subject: 'New message from "Contact Me" form',
    text: request.message,
    html: `<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <h1 style="color: #333333;">Name: ${request.name}</h1>
    <h2 style="color: #666666;">Email: ${request.email}</h2>
    <h4 style="color: #333333;">Subject: ${request.subject}</h4>
    <p style="color: #333333;">Message: ${request.message}</p>
  </div>
  `,
  };

  return await transporter
    .sendMail(mailOptions)
    .then((response: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 }
      );
    });
}
