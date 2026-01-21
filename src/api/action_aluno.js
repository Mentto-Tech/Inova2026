export const subscribeAluno = async (formData) => {
  const API_KEY = import.meta.env.VITE_MAILERLITE_API_KEY;
  const GROUP_ID = "177207453211952799";

  try {
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        email: formData.email,
        fields: {
          name: formData.nome,
          phone: formData.telefone,
          instituicao: formData.instituicao,
          teste: formData.curso,
          termo: formData.termo,
          cpf: formData.cpf,
        },
        groups: [GROUP_ID],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao realizar inscrição.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no cadastro MailerLite:", error);
    throw error;
  }
};
