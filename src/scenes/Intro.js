/**
 * Intro Scene
 * Includes title, simple explanation, and start button.
 */
export class Intro {
    constructor(stateManager) {
        this.stateManager = stateManager;
        this.message = "みゅーおんを届けよう！";
        this.subtext = "タップしてはじめる";
        this.timer = 0;

        window.addEventListener('mousedown', () => {
            this.stateManager.transitionTo('PLAYING');
        });
        window.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.stateManager.transitionTo('PLAYING');
        }, { passive: false });
    }

    update(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '40px Arial';
        ctx.fillText(this.message, ctx.canvas.width / 2 - 150, ctx.canvas.height / 2 - 50);
        ctx.font = '24px Arial';
        ctx.fillText(this.subtext, ctx.canvas.width / 2 - 100, ctx.canvas.height / 2 + 50);
    }
}
