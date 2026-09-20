/**
 * Basic Engine for the game.
 * Handles setup of the Canvas context and the main animation loop.
 */
import { CONFIG } from './Constants.js';

export class GameEngine {
    constructor() {
        this.canvas = document.getElementById(CONFIG.canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    start(updateCallback) {
        const loop = () => {
            // logic update
            updateCallback();
            // draw
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }
}
