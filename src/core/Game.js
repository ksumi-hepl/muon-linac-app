/**
 * Core game state manager.
 * Handles transitions between Intro, Game, and Result states.
 */
import { Game } from '../scenes/Game.js';
import { Intro } from '../scenes/Intro.js';
import { Result } from '../scenes/Result.js';

export const States = {
    INTRO: 'INTRO',
    PLAYING: 'PLAYING',
    RESULT: 'RESULT'
};

export class GameStateManager {
    constructor() {
        this.state = States.INTRO;
        this.currentScene = null;
        
        // Initialize scenes
        this.scenes = {
            [States.INTRO]: new Intro(),
            [States.PLAYING]: new Game(),
            [States.RESULT]: new Result()
        };
    }

    update() {
        if (this.state === States.INTRO) {
            this.scenes[States.INTRO].update();
        } else if (this.state === States.PLAYING) {
            this.scenes[States.PLAYING].update();
        } else if (this.state === States.RESULT) {
            this.scenes[States.RESULT].update();
        }
    }

    transitionTo(newState) {
        this.state = newState;
        console.log(`Transitioning to ${newState}`);
    }
}
