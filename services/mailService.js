'use strict';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PW,
  },
});

export async function sendEmail({ name, lastName, email, message }) {
  const emailContent = `
    <div>
      <div>
        <strong>Nombre y Apellido:</strong> ${name} ${lastName}
      </div>
      <div>
        <strong>Email:</strong> ${email}
      </div>
      <div>
        <strong>Mensaje:</strong> ${message}
      </div>
    </div>
  `;
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: 'Nuevo mensaje desde el formulario',
    html: emailContent,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado con éxito');
    return { success: true };
  } catch (error) {
    console.error('Error al enviar el correo electrónico', error);
    throw error;
  }
}