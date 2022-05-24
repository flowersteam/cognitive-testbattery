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

let fname_bkg = '../img/bkg_finger1.png';
let size_bkg_width_orig = 1440; //original in pix
let size_bkg_height_orig = 1080; //original in pix
let ratio_center = 0.1111; 
let ratio_monitor = 0.706;
Pos = new PositionManager(window_availw,window_availh);
Pos.adjust_to_bkg(size_bkg_width_orig,size_bkg_height_orig,ratio_center);
let img_bkg;
//feedback params
let col_correct = [0,0,128];
let col_wrong = [128,0,0];
let size_feedback = Math.round(4.5*ppd);
let width_feedback = Math.round(1*ppd);
let len_feedback = Math.round(2*ppd);


let flag_practice = true;
let flag_break = true;
let count_break = 0;
let max_break = 1;


let fname_target = '../img/list_img_target2.csv';
let fname_filler = '../img/list_img_filler2.csv';

let keyRes1 = 74; //j
//let keyRes2 = 70; //f

let num_rep = 1; 

//number of lists
let num_stimulus = 120;
let num_targlist = 40;
let num_fillerlist = 40;

//Stimulus condition.
let num_longtarget =  8;
let dict_longtarget = [0,1,2,3,4,5,6,7,8,9,10];
let distance_longtarget = [100,101,102,103,104,105,106,107,108,109];

let num_shorttarget = 32;
let min_shorttarget = 11;
let max_shorttarget = 99;
let distance_shorttarget = [2,3,4,5,2,3,4,5,2,3,4,5,2,3,4,5,2,3,4,5,2,3,4,5,2,3,4,5,2,3,4,5];

let ind_targlist = make_array(0,num_targlist-1,num_targlist); 
let ind_fillerlist = make_array(0,num_fillerlist-1,num_fillerlist); 


let time_stimduration = 1000; //in ms
let time_fixation = 1400; // in millisecond
let time_feedback = 1400; // in millisecond

let col_bkg = 0;

// fixation 
let len_fixation = Math.round(0.5*ppd); // in pix
let col_fixation = [20,20,20]; // in rgb
let thick_fixation = Math.round(0.1*ppd); // in pix

// text 
let col_text = 255;
let size_text = Math.round(0.7*ppd); //in pixel
////

let Imgs_targ = [];
let Imgs_filler = [];
let size_img = 700; 
let size_rescale = Math.round(6.5*ppd); //in pix


let x_ok = -Math.round(0*ppd);
let y_ok = Math.round(4*ppd);
let x_restart = -Math.round(5.5*ppd);; //in pixel
let y_restart = -Math.round(4*ppd);; //in pixel

//end button;
let size_end_w = Math.round(2.5*ppd); //in pixel
let size_end_h = Math.round(1.5*ppd); //in pixel
let x_end = Pos.center_x- (size_end_w/2); //in pixel
let y_end = Pos.center_y+Math.round(2*ppd)-(size_end_h/2); //in pixel
let size_end_text = Math.round(0.5*ppd);

// window size control.
let scale_window = 0.8;

let pos_guide = Math.round(6*ppd); //in pix

function make_array(val_start, val_stop, num_array) {
    let array = [];
    let step = (val_stop - val_start) / (num_array - 1);
    for (let i = 0; i < num_array; i++) {
      array.push(val_start + (step * i));
    }
    return array;
  }

let text_start = "Please click the mouse to start this experiment";
let text_end = "Thank you for joining the experiment.";

let flag_load_end = false;
