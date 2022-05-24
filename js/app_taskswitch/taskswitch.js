//p5.js preload images
function preload() {
  img_bkg = loadImage(fname_bkg);
  img_task1 = loadImage(fname_task1);
  img_task2 = loadImage(fname_task2);
  img_instruct1 = loadImage(fname_instruct1);
  img_instruct2 = loadImage(fname_instruct2);
  researcher_1 = loadImage(researcher_1_path);
  researcher_2 = loadImage(researcher_2_path);
  researcher_3 = loadImage(researcher_3_path);
  bubble_img = loadImage(bubble_path);
  success = loadImage(fname_success);
}

//p5.js initializing.
function setup() {
  createCanvas(Pos.canvas_width,Pos.canvas_height);

  img_task1.resize(size_obj,size_obj);
  img_task2.resize(size_obj,size_obj);
  img_instruct1.resize(size_instruct_x,size_instruct_y);
  img_instruct2.resize(size_instruct_x,size_instruct_y);
  
  
  Params = new ParameterManager();
  Time = new TimeManager();
  
  create_end_button();
  create_next_button();
  create_previous_button();
  create_start_button();
}

//p5.js frame animation.
function draw() {
  background(col_bkg); //bkg color
  image(img_bkg,Pos.center_x-(Pos.size_bkg_x/2),0,Pos.size_bkg_x,Pos.size_bkg_y);
  //Main experiment schedule
  Time.show();
}

function keyPressed(){
  if(keyCode===32){
    fullscreen(true);
  }
}



