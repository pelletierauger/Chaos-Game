let Game = function() {
    this.seeds = [];
    this.current;
    this.vertices = [];
};

Game.prototype.initialize = function() {
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

heptagon.updatez = function() {
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
        if (lerpy !== 0.25) {
            if (i % 30 == 0) {
                this.current.x = lerp(this.current.x, newRand.x, lerpy);
                this.current.y = lerp(this.current.y, newRand.y, lerpy);
            }
        } else {
            this.current.x = lerp(this.current.x, newRand.x, lerpy);
            this.current.y = lerp(this.current.y, newRand.y, lerpy);
        }
    }

};

let octagon = new Game();

octagon.initialize = function() {
    console.log("wowee!");
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 8;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;

    // for (let i = d; i < Math.PI * 2 + d; i += increment) {
    for (let i = 0; i < Math.PI * 2; i += increment) {
        let x = Math.cos(i) * 0.79125;
        let y = Math.sin(i) * 0.79125;
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

spiral.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;
    d = 0;
    // d = Math.PI * 2;

    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i * 0.5) * i * 0.0335;
        let y = Math.sin(i * 0.5) * i * 0.0335;

        // this.seeds.push({ x: x - 1, y: y + 2 });
        this.seeds.push({ x: x - 0, y: y + 0, i: i });
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
    lerpy = random([0.75, 0.85, 0.95, 1.25]);
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

        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);

        let absX = abs(this.current.x);
        let absY = abs(this.current.y);
        absX *= absX;
        absY *= absY;
        let hyp = Math.sqrt(absX + absY);
        let probability = map(hyp, 0, 1, 0, 1);
        // if (newRand.i < 15) {
        //     probability *= 0.25;
        // }
        if (Math.random() < probability) {
            if (lerpy == 0.95) {
                if (i % 10 == 0) {
                    // if (newRand.i > 15) {
                    this.vertices.push(this.current.x, this.current.y, 0.0);
                    // }

                }
            } else {
                this.vertices.push(this.current.x, this.current.y, 0.0);
            }
        }


    }

};

let spiral2 = new Game();

spiral2.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 32 * 2;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;

    for (let i = d; i < numOfPoints; i += 0.25) {
        let x = Math.cos(i) * i * 0.035;
        let y = Math.sin(i) * i * 0.035;

        this.seeds.push({ x: x, y: y });


    }
};

spiral2.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.85, 0.95, 1.25]);
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

//---------------------------------------------------------------------------------//

let novemberNight = new Game();

novemberNight.initialize = function() {
    console.log("wowee!");
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 5;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 10;

    // for (let i = d; i < Math.PI * 2 + d; i += increment) {
    for (let i = d; i < Math.PI * 2 + d; i += increment) {
        let x = Math.cos(i) * 0.789125;
        let y = Math.sin(i) * 0.789125;
        this.seeds.push({ x: x, y: y - 0.06 });
    }
};

novemberNight.update = function() {
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


//---------------------------------------------------------------------------------//

let novemberNight2 = new Game();

novemberNight2.initialize = function() {
    console.log("wowee!");
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 8;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;

    // for (let i = d; i < Math.PI * 2 + d; i += increment) {
    for (let i = d; i < Math.PI * 2 + d; i += increment) {
        let x = Math.cos(i) * 2.75;
        let y = Math.sin(i) * 2.75;
        this.seeds.push({ x: x, y: y - 2.2 });
    }
};

novemberNight2.update = function() {
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

//---------------------------------------------------------------------------------//

let novemberNight3 = new Game();

novemberNight3.initialize = function() {
    console.log("wowee!");
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 5;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 10;

    // for (let i = d; i < Math.PI * 2 + d; i += increment) {
    for (let i = d; i < Math.PI * 2 + d; i += increment) {
        let x = Math.cos(i) * 0.75;
        let y = Math.sin(i) * 0.75;
        this.seeds.push({ x: x, y: y });
    }
};

novemberNight3.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1.5);
    let newRand;
    // lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    // lerpy = random([0.5, 0]);
    // lerpy = random([0.25, 0.5, 0.75, 0.85, 0.95, 1.25, 2]);
    // lerpy += map(sin(frameCount * 10), -1, 1, 0.5, 1) * 0.1;
    // lerpy += map(sin(frameCount * 100), -1, 1, 0.5, 1) * 1;
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

//---------------------------------------------------------------------------------//

let novemberNight4 = new Game();

novemberNight4.initialize = function() {
    console.log("wowee!");
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 3;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 2;

    // for (let i = d; i < Math.PI * 2 + d; i += increment) {
    for (let i = d; i < Math.PI * 2 + d; i += increment) {
        let x = Math.cos(i) * 2.1275 * 1.25;
        let y = Math.sin(i) * 2.1275;
        this.seeds.push({ x: x, y: y - 1.25 });
    }
};

novemberNight4.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.5;
    // let lerpx = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    // lerpy = random([0.5, 0]);
    // lerpy = random([0.25, 1.95]);
    // lerpy += map(sin(frameCount * 10), -1, 1, 0.5, 1) * 0.1;
    // lerpy += map(sin(frameCount * 100), -1, 1, 0.5, 1) * 1;
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
        let t = frameCount * 0.01;
        let x = cos(t) * 0.1;
        let y = sin(t) * 0.1;
        this.current.x = lerp(this.current.x, newRand.x, lerpy + x);
        this.current.y = lerp(this.current.y, newRand.y, lerpy + y);
    }

};

//---------------------------------------------------------------------------------//

let spiral3 = new Game();

spiral3.initialize = function(a) {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 3500;
    // numOfPoints = 5;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;

    for (let i = d; i < numOfPoints; i += 0.25) {
        let x = Math.cos(a * i) * i * 0.0005;
        let y = Math.sin(a * i) * i * 0.0005;

        this.seeds.push({ x: x, y: y });


    }
};

spiral3.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.99;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 2);
    // lerpy = 0.9;
    // lerpy = random([0.85, 0.95, 1.25]);
    // lerpy = random([0.25, 0.5, 0.75, 0.85, 0.95, 1.25, 2]);
    // lerpy += map(sin(frameCount * 10), -1, 1, 0.5, 1) * 0.1;
    // lerpy += map(sin(frameCount * 0.01), -1, 1, 0.5, 2) * 0.1;
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

//---------------------------------------------------------------------------------//

let novemberNight5 = new Game();

novemberNight5.initialize = function() {
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 5;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 10;

    // for (let i = d; i < Math.PI * 2 + d; i += increment) {
    for (let i = d; i < Math.PI * 2 + d; i += increment) {
        let x = Math.cos(i) * 0.789125;
        let y = Math.sin(i) * 0.789125;
        this.seeds.push({ x: x, y: y - 0.06 });
    }
};

novemberNight5.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.25, 0.5, 0.75, 0.85, 0.95, 1.25, 1.5, 2]);
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

//---------------------------------------------------------------------------------//


let spiral4 = new Game();

spiral4.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;

    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i) * i * 0.35;
        let y = Math.sin(i) * i * 0.35;

        this.seeds.push({ x: x - 1, y: y + 2 });
        // this.seeds.push({ x: x - 0, y: y + 0 });


    }
};


spiral4.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.75, 0.85, 0.95, 1.25]);
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

let smoothSpiral = new Game();

smoothSpiral.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;
    d = 0;
    // d = Math.PI * 2;

    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i * 1) * i * 0.0335;
        let y = Math.sin(i * 1) * i * 0.0335;

        // this.seeds.push({ x: x - 1, y: y + 2 });
        this.seeds.push({ x: x - 0, y: y + 0, i: i });
    }
};


smoothSpiral.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.75, 0.85, 0.95, 1.25]);
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

        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);

        let absX = abs(this.current.x);
        let absY = abs(this.current.y);
        absX *= absX;
        absY *= absY;
        let hyp = Math.sqrt(absX + absY);
        let probability = map(hyp, 0, 1, 0, 1);
        // if (newRand.i < 15) {
        //     probability *= 0.25;
        // }
        if (Math.random() < probability) {
            if (lerpy == 0.95) {
                if (i % 5 == 0) {
                    // if (newRand.i > 15) {
                    this.vertices.push(this.current.x, this.current.y, 0.0);
                    // }

                }
            } else {
                this.vertices.push(this.current.x, this.current.y, 0.0);
            }
        }


    }

};


let smoothSpiral2 = new Game();

smoothSpiral2.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    // numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;
    d = 0;
    // d = Math.PI * 2;

    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i * 1) * i;
        let y = Math.sin(i * 1) * i;

        x *= 0.035;
        y *= 0.035;
        // this.seeds.push({ x: x - 1, y: y + 2 });
        // this.seeds.push({ x: x - 0, y: y + 0, i: i });
        this.seeds.push({ x: x, y: y, i: i });
    }
};


smoothSpiral2.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.75, 0.85, 0.95, 1.25]);
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

        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);

        let absX = abs(this.current.x);
        let absY = abs(this.current.y);
        absX *= absX;
        absY *= absY;
        let hyp = Math.sqrt(absX + absY);
        let probability = map(hyp, 0, 1, 0, 1);
        // if (newRand.i < 15) {
        //     probability *= 0.25;
        // }
        if (Math.random() < probability) {
            if (lerpy == 0.95) {
                if (i % 3 == 0) {
                    // if (newRand.i > 15) {
                    this.vertices.push(this.current.x, this.current.y, 0.0);
                    // }

                }
            } else {
                this.vertices.push(this.current.x, this.current.y, 0.0);
            }
        }


    }

};

//----------------------------------------------------------------------------------------------//

let smoothSpiral3 = new Game();

smoothSpiral3.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 150;
    // numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;
    d = 0;
    // d = Math.PI * 2;

    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i * 10) * i;
        let y = Math.sin(i * 10) * i;

        x *= 0.005;
        y *= 0.005;
        // this.seeds.push({ x: x - 1, y: y + 2 });
        // this.seeds.push({ x: x - 0, y: y + 0, i: i });
        this.seeds.push({ x: x, y: y, i: i });
    }
};


smoothSpiral3.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.75, 0.85, 0.95, 1.25]);
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

        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);

        let absX = abs(this.current.x);
        let absY = abs(this.current.y);
        absX *= absX;
        absY *= absY;
        let hyp = Math.sqrt(absX + absY);
        let probability = map(hyp, 0, 4, 0, 1);
        // if (newRand.i < 15) {
        //     probability *= 0.25;
        // }
        if (Math.random() < probability) {
            if (lerpy == 0.95) {
                if (i % 6 == 0) {
                    // if (newRand.i > 15) {
                    this.vertices.push(this.current.x, this.current.y, 0.0);
                    // }

                }
            } else {
                this.vertices.push(this.current.x, this.current.y, 0.0);
            }
        }


    }

};



//----------------------------------------------------------------------------------------------//

let smoothSpiral4 = new Game();

smoothSpiral4.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 350;
    // numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;
    d = 0;
    // d = Math.PI * 2;

    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i * 0.1) * i;
        let y = Math.sin(i * 0.1) * i;

        x *= 0.015;
        y *= 0.015;
        x += 2;
        // this.seeds.push({ x: x - 1, y: y + 2 });
        // this.seeds.push({ x: x - 0, y: y + 0, i: i });
        this.seeds.push({ x: x, y: y, i: i });
    }
};


smoothSpiral4.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.75, 0.85, 0.95, 1.25]);
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

        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);

        let absX = abs(this.current.x - 2);
        let absY = abs(this.current.y);
        absX *= absX;
        absY *= absY;
        let hyp = Math.sqrt(absX + absY);
        let probability = map(hyp, 0, 2, 0, 1);
        // if (newRand.i < 15) {
        //     probability *= 0.25;
        // }
        if (Math.random() < probability) {
            if (lerpy == 0.95) {
                if (i % 1 == 0) {
                    // if (newRand.i > 15) {
                    this.vertices.push(this.current.x, this.current.y, 0.0);
                    // }

                }
            } else {
                this.vertices.push(this.current.x, this.current.y, 0.0);
            }
        }


    }

};



//----------------------------------------------------------------------------------------------//

let smoothSpiral5 = new Game();

smoothSpiral5.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let numOfPoints = 50;
    // numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;
    d = 0;
    // d = Math.PI * 2;

    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i * 0.5) * i;
        let y = Math.sin(i * 0.5) * i;

        x *= 0.15;
        y *= 0.15;
        // x += 2;
        // this.seeds.push({ x: x - 1, y: y + 2 });
        // this.seeds.push({ x: x - 0, y: y + 0, i: i });
        this.seeds.push({ x: x, y: y, i: i });
    }
};


smoothSpiral5.update = function() {
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.75, 0.85, 0.95, 1.25]);
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

        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);

        let absX = abs(this.current.x - 0);
        let absY = abs(this.current.y);
        absX *= absX;
        absY *= absY;
        let hyp = Math.sqrt(absX + absY);
        let probability = map(hyp, 0, 2, 0, 1);
        // if (newRand.i < 15) {
        //     probability *= 0.25;
        // }
        if (Math.random() < probability) {
            if (lerpy == 0.95) {
                if (i % 2 == 0) {
                    // if (newRand.i > 15) {
                    this.vertices.push(this.current.x, this.current.y, 0.0);
                    // }

                }
            } else {
                this.vertices.push(this.current.x, this.current.y, 0.0);
            }
        }


    }

};



//----------------------------------------------------------------------------------------------//

let smoothSpiral6 = new Game();

smoothSpiral6.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let scalar = (Math.random() < 0.5) ? 0.25 : 0.05;
    if (frameCount > 1200) {
        scalar = 0.05;
    }
    let numOfPoints = 250;

    numOfPoints = (scalar == 0.25) ? 150 : 250;
    // numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;
    d = 0;
    // d = Math.PI * 2;



    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i * scalar) * i;
        let y = Math.sin(i * scalar) * i;

        x *= 0.015;
        y *= 0.015;
        // x += 2;
        // this.seeds.push({ x: x - 1, y: y + 2 });
        // this.seeds.push({ x: x - 0, y: y + 0, i: i });
        this.seeds.push({ x: x, y: y, i: i });
    }
};


smoothSpiral6.update = function() {
    this.initialize();
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.75, 0.85, 0.95, 1.25, 2]);
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

        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);

        let absX = abs(this.current.x - 0);
        let absY = abs(this.current.y);
        absX *= absX;
        absY *= absY;
        let hyp = Math.sqrt(absX + absY);
        let probability = map(hyp, 0, 2, 0, 1);
        // if (newRand.i < 15) {
        //     probability *= 0.25;
        // }
        if (Math.random() < probability) {
            if (lerpy == 0.95) {
                if (i % 2 == 0) {
                    // if (newRand.i > 15) {
                    this.vertices.push(this.current.x, this.current.y, 0.0);
                    // }

                }
            } else {
                this.vertices.push(this.current.x, this.current.y, 0.0);
            }
        }


    }

};



let smoothSpiral7 = new Game();

smoothSpiral7.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let scalar = (Math.random() < 0.5) ? 0.25 : 0.05;
    scalar = 0.25;
    if (frameCount > 1200) {
        scalar = 0.05;
    }
    let numOfPoints = 250;

    numOfPoints = (scalar == 0.25) ? 74 : 350;
    // numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;
    d = 0;
    // d = Math.PI * 2;



    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i * scalar) * i;
        let y = Math.sin(i * scalar) * i;

        x *= 0.019;
        y *= 0.019;
        // x += 2;
        // this.seeds.push({ x: x - 1, y: y + 2 });
        // this.seeds.push({ x: x - 0, y: y + 0, i: i });
        this.seeds.push({ x: x, y: y, i: i });
    }
};


smoothSpiral7.update = function() {
    this.initialize();
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.75, 0.85, 0.95, 1.25, 2, 3]);
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

        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);

        let absX = abs(this.current.x - 0);
        let absY = abs(this.current.y);
        absX *= absX;
        absY *= absY;
        let hyp = Math.sqrt(absX + absY);
        let probability = map(hyp, 0, 2, 0, 1);
        // if (newRand.i < 15) {
        //     probability *= 0.25;
        // }
        if (Math.random() < probability) {
            if (lerpy == 0.95) {
                if (i % 30 == 0) {
                    // if (newRand.i > 15) {
                    this.vertices.push(this.current.x, this.current.y, 0.0);
                    // }

                }
            } else {
                this.vertices.push(this.current.x, this.current.y, 0.0);
            }
        }


    }

};


let smoothSpiral8 = new Game();

smoothSpiral8.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    this.scalar = (Math.random() < 0.5) ? 0.5 : 0.025;
    // scalar = 0.025;
    if (frameCount > 1200) {
        this.scalar = 0.05;
    }
    let numOfPoints = 250;

    numOfPoints = (this.scalar == 0.5) ? 24 : 250;
    // numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;
    d = 0;
    // d = Math.PI * 2;



    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i * this.scalar) * i;
        let y = Math.sin(i * this.scalar) * i;

        x *= 0.019;
        y *= 0.019;

        if (this.scalar == 0.5) {
            x *= 1.45;
            y *= 1.45;
        }


        // x += 2;
        // this.seeds.push({ x: x - 1, y: y + 2 });
        // this.seeds.push({ x: x - 0, y: y + 0, i: i });
        this.seeds.push({ x: x, y: y, i: i });
    }
};


smoothSpiral8.update = function() {
    this.initialize();
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.75;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.75, 0.85, 0.95, 1.25, 2, 3]);
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

        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);

        let absX = abs(this.current.x - 0);
        let absY = abs(this.current.y);
        absX *= absX;
        absY *= absY;
        let hyp = Math.sqrt(absX + absY);
        let probability = map(hyp, 0, 2, 0, 1);
        // if (newRand.i < 15) {
        //     probability *= 0.25;
        // }
        let prob = (this.scalar == 0.5) ? 3 : 30;

        if (this.scalar == 0.5) {
            probability *= 0.025;
        }
        if (Math.random() < probability) {
            if (lerpy == 0.95) {
                if (i % prob == 0) {
                    // if (newRand.i > 15) {
                    this.vertices.push(this.current.x, this.current.y, 0.0);
                    // }

                }
            } else {
                this.vertices.push(this.current.x, this.current.y, 0.0);
            }
        }


    }

};




let smoothSpiral9 = new Game();

smoothSpiral9.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let scalar = (Math.random() < 0.5) ? 0.25 : 0.05;
    scalar = 0.5;
    // if (frameCount > 1200) {
    //     scalar = 0.05;
    // }
    let numOfPoints = 250;

    // numOfPoints = (scalar == 0.25) ? 74 : 350;
    // numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;
    d = 0;
    // d = Math.PI * 2;



    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos(i * scalar) * i;
        let y = Math.sin(i * scalar) * Math.sin(i * scalar) * i;

        x *= 0.006;
        y *= 0.019;
        y -= 0.9;
        // this.seeds.push({ x: x - 1, y: y + 2 });
        // this.seeds.push({ x: x - 0, y: y + 0, i: i });
        this.seeds.push({ x: x, y: y, i: i });
    }
};


smoothSpiral9.update = function() {
    this.initialize();
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.5;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    lerpy = random([0.75, 0.85, 0.95]);
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

        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);

        let absX = abs(this.current.x - 0);
        let absY = abs(this.current.y + 1);
        absX *= absX;
        absY *= absY;
        let hyp = Math.sqrt(absX + absY);
        let probability = map(hyp, 0, 2, 0, 1);
        // if (newRand.i < 15) {
        //     probability *= 0.25;
        // }
        if (Math.random() < probability) {
            // if (lerpy == 0.95) {
            //     // if (i % 30 == 0) {
            //     // if (newRand.i > 15) {
            //     this.vertices.push(this.current.x, this.current.y, 0.0);
            //     // }

            //     // }
            // } else {
            this.vertices.push(this.current.x, this.current.y, 0.0);
            // }
        }


    }

};





let smoothSpiral10 = new Game();

smoothSpiral10.initialize = function() {
    this.seeds = [];
    this.current = { x: random(width), y: random(height) };
    let scalar = (Math.random() < 0.5) ? 0.25 : 0.05;
    scalar = 70 + frameCount * 0.001;
    // if (frameCount > 1200) {
    //     scalar = 0.05;
    // }
    let numOfPoints = 12;

    // numOfPoints = (scalar == 0.25) ? 74 : 350;
    // numOfPoints = 62;

    let increment = Math.PI * 2 / numOfPoints;

    let d = Math.PI * 2 / 6.75;
    d = Math.PI / 4;
    d = Math.PI / 8;
    d = 0;
    // d = Math.PI * 2;



    let f = frameCount * 0.001;
    this.xOffset = 4.5;
    for (let i = d; i < numOfPoints; i += 1) {
        let x = Math.cos((i + f) * scalar) * i;
        let y = Math.sin((i + f) * scalar) * i;

        x *= 0.018;
        y *= 0.018;
        // x += this.xOffset;
        // y -= 0.9;
        // this.seeds.push({ x: x - 1, y: y + 2 });
        // this.seeds.push({ x: x - 0, y: y + 0, i: i });
        this.seeds.push({ x: x, y: y, i: i });
    }
};


smoothSpiral10.update = function() {
    this.initialize();
    gl.clear(gl.COLOR_BUFFER_BIT);
    this.vertices = [];
    let lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    let newRand;
    lerpy = 0.5;
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.75);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 0.55);
    // lerpy = map(sin(frameCount * 0.1), -1, 1, 0.55, 0.65);
    // lerpy = map(sin(frameCount * 10), -1, 1, 0.5, 1);
    // lerpy = 0.9;
    // lerpy = random([0.75, 0.85, 0.95]);
    lerpy = random([0.9]);
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

        // }
        newRand = random(this.seeds);
        while (current == newRand) {
            newRand = random(this.seeds);
        }

        this.current.x = lerp(this.current.x, newRand.x, lerpy);
        this.current.y = lerp(this.current.y, newRand.y, lerpy);

        let absX = abs(this.current.x - this.xOffset);
        let absY = abs(this.current.y + 0);
        absX *= absX;
        absY *= absY;
        let hyp = Math.sqrt(absX + absY);
        // let probability = map(hyp, 0, 4, 0, 0.25);
        // if (newRand.i < 15) {
        //     probability *= 0.25;
        // }
        // if (Math.random() < probability) {
        this.vertices.push(this.current.x, this.current.y, 0.0);

        // if (lerpy == 0.95) {
        //     // if (i % 3 == 0) {
        //     //     // if (newRand.i > 15) {
        //     this.vertices.push(this.current.x, this.current.y, 0.0);
        //     // }
        //     //     // }
        // } else {
        //     this.vertices.push(this.current.x, this.current.y, 0.0);
        // }
        // }


    }

};


let game = smoothSpiral10;