import { Router } from "express";
import LibroController from "../controllers/LibroController";

const router = Router();

router.post("/", LibroController.crear);
router.get("/", LibroController.listar);
router.get("/:id", LibroController.obtenerPorId);
router.put("/:id", LibroController.actualizar);
router.delete("/:id", LibroController.eliminar);

export default router;