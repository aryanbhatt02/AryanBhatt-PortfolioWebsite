export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  tools: string[];
  shortDescription: string;
  overview: string;
  features: string[];
  architecture: string[];
  image: string;
  videoUrl?: string;
  youtubeUrl?: string;
  githubUrl: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "deadzone",
    title: "DEADZONE",
    category: "Zombie Shooter | Unity C#",
    date: "JULY 2026",
    tools: [
      "Unity Engine",
      "C#",
      "3D Gameplay",
      "Enemy AI",
      "Weapon Shop System",
      "Wave Spawning",
      "Audio Manager",
      "Unity UI",
    ],
    shortDescription:
      "3D zombie shooter featuring player movement, weapon system, enemy AI, wave-based enemy spawning, save system, weapon shop & ammo refill, health refill, and scene management across two interconnected scenes.",
    overview:
      "DEADZONE is a full-featured 3D first-person/third-person action zombie survival shooter built with Unity and C#. The project focuses on creating an immersive combat loop with intelligent wave-based enemy behavior, dynamic weapon purchasing, economy systems, and persistent game state management across interconnected game scenes.",
    features: [
      "Responsive 3D player movement, shooting mechanics, recoil, reload animations, and camera control.",
      "NavMesh-powered Enemy AI with dynamic pathfinding, target tracking, attack states, and ragdoll/death mechanics.",
      "Wave-based enemy spawning logic with progressive difficulty scaling and wave-clear notifications.",
      "In-game currency economy & interactive Weapon Shop (weapon purchasing, ammo refills, health packs).",
      "Persistent Save & Load System preserving player stats, high scores, and currency across sessions.",
      "Comprehensive UI & Audio Integration for hit markers, health indicators, weapon sound effects, and ambient audio.",
    ],
    architecture: [
      "State Pattern for player movement, weapon states, and enemy behavior trees.",
      "Observer Pattern (C# Events & Actions) for decoupled UI updates upon kill count, health changes, or money earned.",
      "Scene Management architecture seamlessly transitioning between main menu, store scene, and battle arena.",
    ],
    image: "/images/Deadzone.png",
    // videoUrl: "/Videos/DeadZoneGameplay.mp4",
    youtubeUrl: "https://youtu.be/1rCzuIVN7_k",
    githubUrl: "https://github.com/aryanbhatt02/DEADZONE",
  },
  {
    id: "highway-rush",
    title: "STREET RUSH",
    category: "Car Racing | Unity C#",
    date: "JUNE 2026",
    tools: [
      "Unity Engine",
      "C#",
      "Vehicle Controls",
      "Lane Switching Logic",
      "Obstacle Avoidance",
      "Physics & Collisions",
      "Score Tracking",
    ],
    shortDescription:
      "Endless car runner featuring vehicle controls, lane switching, obstacle avoidance, collision detection, game state management, and score tracking with polished UI.",
    overview:
      "HIGHWAY RUSH is a high-speed 3D endless car runner developed in Unity. The game delivers smooth vehicle physics, quick-response lane switching, procedural traffic obstacle generation, and escalating speed difficulty designed to test player reflexes.",
    features: [
      "Custom arcade vehicle controller supporting smooth left/right lane switches and acceleration curve.",
      "Procedural traffic spawning system generating dynamic obstacle patterns across multiple highway lanes.",
      "Accurate Rigidbody collision detection and crash response with visual particle effects.",
      "Score multiplier and speed progression scaling over time as the player survives longer.",
      "Polished HUD displaying real-time speed, distance traveled, high score leaderboard, and instant restart option.",
    ],
    architecture: [
      "Object Pooling pattern for recycling spawned traffic cars and environmental road tiles efficiently.",
      "Game Manager Singleton handling game lifecycle (Start, Pause, Game Over, Restart).",
    ],
    image: "/images/StreetRush.png",
    // videoUrl: "/Videos/StreetRushGameplay.mp4",
    youtubeUrl: "https://youtu.be/jPhL9eH_xsY",
    githubUrl: "https://github.com/aryanbhatt02/STREET-RUSH",
  },
  {
    id: "cube-rush-game",
    title: "CUBE RUSH GAME",
    category: "Cube Runner | Unity C#",
    date: "APRIL 2026",
    tools: [
      "Unity Engine",
      "C#",
      "3D Endless Runner",
      "Collectibles System",
      "Score Progression",
      "Procedural Level Generation",
      "Restart UI",
    ],
    shortDescription:
      "3D endless runner featuring player movement, obstacle navigation, collectible system, restart functionality, and score progression for an engaging player experience.",
    overview:
      "CUBE RUSH GAME is a fast-paced 3D arcade runner where players guide a high-speed cube through an increasingly challenging obstacle course while gathering power-up gems and building high score streaks.",
    features: [
      "Tight 3D player movement controls with responsive sidestepping and obstacle navigation.",
      "Collectible system rewarding players with score bonuses, magnet effects, and invincibility shields.",
      "Dynamic camera follower script providing cinematic motion blur and impact shake on collision.",
      "Interactive Game Over menu with high score tracking, restart buttons, and smooth transition UI.",
    ],
    architecture: [
      "Modular item pickup handlers for extensible collectible behavior.",
      "Optimized level segment recycling script maintaining steady 60+ FPS.",
    ],
    image: "/images/CubeRush.png",
    // videoUrl: "/Videos/CubeRushGameplay.mp4",
    youtubeUrl: "https://youtu.be/5BK4cP-KDWQ",
    githubUrl: "https://github.com/aryanbhatt02/CUBE-RUSH",
  },
  {
    id: "assault-rifle",
    title: "Wing Assault",
    category: "2D Plane Shooter | Unity C#",
    date: "MAY 2026",
    tools: [
      "Unity Engine",
      "C#",
      "2D Physics",
      "Shooting Mechanics",
      "Bullet Spawning Logic",
      "Wave Spawner",
      "Sprite Animations",
      "Unity UI",
    ],
    shortDescription:
      "Developed a 2D plane shooter featuring player movement, shooting mechanics, wave-based enemy spawning, random spawn system, collision detection, sprite-based animations, and responsive gameplay controls.",
    overview:
      "Assault Rifle is a classic 2D retro-style plane shooter created in Unity with C#. The player controls an armed fighter aircraft battling incoming waves of enemy planes in an action-packed vertical aerial dogfight.",
    features: [
      "Responsive 2D plane movement with directional tilt feedback and continuous fire bullet spawning.",
      "Wave-based enemy spawning with randomized entry vectors, firing patterns, and speed variations.",
      "Sprite-based animation controllers for plane engines, explosions, muzzle flashes, and damage states.",
      "Bullet collision detection using 2D Rigidbodies and BoxCollider2D triggers.",
      "Score tracking, health meter, enemy kill counters, and quick restart game over menu.",
    ],
    architecture: [
      "Bullet & Enemy Object Pooling to eliminate allocation overhead during bullet hell sequences.",
      "Modular Weapon Manager allowing customizable fire rates, bullet velocities, and spread patterns.",
    ],
    image: "/images/AssualtRifle.png",
    // videoUrl: "/Videos/WingsAssaultGamePlay.mp4",
    youtubeUrl: "https://youtube.com/shorts/_cL7EuFK4fg?feature=share",
    githubUrl: "https://github.com/aryanbhatt02/WINGS-ASSAULT",
  },
];
