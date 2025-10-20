import nodemailer from "nodemailer";

interface ISendEmail {
  email: string;
  html: string;
  subject: string;
  name: string;
}

  const smtpServer = process.env.EMAIL_HOST;
    const smtpPort = 587;

async function sendEmail(props: ISendEmail) {
  let transporter = nodemailer.createTransport({
    host: smtpServer,
    port: process.env.EMAIL_PORT,
    secure: false,   // true for port 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let message = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: props.subject,
    name: props.name,
    html: `<h1>Contact Form</h1><br>
    <b>Name</b>: ${props.name}<br> 
    <b>Email</b>: ${props.email}<br>
    <b>Message</b>: ${props.html}`,
  };

  let info = await transporter.sendMail(message);
  return info;
}

export { sendEmail };
