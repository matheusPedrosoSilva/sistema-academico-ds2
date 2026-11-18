import AlunoController from "../controller/aluno-controller.js";
import express from "express";

const router = express.Router();

router.get(
    "/",
    AlunoController.listar
);

router.get(
    "/:id",
    AlunoController.buscarPorId
);

router.post(
    "/",
    AlunoController.cadastrar
);

router.put(
    "/:id",
    AlunoController.atualizar
);

router.delete(
    "/:id",
    AlunoController.remover
);

export default router;