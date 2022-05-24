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

let fname_success = '../img/icons/success.png';
let fname_bkg = '../img/bkg_largewindow.png';
let fname_obj = '../img/obj_mot.png';
let size_bkg_width_orig = 1440; //original in pix
let size_bkg_height_orig = 1080; //original in pix
let ratio_center =  0; 
let ratio_monitor = 0.706;
Pos = new PositionManager(window_availw,window_availh);
Pos.adjust_to_bkg(size_bkg_width_orig,size_bkg_height_orig,ratio_center);
let img_bkg;


let flag_practice = true;
let flag_break = true;
let count_break = 0;
let max_break = 3;

let num_rep_main = 5; 
let num_rep_practice = 1;

let num_target_main = [5]; //Experimental condition.
let num_target_practice = [5]; //Experimental condition.

let array_stimcond_main = [1,4,8]; 
let array_stimcond_tutorial = [1,4]; 
let velocity_dot = (1*ppd)/60; //in pix/frame 
let direction_dot_mini = 5 //in degrees
let direction_dot_range = 350 //in degrees
let num_totaldot = 10;
let duration_target = 1000; //in ms
let time_totalstimduration = 8000; //in ms
let duration_stop = 500; //in ms
let size_obj = Math.round(1.2*ppd); //in pix. in diameter

let roi_obj = [Math.round(12*ppd),Math.round(12*ppd)]; //in pix. in diameter.
let col_target = [128,0,0,128];
let col_target2 = [0,0,0,0];


let time_startblank = 300;
let time_fixation = 500; // in millisecond
let col_bkg = 0;

// fixation 
let len_fixation = Math.round(0.5*ppd); // in pix
let col_fixation = 20; // in rgb
let thick_fixation = Math.round(0.1*ppd); // in pix


// text 
let col_text = 255;
let size_text = Math.round(0.7*ppd); //in pixel
let size_text_button = 1*ppd; //in pix
////

let shift_position = Math.round(3.0*ppd); //in pix

let Button = [];

let x_ok = -Math.round(0*ppd);
let y_ok = Math.round(4*ppd);
let x_restart = -Math.round(5.5*ppd);; //in pixel
let y_restart = -Math.round(4*ppd);; //in pixel

let col_check = [128,0,0,128];

//end button;
let size_end_w = Math.round(2.5*ppd); //in pixel
let size_end_h = Math.round(1.5*ppd); //in pixel
let x_end = Pos.center_x- (size_end_w/2); //in pixel
let y_end = Pos.center_y+Math.round(2*ppd)-(size_end_h/2); //in pixel
let size_end_text = Math.round(0.5*ppd);


let text_start = "Please click the mouse to start this experiment";
let text_end = "Thank you for joining the experiment.";

let bar, success;