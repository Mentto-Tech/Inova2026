export const subscribeEmpresa = async (formData) => {
  const API_KEY = import.meta.env.VITE_MAILERLITE_API_KEY;
  const GROUP_ID = "177207349240399674";

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
          cargo: formData.cargo,
          company: formData.empresa,
          setor: formData.ramo,
          cnpj: formData.cnpj,
          porte: formData.porte,
          associado: formData.associada,
        },
        groups: [GROUP_ID],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao realizar inscrição da empresa.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no cadastro MailerLite (Empresa):", error);
    throw error;
  }
};
