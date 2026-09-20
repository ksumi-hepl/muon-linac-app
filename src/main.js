import { GameEngine } from './core/Engine.js';
import { GameStateManager } from './core/Game.js';

const engine = new GameEngine();
const stateManager = new GameStateManager();

// The update function that the engine will call in its loop
const update = () => {
    stateManager.update();
};

// Start the game engine
engine.start(update);

// Basic interaction handling
window.addEventListener('touchstart', (e) => {
    // Logic for interaction during game (e.g., tapping the "wave")
}, { passive: false });

window.addEventListener('click', (e) => {
    // Fallback for mouse clicks or general interaction
});
