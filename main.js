function setup() {

    video = createCapture(VIDEO);
    video.hide();
    
    canvas = createCanvas(900, 700);
    canvas.position(200, 70);
    
    }
    
    function preload() {

    }

    function draw() {
        background('#00FFFF');
        fill('#fff');
        stroke('#F90093');

        image(video,250, 150, 400, 400);

        rect1 = rect(50,47,50,590);
        rect2 = rect(800,50,50,550);
        rect3 = rect(50,50,750,50);
        rect4 = rect(50,600,750,50);

        circle1 = circle(75,75,75);
        circle2 = circle(825,75,75);
        circle3 = circle(75,625,75);
        circle4 = circle(825,625,75);
    }

    function takeSnapshot() {
        save('your_selfie.png');
    }