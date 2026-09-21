/**
 * Game Scene
 * Contains the core "rhythm-based acceleration" logic.
 */
export class Game {
    constructor() {
        this.muon_x = 100;
        this.muon_y = 0;
        this.acceleration = 0;
        this.beat_pos = 0;
        this.notes = [];
        this.particles = new ParticleSystem();
        this.initNotes();
    }


    initNotes() {
        // 20個の「波」を一定間隔で生成
        for (let i = 0; i < 20; i++) {
            this.notes.push({
                pos: i * 100,
                hit: false,
                type: 'wave'
            });
        }
    }

    update(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
        // Draw background
        ctx.fillStyle = '#000c1a';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Draw notes
        this.notes.forEach(note => {
            if (!note.hit) {
                ctx.fillStyle = '#4a90e2';
                ctx.beginPath();
                ctx.arc(note.pos, note.pos, 10, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        // Draw muon
        ctx.fillStyle = '#ffcc00';
        ctx.beginPath();
        ctx.arc(this.muon_x, this.muon_y, 15, 0, Math.PI * 2);
        ctx.fill();

        // Draw particles
        this.particles.update();

        // 命中時のエフェクト生成（修正）
        this.notes.forEach(note => {
            if (!note.hit) {
                // ここで距離を計算し、衝突判定を行うと仮定
                const distance = Math.hypot(note.pos - this.muon_x, note.pos - this.muon_y);
                if (distance < 5) {
                    this.particles.createExplosion(this.muon_x, this.muon_y,
                        distance < 5 ? '#FFD700' : '#FFFFFF');
                }
                note.hit = true; // 命中したとしてマーク
            }
        });

        // パーティクルの更新
        this.particles.update();
    }
}
