import { gameModel } from './game.model';
import { quizModel } from './quiz.model';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

const gameController = {};

gameController.findGame = async (req, res) => {
	try {
		console.log(req.params.gameId);
		const game = await gameModel
			.findOne({ _id: req.params.gameId })
			.populate({ path: 'quizIds', model: 'quiz' })
			.exec();
		if (!game) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ message: 'Game not found' });
		}
		return res.json(game);
	} catch (error) {
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ error: error.toString() });
	}
};

gameController.updateGame = async (req, res) => {};

gameController.deleteGame = async (req, res) => {
	try {
		const game = await gameModel.findByIdAndDelete(req.params.gameId);
		if (!game) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ message: 'Game not found' });
		}
		return res.json({ message: 'Game deleted successfully' });
	} catch (error) {
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ error: error.toString() });
	}
};

export default gameController;
