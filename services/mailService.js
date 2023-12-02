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
    <div style="
      border-radius: 8px; 
      box-shadow: 10px 11px 31px -3px rgba(0,0,0,0.66); 
      background-color: #f5f3f4; 
      padding: 20px; 
      margin: 20px auto; 
      max-width: 300px; 
      display:flex; 
      justify-content:center;
      flex-direction: column;">
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