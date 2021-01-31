import express from 'express';
import gameController from './game.controller';
import { asyncWrapper } from '../../utils/asyncWrapper';

const gameRoutes = express.Router();

gameRoutes.get('/:gameId', asyncWrapper(gameController.findGame));
gameRoutes.put('/:gameId', asyncWrapper(gameController.reviseGame));
gameRoutes.delete('/:gameId', asyncWrapper(gameController.deleteGame));

export default gameRoutes;
