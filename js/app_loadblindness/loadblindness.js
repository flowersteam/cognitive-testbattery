//p5.js preload images
function preload() {
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
  createCanvas(Pos.canvas_width,Pos.canvas_height);
  Params = new ParameterManager(); 
  Time = new TimeManager();

  img_correct = createImage(size_img, size_img);
//  console.log(round(size_img));
  img_correct.loadPixels();
  make_gabor_correct(img_correct,contrast_img_correct,size_img=size_img,sigma=round(size_img/5));
  
  img_wrong = createImage(size_img, size_img);
  img_wrong.loadPixels();
  make_gabor_wrong(img_wrong,contrast_img_wrong,size_img=size_img,sigma=round(size_img/5));

  create_fixation_answer_button();
  create_answer_button();
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

///////////////////////////////////////////////////////////
function make_gabor_correct(image_correct,contrast=1,size_img = 256,sigma=50,freq=8,theta=90,phase=0){
  let theta_rad = deg2rad(theta);
  let phase_rad = deg2rad(phase);

  let x_1d = make_array(-0.5,0.5,size_img);
  let sigma_norm = sigma/size_img;

  for (let y=0;y<x_1d.length;y++){
    for (let x=0;x<x_1d.length;x++){
      let val_tmp = Math.sin((((x_1d[x]*Math.cos(theta_rad))+(x_1d[y]*Math.sin(theta_rad))) * freq * 2 * Math.PI)+phase_rad)*
                      Math.exp(-(((x_1d[x]**2)+(x_1d[y]**2))/(2* (sigma_norm**2))));
      val_tmp = contrast*val_tmp;
      val_tmp = 255*((val_tmp+1)/2)
      image_correct.set(y,x,[val_tmp,val_tmp,val_tmp,255]);
    }
  }
  image_correct.updatePixels();
}

function make_gabor_wrong(image_wrong,contrast=1,size_img = 256,sigma=50,freq=8,theta=90,phase=0){
  let theta_rad = deg2rad(theta);
  let phase_rad = deg2rad(phase);

  let x_1d = make_array(-0.5,0.5,size_img);
  let sigma_norm = sigma/size_img;

  for (let y=0;y<x_1d.length;y++){
    for (let x=0;x<x_1d.length;x++){
      let val_tmp = Math.sin((((x_1d[x]*Math.cos(theta_rad))+(x_1d[y]*Math.sin(theta_rad))) * freq * 2 * Math.PI)+phase_rad)*
                      Math.exp(-(((x_1d[x]**2)+(x_1d[y]**2))/(2* (sigma_norm**2))));
      val_tmp = contrast*val_tmp;
      val_tmp = 255*((val_tmp+1)/2)
      image_wrong.set(y,x,[val_tmp,val_tmp,val_tmp,255]);
    }
  }
  image_wrong.updatePixels();
}




