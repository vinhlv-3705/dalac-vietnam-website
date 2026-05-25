import { Router, type IRouter } from "express";
import healthRouter from "./health";
import profilesRouter from "./profiles";

const router: IRouter = Router();

router.use("/health", healthRouter);
router.use("/profiles", profilesRouter);

export default router;
