//p5.js preload images
function preload() {
  img = loadImage(fname_noise);
  img_bkg = loadImage(fname_bkg);
  researcher_1 = loadImage(researcher_1_path);
  researcher_2 = loadImage(researcher_2_path);
  researcher_3 = loadImage(researcher_3_path);
  bubble_img = loadImage(bubble_path);

  gill_font_light = loadFont('../font/gillsansstd/GillSansStd-Light.otf');
  gill_font = loadFont('../font/gillsansstd/GillSansStd.otf');
}

//p5.js initializing.
function setup() {
  //createCanvas(CANVAS_WIDTH,CANVAS_HEIGHT);
  createCanvas(Pos.canvas_width,Pos.canvas_height);

  //make backward mask manually
  /*
  img = createImage(size_img[0], size_img[1]);
  img.loadPixels();
  make_whitenoise(img,size_img,min_intensity=0,max_intensity=255);
   */
  Params = new ParameterManager();
  Time = new TimeManager();
  create_answer_button();
  create_selector_input();
  create_end_button();
  
  create_next_button();
  create_previous_button();
  create_start_button();
}

//p5.js frame animation.
function draw() {
  background(col_bkg); //bkgground color
  //game body
  image(img_bkg,Pos.center_x-(Pos.size_bkg_x/2),0,Pos.size_bkg_x,Pos.size_bkg_y);

  //Main experiment schedule
  Time.show();  
}

///Settings for screen mode and buttons. 

function windowResized() {
  resizeCanvas(Pos.canvas_width,Pos.canvas_height);
}

function keyPressed(){
  if(keyCode===32){
    fullscreen(true);
  }
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//To do:complete this function and replace this with image loading.

function make_whitenoise(image_noise,size_img,min_intensity,max_intensity){
  let noise_1d = make_array(min_intensity,max_intensity,size_img[0]);
  for (let y=0;y<size_img[1]-1;y++){
    noise_1d = noise_1d.concat(make_array(min_intensity,max_intensity,size_img[0]));
  }
  noise_1d= shuffle(noise_1d);
  let count = 0;
  for (let y=0;y<size_img[1];y++){
    for (let x=0;x<size_img[0];x++){
      image_noise.set(y,x,[noise_1d[count],noise_1d[count],noise_1d[count],255]);
      count++
    }
  }
  image_noise.updatePixels();
}