/**
 * Result Scene
 * Displays final results and congratulatory message.
 */
export class Result {
    constructor() {
        this.score = 0;
    }

    update(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#000c1a';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
        ctx.fillStyle = 'white';
        ctx.font = '40px Arial';
        ctx.fillText('Congratulations!', ctx.canvas.width / 2 - 150, ctx.canvas.height / 2 - 50);
        ctx.font = '30px Arial';
        ctx.fillText(`Your acceleration: ${this.score}`, ctx.canvas.width / 2 - 150, ctx.canvas.height / 2 + 50);
    }
}
