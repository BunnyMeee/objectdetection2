function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    }
    
    img = "";
    status1 ="";
    function preload(){
        img = loadImage("Tv.jpg");
    }
    function draw(){
        image(img, 0, 0, 500, 400);

    }
    
    function modelLoaded(){
        console.log("model loaded");
        status1 = true;
        objectDetector.detect(img, gotResult);
    }
    function gotResult(error,results){
        if(error){
            console.log(error);
        }
        console.log(results);
    }