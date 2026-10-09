// game.js - Realistic 2D Horse Racing Adventure (Photo 1 Scenery & Physics, Photo 2 Stable Upgrades, Phone Rotation)

// --- LOCALIZATION DICTIONARY ---
const TRANSLATIONS = {
    en: {
        gameTitle: "HORSE RACING ADVENTURE 2D",
        gameSubtitle: "RIDE, JUMP & COMPETE FOR THE CUP",
        playGame: "PLAY GAME",
        continueGame: "CONTINUE GAME",
        selectLevel: "SELECT LEVEL",
        shop: "HORSE & RIDER SHOP",
        settings: "SETTINGS",
        exitMenu: "EXIT TO MENU",
        speed: "SPEED",
        level: "LEVEL",
        time: "TIME",
        score: "SCORE",
        health: "HEALTH",
        run: "RUN",
        jump: "JUMP",
        pause: "PAUSE",
        resume: "RESUME RACE",
        restart: "RESTART RACE",
        paused: "RACE PAUSED",
        victory: "VICTORY! 🏆",
        levelComplete: "LEVEL COMPLETE!",
        raceFinished: "RACE FINISHED",
        place1: "1st PLACE - CHAMPION!",
        place2: "2nd PLACE - RUNNER UP!",
        place3: "3rd PLACE - BRONZE!",
        place4: "4th PLACE - FINISHED!",
        nextLevel: "NEXT LEVEL",
        replay: "REPLAY",
        horseNeedsCare: "HORSE NEEDS CARE!",
        needsCareDesc: "Your horse is completely exhausted. Feed your horse to restore health and race again!",
        feedNow: "FEED HORSE",
        coinsEarned: "Coins Earned",
        outfitsTab: "🏇 RIDER OUTFITS",
        foodTab: "🥕 HORSE FOOD",
        equipped: "EQUIPPED",
        equip: "EQUIP",
        buy: "BUY",
        owned: "OWNED",
        feed: "FEED",
        insufficientCoins: "Not enough coins!",
        purchaseSuccess: "Purchase successful!",
        equippedSuccess: "Outfit equipped!",
        fedSuccess: "Horse fed! Health restored.",
        alreadyFullHealth: "Horse health is already full!",
        noFoodAvailable: "You don't have this food in inventory!",
        soundEnabled: "Sound Effects",
        bgmEnabled: "Background Music",
        masterVolume: "Master Volume",
        musicVolume: "Music Volume",
        sfxVolume: "SFX Volume",
        vibration: "Vibration",
        language: "Language",
        resetProgress: "RESET ALL PROGRESS",
        confirmReset: "Are you sure you want to reset all game progress? All coins, levels and items will be lost!",
        obstacleHit: "💥 Hurdle Hit! -15 HP"
    },
    bn: {
        gameTitle: "হর্স রেসিং অ্যাডভেঞ্চার ২ডি",
        gameSubtitle: "দৌড়ান, লাফ দিন এবং কাপ জিতুন",
        playGame: "খেলা শুরু করুন",
        continueGame: "চালিয়ে যান",
        selectLevel: "লেভেল নির্বাচন",
        shop: "ঘোড়া ও রাইডার শপ",
        settings: "সেটিংস",
        exitMenu: "মেনুতে ফিরুন",
        speed: "গতি",
        level: "লেভেল",
        time: "সময়",
        score: "স্কোর",
        health: "স্বাস্থ্য",
        run: "দৌড়ান",
        jump: "লাফ দিন",
        pause: "বিরতি",
        resume: "আবার শুরু করুন",
        restart: "পুনরায় খেলুন",
        paused: "খেলা স্থগিত",
        victory: "বিজয়! 🏆",
        levelComplete: "লেভেল সম্পন্ন!",
        raceFinished: "দৌড় সমাপ্ত",
        place1: "১ম স্থান - চ্যাম্পিয়ন!",
        place2: "২য় স্থান!",
        place3: "৩য় স্থান!",
        place4: "৪র্থ স্থান!",
        nextLevel: "পরবর্তী লেভেল",
        replay: "পুনরায় খেলুন",
        horseNeedsCare: "ঘোড়ার যত্ন প্রয়োজন!",
        needsCareDesc: "আপনার ঘোড়া ক্লান্ত হয়ে পড়েছে। দৌড়ানোর আগে ঘোড়াকে খাবার খাওয়ান!",
        feedNow: "খাবার খাওয়ান",
        coinsEarned: "অর্জিত কয়েন",
        outfitsTab: "🏇 রাইডার পোশাক",
        foodTab: "🥕 ঘোড়ার খাবার",
        equipped: "পরা আছে",
        equip: "পরুন",
        buy: "কিনুন",
        owned: "মালিকানাধীন",
        feed: "খাওয়ান",
        insufficientCoins: "পর্যাপ্ত কয়েন নেই!",
        purchaseSuccess: "সফলভাবে কেনা হয়েছে!",
        equippedSuccess: "পোশাক পরা হয়েছে!",
        fedSuccess: "ঘোড়াকে খাওয়ানো হয়েছে! স্বাস্থ্য বৃদ্ধি পেয়েছে।",
        alreadyFullHealth: "ঘোড়ার স্বাস্থ্য ইতোমধ্যে সম্পূর্ণ!",
        noFoodAvailable: "আপনার ইনভেন্টরিতে এই খাবার নেই!",
        soundEnabled: "সাউন্ড ইফেক্ট",
        bgmEnabled: "ব্যাকগ্রাউন্ড মিউজিক",
        masterVolume: "মাস্টার ভলিউম",
        musicVolume: "মিউজিক ভলিউম",
        sfxVolume: "এসএফএক্স ভলিউম",
        vibration: "ভাইব্রেশন",
        language: "ভাষা",
        resetProgress: "সমস্ত অগ্রগতি রিসেট করুন",
        confirmReset: "আপনি কি সত্যিই সমস্ত অগ্রগতি মুছে ফেলতে চান? সমস্ত কয়েন এবং লেভেল হারিয়ে যাবে!",
        obstacleHit: "💥 বাধার সাথে ধাক্কা! -১৫ স্বাস্থ্য"
    }
};

// --- 10 RIDER OUTFITS CATALOG (EXACT PRICES) ---
const RIDER_OUTFITS = [
    { id: 'outfit_1', name: "Basic Rider Outfit", price: 100, jacket: '#e53935', pants: '#f8fafc', helmet: '#1e293b', boots: '#1e293b', icon: '🏇' },
    { id: 'outfit_2', name: "Blue Racing Outfit", price: 200, jacket: '#0288d1', pants: '#f0f9ff', helmet: '#01579b', boots: '#0f172a', icon: '🔵' },
    { id: 'outfit_3', name: "Red Racing Outfit", price: 300, jacket: '#b71c1c', pants: '#fff1f2', helmet: '#7f1d1d', boots: '#1e1b4b', icon: '🔴' },
    { id: 'outfit_4', name: "Green Adventure Outfit", price: 400, jacket: '#16a34a', pants: '#f0fdf4', helmet: '#14532d', boots: '#3f2e1e', icon: '🌲' },
    { id: 'outfit_5', name: "Royal Purple Outfit", price: 500, jacket: '#9333ea', pants: '#faf5ff', helmet: '#581c87', boots: '#1e1b4b', icon: '👑' },
    { id: 'outfit_6', name: "Golden Champion Outfit", price: 600, jacket: '#eab308', pants: '#fefce8', helmet: '#854d0e', boots: '#451a03', icon: '⭐' },
    { id: 'outfit_7', name: "Black Shadow Outfit", price: 700, jacket: '#18181b', pants: '#3f3f46', helmet: '#09090b', boots: '#09090b', icon: '🥷' },
    { id: 'outfit_8', name: "Silver Knight Outfit", price: 800, jacket: '#94a3b8', pants: '#f1f5f9', helmet: '#475569', boots: '#1e293b', icon: '🛡️' },
    { id: 'outfit_9', name: "Diamond Rider Outfit", price: 900, jacket: '#06b6d4', pants: '#ecfeff', helmet: '#155e75', boots: '#083344', icon: '💎' },
    { id: 'outfit_10', name: "Legendary Champion Outfit", price: 1000, jacket: '#f43f5e', pants: '#fff1f2', helmet: '#be123c', boots: '#4c0519', icon: '🏆' }
];

// --- 7 HORSE FOODS CATALOG (EXACT PRICES & RESTORATION) ---
const HORSE_FOODS = [
    { id: 'food_1', name: "Basic Hay", price: 100, restore: 15, icon: '🌾', desc: 'Restores 15 Health' },
    { id: 'food_2', name: "Fresh Carrots", price: 200, restore: 25, icon: '🥕', desc: 'Restores 25 Health' },
    { id: 'food_3', name: "Sweet Apples", price: 300, restore: 35, icon: '🍎', desc: 'Restores 35 Health' },
    { id: 'food_4', name: "Energy Oats", price: 400, restore: 45, icon: '🥣', desc: 'Restores 45 Health' },
    { id: 'food_5', name: "Premium Horse Feed", price: 500, restore: 60, icon: '🌽', desc: 'Restores 60 Health' },
    { id: 'food_6', name: "Golden Hay Mix", price: 600, restore: 75, icon: '✨', desc: 'Restores 75 Health' },
    { id: 'food_7', name: "Legendary Horse Nutrition", price: 700, restore: 100, icon: '🏆', desc: 'Restores 100 (Full) Health' }
];

// --- GAME STATE ---
class GameState {
    constructor() {
        this.STORAGE_KEY = 'horse_racing_adventure_2d_save_v2';
        this.load();
    }

    getDefaultState() {
        return {
            coins: 0,
            health: 100,
            currentLevel: 1,
            unlockedLevels: [1],
            completedLevels: [],
            purchasedOutfits: ['outfit_1'],
            equippedOutfit: 'outfit_1',
            upgrades: {
                healthLevel: 1, // Photo 2 Red bar
                speedLevel: 1,  // Photo 2 Blue bar
                agilityLevel: 1 // Photo 2 Green bar
            },
            foodInventory: {
                food_1: 1, food_2: 0, food_3: 0, food_4: 0, food_5: 0, food_6: 0, food_7: 0
            },
            settings: {
                soundEnabled: true,
                bgmEnabled: true,
                sfxEnabled: true,
                masterVolume: 100,
                musicVolume: 70,
                sfxVolume: 80,
                vibration: true,
                language: 'en'
            }
        };
    }

    load() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                this.data = { ...this.getDefaultState(), ...parsed };
                this.data.upgrades = { ...this.getDefaultState().upgrades, ...(parsed.upgrades || {}) };
                this.data.foodInventory = { ...this.getDefaultState().foodInventory, ...(parsed.foodInventory || {}) };
                this.data.settings = { ...this.getDefaultState().settings, ...(parsed.settings || {}) };
            } else {
                this.data = this.getDefaultState();
            }
        } catch (e) {
            this.data = this.getDefaultState();
        }
    }

    save() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
        } catch (e) {}
    }

    reset() {
        this.data = this.getDefaultState();
        this.save();
    }

    addCoins(amount) {
        this.data.coins = Math.max(0, this.data.coins + amount);
        this.save();
    }

    deductCoins(amount) {
        if (this.data.coins >= amount) {
            this.data.coins -= amount;
            this.save();
            return true;
        }
        return false;
    }

    modifyHealth(delta) {
        this.data.health = Math.min(100, Math.max(0, this.data.health + delta));
        this.save();
        return this.data.health;
    }

    unlockLevel(levelId) {
        if (!this.data.unlockedLevels.includes(levelId)) {
            this.data.unlockedLevels.push(levelId);
            this.save();
        }
    }

    completeLevel(levelId) {
        const isFirstTime = !this.data.completedLevels.includes(levelId);
        if (isFirstTime) {
            this.data.completedLevels.push(levelId);
        }
        this.unlockLevel(levelId + 1);
        this.save();
        return isFirstTime;
    }

    buyOutfit(outfitId) {
        const outfit = RIDER_OUTFITS.find(o => o.id === outfitId);
        if (!outfit) return false;
        if (this.data.purchasedOutfits.includes(outfitId)) return true;
        if (this.deductCoins(outfit.price)) {
            this.data.purchasedOutfits.push(outfitId);
            this.save();
            return true;
        }
        return false;
    }

    equipOutfit(outfitId) {
        if (this.data.purchasedOutfits.includes(outfitId)) {
            this.data.equippedOutfit = outfitId;
            this.save();
            return true;
        }
        return false;
    }

    buyFood(foodId) {
        const food = HORSE_FOODS.find(f => f.id === foodId);
        if (!food) return false;
        if (this.deductCoins(food.price)) {
            this.data.foodInventory[foodId] = (this.data.foodInventory[foodId] || 0) + 1;
            this.save();
            return true;
        }
        return false;
    }

    feedHorse(foodId) {
        const food = HORSE_FOODS.find(f => f.id === foodId);
        if (!food) return { success: false, reason: 'invalid' };
        if (!this.data.foodInventory[foodId] || this.data.foodInventory[foodId] <= 0) {
            return { success: false, reason: 'empty' };
        }
        if (this.data.health >= 100) {
            return { success: false, reason: 'full' };
        }
        this.data.foodInventory[foodId]--;
        this.modifyHealth(food.restore);
        this.save();
        return { success: true, newHealth: this.data.health };
    }

    upgradeStat(statKey, price) {
        if (this.deductCoins(price)) {
            this.data.upgrades[statKey] = (this.data.upgrades[statKey] || 1) + 1;
            this.save();
            return true;
        }
        return false;
    }
}

// --- PARTICLE SYSTEM ---
class Particle {
    constructor(x, y, vx, vy, color, size, life) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.size = size;
        this.life = life;
        this.maxLife = life;
    }
    update(dt) {
        this.x += this.vx * dt * 60;
        this.y += this.vy * dt * 60;
        this.vy += 0.12;
        this.life -= dt;
    }
    draw(ctx) {
        if (this.life <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// --- MAIN GAME APPLICATION ---
class HorseRacingGame {
    constructor() {
        this.state = new GameState();
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.particles = [];
        this.isRunningInput = false;
        this.isPaused = false;
        this.gameMode = 'menu';

        this.activeLevelData = null;
        this.trackDistance = 1000;
        this.groundY = 0;

        // Realistic Equestrian Player Entity:
        // LOWER, REALISTIC JUMP HEIGHT (jumpStrength = 6.2, gravity = 0.44)
        // Horse jumps ~40px high, perfectly leaping over hurdles!
        this.player = {
            distance: 0,
            y: 0,
            vy: 0,
            speed: 0,
            maxSpeed: 16.0,
            acceleration: 8.0,
            deceleration: 8.5,
            onGround: true,
            jumpStrength: 6.2, // realistic steeplechase jump!
            gravity: 0.44,
            legPhase: 0,
            jumpProgress: 0,
            knockedTimer: 0
        };

        this.opponents = [];
        this.raceTime = 0;
        this.healthDecayAccumulator = 0;
        this.shakeTimer = 0;
        this.shakeIntensity = 0;

        this.initCanvasSize();
        this.bindEvents();
        this.checkOrientation();
        this.applySettings();
        this.updateUI();

        this.lastTimestamp = performance.now();
        requestAnimationFrame((t) => this.gameLoop(t));
    }

    initCanvasSize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        // Position track at bottom ~72% of screen height
        this.groundY = Math.round(this.height * 0.72);
    }

    checkOrientation() {
        const overlay = document.getElementById('rotate-prompt-overlay');
        const isPortrait = window.innerHeight > window.innerWidth;
        if (isPortrait && !this.dismissedRotate) {
            overlay?.classList.add('active');
        } else {
            overlay?.classList.remove('active');
        }
    }

    vibrate(ms = 40) {
        if (!this.state.data.settings.vibration) return;
        try {
            if (window.AndroidHost && window.AndroidHost.vibrate) {
                window.AndroidHost.vibrate(ms);
            } else if (navigator.vibrate) {
                navigator.vibrate(ms);
            }
        } catch (e) {}
    }

    getText(key) {
        const lang = this.state.data.settings.language || 'en';
        const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
        return dict[key] || TRANSLATIONS.en[key] || key;
    }

    applySettings() {
        window.soundManager.setSettings(this.state.data.settings);
        this.translateUI();
    }

    translateUI() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.getText(key);
        });
    }

    showToast(message) {
        const toast = document.getElementById('toast-notification');
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    // --- SETUP RACE ---
    startRace(levelId) {
        const levelData = window.GAME_LEVELS.find(l => l.id === levelId) || window.GAME_LEVELS[0];
        this.activeLevelData = JSON.parse(JSON.stringify(levelData));
        this.trackDistance = this.activeLevelData.distance;

        // Apply Speed & Agility Upgrades (Photo 2)
        const speedBonus = (this.state.data.upgrades.speedLevel - 1) * 0.8;
        this.player.maxSpeed = 16.0 + speedBonus;

        // Reset player entity
        this.player.distance = 0;
        this.player.speed = 0;
        this.player.y = this.groundY;
        this.player.vy = 0;
        this.player.onGround = true;
        this.player.legPhase = 0;
        this.player.jumpProgress = 0;
        this.player.knockedTimer = 0;

        // Setup AI opponents in separated depth lanes
        this.opponents = this.activeLevelData.aiOpponents.map((ai, index) => {
            const laneOffset = ai.lane === 0 ? -32 : ai.lane === 1 ? -16 : 16;
            return {
                id: index,
                name: ai.name,
                distance: 0,
                speed: 0,
                baseSpeed: ai.baseSpeed,
                color: ai.color,
                jockeySilk: ai.jockeySilk,
                lane: ai.lane,
                y: this.groundY + laneOffset,
                vy: 0,
                onGround: true,
                legPhase: Math.random() * Math.PI,
                jumpTimer: 0,
                scale: ai.lane === 0 ? 0.84 : ai.lane === 1 ? 0.92 : 1.06
            };
        });

        this.particles = [];
        this.raceTime = 0;
        this.healthDecayAccumulator = 0;
        this.isRunningInput = false;
        this.isPaused = false;
        this.gameMode = 'racing';

        if (this.state.data.health <= 0) {
            this.showHorseNeedsCareModal();
            return;
        }

        document.querySelectorAll('.screen-overlay').forEach(el => el.classList.remove('active'));
        document.getElementById('hud-overlay').style.display = 'flex';

        window.soundManager.init();
        window.soundManager.playHorseNeigh();

        this.updateHUD();
    }

    // --- INPUT CONTROLS ---
    bindEvents() {
        const onResizeOrRotate = () => {
            this.initCanvasSize();
            this.checkOrientation();
        };
        window.addEventListener('resize', onResizeOrRotate);
        window.addEventListener('orientationchange', onResizeOrRotate);
        if (screen.orientation) {
            screen.orientation.addEventListener('change', onResizeOrRotate);
        }

        // Dismiss Rotate overlay
        document.getElementById('btn-dismiss-rotate')?.addEventListener('click', () => {
            this.dismissedRotate = true;
            document.getElementById('rotate-prompt-overlay')?.classList.remove('active');
        });

        // RUN Button (Hold to gallop)
        const runBtn = document.getElementById('btn-run');
        if (runBtn) {
            const startRun = (e) => {
                e.preventDefault();
                this.isRunningInput = true;
                runBtn.classList.add('pressed');
                window.soundManager.init();
            };
            const stopRun = (e) => {
                e.preventDefault();
                this.isRunningInput = false;
                runBtn.classList.remove('pressed');
            };
            runBtn.addEventListener('pointerdown', startRun);
            runBtn.addEventListener('pointerup', stopRun);
            runBtn.addEventListener('pointercancel', stopRun);
            runBtn.addEventListener('pointerleave', stopRun);
            runBtn.addEventListener('touchstart', startRun, { passive: false });
            runBtn.addEventListener('touchend', stopRun, { passive: false });
            runBtn.addEventListener('touchcancel', stopRun, { passive: false });
        }

        // JUMP Button (Realistic lower steeplechase jump)
        const jumpBtn = document.getElementById('btn-jump');
        if (jumpBtn) {
            const doJump = (e) => {
                e.preventDefault();
                window.soundManager.init();
                this.triggerJump();
            };
            jumpBtn.addEventListener('pointerdown', doJump);
            jumpBtn.addEventListener('touchstart', doJump, { passive: false });
        }

        // Quick Feed Button
        document.getElementById('btn-quick-feed')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.quickFeedFromHud();
        });

        // Pause Button
        document.getElementById('btn-pause')?.addEventListener('click', () => {
            this.togglePause();
        });

        // Desktop Keyboard Controls
        window.addEventListener('keydown', (e) => {
            if (e.code === 'ArrowRight' || e.code === 'KeyD') {
                this.isRunningInput = true;
                runBtn?.classList.add('pressed');
            }
            if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
                e.preventDefault();
                this.triggerJump();
            }
            if (e.code === 'KeyP' || e.code === 'Escape') {
                this.togglePause();
            }
        });
        window.addEventListener('keyup', (e) => {
            if (e.code === 'ArrowRight' || e.code === 'KeyD') {
                this.isRunningInput = false;
                runBtn?.classList.remove('pressed');
            }
        });

        this.bindUIButtons();
    }

    triggerJump() {
        if (this.gameMode !== 'racing' || this.isPaused) return;
        if (this.player.onGround && this.player.knockedTimer <= 0) {
            this.player.onGround = false;
            // Lower, realistic jump arc (peak ~42px)
            this.player.vy = -this.player.jumpStrength;
            this.player.jumpProgress = 0;
            window.soundManager.playJump();
            this.vibrate(30);

            // Hoof dust at takeoff
            for (let i = 0; i < 5; i++) {
                this.particles.push(new Particle(
                    170 + (Math.random() - 0.5) * 20,
                    this.groundY + 8,
                    -1 - Math.random() * 2,
                    -0.5 - Math.random() * 1.5,
                    '#d4b28c',
                    3 + Math.random() * 2,
                    0.4
                ));
            }
        }
    }

    quickFeedFromHud() {
        const ownedFoodIds = Object.keys(this.state.data.foodInventory).filter(id => this.state.data.foodInventory[id] > 0);
        if (ownedFoodIds.length === 0) {
            this.showToast(this.getText('noFoodAvailable'));
            window.soundManager.playButtonClick();
            this.openShop('food');
            return;
        }
        const foodIdToUse = ownedFoodIds[0];
        const res = this.state.feedHorse(foodIdToUse);
        if (res.success) {
            window.soundManager.playFeedChime();
            this.showToast(this.getText('fedSuccess'));
            this.updateHUD();
            this.vibrate(35);
        } else if (res.reason === 'full') {
            this.showToast(this.getText('alreadyFullHealth'));
        }
    }

    togglePause() {
        if (this.gameMode !== 'racing' && this.gameMode !== 'paused') return;
        this.isPaused = !this.isPaused;
        const pauseModal = document.getElementById('pause-modal');
        if (this.isPaused) {
            this.gameMode = 'paused';
            pauseModal.classList.add('active');
            window.soundManager.playButtonClick();
        } else {
            this.gameMode = 'racing';
            pauseModal.classList.remove('active');
            window.soundManager.playButtonClick();
        }
    }

    // --- GAME LOOP ---
    gameLoop(now) {
        const dt = Math.min(0.05, (now - this.lastTimestamp) / 1000);
        this.lastTimestamp = now;

        if (this.gameMode === 'racing' && !this.isPaused) {
            this.update(dt);
        }

        this.render();
        requestAnimationFrame((t) => this.gameLoop(t));
    }

    // --- UPDATE STATE ---
    update(dt) {
        this.raceTime += dt;

        // Player Running
        if (this.isRunningInput && this.player.knockedTimer <= 0) {
            this.player.speed = Math.min(this.player.maxSpeed, this.player.speed + this.player.acceleration * dt);
        } else {
            this.player.speed = Math.max(0, this.player.speed - this.player.deceleration * dt);
        }

        if (this.player.knockedTimer > 0) {
            this.player.knockedTimer -= dt;
            this.player.speed = Math.min(this.player.speed, 3.5);
        }

        // Galloping leg cycles and hoof sound
        if (this.player.onGround && this.player.speed > 0.8) {
            this.player.legPhase += this.player.speed * dt * 0.95;
            if (Math.sin(this.player.legPhase) > 0.92) {
                window.soundManager.playHoofStep(this.player.speed / this.player.maxSpeed);
            }
            if (Math.random() < 0.3) {
                this.particles.push(new Particle(
                    140 - Math.random() * 15,
                    this.groundY + 8,
                    -this.player.speed * 0.3 - Math.random() * 1.5,
                    -0.2 - Math.random() * 0.8,
                    '#c8a57e',
                    2.5 + Math.random() * 2,
                    0.35
                ));
            }
        }

        // Realistic Equestrian Jump Physics
        if (!this.player.onGround) {
            this.player.y += this.player.vy * dt * 60;
            this.player.vy += this.player.gravity; // crisp gravity
            this.player.jumpProgress += dt * 2.5;

            // Touchdown
            if (this.player.y >= this.groundY) {
                this.player.y = this.groundY;
                this.player.vy = 0;
                this.player.onGround = true;
                this.player.jumpProgress = 0;
                window.soundManager.playLand();
                this.vibrate(20);

                // Landing dust
                for (let i = 0; i < 5; i++) {
                    this.particles.push(new Particle(
                        170 + (Math.random() - 0.5) * 25,
                        this.groundY + 8,
                        (Math.random() - 0.5) * 3,
                        -0.4 - Math.random() * 1.2,
                        '#d4b28c',
                        3 + Math.random() * 2,
                        0.35
                    ));
                }
            }
        }

        // Distance covered
        this.player.distance += this.player.speed * dt * 28;

        // Health decay while racing
        this.healthDecayAccumulator += dt;
        if (this.healthDecayAccumulator >= 3.0) {
            this.healthDecayAccumulator = 0;
            if (this.player.speed > 1.5) {
                // Reduced fatigue if health upgraded
                const fatigue = 0.8 - (this.state.data.upgrades.healthLevel - 1) * 0.12;
                const currentHP = this.state.modifyHealth(-Math.max(0.2, fatigue));
                if (currentHP <= 20 && currentHP > 0) window.soundManager.playLowHealthAlert();
                if (currentHP <= 0) {
                    this.showHorseNeedsCareModal();
                    return;
                }
            }
        }

        // AI Opponents
        this.opponents.forEach(ai => {
            const targetSpeed = ai.baseSpeed + Math.sin(this.raceTime * 1.2 + ai.id) * 0.7;
            ai.speed += (targetSpeed - ai.speed) * 0.04;
            ai.distance += ai.speed * dt * 28;
            ai.legPhase += ai.speed * dt * 0.95;

            // Opponent jump near obstacles
            if (this.activeLevelData && this.activeLevelData.obstacles) {
                const nearestObs = this.activeLevelData.obstacles.find(o => o.x > ai.distance && o.x < ai.distance + 75);
                if (nearestObs && ai.onGround && ai.jumpTimer <= 0) {
                    ai.onGround = false;
                    ai.vy = -5.8;
                    ai.jumpTimer = 1.1;
                }
            }
            if (ai.jumpTimer > 0) ai.jumpTimer -= dt;

            if (!ai.onGround) {
                ai.y += ai.vy * dt * 60;
                ai.vy += 0.44;
                const baseGround = this.groundY + (ai.lane === 0 ? -32 : ai.lane === 1 ? -16 : 16);
                if (ai.y >= baseGround) {
                    ai.y = baseGround;
                    ai.vy = 0;
                    ai.onGround = true;
                }
            }
        });

        // Obstacle Collisions
        if (this.activeLevelData && this.activeLevelData.obstacles) {
            const playerTrackX = this.player.distance + 170;
            this.activeLevelData.obstacles.forEach(obs => {
                if (!obs.hit && Math.abs(obs.x - playerTrackX) < 24) {
                    // Hurdle obstacle height is ~38px
                    const hurdleTop = this.groundY - 38;
                    const horseFeet = this.player.y;
                    // If horse feet are not high enough, collision occurs
                    if (horseFeet > hurdleTop + 6) {
                        obs.hit = true;
                        this.player.speed *= 0.3;
                        this.player.knockedTimer = 0.45;
                        window.soundManager.playHurdleHit();
                        this.vibrate(70);
                        this.shakeScreen(0.35, 6);

                        // Wood splinter particles
                        for (let i = 0; i < 7; i++) {
                            this.particles.push(new Particle(
                                175,
                                this.groundY - 25,
                                (Math.random() - 0.5) * 5,
                                -2 - Math.random() * 3,
                                '#8d6e63',
                                3,
                                0.5
                            ));
                        }

                        const newHP = this.state.modifyHealth(-15);
                        this.showToast(this.getText('obstacleHit'));
                        if (newHP <= 0) this.showHorseNeedsCareModal();
                    }
                }
            });
        }

        // Coin Pickups
        if (this.activeLevelData && this.activeLevelData.coins) {
            const playerTrackX = this.player.distance + 170;
            this.activeLevelData.coins.forEach(coin => {
                if (!coin.collected && Math.abs(coin.x - playerTrackX) < 28) {
                    const coinY = this.groundY + coin.yOffset;
                    if (Math.abs(this.player.y - coinY) < 55) {
                        coin.collected = true;
                        // Agility upgrade bonus coins
                        const bonus = this.state.data.upgrades.agilityLevel - 1;
                        this.state.addCoins(5 + bonus);
                        window.soundManager.playCoin();
                        this.vibrate(20);
                    }
                }
            });
        }

        if (this.shakeTimer > 0) this.shakeTimer -= dt;

        // Update Particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update(dt);
            if (this.particles[i].life <= 0) this.particles.splice(i, 1);
        }

        // Finish Line
        if (this.player.distance >= this.trackDistance) {
            this.onRaceFinished();
            return;
        }

        this.updateHUD();
    }

    shakeScreen(duration, intensity) {
        this.shakeTimer = duration;
        this.shakeIntensity = intensity;
    }

    // --- FINISH LINE ---
    onRaceFinished() {
        this.gameMode = 'victory';
        window.soundManager.playVictory();
        this.vibrate(120);

        const racers = [
            { name: 'Player', distance: this.player.distance },
            ...this.opponents.map(ai => ({ name: ai.name, distance: ai.distance }))
        ];
        racers.sort((a, b) => b.distance - a.distance);
        const playerRank = racers.findIndex(r => r.name === 'Player') + 1;

        const isFirstTime = this.state.completeLevel(this.activeLevelData.id);
        let coinsAwarded = isFirstTime ? this.activeLevelData.rewardCoins : 10;
        let bonusText = '';

        if (playerRank === 1) {
            coinsAwarded += this.activeLevelData.firstPlaceBonus;
            bonusText = ` (+50 🏆)`;
        } else if (playerRank === 2) {
            coinsAwarded += 25;
            bonusText = ' (+25 🥈)';
        }

        this.state.addCoins(coinsAwarded);

        const modal = document.getElementById('victory-modal');
        document.getElementById('victory-title').textContent = playerRank === 1 ? this.getText('victory') : this.getText('raceFinished');
        document.getElementById('victory-rank').textContent = playerRank === 1 ? this.getText('place1') :
            playerRank === 2 ? this.getText('place2') :
            playerRank === 3 ? this.getText('place3') : this.getText('place4');
        document.getElementById('victory-time').textContent = this.formatTime(this.raceTime);
        document.getElementById('victory-reward').textContent = `+${coinsAwarded} 🪙${bonusText}`;

        modal.classList.add('active');
        this.updateHUD();
    }

    showHorseNeedsCareModal() {
        this.gameMode = 'needs_care';
        window.soundManager.playLowHealthAlert();
        this.vibrate(150);

        const modal = document.getElementById('needs-care-modal');
        modal.classList.add('active');

        const container = document.getElementById('care-food-options');
        if (container) {
            container.innerHTML = '';
            HORSE_FOODS.forEach(food => {
                const count = this.state.data.foodInventory[food.id] || 0;
                const div = document.createElement('div');
                div.className = 'shop-card';
                div.style.minWidth = '120px';
                div.innerHTML = `
                    <div class="shop-card-preview">${food.icon}</div>
                    <div class="shop-card-title">${food.name}</div>
                    <div style="font-size: 11px; color: #cbd5e1; margin-bottom: 6px;">+${food.restore} HP (${count})</div>
                    <button class="shop-card-btn ${count > 0 ? 'btn-feed' : 'btn-buy'}">
                        ${count > 0 ? this.getText('feed') : `${food.price} 🪙`}
                    </button>
                `;
                div.querySelector('button').addEventListener('click', () => {
                    if (count > 0) {
                        const res = this.state.feedHorse(food.id);
                        if (res.success) {
                            window.soundManager.playFeedChime();
                            modal.classList.remove('active');
                            this.startRace(this.activeLevelData.id);
                        }
                    } else {
                        if (this.state.buyFood(food.id)) {
                            this.state.feedHorse(food.id);
                            modal.classList.remove('active');
                            this.startRace(this.activeLevelData.id);
                        } else {
                            this.showToast(this.getText('insufficientCoins'));
                        }
                    }
                });
                container.appendChild(div);
            });
        }
    }

    // --- REALISTIC 2D RENDERING (PHOTO 1 AESTHETIC) ---
    render() {
        const ctx = this.ctx;
        ctx.save();

        if (this.shakeTimer > 0) {
            const offsetX = (Math.random() - 0.5) * this.shakeIntensity;
            const offsetY = (Math.random() - 0.5) * this.shakeIntensity;
            ctx.translate(offsetX, offsetY);
        }

        // 1. Photo 1 Scenery & Parallax Environment
        this.renderPhoto1Environment(ctx);

        if (this.gameMode === 'racing' || this.gameMode === 'paused' || this.gameMode === 'victory') {
            // 2. Track Objects (Hurdles & Coins)
            this.renderTrackObjects(ctx);

            // 3. Opponents in far lanes
            this.opponents.filter(ai => ai.lane < 2).forEach(ai => this.renderOpponent(ctx, ai));

            // 4. Player Horse with Realistic Bascule Jump Pose
            this.renderRealisticPlayerHorse(ctx);

            // 5. Opponents in near lanes
            this.opponents.filter(ai => ai.lane >= 2).forEach(ai => this.renderOpponent(ctx, ai));

            // 6. Finish Line
            this.renderFinishLine(ctx);

            // 7. Particles
            this.particles.forEach(p => p.draw(ctx));
        }

        ctx.restore();
    }

    // Render Scenery matching Photo 1:
    // Bright morning sky, rising sun, soft hills, green pasture, lush bush hedge, stylized trees, and sandy dirt track
    renderPhoto1Environment(ctx) {
        const scrollX = this.player ? this.player.distance : 0;
        const ground = this.groundY;

        // A. Sky Gradient (Photo 1)
        const skyGrad = ctx.createLinearGradient(0, 0, 0, ground - 70);
        skyGrad.addColorStop(0, '#56a5ec');
        skyGrad.addColorStop(0.7, '#90caf9');
        skyGrad.addColorStop(1, '#bfe3ff');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, this.width, ground);

        // B. Morning Sun (Photo 1 - Left Horizon glow)
        const sunX = this.width * 0.12;
        const sunY = ground - 110;
        const sunGlow = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 80);
        sunGlow.addColorStop(0, 'rgba(255, 245, 157, 0.95)');
        sunGlow.addColorStop(0.4, 'rgba(255, 238, 88, 0.5)');
        sunGlow.addColorStop(1, 'rgba(255, 238, 88, 0)');
        ctx.fillStyle = sunGlow;
        ctx.beginPath();
        ctx.arc(sunX, sunY, 80, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fff9c4';
        ctx.beginPath();
        ctx.arc(sunX, sunY, 26, 0, Math.PI * 2);
        ctx.fill();

        // C. Layer 1: Distant Soft Green Mountains (Parallax 0.08)
        ctx.fillStyle = '#7dbb8c';
        ctx.beginPath();
        ctx.moveTo(0, ground - 70);
        const mtnOffset = (scrollX * 0.08) % 360;
        for (let x = -360; x < this.width + 360; x += 180) {
            const mx = x - mtnOffset;
            const my = ground - 110 - Math.sin((x + mtnOffset) * 0.012) * 35;
            ctx.quadraticCurveTo(mx - 90, my - 25, mx, my);
        }
        ctx.lineTo(this.width, ground - 70);
        ctx.lineTo(0, ground - 70);
        ctx.closePath();
        ctx.fill();

        // D. Layer 2: Midground Meadow Plane (Parallax 0.18)
        ctx.fillStyle = '#66bb6a';
        ctx.fillRect(0, ground - 80, this.width, 30);

        // Distant small trees
        for (let dt = 0; dt < 6; dt++) {
            const dtx = ((dt * 280 - scrollX * 0.18) % (this.width + 300) + this.width + 300) % (this.width + 300) - 100;
            ctx.fillStyle = '#43a047';
            ctx.beginPath();
            ctx.arc(dtx, ground - 82, 12, 0, Math.PI * 2);
            ctx.fill();
        }

        // E. Layer 3: Stylized Leafy Trees (Photo 1) (Parallax 0.38)
        for (let t = 0; t < 5; t++) {
            const tx = ((t * 360 - scrollX * 0.38) % (this.width + 400) + this.width + 400) % (this.width + 400) - 150;
            this.drawPhoto1Tree(ctx, tx, ground - 60);
        }

        // F. Layer 4: Dense Bush / Hedge Row (Photo 1) (Parallax 0.65)
        ctx.fillStyle = '#2e7d32';
        const hedgeOffset = (scrollX * 0.65) % 60;
        ctx.beginPath();
        ctx.moveTo(0, ground - 20);
        for (let hx = -60; hx < this.width + 60; hx += 30) {
            const px = hx - hedgeOffset;
            const py = ground - 65 - Math.sin((hx + hedgeOffset) * 0.1) * 8;
            ctx.arc(px, py + 15, 20, Math.PI, 0, false);
        }
        ctx.lineTo(this.width, ground - 20);
        ctx.lineTo(0, ground - 20);
        ctx.closePath();
        ctx.fill();

        // Darker inner hedge foliage
        ctx.fillStyle = '#1b5e20';
        for (let hx = -60; hx < this.width + 60; hx += 40) {
            const px = hx - hedgeOffset + 15;
            ctx.beginPath();
            ctx.arc(px, ground - 48, 14, 0, Math.PI * 2);
            ctx.fill();
        }

        // G. Layer 5: Sandy Dirt Track (Photo 1 Racetrack)
        const sandGrad = ctx.createLinearGradient(0, ground - 22, 0, this.height);
        sandGrad.addColorStop(0, '#f2d19f'); // Upper sand
        sandGrad.addColorStop(0.3, '#e5bf84'); // Running track
        sandGrad.addColorStop(1, '#cca064'); // Lower border
        ctx.fillStyle = sandGrad;
        ctx.fillRect(0, ground - 22, this.width, this.height - (ground - 22));

        // Track border divider lines
        ctx.strokeStyle = '#d7af73';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, ground - 22);
        ctx.lineTo(this.width, ground - 22);
        ctx.stroke();

        // Subtle sand track grain particles (scrolling)
        ctx.fillStyle = 'rgba(180, 140, 80, 0.4)';
        for (let g = 0; g < 16; g++) {
            const gx = ((g * 110 - scrollX * 1.0) % (this.width + 120) + this.width + 120) % (this.width + 120) - 40;
            const gy = ground + 10 + (g % 4) * 16;
            ctx.fillRect(gx, gy, 4, 2);
        }
    }

    // Stylized Tree matching Photo 1:
    // Curved tree trunk with multiple green leaf globes
    drawPhoto1Tree(ctx, x, y) {
        // Trunk with branches
        ctx.fillStyle = '#6d4c41';
        ctx.beginPath();
        ctx.moveTo(x - 8, y + 20);
        ctx.quadraticCurveTo(x - 5, y - 40, x - 12, y - 80);
        ctx.lineTo(x + 4, y - 80);
        ctx.quadraticCurveTo(x + 10, y - 35, x + 8, y + 20);
        ctx.closePath();
        ctx.fill();

        // Branch right
        ctx.beginPath();
        ctx.moveTo(x - 2, y - 45);
        ctx.quadraticCurveTo(x + 20, y - 55, x + 35, y - 65);
        ctx.lineTo(x + 32, y - 72);
        ctx.quadraticCurveTo(x + 15, y - 60, x - 4, y - 52);
        ctx.closePath();
        ctx.fill();

        // Leafy Canopy (Photo 1 distinct round foliage crowns)
        ctx.fillStyle = '#43a047';
        ctx.beginPath();
        ctx.arc(x - 12, y - 90, 34, 0, Math.PI * 2);
        ctx.arc(x + 24, y - 85, 30, 0, Math.PI * 2);
        ctx.arc(x + 5, y - 110, 28, 0, Math.PI * 2);
        ctx.fill();

        // Top lighter highlights
        ctx.fillStyle = '#66bb6a';
        ctx.beginPath();
        ctx.arc(x - 16, y - 96, 20, 0, Math.PI * 2);
        ctx.arc(x + 20, y - 92, 18, 0, Math.PI * 2);
        ctx.arc(x + 3, y - 116, 16, 0, Math.PI * 2);
        ctx.fill();
    }

    // Track Objects (Photo 1 Wooden Log Hurdles)
    renderTrackObjects(ctx) {
        if (!this.activeLevelData) return;
        const scrollX = this.player.distance;
        const screenOriginX = 170;

        // Coins along track
        if (this.activeLevelData.coins) {
            this.activeLevelData.coins.forEach(coin => {
                if (coin.collected) return;
                const cx = screenOriginX + (coin.x - scrollX);
                if (cx > -40 && cx < this.width + 40) {
                    const cy = this.groundY + coin.yOffset;
                    ctx.save();
                    ctx.fillStyle = '#ffd54f';
                    ctx.strokeStyle = '#ff8f00';
                    ctx.lineWidth = 2.5;
                    ctx.beginPath();
                    ctx.arc(cx, cy, 10, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();

                    ctx.fillStyle = '#b45309';
                    ctx.font = '900 11px sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText('★', cx, cy);
                    ctx.restore();
                }
            });
        }

        // Wooden Hurdles matching Photo 1: Sturdy tree trunk posts & dual round timber logs!
        if (this.activeLevelData.obstacles) {
            this.activeLevelData.obstacles.forEach(obs => {
                const ox = screenOriginX + (obs.x - scrollX);
                if (ox > -90 && ox < this.width + 90) {
                    this.drawPhoto1WoodenHurdle(ctx, ox, this.groundY, obs);
                }
            });
        }
    }

    // Wooden Hurdle matching Photo 1:
    // Sturdy vertical posts with diagonal brace + two round horizontal wooden logs with round log ends!
    drawPhoto1WoodenHurdle(ctx, x, groundY, obs) {
        ctx.save();
        const hurdleHeight = 44; // Realistic hurdle height
        const topY = groundY - hurdleHeight;

        // Hurdle ground shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
        ctx.beginPath();
        ctx.ellipse(x + 10, groundY + 4, 30, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Post 1 (Left vertical post)
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(x - 14, topY + 4, 10, hurdleHeight);

        // Diagonal support leg (Photo 1)
        ctx.beginPath();
        ctx.moveTo(x - 14, topY + 22);
        ctx.lineTo(x + 18, groundY);
        ctx.lineTo(x + 12, groundY);
        ctx.lineTo(x - 14, topY + 28);
        ctx.closePath();
        ctx.fill();

        // Top Horizontal Round Log
        const log1Y = topY + 6;
        ctx.fillStyle = obs.hit ? '#4e342e' : '#795548';
        ctx.beginPath();
        ctx.roundRect(x - 22, log1Y, 44, 12, 6);
        ctx.fill();

        // Circular Log End (Photo 1 prominent round end grain!)
        ctx.fillStyle = '#a1887f';
        ctx.beginPath();
        ctx.arc(x + 20, log1Y + 6, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#5d4037';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(x + 20, log1Y + 6, 3.5, 0, Math.PI * 2);
        ctx.stroke();

        // Bottom Horizontal Round Log
        const log2Y = topY + 22;
        ctx.fillStyle = '#6d4c41';
        ctx.beginPath();
        ctx.roundRect(x - 22, log2Y, 44, 11, 5);
        ctx.fill();

        // Bottom circular log end
        ctx.fillStyle = '#a1887f';
        ctx.beginPath();
        ctx.arc(x + 20, log2Y + 5.5, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#5d4037';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(x + 20, log2Y + 5.5, 3, 0, Math.PI * 2);
        ctx.stroke();

        // Post 2 (Right upright post in front of bottom log)
        ctx.fillStyle = '#4e342e';
        ctx.fillRect(x + 8, topY + 12, 8, hurdleHeight - 12);

        ctx.restore();
    }

    // --- REALISTIC HORSE & RIDER DRAWING (PHOTO 1 JUMPING POSE) ---
    renderRealisticPlayerHorse(ctx) {
        const outfit = RIDER_OUTFITS.find(o => o.id === this.state.data.equippedOutfit) || RIDER_OUTFITS[0];
        const screenX = 170;
        const screenY = this.player.y;
        const isJumping = !this.player.onGround;

        ctx.save();
        ctx.translate(screenX, screenY);

        // Realistic Ground Shadow under Horse (stretches realistically on sand)
        const shadowDist = this.groundY - screenY;
        const shadowScale = Math.max(0.45, 1 - shadowDist / 80);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.beginPath();
        ctx.ellipse(4, shadowDist + 4, 46 * shadowScale, 9 * shadowScale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Dynamic body tilt during jump (Equestrian Bascule)
        if (isJumping) {
            // Ascending tilts slightly up (+5 deg), descending tilts down (-8 deg)
            const jumpTilt = this.player.vy < 0 ? -0.12 : 0.15;
            ctx.rotate(jumpTilt);
        }

        // Draw Chestnut Racehorse (Photo 1)
        this.drawRealisticHorseAnatomy(ctx, '#8d4024', '#212121', this.player.legPhase, isJumping, 1.0);

        // Draw Jockey in Equestrian Two-Point Jumping Seat (Photo 1)
        this.drawRealisticJockey(ctx, outfit, isJumping, 1.0);

        ctx.restore();
    }

    renderOpponent(ctx, ai) {
        const scrollX = this.player.distance;
        const screenX = 170 + (ai.distance - scrollX);
        if (screenX < -130 || screenX > this.width + 130) return;

        ctx.save();
        ctx.translate(screenX, ai.y);
        ctx.scale(ai.scale, ai.scale);

        const shadowDist = (this.groundY + (ai.lane === 0 ? -32 : ai.lane === 1 ? -16 : 16)) - ai.y;
        const shadowScale = Math.max(0.4, 1 - shadowDist / 80);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.ellipse(4, shadowDist / ai.scale + 4, 44 * shadowScale, 8 * shadowScale, 0, 0, Math.PI * 2);
        ctx.fill();

        if (!ai.onGround) {
            const tilt = ai.vy < 0 ? -0.12 : 0.15;
            ctx.rotate(tilt);
        }

        this.drawRealisticHorseAnatomy(ctx, ai.color, '#1a1a1a', ai.legPhase, !ai.onGround, 0.94);

        const aiOutfit = {
            jacket: ai.jockeySilk,
            pants: '#f8fafc',
            helmet: ai.jockeySilk,
            boots: '#111827'
        };
        this.drawRealisticJockey(ctx, aiOutfit, !ai.onGround, 0.94);

        ctx.restore();
    }

    // Realistic Horse Anatomy with Joint Articulation (Photo 1 Reference)
    drawRealisticHorseAnatomy(ctx, coatColor, maneColor, legPhase, isJumping, scale = 1.0) {
        ctx.save();
        const sinP = Math.sin(legPhase);
        const cosP = Math.cos(legPhase);

        // 1. Flowing Dark Tail (Photo 1)
        ctx.strokeStyle = maneColor;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-38, -18);
        const tailY = isJumping ? -12 : -22 - sinP * 10;
        ctx.quadraticCurveTo(-52, -24 + sinP * 6, -58, tailY);
        ctx.stroke();

        // 2. Far Hind Leg
        ctx.strokeStyle = coatColor;
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.moveTo(-28, -10);
        if (isJumping) {
            // Trailing behind hurdle (Photo 1)
            ctx.lineTo(-44, -4);
            ctx.lineTo(-52, 6);
        } else {
            const hAng = cosP * 0.65;
            ctx.lineTo(-30 + Math.sin(hAng) * 22, -2 + Math.cos(hAng) * 20);
        }
        ctx.stroke();

        // 3. Far Front Leg
        ctx.beginPath();
        ctx.moveTo(22, -10);
        if (isJumping) {
            // Tucked tightly under knees (Photo 1)
            ctx.lineTo(26, -4);
            ctx.lineTo(16, 2);
        } else {
            const fAng = -cosP * 0.65;
            ctx.lineTo(22 + Math.sin(fAng) * 22, -2 + Math.cos(fAng) * 20);
        }
        ctx.stroke();

        // 4. Muscular Horse Torso & Flank
        ctx.fillStyle = coatColor;
        ctx.beginPath();
        ctx.ellipse(-2, -16, 36, 17, -0.04, 0, Math.PI * 2);
        ctx.fill();

        // 5. Powerful Neck & Head (Photo 1 forward reaching neck)
        ctx.beginPath();
        ctx.moveTo(14, -22);
        ctx.lineTo(26, -46); // crest
        ctx.lineTo(44, -38); // muzzle
        ctx.lineTo(36, -24); // throat latch
        ctx.lineTo(20, -10); // chest
        ctx.closePath();
        ctx.fill();

        // Ears
        ctx.beginPath();
        ctx.moveTo(24, -47);
        ctx.lineTo(28, -56);
        ctx.lineTo(32, -45);
        ctx.fill();

        // Flowing Black Mane (Photo 1)
        ctx.fillStyle = maneColor;
        ctx.beginPath();
        ctx.moveTo(15, -24);
        ctx.lineTo(26, -46);
        ctx.lineTo(21, -40);
        ctx.lineTo(16, -30);
        ctx.fill();

        // White Star / Blaze Marking & Eye
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(36, -40, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(37, -40, 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Muzzle nostrils
        ctx.fillStyle = '#3e2723';
        ctx.beginPath();
        ctx.arc(42, -36, 1.8, 0, Math.PI * 2);
        ctx.fill();

        // 6. Near Hind Leg
        ctx.strokeStyle = coatColor;
        ctx.lineWidth = 7.5;
        ctx.beginPath();
        ctx.moveTo(-24, -10);
        if (isJumping) {
            // Extended back clearing hurdle (Photo 1)
            ctx.lineTo(-38, -2);
            ctx.lineTo(-46, 10);
        } else {
            const nhAng = -sinP * 0.7;
            ctx.lineTo(-24 + Math.sin(nhAng) * 24, 2 + Math.cos(nhAng) * 22);
        }
        ctx.stroke();

        // 7. Near Front Leg
        ctx.beginPath();
        ctx.moveTo(24, -10);
        if (isJumping) {
            // Folded tight in jumping bascule (Photo 1)
            ctx.lineTo(28, -2);
            ctx.lineTo(18, 4);
        } else {
            const nfAng = sinP * 0.7;
            ctx.lineTo(24 + Math.sin(nfAng) * 24, 2 + Math.cos(nfAng) * 22);
        }
        ctx.stroke();

        // Black Hooves
        ctx.fillStyle = '#212121';

        // 8. Saddle & White Numnah (Photo 1)
        ctx.fillStyle = '#ffffff'; // white pad
        ctx.beginPath();
        ctx.roundRect(-8, -26, 22, 10, 3);
        ctx.fill();

        ctx.fillStyle = '#1e1b18'; // dark leather saddle
        ctx.beginPath();
        ctx.roundRect(-6, -26, 18, 8, 3);
        ctx.fill();

        // Leather Bridle & Reins (Photo 1)
        ctx.strokeStyle = '#271c19';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(38, -32); // bit
        ctx.lineTo(4, -30);  // rider's hands
        ctx.stroke();

        ctx.restore();
    }

    // Realistic Jockey in Two-Point Jumping Seat (Photo 1)
    drawRealisticJockey(ctx, outfit, isJumping, scale = 1.0) {
        ctx.save();
        // Photo 1: Rider in red racing coat, white breeches, black boots, leaning low over the neck!
        const leanForward = isJumping ? 0.38 : 0.22;

        // Rider legs / White breeches (Photo 1)
        ctx.fillStyle = outfit.pants || '#ffffff';
        ctx.beginPath();
        ctx.moveTo(-2, -28);
        ctx.lineTo(8, -18);
        ctx.lineTo(2, -8);
        ctx.lineTo(-4, -16);
        ctx.closePath();
        ctx.fill();

        // Black Riding Boots (Photo 1)
        ctx.fillStyle = outfit.boots || '#111827';
        ctx.fillRect(0, -12, 6, 9);

        // Jockey Jacket / Silks (Photo 1 red jacket or custom equipped)
        ctx.fillStyle = outfit.jacket || '#e53935';
        ctx.beginPath();
        ctx.roundRect(-2, -42, 16, 15, 4);
        ctx.fill();

        // Arm holding reins forward
        ctx.strokeStyle = outfit.jacket || '#e53935';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(4, -38);
        ctx.lineTo(14, -30);
        ctx.stroke();

        // Auburn Hair peeking out (Photo 1 detail!)
        ctx.fillStyle = '#e65100';
        ctx.beginPath();
        ctx.arc(8, -46, 6, 0, Math.PI * 2);
        ctx.fill();

        // Face profile
        ctx.fillStyle = '#ffcc80';
        ctx.beginPath();
        ctx.arc(10, -47, 5, 0, Math.PI * 2);
        ctx.fill();

        // Black Jockey Helmet / Cap with Peak & Goggles (Photo 1)
        ctx.fillStyle = outfit.helmet || '#1e293b';
        ctx.beginPath();
        ctx.arc(10, -49, 6.5, Math.PI * 0.8, Math.PI * 2.2);
        ctx.fill();
        ctx.fillRect(10, -49, 7, 2.5); // visor peak

        ctx.restore();
    }

    renderFinishLine(ctx) {
        if (!this.activeLevelData) return;
        const scrollX = this.player.distance;
        const screenOriginX = 170;
        const fx = screenOriginX + (this.trackDistance - scrollX);

        if (fx > -100 && fx < this.width + 100) {
            ctx.save();
            ctx.fillStyle = '#374151';
            ctx.fillRect(fx - 5, this.groundY - 130, 10, 140);

            // Checkered Arch
            const by = this.groundY - 130;
            ctx.fillStyle = '#111827';
            ctx.fillRect(fx - 40, by, 80, 32);

            const cols = 8;
            const rows = 3;
            const cw = 80 / cols;
            const ch = 32 / rows;
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    ctx.fillStyle = (r + c) % 2 === 0 ? '#ffffff' : '#000000';
                    ctx.fillRect(fx - 40 + c * cw, by + r * ch, cw, ch);
                }
            }

            ctx.fillStyle = '#ffd54f';
            ctx.font = '900 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('FINISH', fx, by - 6);
            ctx.restore();
        }
    }

    // --- HUD (MATCHING PHOTO 1) ---
    updateHUD() {
        if (!this.activeLevelData) return;

        // Speed Meter Fill (Turtle to Rabbit)
        const speedRatio = Math.min(1, this.player.speed / this.player.maxSpeed);
        const speedFill = document.getElementById('speed-fill');
        if (speedFill) speedFill.style.width = `${Math.round(speedRatio * 100)}%`;

        // Level & Time (Photo 1)
        document.getElementById('hud-level-val').textContent = this.activeLevelData.id;
        document.getElementById('hud-time-val').textContent = this.formatTime(this.raceTime);

        // Score / Coins (Photo 1)
        document.getElementById('hud-coins-val').textContent = this.state.data.coins;

        // Health Bar
        const hp = Math.max(0, Math.round(this.state.data.health));
        const healthFill = document.getElementById('health-fill');
        const healthVal = document.getElementById('hud-health-val');
        if (healthFill && healthVal) {
            healthFill.style.width = `${hp}%`;
            healthVal.textContent = `${hp}/100`;
            healthFill.style.backgroundColor = hp > 50 ? '#4caf50' : hp > 25 ? '#ffb300' : '#f44336';
        }

        // Track Progress Box with 4 Horse Silhouettes (Photo 1)
        const trackLength = Math.max(1, this.trackDistance);
        const playerMarker = document.getElementById('minimap-player');
        if (playerMarker) {
            const pPct = Math.min(95, Math.max(0, (this.player.distance / trackLength) * 95));
            playerMarker.style.left = `${pPct}%`;
        }

        this.opponents.forEach((ai, idx) => {
            const aiMarker = document.getElementById(`minimap-ai-${idx}`);
            if (aiMarker) {
                const aiPct = Math.min(95, Math.max(0, (ai.distance / trackLength) * 95));
                aiMarker.style.left = `${aiPct}%`;
            }
        });
    }

    formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    // --- UI NAVIGATION & MODALS ---
    bindUIButtons() {
        document.getElementById('menu-btn-play')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            this.startRace(this.state.data.currentLevel || 1);
        });
        document.getElementById('menu-btn-continue')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            const highestUnlocked = Math.max(...this.state.data.unlockedLevels);
            this.startRace(highestUnlocked);
        });
        document.getElementById('menu-btn-levels')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            this.openLevelSelect();
        });
        document.getElementById('menu-btn-shop')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            this.openShop('outfits');
        });
        document.getElementById('menu-btn-settings')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            this.openSettings();
        });

        // Pause Modal
        document.getElementById('pause-btn-resume')?.addEventListener('click', () => this.togglePause());
        document.getElementById('pause-btn-restart')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            this.startRace(this.activeLevelData.id);
        });
        document.getElementById('pause-btn-settings')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            this.openSettings();
        });
        document.getElementById('pause-btn-exit')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            this.exitToMainMenu();
        });

        // Victory Modal
        document.getElementById('victory-btn-next')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            const nextLvl = this.activeLevelData.id + 1;
            if (nextLvl <= 50) this.startRace(nextLvl);
            else this.exitToMainMenu();
        });
        document.getElementById('victory-btn-replay')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            this.startRace(this.activeLevelData.id);
        });
        document.getElementById('victory-btn-menu')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            this.exitToMainMenu();
        });

        // Close Buttons
        document.querySelectorAll('.modal-close-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                window.soundManager.playButtonClick();
                btn.closest('.screen-overlay').classList.remove('active');
                if (this.gameMode === 'menu') {
                    document.getElementById('main-menu-overlay').classList.add('active');
                }
            });
        });

        // Shop Tabs
        document.getElementById('shop-tab-outfits')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            this.switchShopTab('outfits');
        });
        document.getElementById('shop-tab-food')?.addEventListener('click', () => {
            window.soundManager.playButtonClick();
            this.switchShopTab('food');
        });

        // Photo 2 Stable Upgrades Buttons
        this.bindStableUpgradeButtons();

        // Settings Controls
        this.bindSettingsControls();
    }

    // Photo 2 Stable Training Upgrades
    bindStableUpgradeButtons() {
        // 1. Health Stamina (250 coins)
        document.getElementById('btn-up-health')?.addEventListener('click', () => {
            const price = 250;
            if (this.state.upgradeStat('healthLevel', price)) {
                window.soundManager.playCoin();
                this.showToast('Health Stamina Upgraded! +Max Endurance');
                this.updateStableUpgradeUI();
            } else {
                this.showToast(this.getText('insufficientCoins'));
            }
        });

        // 2. Gallop Speed (500 coins)
        document.getElementById('btn-up-speed')?.addEventListener('click', () => {
            const price = 500;
            if (this.state.upgradeStat('speedLevel', price)) {
                window.soundManager.playCoin();
                this.showToast('Gallop Speed Upgraded! +Max Speed');
                this.updateStableUpgradeUI();
            } else {
                this.showToast(this.getText('insufficientCoins'));
            }
        });

        // 3. Jump Agility (250 coins)
        document.getElementById('btn-up-agility')?.addEventListener('click', () => {
            const price = 250;
            if (this.state.upgradeStat('agilityLevel', price)) {
                window.soundManager.playCoin();
                this.showToast('Jump Agility Upgraded! +Coin Bonus');
                this.updateStableUpgradeUI();
            } else {
                this.showToast(this.getText('insufficientCoins'));
            }
        });
    }

    updateStableUpgradeUI() {
        const u = this.state.data.upgrades;
        document.getElementById('lvl-health-badge').textContent = `Lvl ${u.healthLevel}`;
        document.getElementById('gauge-health-fill').style.width = `${Math.min(100, u.healthLevel * 25)}%`;

        document.getElementById('lvl-speed-badge').textContent = `Lvl ${u.speedLevel}`;
        document.getElementById('gauge-speed-fill').style.width = `${Math.min(100, u.speedLevel * 25)}%`;

        document.getElementById('lvl-agility-badge').textContent = `Lvl ${u.agilityLevel}`;
        document.getElementById('gauge-agility-fill').style.width = `${Math.min(100, u.agilityLevel * 25)}%`;

        this.updateShopCoins();
        this.updateMenuStats();
    }

    exitToMainMenu() {
        this.gameMode = 'menu';
        this.isPaused = false;
        document.querySelectorAll('.screen-overlay').forEach(el => el.classList.remove('active'));
        document.getElementById('main-menu-overlay').classList.add('active');
        document.getElementById('hud-overlay').style.display = 'none';
        this.updateMenuStats();
    }

    updateMenuStats() {
        document.getElementById('menu-coins-val').textContent = this.state.data.coins;
        document.getElementById('menu-health-val').textContent = `${Math.round(this.state.data.health)}/100`;
    }

    updateUI() {
        this.updateMenuStats();
        this.translateUI();
    }

    // --- LEVEL SELECT (50 LEVELS) ---
    openLevelSelect() {
        const modal = document.getElementById('levels-modal');
        modal.classList.add('active');
        document.getElementById('main-menu-overlay').classList.remove('active');
        this.renderLevelsGrid(1, 10);
    }

    renderLevelsGrid(startLvl, endLvl) {
        const grid = document.getElementById('levels-grid-container');
        if (!grid) return;
        grid.innerHTML = '';

        const levelsToDisplay = window.GAME_LEVELS.filter(l => l.id >= startLvl && l.id <= endLvl);
        levelsToDisplay.forEach(level => {
            const isUnlocked = this.state.data.unlockedLevels.includes(level.id);
            const isCompleted = this.state.data.completedLevels.includes(level.id);

            const card = document.createElement('div');
            card.className = `level-card ${isCompleted ? 'completed' : isUnlocked ? 'unlocked' : 'locked'}`;
            card.innerHTML = `
                <div style="font-size: 16px; font-weight: 900; color: #fff;">${isUnlocked ? level.id : '🔒'}</div>
                <div style="font-size: 10px; color: #cbd5e1; margin: 2px 0 4px; line-height: 1.2;">${level.name}</div>
                <div style="font-size: 10px; color: #fbbf24;">${'★'.repeat(level.difficulty)}${'☆'.repeat(5 - level.difficulty)}</div>
                <div style="font-size: 10px; color: #fbbf24; margin-top: 2px;">${isCompleted ? '✓ 100🪙' : '100🪙'}</div>
            `;

            if (isUnlocked) {
                card.addEventListener('click', () => {
                    window.soundManager.playButtonClick();
                    document.getElementById('levels-modal').classList.remove('active');
                    this.startRace(level.id);
                });
            }
            grid.appendChild(card);
        });

        const tabsContainer = document.getElementById('level-range-tabs');
        if (tabsContainer) {
            tabsContainer.innerHTML = '';
            const ranges = [
                { s: 1, e: 10, label: '1 - 10' },
                { s: 11, e: 20, label: '11 - 20' },
                { s: 21, e: 30, label: '21 - 30' },
                { s: 31, e: 40, label: '31 - 40' },
                { s: 41, e: 50, label: '41 - 50' }
            ];
            ranges.forEach(r => {
                const btn = document.createElement('button');
                btn.className = `level-tab-btn ${r.s === startLvl ? 'active' : ''}`;
                btn.textContent = `Levels ${r.label}`;
                btn.addEventListener('click', () => {
                    window.soundManager.playButtonClick();
                    this.renderLevelsGrid(r.s, r.e);
                });
                tabsContainer.appendChild(btn);
            });
        }
    }

    // --- SHOP (10 OUTFITS & 7 FOODS) ---
    openShop(defaultTab = 'outfits') {
        const modal = document.getElementById('shop-modal');
        modal.classList.add('active');
        document.getElementById('main-menu-overlay').classList.remove('active');
        this.switchShopTab(defaultTab);
        this.updateStableUpgradeUI();
    }

    updateShopCoins() {
        document.getElementById('shop-coins-val').textContent = this.state.data.coins;
    }

    switchShopTab(tab) {
        const outfitsTabBtn = document.getElementById('shop-tab-outfits');
        const foodTabBtn = document.getElementById('shop-tab-food');
        const grid = document.getElementById('shop-grid-container');

        if (tab === 'outfits') {
            outfitsTabBtn?.classList.add('active');
            foodTabBtn?.classList.remove('active');
            this.renderOutfitsShop(grid);
        } else {
            foodTabBtn?.classList.add('active');
            outfitsTabBtn?.classList.remove('active');
            this.renderFoodShop(grid);
        }
    }

    renderOutfitsShop(container) {
        if (!container) return;
        container.innerHTML = '';

        RIDER_OUTFITS.forEach(outfit => {
            const isOwned = this.state.data.purchasedOutfits.includes(outfit.id);
            const isEquipped = this.state.data.equippedOutfit === outfit.id;

            const card = document.createElement('div');
            card.className = `shop-card ${isEquipped ? 'equipped' : ''}`;
            card.innerHTML = `
                <div class="shop-card-preview" style="border: 2px solid ${outfit.jacket}; background: rgba(0,0,0,0.5);">
                    ${outfit.icon}
                </div>
                <div class="shop-card-title">${outfit.name}</div>
                <div class="shop-card-price">${isOwned ? this.getText('owned') : `${outfit.price} 🪙`}</div>
                <button class="shop-card-btn ${isEquipped ? 'btn-is-equipped' : isOwned ? 'btn-equip' : 'btn-buy'}">
                    ${isEquipped ? this.getText('equipped') : isOwned ? this.getText('equip') : `${this.getText('buy')} (${outfit.price}🪙)`}
                </button>
            `;

            card.querySelector('button').addEventListener('click', () => {
                if (isEquipped) return;
                if (isOwned) {
                    this.state.equipOutfit(outfit.id);
                    window.soundManager.playButtonClick();
                    this.showToast(this.getText('equippedSuccess'));
                    this.renderOutfitsShop(container);
                } else {
                    if (this.state.buyOutfit(outfit.id)) {
                        this.state.equipOutfit(outfit.id);
                        window.soundManager.playCoin();
                        this.showToast(this.getText('purchaseSuccess'));
                        this.updateShopCoins();
                        this.renderOutfitsShop(container);
                    } else {
                        window.soundManager.playButtonClick();
                        this.showToast(this.getText('insufficientCoins'));
                    }
                }
            });

            container.appendChild(card);
        });
    }

    renderFoodShop(container) {
        if (!container) return;
        container.innerHTML = '';

        HORSE_FOODS.forEach(food => {
            const count = this.state.data.foodInventory[food.id] || 0;

            const card = document.createElement('div');
            card.className = 'shop-card';
            card.innerHTML = `
                <div class="shop-card-preview">${food.icon}</div>
                <div class="shop-card-title">${food.name}</div>
                <div style="font-size: 11px; color: #cbd5e1; margin-bottom: 4px;">+${food.restore} HP | Owned: ${count}</div>
                <div class="shop-card-price">${food.price} 🪙</div>
                <div style="display: flex; gap: 6px; width: 100%;">
                    <button class="shop-card-btn btn-buy" style="flex: 1;">${this.getText('buy')}</button>
                    <button class="shop-card-btn btn-feed" style="flex: 1;" ${count <= 0 ? 'disabled style="opacity:0.4;"' : ''}>${this.getText('feed')}</button>
                </div>
            `;

            card.querySelector('.btn-buy').addEventListener('click', () => {
                if (this.state.buyFood(food.id)) {
                    window.soundManager.playCoin();
                    this.showToast(this.getText('purchaseSuccess'));
                    this.updateShopCoins();
                    this.renderFoodShop(container);
                } else {
                    window.soundManager.playButtonClick();
                    this.showToast(this.getText('insufficientCoins'));
                }
            });

            card.querySelector('.btn-feed').addEventListener('click', () => {
                const res = this.state.feedHorse(food.id);
                if (res.success) {
                    window.soundManager.playFeedChime();
                    this.showToast(this.getText('fedSuccess'));
                    this.renderFoodShop(container);
                    this.updateMenuStats();
                } else if (res.reason === 'full') {
                    this.showToast(this.getText('alreadyFullHealth'));
                } else {
                    this.showToast(this.getText('noFoodAvailable'));
                }
            });

            container.appendChild(card);
        });
    }

    // --- SETTINGS ---
    openSettings() {
        document.getElementById('settings-modal').classList.add('active');
        this.updateSettingsControls();
    }

    bindSettingsControls() {
        const s = this.state.data.settings;
        document.getElementById('setting-master-vol')?.addEventListener('input', (e) => {
            s.masterVolume = parseInt(e.target.value);
            this.state.save();
            this.applySettings();
        });
        document.getElementById('setting-music-vol')?.addEventListener('input', (e) => {
            s.musicVolume = parseInt(e.target.value);
            this.state.save();
            this.applySettings();
        });
        document.getElementById('setting-sfx-vol')?.addEventListener('input', (e) => {
            s.sfxVolume = parseInt(e.target.value);
            this.state.save();
            this.applySettings();
        });
        document.getElementById('setting-sound-toggle')?.addEventListener('change', (e) => {
            s.soundEnabled = e.target.checked;
            this.state.save();
            this.applySettings();
        });
        document.getElementById('setting-bgm-toggle')?.addEventListener('change', (e) => {
            s.bgmEnabled = e.target.checked;
            this.state.save();
            this.applySettings();
        });
        document.getElementById('setting-sfx-toggle')?.addEventListener('change', (e) => {
            s.sfxEnabled = e.target.checked;
            this.state.save();
            this.applySettings();
        });
        document.getElementById('setting-vibration')?.addEventListener('change', (e) => {
            s.vibration = e.target.checked;
            this.state.save();
        });
        document.getElementById('setting-language')?.addEventListener('change', (e) => {
            s.language = e.target.value;
            this.state.save();
            this.applySettings();
        });

        document.getElementById('setting-reset-btn')?.addEventListener('click', () => {
            if (confirm(this.getText('confirmReset'))) {
                this.state.reset();
                window.soundManager.playButtonClick();
                this.showToast('Progress Reset!');
                this.updateUI();
                this.updateSettingsControls();
                document.getElementById('settings-modal').classList.remove('active');
                document.getElementById('main-menu-overlay').classList.add('active');
            }
        });
    }

    updateSettingsControls() {
        const s = this.state.data.settings;
        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.value = val;
        };
        const setChecked = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.checked = !!val;
        };

        setVal('setting-master-vol', s.masterVolume);
        setVal('setting-music-vol', s.musicVolume);
        setVal('setting-sfx-vol', s.sfxVolume);
        setChecked('setting-sound-toggle', s.soundEnabled);
        setChecked('setting-bgm-toggle', s.bgmEnabled);
        setChecked('setting-sfx-toggle', s.sfxEnabled);
        setChecked('setting-vibration', s.vibration);
        setVal('setting-language', s.language);
    }
}

// Android Back Navigation
window.handleAndroidBack = function() {
    if (window.gameInstance) {
        if (window.gameInstance.gameMode === 'racing') {
            window.gameInstance.togglePause();
            return true;
        } else if (window.gameInstance.gameMode === 'paused') {
            window.gameInstance.exitToMainMenu();
            return true;
        } else {
            const activeModal = document.querySelector('.screen-overlay.active:not(#main-menu-overlay)');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.getElementById('main-menu-overlay').classList.add('active');
                return true;
            }
        }
    }
    return false;
};

window.addEventListener('DOMContentLoaded', () => {
    window.gameInstance = new HorseRacingGame();
});
