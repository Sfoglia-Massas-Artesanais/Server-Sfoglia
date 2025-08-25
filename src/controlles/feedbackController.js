import nodemailer from "nodemailer";

export const enviarFeedback = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Preencha todos os campos." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Feedback Sfoglia" <${process.env.MAIL_USER}>`,
      to: "sfogliasuporte@gmail.com",
      subject: "Novo Feedback do Site Sfoglia",
      text: `
        Nome: ${name}
        Email: ${email}
        Mensagem: ${message}
      `,
      html: `
        <h3>Novo Feedback Recebido</h3>
        <p><b>Nome:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensagem:</b> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Feedback enviado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao enviar feedback." });
  }
};
