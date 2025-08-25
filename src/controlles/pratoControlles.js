import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

export const getPratos = async (req, res) => {
  const { search } = req.query;
  try {
    const pratos = await prisma.prato.findMany({
      where: search
        ? {
            nome: { contains: search, mode: "insensitive" },
          }
        : {},
    });
    res.json(pratos);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar pratos" });
  }
};

export const getPrato = async (req, res) => {
  try {
    const prato = await prisma.prato.findUnique({
      where: { id: req.params.id },
    });
    res.json(prato);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar prato" });
  }
};

export const createPrato = async (req, res) => {
  const { nome, descricao, categoria, preco, imagem } = req.body;
  try {
    const prato = await prisma.prato.create({
      data: { nome, descricao, categoria, preco: parseFloat(preco), imagem },
    });
    res.json(prato);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar prato" });
  }
};

export const updatePrato = async (req, res) => {
  const { nome, descricao, categoria, preco, imagem } = req.body;
  try {
    const prato = await prisma.prato.update({
      where: { id: req.params.id },
      data: { nome, descricao, categoria, preco: parseFloat(preco), imagem },
    });
    res.json(prato);
  } catch (err) {
    res.status(500).json({ message: "Erro ao atualizar prato" });
  }
};

export const deletePrato = async (req, res) => {
  try {
    await prisma.prato.delete({ where: { id: req.params.id } });
    res.json({ message: "Prato excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao excluir prato" });
  }
};
