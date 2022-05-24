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
let text_tutorial_0_0 = "The goal of this experiment is to measure the ability ";
let text_tutorial_0_1 = "to switch your attention. On each trial, you will see a digit ";
let text_tutorial_0_2 = "from the set {1– 4, 6–9} on the cue background of red or blue."; 
let text_tutorial_0_3 = "Your tasks will change with the cue background as follows.";
let pos_tutorialtext_x = Pos.center_x;
let pos_tutorialtext_y = Pos.center_y+Math.round(0.04*Pos.canvas_height);
let size_tutorialtext = Math.round(0.025*Pos.canvas_height);
//let col_tutorialtext = [220,220,255];
let col_tutorialtext = 'white';
let shift_text = Math.round(0.04*Pos.canvas_height);

//scene 1
let flag_disp = false;
let num_demotargnum = 5;

let text_tutorial_1_0 = "When the cue is the blue diamond-shaped background,";
let text_tutorial_1_1 = "you have to answer whether the target digit is odd or even";
let text_tutorial_1_2 = "by using the key [F] or [J], respectively."; 
let pos_tutorialtext_x1 = Pos.center_x;
let pos_tutorialtext_y1 = Pos.center_y+Math.round(0.08*Pos.canvas_height);
let pos_image_y1 = Pos.center_y- Math.round(0.32*Pos.canvas_height);
let pos_image_2_y1 = Pos.center_y- Math.round(0.02*Pos.canvas_height);
let y_instruct_text_tuto = pos_image_2_y1 + 2*(size_instruct_txt);

//scene 2
let text_tutorial_2_0 = "When the cue is the red square background, you have";
let text_tutorial_2_1 = "to answer whether the target digit is lower or higher than 5";
let text_tutorial_2_2 = "by using the key [F] or [J], respectively."; 
let pos_tutorialtext_x2 = Pos.center_x;
let pos_tutorialtext_y2 = Pos.center_y+Math.round(0.08*Pos.canvas_height);

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


let size_bubble_x = Math.round(0.38*Pos.canvas_height);
let size_bubble_y = Math.round(0.08*Pos.canvas_height);
let pos_bubble_y = Pos.center_y + Math.round(0.119*Pos.canvas_height);
let pos_bubble_y2 = Pos.center_y + Math.round(0.143*Pos.canvas_height);

let pos_researcher_x = window_availw/3.8;
let pos_researcher_y = 3.5*window_availh/5;

let text_tutorial_6_1 = "Thank you for your effort. When you are ready,";
let text_tutorial_6_2 = "please click the start button to restart.";