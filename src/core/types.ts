// src/core/types.ts

// Type definitions for the game engine

// Represents a point in 2D space
export type Vector2 = {
    x: number;
    y: number;
};

// Represents a color in RGBA format
export type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
};

// Represents a game entity
export interface GameEntity {
    id: string;
    position: Vector2;
    velocity: Vector2;
    color?: Color;
    update(deltaTime: number): void;
    render(): void;
}

// Represents the game state
export interface GameState {
    entities: GameEntity[];
    update(deltaTime: number): void;
    render(): void;
}

// Represents an input event
export interface InputEvent {
    type: string;
    key?: string;
    mousePosition?: Vector2;
}

// Represents a game scene
export interface GameScene {
    preload(): void;
    create(): void;
    update(deltaTime: number): void;
    render(): void;
}

// Represents a simple game loop
export interface GameLoop {
    start(): void;
    stop(): void;
    update(deltaTime: number): void;
}
