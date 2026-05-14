import { Router } from "express";
import PrestamoController from "../controllers/PrestamoController";

const router = Router();

router.post("/", PrestamoController.crear);
router.get("/", PrestamoController.listar);
router.get("/usuario/:usuarioId", PrestamoController.listarPorUsuario);
router.put("/:id/devolver", PrestamoController.devolver);

export default router;