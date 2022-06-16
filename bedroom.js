function setup(){
    canvas = createCanvas(300,500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    }
    
    img = "";
    status1 ="";
    function preload(){
        img = loadImage("Bedroom.jpg");
    }
    function draw(){
        image(img, 0, 0, 300, 500);

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