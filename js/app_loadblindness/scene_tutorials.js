
// scene 6
function scene_tutorial1(){
    draw_character(researcher_3,pos_researcher_x,pos_researcher_y,researcher_width, researcher_width);
    draw_background_bubble(Pos.center_x, pos_bubble_y,size_bubble_x,size_bubble_y);

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
        Params.trial_ind_distance = ind_distance;
        Params.initialize();
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
    draw_character(researcher_2, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);
    //text
    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext);
    textAlign(CENTER);
    textFont(text_font);
    text( text_tutorial_1_0, pos_tutorialtext_x1, pos_tutorialtext_y1);
    pop();
    draw_background_bubble(Pos.center_x, pos_bubble_y2,size_bubble_x,size_bubble_y);

    //buttons
    button_next.mousePressed(()=>{
        Time.update_tutorial_next();
        button_fixanswer1.position(x_fixation_answer1,y_fixation_answer-shift_imageposition); 
        button_fixanswer2.position(x_fixation_answer2,y_fixation_answer-shift_imageposition); 
        button_fixanswer1.show();
        button_fixanswer2.show();  
        });
    button_previous.mousePressed(()=>{
        button_previous.hide();
        Time.update_tutorial_previous();    
        });
}

function demo_img0(){
    push();
    for (let i=0;i<4;i++){
      if (i==0){
        image(img_correct,Params.dict_pos[i][0],Params.dict_pos[i][1]);
      } else{
        image(img_wrong,Params.dict_pos[i][0],Params.dict_pos[i][1]);
      }     
    }
    stroke(col_fixation); // define gray scale color (0 to 255) of lines
    strokeWeight(thick_fixation);
    line(Pos.center_x - len_fixation - Params.dict_fixation[Params.trial_fixation[0]][0], Pos.center_y, Pos.center_x + len_fixation+Params.dict_fixation[Params.trial_fixation[0]][0], Pos.center_y);
    line(Pos.center_x, Pos.center_y - len_fixation-Params.dict_fixation[Params.trial_fixation[0]][1], Pos.center_x, Pos.center_y + len_fixation+Params.dict_fixation[Params.trial_fixation[0]][1]);
    pop();
}

// scene 8
function scene_tutorial3(){
    //image
    demo_img1();
    draw_character(researcher_3, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);
    //text
    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext);
    textAlign(CENTER);
    textFont(text_font);
    text( text_tutorial_2_0, pos_tutorialtext_x2, pos_tutorialtext_y2);
    pop();
    draw_background_bubble(Pos.center_x, pos_bubble_y2,size_bubble_x,size_bubble_y);

    //buttons
    button_next.mousePressed(()=>{
        Time.update_tutorial_next();
        button_fixanswer1.hide();
        button_fixanswer2.hide();
        button_fixanswer1.position(x_fixation_answer1,y_fixation_answer); 
        button_fixanswer2.position(x_fixation_answer2,y_fixation_answer); 
        /*
        for (let i=0;i<4;i++){
              Buttons[i].show();
          }
        */
        });
    button_previous.mousePressed(()=>{
        button_fixanswer1.hide();
        button_fixanswer2.hide();
        button_fixanswer1.position(x_fixation_answer1,y_fixation_answer); 
        button_fixanswer2.position(x_fixation_answer2,y_fixation_answer); 
        Time.update_tutorial_previous();    
        });
}

function demo_img1(){
    //button_fixanswer1.mousePressed(fnc_fixanswer1);
    //button_fixanswer2.mousePressed(fnc_fixanswer2);
    push();
    stroke(col_fixation); // define gray scale color (0 to 255) of lines
    strokeWeight(thick_fixation);
    line(x_ans1[0],x_ans1[1]-shift_imageposition,x_ans1[2],x_ans1[3]-shift_imageposition);
    line(y_ans1[0],y_ans1[1]-shift_imageposition,y_ans1[2],y_ans1[3]-shift_imageposition);
  
    line(x_ans2[0],x_ans2[1]-shift_imageposition,x_ans2[2],x_ans2[3]-shift_imageposition);
    line(y_ans2[0],y_ans2[1]-shift_imageposition,y_ans2[2],y_ans2[3]-shift_imageposition);
   pop();
}

// scene 8_1
function scene_tutorial3_1(){
    //image
    //demo_img2();
    draw_character(researcher_2, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);
    //text
    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext);
    textAlign(CENTER);
    textFont(text_font);
    text( text_tutorial_2_1, pos_tutorialtext_x2, pos_tutorialtext_y2-shift_text);
    text( text_tutorial_2_2, pos_tutorialtext_x2, pos_tutorialtext_y2);
    pop();
    draw_background_bubble(Pos.center_x, pos_bubble_y2,size_bubble_x,size_bubble_y);

    //buttons
    button_next.mousePressed(()=>{
        button_next.hide();
        button_start.show();
        /*
        for (let i=0;i<4;i++){
            Buttons[i].hide();
        }
        */
        Time.update_tutorial_next();    
        });
    button_previous.mousePressed(()=>{
        button_fixanswer1.position(x_fixation_answer1,y_fixation_answer-shift_imageposition); 
        button_fixanswer2.position(x_fixation_answer2,y_fixation_answer-shift_imageposition); 
        button_fixanswer1.show();
        button_fixanswer2.show();
        /*
        for (let i=0;i<4;i++){
            Buttons[i].hide();
        }
        */
        Time.update_tutorial_previous();    
        });
}

function demo_img2(){
    for (let i=0;i<4;i++){
        Buttons[i].position(Params.dict_pos[Params.trial_stimcond[i]][0],Params.dict_pos[Params.trial_stimcond[i]][1]);
    }
}

// scene 9
function scene_tutorial4(){

    draw_character(researcher_2, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);
    draw_background_bubble(Pos.center_x, pos_bubble_y2,size_bubble_x,size_bubble_y);

    //text
    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext3);
    textAlign(CENTER);
    textFont(text_font);
    text(text_tutorial_3_0, pos_tutorialtext_x3, pos_tutorialtext_y3);
    pop();

    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext);
    textAlign(CENTER);
    textFont(text_font);
    text( text_tutorial_3_1, pos_tutorialtext_x, pos_tutorialtext_y2-shift_text);
    text( text_tutorial_3_2, pos_tutorialtext_x, pos_tutorialtext_y2);
    pop();


    //buttons
    button_previous.mousePressed(()=>{
        button_next.show();
        button_start.hide();
        /*
        for (let i=0;i<4;i++){
            Buttons[i].show();
        }
        */
        Time.update_tutorial_previous();    
        });
    button_start.mousePressed(()=>{
        button_previous.hide();
        button_start.hide();
        Params.trial_ind_distance = ind_distance;
        Params.num_rep = num_rep_practice;
        Params.time_stimduration = time_stimduration_practice;
        Params.initialize();
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
        button_start.hide();
        Params = new ParameterManager();
        Params.num_rep = num_rep_main;
        Params.time_stimduration = time_stimduration_main;
        flag_practice = false;
        flag_break = true;
        Time.start();    
        });    
}

function scene_break(){
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
        button_start.hide();
        tmp_save();
        Params = new ParameterManager();
        tmp_connect();
        Params.num_rep = num_rep_main;
        Params.time_stimduration = time_stimduration_main;
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
let tmp7 = [];

function tmp_save(){
    tmp1 = Params.results_responses_pos;
    tmp2 = Params.results_responses_fix;
    tmp3 = Params.results_rt;
    tmp4 = Params.results_targetvalue_stim;
    tmp5 = Params.results_targetvalue_fixation;
    tmp6 = Params.results_target_distance;
    tmp7 = Params.results_rt_fixation;
}
function tmp_connect(){
    Params.results_responses_pos.push(tmp1);
    Params.results_responses_fix.push(tmp2);
    Params.results_rt.push(tmp3);
    Params.results_targetvalue_stim.push(tmp4);
    Params.results_targetvalue_fixation.push(tmp5);
    Params.results_target_distance.push(tmp6);
    Params.results_rt_fixation.push(tmp7);
}
