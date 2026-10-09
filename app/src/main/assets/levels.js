// levels.js - Full 50 Level Definitions for Horse Racing Adventure 2D

const LEVEL_NAMES = [
    "Green Meadow Tutorial",
    "Sunny Farm Race",
    "Little Wooden Hurdles",
    "Country Road Sprint",
    "Forest Edge Challenge",
    "Rolling Hills Race",
    "Hay Bale Run",
    "Riverbank Trail",
    "Windy Meadow",
    "Beginner Champion Cup",
    "Whispering Pines Sprint",
    "Clover Field Dash",
    "Orchard Path Derby",
    "Stone Creek Run",
    "Birchwood Gallop",
    "Buttercup Hill",
    "Old Barn Highway",
    "Morning Mist Chase",
    "Willow Valley Trial",
    "Silver Horseshoe Cup",
    "Autumn Leaves Sprint",
    "Rustic Ridge Run",
    "Timberwood Obstacle Course",
    "Prairie Wind Challenge",
    "Sunset Pasture Derby",
    "Maple Ridge Sprint",
    "Bramble Hedge Hurdles",
    "Golden Wheat Gallop",
    "Whispering Brook Trial",
    "Gold Stirrup Trophy",
    "Pinecrest Steeplechase",
    "Valley Mist Dash",
    "Cedar Valley Challenge",
    "High Meadow Obstacles",
    "Wildflower Speedway",
    "Timberline Jump Trial",
    "Rocky Ravine Sprint",
    "Red Canyon Track",
    "Twilight Ridge Derby",
    "Diamond Saddle Classic",
    "Emerald Valley Stakes",
    "Thunder Valley Sprint",
    "Royal Equestrian Trial",
    "Mistral Mountain Course",
    "Crystal Creek Challenge",
    "Olympic Hurdles Derby",
    "Sovereign Star Stakes",
    "Champion's Ridge",
    "Grand Royal Steeplechase",
    "Legendary Master Championship"
];

const THEMES = [
    { id: 'meadow', name: 'Green Meadow', skyTop: '#5bb2ff', skyBottom: '#d8f0ff', grassTop: '#4caf50', grassBottom: '#2e7d32', track: '#e8c48a', hills: '#81c784' },
    { id: 'sunny_farm', name: 'Sunny Farm', skyTop: '#3da5ff', skyBottom: '#fdf7b2', grassTop: '#66bb6a', grassBottom: '#388e3c', track: '#deb887', hills: '#a5d6a7' },
    { id: 'autumn', name: 'Autumn Grove', skyTop: '#ff9966', skyBottom: '#ffe5b4', grassTop: '#d4883b', grassBottom: '#8d5524', track: '#d2a679', hills: '#e69500' },
    { id: 'sunset', name: 'Sunset Valley', skyTop: '#ff5e62', skyBottom: '#ff9966', grassTop: '#388e3c', grassBottom: '#1b5e20', track: '#d9a066', hills: '#8e44ad' },
    { id: 'canyon', name: 'Canyon Derby', skyTop: '#4a90e2', skyBottom: '#f5d6ba', grassTop: '#9e9d24', grassBottom: '#827717', track: '#c68642', hills: '#d35400' },
    { id: 'royal', name: 'Royal Grounds', skyTop: '#2980b9', skyBottom: '#d5f5e3', grassTop: '#27ae60', grassBottom: '#1e8449', track: '#edd59e', hills: '#52be80' }
];

const OBSTACLE_TYPES = [
    { type: 'hurdle', name: 'Wooden Hurdle', width: 44, height: 50, color: '#8d6e63' },
    { type: 'hay', name: 'Hay Bale', width: 50, height: 42, color: '#fbc02d' },
    { type: 'barrel', name: 'Barrel', width: 38, height: 46, color: '#a1887f' },
    { type: 'log', name: 'Fallen Log', width: 56, height: 36, color: '#5d4037' },
    { type: 'stone', name: 'Stone Wall', width: 48, height: 48, color: '#90a4ae' },
    { type: 'hedge', name: 'Green Hedge', width: 52, height: 46, color: '#2e7d32' }
];

// Generate procedural 50 distinct levels
function generateLevels() {
    const levels = [];

    for (let i = 1; i <= 50; i++) {
        const themeIndex = Math.floor((i - 1) / 9) % THEMES.length;
        const theme = THEMES[themeIndex];
        const name = LEVEL_NAMES[i - 1];

        // Track distance: scales from 1000m up to 3400m
        const distance = Math.round(900 + i * 50);

        // Difficulty stars (1 to 5)
        const difficulty = Math.min(5, Math.max(1, Math.ceil(i / 10)));

        // Number of obstacles: level 1 has 3 hurdles, scaling up to 18
        const obstacleCount = Math.min(18, 2 + Math.floor(i * 0.32));

        // Generate spaced obstacle positions
        const obstacles = [];
        const startSafeZone = 250; // no obstacles in first 250m
        const endSafeZone = distance - 180; // no obstacles right before finish line
        const usableLength = endSafeZone - startSafeZone;
        const baseInterval = usableLength / obstacleCount;

        for (let o = 0; o < obstacleCount; o++) {
            const jitter = (Math.random() - 0.5) * (baseInterval * 0.4);
            const x = Math.round(startSafeZone + (o + 0.5) * baseInterval + jitter);

            // Select obstacle type based on level
            let typeIndex = 0;
            if (i > 3) typeIndex = Math.floor(Math.random() * Math.min(OBSTACLE_TYPES.length, Math.ceil(i / 8) + 1));
            const template = OBSTACLE_TYPES[typeIndex % OBSTACLE_TYPES.length];

            obstacles.push({
                x: x,
                type: template.type,
                name: template.name,
                width: template.width,
                height: template.height,
                color: template.color
            });
        }

        // Sort obstacles by x
        obstacles.sort((a, b) => a.x - b.x);

        // Generate coins along the track
        const coinCount = Math.floor(distance / 120);
        const coins = [];
        for (let c = 0; c < coinCount; c++) {
            const coinX = Math.round(150 + c * 115 + (Math.random() * 30));
            if (coinX < distance - 100) {
                // Some coins in mid-air above obstacles or running line
                const isAir = Math.random() < 0.35;
                coins.push({
                    x: coinX,
                    yOffset: isAir ? -55 : -15, // height above ground
                    collected: false
                });
            }
        }

        // AI opponent speed settings for this level
        // Player max normal speed is approx 14.5 - 16.0
        // Early levels AI is slower (11 - 13.5), higher levels AI pushes (14.5 - 15.8)
        const speedScale = 1 + (i / 50) * 0.32;
        const aiSpeeds = [
            { name: "Thunder", baseSpeed: (11.2 * speedScale), color: '#1a1a1a', jockeySilk: '#ffffff', lane: 0 },
            { name: "Blaze", baseSpeed: (10.8 * speedScale), color: '#d4a373', jockeySilk: '#00bcd4', lane: 1 },
            { name: "Shadow", baseSpeed: (11.0 * speedScale), color: '#9e9e9e', jockeySilk: '#4caf50', lane: 3 }
        ];

        levels.push({
            id: i,
            name: name,
            distance: distance,
            difficulty: difficulty,
            theme: theme,
            obstacles: obstacles,
            coins: coins,
            aiOpponents: aiSpeeds,
            rewardCoins: 100, // exact 100 coins first completion reward
            firstPlaceBonus: 50
        });
    }

    return levels;
}

window.GAME_LEVELS = generateLevels();
