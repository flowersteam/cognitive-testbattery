//// parameters

//////////////////////////Monitor 
// number of pixels per degres:
let viewer_dist = 50;
function get_ppd(viewer_dist, screen_params){
    return (viewer_dist*Math.tan(Math.PI/180)) * screen_params;
}
let window_availw = window.screen.availWidth;
let window_availh = window.screen.availHeight;

let size_screen_cm_w = 34.25; // 15.4 inch 16:9 monitor
let screen_params = window_availw/size_screen_cm_w;
let ppd = get_ppd(viewer_dist, screen_params);
//////////////////////////Monitor 

// Characters:
let researcher_1_path = '../img/researcher/researcher_1.png';
let researcher_2_path = '../img/researcher/researcher_2.png';
let researcher_3_path = '../img/researcher/researcher_3.png';
let bubble_path = '../img/bubble_line.png';
let researcher_1, researcher_2,researcher_3;
let researcher_width = window_availw/4;
let researcher_height = researcher_width;
let bubble_img;

let fname_bkg = '../img/bkg_largewindow.png';
let fname_noise = '../img/noise.png';
let size_bkg_width_orig = 1440; //original in pix
let size_bkg_height_orig = 1080; //original in pix
let ratio_center = 0; 
let ratio_monitor = 0.9296;
Pos = new PositionManager(window_availw,window_availh);
Pos.adjust_to_bkg(size_bkg_width_orig,size_bkg_height_orig,ratio_center);
  

let flag_practice = true;
let flag_break = true;
let count_break = 0;
let max_break = 4;

//let num_rep_main = 5;
let num_rep_main = 5;
let num_rep_practice = 1;
let array_stimcond_main = [5,6,7,8,9]; //Experimental condition.
let array_stimcond_practice = [3,4,5]; //Experimental condition.
let time_stimduration_main = 50; //in ms Green & Bavelier (2006)
let time_stimduration_practice = 1000; //in ms Green & Bavelier (2006)
//let time_stimduration_practice = 0.1000; //in ms Green & Bavelier (2006)
let time_maskduration = 1000; //in ms
//let time_maskduration = 0.1000; //in ms

//object condition
let size_obj = Math.round(0.5*ppd); //in pix. in diameter
let roi_obj = Math.round(7*ppd); //in pix. in diameter.
let Objs = [];

let col_bkg = 0;

// for the mask image
let img;
let img_bkg;
let size_img = [Math.round(ratio_monitor*Pos.size_bkg_y),Math.round(ratio_monitor*Pos.size_bkg_y)];

// fixation 
let len_fixation = Math.round(0.5*ppd); // in pix
let col_fixation = 20; // in rgb
let thick_fixation = Math.round(0.1*ppd); // in pix
let time_fixation = 1000; // in millisecond

// text 
let col_text = 255;
let size_text = Math.round(0.7*ppd); //in pixel

//button
let sel;
let max_answer = 15;
let round_button = "5px";
let size_button_x = "70px";
let size_button_y = "70px";

let x_response = Pos.center_x - Math.round(9*ppd); //in pixel
let y_response = Pos.center_y + Math.round(5*ppd); //in pixel
let x_ok = Pos.center_x + Math.round(1.5*ppd);
let y_ok = Pos.center_y + Math.round(5*ppd);
let x_restart = -Math.round(5.5*ppd); //in pixel
let y_restart = -Math.round(4*ppd); //in pixel

let size_button_w = Math.round(6*ppd);
let size_button_h = Math.round(2*ppd);
let size_slider_w = Math.round(9*ppd);
let size_slider_h = Math.round(2*ppd);
let size_text_button = Math.round(1*ppd);

let x_answer = Pos.center_x; //in pixel
let y_answer = Pos.center_y-Math.round(3*ppd); //in pixel
let col_answer = [164,72,72];
let size_answer = Math.round(4*ppd);
let weight_stroke = 3;

let tick_slider = Math.round(0.8*ppd);
let tick_slider_width = Math.round(0.1*ppd);
let xwidth = 16;
let step_slider = (size_slider_w-2*xwidth)/(max_answer-1);
let array_span = [];
let div_ticks;
let shift_div_ticks = 52;


//end button;
let size_end_w = Math.round(2.5*ppd); //in pixel
let size_end_h = Math.round(1.5*ppd); //in pixel
let x_end = Pos.center_x- (size_end_w/2); //in pixel
let y_end = Pos.center_y+Math.round(2*ppd)-(size_end_h/2); //in pixel
let size_end_text = Math.round(0.5*ppd);

////

let text_start = "Please click the mouse to start this experiment";
let text_end = "Thank you for joining the experiment.";

let bar, success;

