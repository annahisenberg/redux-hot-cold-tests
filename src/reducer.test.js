import reducer from './reducer';
import { generateAuralUpdate, restartGame, makeGuess } from './actions';

describe('reducer', () => {
    it('should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, { type: '__UNKNOWN' });
        expect(state).toEqual(currentState);
    });

    describe('generateAuralUpdate', () => {
        it('should generate the aural update', () => {
            let state = {
                guesses: [25, 3, 90],
                feedback: "You're Warm.",
                auralStatus: ''
            };

            state = reducer(state, generateAuralUpdate());
            expect(state.auralStatus).toEqual(
                "Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 90, 3, 25"
            );
        });
    });

    describe('restartGame', () => {
        it('should restart the game', () => {
            let state = {
                guesses: [1, 2, 3, 4],
                feedback: "Make your guess",
                correctAnswer: 32
            }

            const correctAnswer = 10;
            state = reducer(state, restartGame(correctAnswer));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.auralStatus).toEqual('');
            expect(state.correctAnswer).toEqual(10);
        });
    });

    describe('makeGuess', () => {
        it('should add guess to guesses array', () => {
            let guess = 50;
            let feedback = "You're Warm.";
            let state = {
                guesses: [],
                feedback: "Make your guess!",
                correctAnswer: 60,
            };
            state = reducer(state, makeGuess(guess));
            expect(state.feedback).toEqual(feedback);
            expect(state.guesses).toEqual([50]);
            expect(state.correctAnswer).toEqual(60);
        });
    });
});