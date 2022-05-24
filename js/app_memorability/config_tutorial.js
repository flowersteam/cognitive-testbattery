//general title text
let text_title_0 = "INSTRUCTIONS";
let pos_title_x = Pos.center_x;
let pos_title_y = Pos.center_y - Math.round(0.20*Pos.canvas_height);
let size_titletext = Math.round(0.12*Pos.canvas_height);
//let col_titletext = [170,170,60];
let col_titletext = 'white';

//general button
let size_next_w = Math.round(0.12*Pos.canvas_height); //in pixel
let size_next_h = Math.round(0.07*Pos.canvas_height); //in pixel
let x_next = Pos.center_x+Math.round(0.14*Pos.canvas_height)-(size_next_w/2); //in pixel
let y_next = Pos.center_y+Math.round(0.30*Pos.canvas_height)-(size_next_h/2); //in pixel
let size_next_text = Math.round(0.02*Pos.canvas_height);

let size_previous_w = Math.round(0.12*Pos.canvas_height); //in pixel
let size_previous_h = Math.round(0.07*Pos.canvas_height); //in pixel
let x_previous = Pos.center_x-Math.round(0.14*Pos.canvas_height)-(size_previous_w/2); //in pixel
let y_previous = Pos.center_y+Math.round(0.30*Pos.canvas_height)-(size_previous_h/2); //in pixel
let size_previous_text = Math.round(0.02*Pos.canvas_height); //in pixel

let text_font = 'Helvetica';

//scene 0 
let text_tutorial_0_0 = "The goal of this experiment is to measure your memory capacity.";
let text_tutorial_0_1 = "On each trial, you will see a set of photographs one-by-one.";
let text_tutorial_0_2 = "Your task is to remember each photograph and answer whether "; 
let text_tutorial_0_3 = "the photograph is presented twice or not.";
let pos_tutorialtext_x = Pos.center_x;
let pos_tutorialtext_y = Pos.center_y+Math.round(0.04*Pos.canvas_height);;
let size_tutorialtext = Math.round(0.025*Pos.canvas_height);
//let col_tutorialtext = [220,220,255];
let col_tutorialtext = 'white';
let shift_text = Math.round(0.04*Pos.canvas_height);

//scene 1
let flag_disp = false;
let num_demotargnum = 5;

let text_tutorial_1_0 = "Some images will appear twice, but the others just once.";
let text_tutorial_1_1 = "When you notice the image is presented twice,";
let text_tutorial_1_2 = "please press the key [J] as soon as possible.";
let pos_tutorialtext_x1 = Pos.center_x;
//let pos_tutorialtext_y1 = Pos.center_y-Math.round(5*ppd);
let pos_tutorialtext_y1 = Pos.center_y+Math.round(0.08*Pos.canvas_height);
let pos_tutorialimage_y1 = Pos.center_y- Math.round(0.32*Pos.canvas_height);
let size_bubble_x = Math.round(0.38*Pos.canvas_height);
let size_bubble_y = Math.round(0.08*Pos.canvas_height);
let pos_bubble_y = Pos.center_y + Math.round(0.119*Pos.canvas_height);
let pos_bubble_y2 = Pos.center_y + Math.round(0.143*Pos.canvas_height);

let pos_researcher_x = window_availw/3.3;
let pos_researcher_y = 4*window_availh/5;

let text_tutorial_6_1 = "Thank you for your effort. When you are ready,";
let text_tutorial_6_2 = "please click the start button to restart.";


//scene 2
let text_tutorial_2_0 = "On each trial, you will get feedback about if your response is correct.";
let pos_tutorialtext_x2 = Pos.center_x;
let pos_tutorialtext_y2 = Pos.center_y+Math.round(0.08*Pos.canvas_height);
let pos_answer_y2= Pos.center_y - Math.round(0.24*Pos.canvas_height);
let shift_imageposition = Math.round(0.1*Pos.canvas_height);

//scene 3
let text_tutorial_3_0 = "Let's start the practice.";
let size_tutorialtext3 = Math.round(0.04*Pos.canvas_height);
let pos_tutorialtext_x3 = Pos.center_x;
let pos_tutorialtext_y3 = Pos.center_y-Math.round(0.12*Pos.canvas_height);

let size_start_w = Math.round(0.12*Pos.canvas_height); //in pixel
let size_start_h = Math.round(0.07*Pos.canvas_height); //in pixel
let x_start = Pos.center_x- (size_start_w/2); //in pixel
let y_start = Pos.center_y-Math.round(0.10*Pos.canvas_height)+(size_start_h/2); //in pixel
let size_start_text = Math.round(0.02*Pos.canvas_height);

//scene main ready
let text_tutorial_4_0 = "Let's start the main experiment.";
//scene break
let text_tutorial_5_0 = "Break time.";

//tutorial specific dataset.
let fname_target_tutorial = '../img/list_img_target_tutorial.csv';
let fname_filler_tutorial = '../img/list_img_filler_tutorial.csv';
let num_targetlist_tutorial = 7;
let num_fillerlist_tutorial = 6;
let Imgs_targ_tutorial = [];
let Imgs_filler_tutorial = [];
let array_stim_tutorial = [1,2,0,1,1,0,0,2,0,2,0,1,0,1,1,2,2,2,0];
let trial_stimind_tutorial = [1,1,0,2,3,1,2,3,3,2,4,4,5,5,6,5,6,4,6]
let prac_num_rep = 12;
