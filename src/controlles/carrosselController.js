import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

export const getImagens = async (req, res) => {
  try {
    const imagens = await prisma.carousel.findMany();
    res.json(imagens);
  } catch (err) {
    console.error("Erro ao buscar imagens:", err);
    res.status(500).json({ error: "Erro ao buscar imagens" });
  }
};

export const addImagem = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "O campo url é obrigatório" });
    }

    const novaImagem = await prisma.carousel.create({
      data: { url },
    });

    res.json(novaImagem);
  } catch (err) {
    console.error("Erro ao adicionar imagem:", err);
    res.status(500).json({ error: "Erro ao adicionar imagem" });
  }
};

export const deleteImagem = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.carousel.delete({
      where: { id },
    });

    res.json({ message: "Imagem removida com sucesso" });
  } catch (err) {
    console.error("Erro ao excluir imagem do carousel:", err);
    res.status(500).json({ error: "Erro ao excluir imagem" });
  }
};
