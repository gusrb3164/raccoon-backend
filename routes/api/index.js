import express from "express";
import { todoRoutes } from "../../module/todo/todo.routes";
import { gameRoutes } from "../../module/games/game.routes";

const apiRoutes = express.Router();

apiRoutes.use("/todos", todoRoutes);
apiRoutes.use("/games", gameRoutes);

export default apiRoutes;
