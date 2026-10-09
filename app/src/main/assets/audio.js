// audio.js - Procedural Web Audio API Sound Synthesizer for Horse Racing Adventure 2D
// 100% self-contained, no external audio files required!

class SoundManager {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.soundVolume = 0.8;
        this.musicVolume = 0.5;
        this.masterVolume = 1.0;
        this.musicEnabled = true;
        this.sfxEnabled = true;
        this.gallopOsc = null;
        this.gallopGain = null;
        this.gallopTimer = null;
        this.isGalloping = false;
        this.bgmTimer = null;
        this.isBgmPlaying = false;
        this.bgmStep = 0;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setSettings(settings) {
        if (!settings) return;
        this.enabled = !!settings.soundEnabled;
        this.masterVolume = (settings.masterVolume ?? 100) / 100;
        this.musicVolume = (settings.musicVolume ?? 70) / 100;
        this.soundVolume = (settings.sfxVolume ?? 80) / 100;
        this.musicEnabled = !!settings.bgmEnabled;
        this.sfxEnabled = !!settings.sfxEnabled;

        if (!this.musicEnabled || !this.enabled || this.musicVolume === 0) {
            this.stopBGM();
        } else if (!this.isBgmPlaying) {
            this.startBGM();
        }
    }

    // Clip-clop rhythmic hoof sound
    playHoofStep(speedRatio = 1) {
        if (!this.enabled || !this.sfxEnabled || !this.ctx || this.soundVolume <= 0) return;
        try {
            const now = this.ctx.currentTime;
            const vol = this.soundVolume * this.masterVolume * 0.4;

            // Two-tap clop sound
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const filter = this.ctx.createBiquadFilter();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(140 + Math.random() * 30, now);
            osc.frequency.exponentialRampToValueAtTime(50, now + 0.05);

            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(450, now);

            gain.gain.setValueAtTime(vol, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.06);

            // Second tap of the hoof beat
            setTimeout(() => {
                if (!this.ctx) return;
                const now2 = this.ctx.currentTime;
                const osc2 = this.ctx.createOscillator();
                const gain2 = this.ctx.createGain();
                const filter2 = this.ctx.createBiquadFilter();

                osc2.type = 'triangle';
                osc2.frequency.setValueAtTime(180 + Math.random() * 20, now2);
                osc2.frequency.exponentialRampToValueAtTime(60, now2 + 0.04);

                filter2.type = 'lowpass';
                filter2.frequency.setValueAtTime(550, now2);

                gain2.gain.setValueAtTime(vol * 0.8, now2);
                gain2.gain.exponentialRampToValueAtTime(0.001, now2 + 0.045);

                osc2.connect(filter2);
                filter2.connect(gain2);
                gain2.connect(this.ctx.destination);

                osc2.start(now2);
                osc2.stop(now2 + 0.05);
            }, 60 / Math.max(0.6, speedRatio));
        } catch (e) {
            // Audio ignore error
        }
    }

    playJump() {
        if (!this.enabled || !this.sfxEnabled || !this.ctx || this.soundVolume <= 0) return;
        try {
            const now = this.ctx.currentTime;
            const vol = this.soundVolume * this.masterVolume * 0.5;

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(580, now + 0.22);

            gain.gain.setValueAtTime(vol, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.26);
        } catch (e) {}
    }

    playLand() {
        if (!this.enabled || !this.sfxEnabled || !this.ctx || this.soundVolume <= 0) return;
        try {
            const now = this.ctx.currentTime;
            const vol = this.soundVolume * this.masterVolume * 0.5;

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(120, now);
            osc.frequency.exponentialRampToValueAtTime(35, now + 0.12);

            gain.gain.setValueAtTime(vol, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.15);
        } catch (e) {}
    }

    playHurdleHit() {
        if (!this.enabled || !this.sfxEnabled || !this.ctx || this.soundVolume <= 0) return;
        try {
            const now = this.ctx.currentTime;
            const vol = this.soundVolume * this.masterVolume * 0.7;

            // Wood snap & crunch
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const filter = this.ctx.createBiquadFilter();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(160, now);
            osc.frequency.exponentialRampToValueAtTime(40, now + 0.2);

            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(400, now);

            gain.gain.setValueAtTime(vol, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.23);
        } catch (e) {}
    }

    playCoin() {
        if (!this.enabled || !this.sfxEnabled || !this.ctx || this.soundVolume <= 0) return;
        try {
            const now = this.ctx.currentTime;
            const vol = this.soundVolume * this.masterVolume * 0.45;

            const notes = [988, 1318]; // B5, E6
            notes.forEach((freq, idx) => {
                const startTime = now + idx * 0.07;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, startTime);

                gain.gain.setValueAtTime(vol, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.18);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(startTime);
                osc.stop(startTime + 0.2);
            });
        } catch (e) {}
    }

    playButtonClick() {
        if (!this.enabled || !this.sfxEnabled || !this.ctx || this.soundVolume <= 0) return;
        try {
            const now = this.ctx.currentTime;
            const vol = this.soundVolume * this.masterVolume * 0.3;

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, now);
            osc.frequency.exponentialRampToValueAtTime(900, now + 0.05);

            gain.gain.setValueAtTime(vol, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.07);
        } catch (e) {}
    }

    playHorseNeigh() {
        if (!this.enabled || !this.sfxEnabled || !this.ctx || this.soundVolume <= 0) return;
        try {
            const now = this.ctx.currentTime;
            const vol = this.soundVolume * this.masterVolume * 0.5;

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const filter = this.ctx.createBiquadFilter();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(650, now);
            osc.frequency.linearRampToValueAtTime(900, now + 0.15);
            osc.frequency.linearRampToValueAtTime(750, now + 0.3);
            osc.frequency.linearRampToValueAtTime(1050, now + 0.45);
            osc.frequency.exponentialRampToValueAtTime(450, now + 0.7);

            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1100, now);
            filter.Q.value = 3.0;

            gain.gain.setValueAtTime(0.01, now);
            gain.gain.linearRampToValueAtTime(vol, now + 0.1);
            gain.gain.linearRampToValueAtTime(vol * 0.7, now + 0.4);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.75);
        } catch (e) {}
    }

    playFeedChime() {
        if (!this.enabled || !this.sfxEnabled || !this.ctx || this.soundVolume <= 0) return;
        try {
            const now = this.ctx.currentTime;
            const vol = this.soundVolume * this.masterVolume * 0.4;
            const chord = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio

            chord.forEach((freq, idx) => {
                const startTime = now + idx * 0.08;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, startTime);

                gain.gain.setValueAtTime(vol, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(startTime);
                osc.stop(startTime + 0.27);
            });
        } catch (e) {}
    }

    playVictory() {
        if (!this.enabled || !this.sfxEnabled || !this.ctx || this.soundVolume <= 0) return;
        try {
            const now = this.ctx.currentTime;
            const vol = this.soundVolume * this.masterVolume * 0.55;

            // Brass fanfare chords
            const fanfare = [
                { f: 523.25, t: 0.00, d: 0.18 }, // C5
                { f: 659.25, t: 0.18, d: 0.18 }, // E5
                { f: 783.99, t: 0.36, d: 0.18 }, // G5
                { f: 1046.50, t: 0.54, d: 0.55 } // C6
            ];

            fanfare.forEach(item => {
                const startTime = now + item.t;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(item.f, startTime);

                gain.gain.setValueAtTime(vol, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + item.d);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(startTime);
                osc.stop(startTime + item.d + 0.05);
            });
        } catch (e) {}
    }

    playLowHealthAlert() {
        if (!this.enabled || !this.sfxEnabled || !this.ctx || this.soundVolume <= 0) return;
        try {
            const now = this.ctx.currentTime;
            const vol = this.soundVolume * this.masterVolume * 0.4;

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'square';
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.setValueAtTime(330, now + 0.1);

            gain.gain.setValueAtTime(vol, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.24);
        } catch (e) {}
    }

    // Cheerful procedural background track
    startBGM() {
        if (!this.enabled || !this.musicEnabled || this.musicVolume <= 0 || !this.ctx) return;
        if (this.isBgmPlaying) return;
        this.isBgmPlaying = true;
        this.bgmStep = 0;

        const melody = [
            261.63, 329.63, 392.00, 523.25,
            392.00, 329.63, 349.23, 440.00,
            261.63, 329.63, 392.00, 523.25,
            587.33, 523.25, 392.00, 329.63
        ];
        const bass = [130.81, 164.81, 174.61, 196.00];

        const stepTime = 260; // ms per beat

        const playNote = () => {
            if (!this.isBgmPlaying || !this.enabled || !this.musicEnabled || this.musicVolume <= 0 || !this.ctx) return;
            try {
                const now = this.ctx.currentTime;
                const vol = this.musicVolume * this.masterVolume * 0.18;

                const freq = melody[this.bgmStep % melody.length];
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now);

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(1200, now);

                gain.gain.setValueAtTime(vol, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now);
                osc.stop(now + 0.25);

                // Bass note every 4 steps
                if (this.bgmStep % 4 === 0) {
                    const bassFreq = bass[Math.floor(this.bgmStep / 4) % bass.length];
                    const bassOsc = this.ctx.createOscillator();
                    const bassGain = this.ctx.createGain();

                    bassOsc.type = 'triangle';
                    bassOsc.frequency.setValueAtTime(bassFreq, now);

                    bassGain.gain.setValueAtTime(vol * 1.2, now);
                    bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

                    bassOsc.connect(bassGain);
                    bassGain.connect(this.ctx.destination);

                    bassOsc.start(now);
                    bassOsc.stop(now + 0.46);
                }

                this.bgmStep = (this.bgmStep + 1) % melody.length;
            } catch (e) {}

            this.bgmTimer = setTimeout(playNote, stepTime);
        };

        playNote();
    }

    stopBGM() {
        this.isBgmPlaying = false;
        if (this.bgmTimer) {
            clearTimeout(this.bgmTimer);
            this.bgmTimer = null;
        }
    }
}

window.soundManager = new SoundManager();
