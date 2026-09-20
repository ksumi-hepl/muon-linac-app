/**
 * Basic Engine for the game.
 * Handles setup of the Canvas context and the main animation loop.
 */
import { CONFIG } from '../utils/Constants.js';

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
            this.ctx.fillStyle = 'white';
            this.ctx.font = '30px Arial';
            this.ctx.fillText('Engine active - System Ready', 50, 100);
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }
}
