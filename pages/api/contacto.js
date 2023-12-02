import { sendEmail } from '../../services/mailService';

export default async function handle(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, lastName, email, message } = req.body;

  try {
    const response = await sendEmail({ name, lastName, email, message });
    res.status(200).json(response);
  } catch (error) {
    console.error('Error al enviar el correo electrónico desde el formulario', error);
    res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
}
