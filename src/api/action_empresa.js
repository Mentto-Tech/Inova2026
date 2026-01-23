export const subscribeEmpresa = async (formData) => {
  const GROUP_ID = "177207349240399674";

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
          cargo: formData.cargo,
          company: formData.empresa,
          setor: formData.ramo,
          city: formData.cidade,
          porte: formData.porte,
          associado: formData.associada,
        },
        groups: [GROUP_ID],
      }),
    });

    const rawText = await response.text();
    const data = rawText ? JSON.parse(rawText) : {};

    if (!response.ok) {
      throw new Error(data.message || "Erro ao realizar inscrição da empresa.");
    }

    return data;
  } catch (error) {
    console.error("Erro no cadastro MailerLite (Empresa):", error);
    throw error;
  }
};
