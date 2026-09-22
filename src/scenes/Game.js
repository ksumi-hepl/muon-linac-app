/**
 * Game Scene
 * Contains the core "rhythm-based acceleration" logic.
 */
import { ParticleSystem } from '../components/Particle.js';
import background from '../assets/images/background.png';

export class Game {
    constructor() {
        this.muon_x = 100;
        this.muon_y = 300; // Adjusted to a centered position
        this.acceleration = 0;
        this.beat_pos = 0;
        this.notes = [];
        this.particles = new ParticleSystem();
        this.initNotes();
    }


    initNotes() {
        // Create 20 notes with specific Y positions and staggered X positions
        for (let i = 0; i < 20; i++) {
            this.notes.push({
                x: i * 150 + 100,
                y: i * 100 + 100,
                hit: false,
                type: 'wave'
            });
        }
    }

    update(ctx) {
        // Dynamics update
        // mu_x moves slightly based on acceleration or other factors
        this.muon_x += Math.sin(this.beat_pos * 0.1) * 2;
        
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(background, 0, 0, ctx.canvas.width, ctx.canvas.height);
        
        // Draw background
        ctx.fillStyle = '#000c1a';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Update and Draw notes
        this.notes.forEach(note => {
            if (!note.hit) {
                // Move notes based on beat_pos or just a fixed progression
                note.y += 2; 
                
                // Draw note
                ctx.fillStyle = '#4a90e2';
                ctx.beginPath();
                ctx.arc(note.x, note.y, 20, 0, Math.PI * 2);
                ctx.fill();

                // Collision detection
                const distance = Math.hypot(note.x - this.muon_x, note.y - this.muon_y);
                if (distance < 40) {
                    this.particles.createExplosion(this.muon_x, this.muon_y, '#FFD700');
                    note.hit = true;
                }
            }
        });

        // Draw muon
        ctx.fillStyle = '#ffcc00';
        ctx.beginPath();
        ctx.arc(this.muon_x, this.muon_y, 15, 0, Math.PI * 2);
        ctx.fill();

        // Update and draw particles
        this.particles.update();
        this.particles.draw(ctx);
    }
}
