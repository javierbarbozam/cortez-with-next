export const sendContactForm = async (data) => {
  try {
    const response = await fetch("/api/contacto", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Failed to send message");

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error('Error al enviar la solicitud al servidor', error);
    throw error;
  }
};
