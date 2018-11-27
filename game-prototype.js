let Game = function() {
    this.seeds = [];
    this.current;
    this.vertices = [];
};

Game.prototype.setup = function() {
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 7;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = 2;

    for (let i = d; i < Math.PI * 2 + d; i += increment) {
        let x = Math.cos(i) * 0.925;
        let y = Math.sin(i) * 0.925;
        this.seeds.push({ x: x, y: y });
    }
};

Game.prototype.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.25, 0.5, 0.75, 0.85, 0.95, 1.25]);
    // lerpy = random([0.25, 0.5, 0.75, 0.85, 0.95, 1.25, 2]);
    // lerpy += map(sin(frameCount * 10), -1, 1, 0.5, 1) * 0.1;
    // lerpy += map(sin(frameCount * 10), -1, 1, 0.5, 1) * 0.1;
    // let red = map(lerpy, 0, 1.25, 0, 255);
    // let green = map(lerpy, 0, 1, 0, 155);
    // let blue = map(lerpy, 0, 1.25, 20, 0);
    // blue = map(sin(frameCount), -1, 1, 0, 255);
    // fill(red, green, blue, 55);
    // translate(width / 2, height / 2);
    for (let i = 0; i < 100000; i++) {
        this.vertices.push(this.current.x, this.current.y, 0.0);
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);
    }

};

let heptagon = new Game();

let octagon = new Game();

octagon.setup = function() {
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 8;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;

    for (let i = d; i < Math.PI * 2 + d; i += increment) {
        let x = Math.cos(i) * 0.9125;
        let y = Math.sin(i) * 0.9125;
        this.seeds.push({ x: x, y: y });
    }
};

octagon.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.25, 0.5, 0.75, 0.85, 0.95, 1.25]);
    // lerpy = random([0.25, 0.5, 0.75, 0.85, 0.95, 1.25, 2]);
    // lerpy += map(sin(frameCount * 10), -1, 1, 0.5, 1) * 0.1;
    lerpy += map(sin(frameCount * 10), -1, 1, 0.5, 1) * 0.1;
    // let red = map(lerpy, 0, 1.25, 0, 255);
    // let green = map(lerpy, 0, 1, 0, 155);
    // let blue = map(lerpy, 0, 1.25, 20, 0);
    // blue = map(sin(frameCount), -1, 1, 0, 255);
    // fill(red, green, blue, 55);
    // translate(width / 2, height / 2);
    for (let i = 0; i < 100000; i++) {
        this.vertices.push(this.current.x, this.current.y, 0.0);
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);
    }

};

let spiral = new Game();

spiral.setup = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;

    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i) * i * 0.035;
        let y = Math.sin(i) * i * 0.035;

        this.seeds.push({ x: x, y: y });


    }
};


spiral.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.25, 0.5, 0.75, 0.85, 0.95, 1.25]);
    // lerpy = random([0.25, 0.5, 0.75, 0.85, 0.95, 1.25, 2]);
    // lerpy += map(sin(frameCount * 10), -1, 1, 0.5, 1) * 0.1;
    // lerpy += map(sin(frameCount * 10), -1, 1, 0.5, 1) * 0.1;
    // let red = map(lerpy, 0, 1.25, 0, 255);
    // let green = map(lerpy, 0, 1, 0, 155);
    // let blue = map(lerpy, 0, 1.25, 20, 0);
    // blue = map(sin(frameCount), -1, 1, 0, 255);
    // fill(red, green, blue, 55);
    // translate(width / 2, height / 2);
    for (let i = 0; i < 200000; i++) {

        // let probability = map(this.current.y, 0, 1, 0.1, 1);
        // if (random() < probability) {
        this.vertices.push(this.current.x, this.current.y, 0.0);
        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);
    }

};
let game = spiral;