//p5.js preload images
function preload() {
  load_imgs();

  img_bkg = loadImage(fname_bkg);
  
  researcher_1 = loadImage(researcher_1_path);
  researcher_2 = loadImage(researcher_2_path);
  researcher_3 = loadImage(researcher_3_path);
  bubble_img = loadImage(bubble_path);

  gill_font_light = loadFont('../font/gillsansstd/GillSansStd-Light.otf');
  gill_font = loadFont('../font/gillsansstd/GillSansStd.otf');
  console.log('done preload');
}

function load_imgs(){
  for (let i=0; i < num_targlist; ++i) {
    Imgs_targ[i] = loadImage(list_targ[i]);
    //print(stats_targ.get(i, 0))
  }

  for (let i=0; i < num_fillerlist; ++i) {
    Imgs_filler[i] = loadImage(list_filler[i]);
    //print(stats_filler.get(i, 0))
  }

  for (let i=0; i < num_targetlist_tutorial; ++i) {
    Imgs_targ_tutorial[i] = loadImage(list_targ_tutorial[i]);
    //print(stats_targ_tutorial.get(i, 0))
  }

  for (let i=0; i < num_fillerlist_tutorial; ++i) {
    Imgs_filler_tutorial[i] = loadImage(list_filler_tutorial[i]);
    //print(stats_filler.get(i, 0))
  }
  flag_load_end  = true;
}

//p5.js initializing.
function setup() {
  createCanvas(Pos.canvas_width, Pos.canvas_height);

  create_end_button();
  Params = new ParameterManager();
  Time = new TimeManager();
  create_next_button();
  create_previous_button();
  create_start_button();

  console.log('done setup');
}

//p5.js frame animation.
function draw() {
  if (flag_load_end==true){
    //console.log('start draw')
    background(col_bkg); //bkg color
    image(img_bkg,Pos.center_x-(Pos.size_bkg_x/2),0,Pos.size_bkg_x,Pos.size_bkg_y);
    //Main experiment schedule
    Time.show();
  }
}



function loop_imgs(){
  for (let i=0; i < num_targlist; ++i) {
    Imgs_targ[i] = loadImage(stats_targ.get(i, 0));
    print(stats_targ.get(i, 0))
  }

  for (let i=0; i < num_fillerlist; ++i) {
    Imgs_filler[i] = loadImage(stats_filler.get(i, 0));
    print(stats_filler.get(i, 0))
  }
}


function keyPressed(){
  if(keyCode===32){
    fullscreen(true);
  }
}


function getRandomInt(min,max) {
  return (Math.floor(Math.random() * Math.floor(max-min)))+min;
}
