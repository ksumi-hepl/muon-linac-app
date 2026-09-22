/**
 * Intro Scene
 * Includes title, simple explanation, and start button.
 */
import background from '../assets/images/background.png';

export class Intro {
    constructor(stateManager) {
        this.stateManager = stateManager;
        this.message = "ミューオンを\n届けよう！";
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
        ctx.drawImage(background, 0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '40px Arial';
        
        const lines = this.message.split('\n');
        lines.forEach((line, index) => {
            const x = (ctx.canvas.width - ctx.measureText(line).width) / 2;
            ctx.fillText(line, x, (ctx.canvas.height / 2 - 50) + (index * 50));
        });

        ctx.font = '24px Arial';
        ctx.fillText(this.subtext, ctx.canvas.width / 2 - 100, ctx.canvas.height / 2 + 100);
    }
}
