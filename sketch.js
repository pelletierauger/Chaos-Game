let looping = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "./frames/sketch";
let maxFrames = 20;
let gl;
let shaderProgram;
let vertices;
let verticesNum = 0;

function setup() {
    socket = io.connect('http://localhost:8080');
    cnvs = createCanvas(windowWidth, windowHeight, WEBGL);
    gl = canvas.getContext('webgl');
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Clear the canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // gl.clearDepth(0.15);

    // Enable the depth test
    gl.enable(gl.DEPTH_TEST);

    // Clear the color buffer bit
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Set the view port
    gl.viewport(0, 0, canvas.width, canvas.height);

    setShaders();

    ctx = cnvs.drawingContext;
    canvasDOM = document.getElementById('defaultCanvas0');
    frameRate(30);
    // // background(200);
    // background(0);
    // fill(255);
    // // blendMode(LIGHTEST);
    // noStroke();
    if (!looping) {
        noLoop();
    }
    current = { x: random(width), y: random(height) };
    // translate(width / 2, height / 2);
    // for (let i = 0; i < seeds.length; i++) {
    //     let p = seeds[i];
    //     // ellipse(p.x, p.y, 5);
    // }
    // fill(255, 55);
}

let lerpy;

function draw() {
    vertices = [];
    lerpy = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
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
    translate(width / 2, height / 2);
    for (let i = 0; i < 100000; i++) {
        verticesNum++;
        vertices.push(current.x, current.y, 0.0);
        newRand = random(seeds);
        while (current == newRand) {
            newRand = random(seeds);
        }

        current.x = lerp(current.x, newRand.x, lerpy);
        current.y = lerp(current.y, newRand.y, lerpy);
    }

    drawVertices();

    if (exporting && frameCount < maxFrames) {
        frameExport();
    }
}

function keyPressed() {
    if (keyCode === 32) {
        if (looping) {
            noLoop();
            looping = false;
        } else {
            loop();
            looping = true;
        }
    }
    if (key == 'p' || key == 'P') {
        frameExport();
    }
    if (key == 'r' || key == 'R') {
        window.location.reload();
    }
    if (key == 'm' || key == 'M') {
        redraw();
    }
}