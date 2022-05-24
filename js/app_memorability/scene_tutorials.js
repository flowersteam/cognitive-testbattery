
// scene 6
function scene_tutorial1(){
    draw_character(researcher_2, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);
    draw_background_bubble(Pos.center_x, pos_bubble_y2,size_bubble_x,size_bubble_y);

    //Title
    push();
    fill(col_titletext);
    textSize(size_titletext);
    textAlign(CENTER);
    textFont(text_font);
    text( text_title_0, pos_title_x, pos_title_y);
    pop();

    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext);
    textAlign(CENTER);
    textFont(text_font);
    text( text_tutorial_0_0, pos_tutorialtext_x, pos_tutorialtext_y-2*shift_text);
    text( text_tutorial_0_1, pos_tutorialtext_x, pos_tutorialtext_y-shift_text);
    text( text_tutorial_0_2, pos_tutorialtext_x, pos_tutorialtext_y);
    text( text_tutorial_0_3, pos_tutorialtext_x, pos_tutorialtext_y+shift_text);
    pop();
    //button
    button_next.mousePressed(()=>{
        button_previous.show();
        Time.update_tutorial_next();    
        });
}

function create_next_button(){
    button_next = createButton('Next');
    button_next.size(size_next_w,size_next_h);
    button_next.style('font-size', size_next_text + 'px');
    button_next.position(x_next, y_next);
    button_next.hide();
}

function create_previous_button(){
    button_previous = createButton('Previous');
    button_previous.size(size_previous_w,size_previous_h);
    button_previous.style('font-size', size_previous_text + 'px');
    button_previous.position(x_previous, y_previous);
    button_previous.hide();
}


// scene 7
function scene_tutorial2(){
    //image
    demo_img0();
    draw_character(researcher_3, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);
    draw_background_bubble(Pos.center_x-3*shift_text, pos_bubble_y+3*shift_text,size_bubble_x,size_bubble_y);

    //text
    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext);
    textAlign(CENTER);
    textFont(text_font);
    text( text_tutorial_1_0, pos_tutorialtext_x1, pos_tutorialtext_y1+shift_text);
    text( text_tutorial_1_1, pos_tutorialtext_x1, pos_tutorialtext_y1+2*shift_text);
    text( text_tutorial_1_2, pos_tutorialtext_x1, pos_tutorialtext_y1+3*shift_text);
    pop();

    //buttons
    button_next.mousePressed(()=>{
        Time.update_tutorial_next();
        });
    button_previous.mousePressed(()=>{
        button_previous.hide();
        Time.update_tutorial_previous();    
        });
}

function demo_img0(){
    push();
    Imgs_targ_tutorial[0].resize(size_rescale, size_rescale);
    image(Imgs_targ_tutorial[0],(Pos.center_x)-(size_rescale/2),(Pos.center_y)-(size_rescale/2)-shift_imageposition);
    pop();
}

// scene 8
function scene_tutorial3(){
    //image
    demo_img1();
    draw_character(researcher_2, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);
    draw_background_bubble(Pos.center_x, pos_bubble_y2,size_bubble_x,size_bubble_y);

    //text
    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext);
    textAlign(CENTER);
    textFont(text_font);
    text( text_tutorial_2_0, pos_tutorialtext_x2, pos_tutorialtext_y2);
    pop();


    //buttons
    button_next.mousePressed(()=>{
        button_next.hide();
        button_start.show();
        Time.update_tutorial_next();    
        });
    button_previous.mousePressed(()=>{
        Time.update_tutorial_previous();    
        });
}

function demo_img1(){
    push();
    noFill();
    stroke(col_correct);
    strokeWeight(width_feedback);
    ellipse(Pos.center_x, Pos.center_y-shift_imageposition, size_feedback, size_feedback);
    pop();
}

// scene 9
function scene_tutorial4(){
    draw_character(researcher_2, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);

    //text
    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext3);
    textAlign(CENTER);
    textFont(text_font);
    text(text_tutorial_3_0, pos_tutorialtext_x3, pos_tutorialtext_y3);
    pop();

    //buttons
    button_previous.mousePressed(()=>{
        button_next.show();
        button_start.hide();
        Time.update_tutorial_previous();    
        });
    button_start.mousePressed(()=>{
        Params.array_stim = array_stim_tutorial;
        Params.trial_stimind = trial_stimind_tutorial;
        flag_practice = true;
        flag_break = true;  
        button_previous.hide();
        button_start.hide();
        Time.start();    
        });    
}

function create_start_button(){
    button_start = createButton('Start');
    button_start.size(size_start_w,size_start_h);
    button_start.style('font-size', size_start_text + 'px');
    button_start.position(x_start, y_start);
    button_start.hide();
}

function scene_tutorial5(){
    draw_character(researcher_2, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);

    //text
    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext3);
    textAlign(CENTER);
    textFont(text_font);
    text(text_tutorial_4_0, pos_tutorialtext_x3, pos_tutorialtext_y3);
    pop();

    //buttons
    button_start.mousePressed(()=>{
        Params = new ParameterManager();
        flag_practice = false;
        flag_break = false;  
        
        button_start.hide();
        Time.start();    
        });    
}

function scene_break(){
    //text
    draw_character(researcher_2, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);
    draw_background_bubble(Pos.center_x, pos_bubble_y2,size_bubble_x,size_bubble_y);
    
    //text
    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext3);
    textAlign(CENTER);
    textFont(text_font);
    text(text_tutorial_5_0, pos_tutorialtext_x3, pos_tutorialtext_y3);
    pop();

    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext);
    textAlign(CENTER);
    textFont(text_font);
    text( text_tutorial_6_1, pos_tutorialtext_x, pos_tutorialtext_y2-shift_text);
    text( text_tutorial_6_2, pos_tutorialtext_x, pos_tutorialtext_y2);
    pop();


    //buttons
    button_start.mousePressed(()=>{
        tmp_save();
        Params = new ParameterManager();
        tmp_connect();
                
        button_start.hide();
        flag_practice = false;
        count_break ++;
        if (count_break==max_break-1){
            flag_break = false;
        }else{
            flag_break = true;
        }
        Time.start();    
        });    
}

let tmp1 = [];
let tmp2 = [];
let tmp3 = [];
let tmp4 = [];
let tmp5 = [];
let tmp6 = [];

function tmp_save(){
    tmp1 = Params.results_responses;
    tmp2 = Params.results_rt;
    tmp3 = Params.results_targetvalue;
    tmp4 = Params.results_flagcorrect;
    tmp5 = Params.results_stimind;
    tmp6 = Params.results_trial;
}
function tmp_connect(){
    Params.results_responses.push(tmp1);
    Params.results_rt.push(tmp2);
    Params.results_targetvalue.push(tmp3);
    Params.results_flagcorrect.push(tmp4);
    Params.results_stimind.push(tmp5);
    Params.results_trial.push(tmp6);
}
