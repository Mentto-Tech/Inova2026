export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Accept either MAILERLITE_API_KEY (server) or legacy VITE_MAILERLITE_API_KEY
  const API_KEY = process.env.MAILERLITE_API_KEY || process.env.VITE_MAILERLITE_API_KEY; 
  if (!API_KEY) return res.status(500).json({ message: 'API key missing (set MAILERLITE_API_KEY)' });

  const { email, fields, groups } = req.body || {};
  if (!email) return res.status(400).json({ message: 'Email é obrigatório' });

  try {
    const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ email, fields, groups }),
    });

    if (!mlRes.ok) {
      const err = await mlRes.json().catch(() => ({}));
      return res.status(mlRes.status).json({ message: err.message || 'Erro no MailerLite' });
    }

    const data = await mlRes.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message || 'Erro interno' });
  }
}