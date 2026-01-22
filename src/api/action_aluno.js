export const subscribeAluno = async (formData) => {
  const GROUP_ID = "177207453211952799";

  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        fields: {
          name: formData.nome,
          phone: formData.telefone,
          instituicao: formData.instituicao,
          teste: formData.curso,
          termo: formData.termo,
          city: formData.cidade,
          cpf: formData.cpf,
        },
        groups: [GROUP_ID],
      }),
    });

    const rawText = await response.text();
    const data = rawText ? JSON.parse(rawText) : {};

    if (!response.ok) {
      throw new Error(data.message || "Erro ao realizar inscrição.");
    }

    return data;
  } catch (error) {
    console.error("Erro no cadastro MailerLite:", error);
    throw error;
  }
};
