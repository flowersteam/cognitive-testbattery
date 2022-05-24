// scene 6
function scene_tutorial1(){
    draw_character(researcher_3,pos_researcher_x,pos_researcher_y,researcher_width, researcher_width);
    draw_background_bubble(Pos.center_x, pos_bubble_y,size_bubble_x,size_bubble_y);
    //Title
    push();
    fill(col_titletext);
    textSize(size_titletext);
    textFont(text_font);
    textAlign(CENTER);
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
    draw_character(researcher_2,pos_researcher_x,pos_researcher_y,researcher_width, researcher_width);
    demo_img0();
    //text
    push();
    fill(col_tutorialtext);
    textFont(text_font);
    textSize(size_tutorialtext);
    textAlign(CENTER);
    text( text_tutorial_1_0, pos_tutorialtext_x1, pos_tutorialtext_y1);
    pop();
    draw_background_bubble(Pos.center_x, pos_bubble_y,size_bubble_x,size_bubble_y);


    //buttons
    button_next.mousePressed(()=>{
        sel.position(Pos.center_x-(size_slider_w/2), pos_tutorialslider_y1);
        let tmp = shuffle(make_array(1,max_answer,max_answer));
        sel.value(tmp[0]);  
        sel.show();
        div_ticks.position(Pos.center_x-(size_slider_w/2)+size_slider_w/(2*(max_answer-1)), pos_tutorialslider_y1 + shift_div_ticks);
        div_ticks.style('display', 'flex');
        array_span.forEach(element => element.show());
        Time.update_tutorial_next();
        });
    button_previous.mousePressed(()=>{
        button_previous.hide();
        Time.update_tutorial_previous();    
        });
}

function demo_img0(){
    if (flag_disp==false){
        Objs = [];
        for (let i=0; i < num_demotargnum; ++i) {
            Objs.push(make_pos_tutorial(Objs))
        };
        flag_disp=true;
    }else {
        
        for (let i=0; i < num_demotargnum; ++i) {
                Objs[i].display();
        };
    }
}

// scene 8
function scene_tutorial3(){
    draw_character(researcher_3, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);
    draw_background_bubble(Pos.center_x, pos_bubble_y,size_bubble_x,size_bubble_y);
    //image
    push();
    fill(col_answer);
    textSize(size_answer);
    textFont(text_font);
    stroke('black');
    strokeWeight(weight_stroke);
    textAlign(CENTER);
    text("%d".replace("%d",sel.value()), Pos.center_x, pos_answer_y2);
    pop();

    //text
    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext);
    textAlign(CENTER);
    text( text_tutorial_2_0, pos_tutorialtext_x2, pos_tutorialtext_y2);
    pop();

    //buttons
    button_next.mousePressed(()=>{
        sel.hide();
        sel.position(x_response, y_response);
        div_ticks.hide();
        array_span.forEach(element => element.hide());
        div_ticks.position(x_response+size_slider_w/(2*(max_answer-1)), y_response + shift_div_ticks);
        button_next.hide();
        button_start.show();
        Time.update_tutorial_next();    
        });
    button_previous.mousePressed(()=>{
        sel.hide();
        div_ticks.hide();
        array_span.forEach(element => element.hide());
        div_ticks.position(x_response+size_slider_w/(2*(max_answer-1)), y_response + shift_div_ticks);
        Time.update_tutorial_previous();
        });
}
// scene 9
function scene_tutorial4(){
    draw_character(researcher_2, pos_researcher_x,pos_researcher_y, researcher_width, researcher_width);


    //text
    push();
    fill(col_tutorialtext);
    textSize(size_tutorialtext3);
    textFont(text_font);
    textAlign(CENTER);
    text(text_tutorial_3_0, pos_tutorialtext_x3, pos_tutorialtext_y3);
    pop();

    //buttons
    button_previous.mousePressed(()=>{
        sel.position(Pos.center_x-(size_slider_w/2), pos_tutorialslider_y1);
        let tmp = shuffle(make_array(1,max_answer,max_answer));
        sel.value(tmp[0]);
        sel.show();
        div_ticks.position(Pos.center_x-(size_slider_w/2)+size_slider_w/(2*(max_answer-1)), pos_tutorialslider_y1 + shift_div_ticks);
        div_ticks.style('display', 'flex');
        array_span.forEach(element => element.show());
        button_next.show();
        button_start.hide();
        Time.update_tutorial_previous();    
        });
    button_start.mousePressed(()=>{
        button_previous.hide();
        button_start.hide();
        Params.array_stimcond = array_stimcond_practice;
        Params.trial_stimcond = shuffle(Params.array_stimcond);
        Params.num_rep = num_rep_practice;
        Params.time_stimduration = time_stimduration_practice;
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
        Params.array_stimcond = array_stimcond_main;
        Params.trial_stimcond = shuffle(Params.array_stimcond);
        Params.num_rep = num_rep_main;
        Params.time_stimduration = time_stimduration_main;
        flag_practice = false;
        flag_break = true;
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
        Params.array_stimcond = array_stimcond_main;
        Params.trial_stimcond = shuffle(Params.array_stimcond);
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
function tmp_save(){
    tmp1 = Params.results_responses;
    tmp2 = Params.results_rt;
    tmp3 = Params.results_targetvalue;
}
function tmp_connect(){
    Params.results_responses.push(tmp1);
    Params.results_rt.push(tmp2);
    Params.results_targetvalue.push(tmp3);
}