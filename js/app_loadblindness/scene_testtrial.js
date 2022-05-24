//scene 0
function scene_instruction(){
    if (mouseIsPressed) {
      fullscreen(true);
      Time.update();
    } else{
      fill(col_text);
      textSize(size_text);
      textAlign(CENTER);
      textFont(text_font);
      text( text_start, Pos.center_x, Pos.center_y);
    }
  }
  
  //scene 1
  function scene_fixation(){
    Time.count();
    if (Time.activetime_block < time_fixation) {
      push();
      fill(col_fixation);
      ellipse(Pos.center_x, Pos.center_y,len_fixation,len_fixation);
      pop();
    } else{
      Time.update();
    }
  }
  
  
  //scene 2
  function scene_targ(){
    if (Time.activetime_block < Params.time_stimduration + time_maskduration){
    } else{
      Time.update();
    }
  }
  
  
  function scene_stim(callback){
    Time.count();
  
    if (Time.activetime_block < Params.time_stimduration){   
      push();
      for (let i=0;i<4;i++){
        if (i==0){
          image(img_correct,Params.dict_pos[Params.trial_stimcond[i]][0],Params.dict_pos[Params.trial_stimcond[i]][1])
        } else{
          image(img_wrong,Params.dict_pos[Params.trial_stimcond[i]][0],Params.dict_pos[Params.trial_stimcond[i]][1])
        }     
      }
      stroke(col_fixation); // define gray scale color (0 to 255) of lines
      strokeWeight(thick_fixation);
      line(Pos.center_x - len_fixation - Params.dict_fixation[Params.trial_fixation[0]][0], Pos.center_y, Pos.center_x + len_fixation+Params.dict_fixation[Params.trial_fixation[0]][0], Pos.center_y);
      line(Pos.center_x, Pos.center_y - len_fixation-Params.dict_fixation[Params.trial_fixation[0]][1], Pos.center_x, Pos.center_y + len_fixation+Params.dict_fixation[Params.trial_fixation[0]][1]);
      pop();
  
    } else{
      callback();
    }
  }
  
  // scene 3
  function scene_key_response(){
    Time.count();
  
    button_fixanswer1.mousePressed(fnc_fixanswer1);
    button_fixanswer2.mousePressed(fnc_fixanswer2);
  
    push();
    fill(col_text);
    textSize(size_text);
    textAlign(CENTER);
    textFont(text_font);
    text( 'Which was longer?', Pos.center_x, Pos.center_y);
    pop();
  
    push();
    stroke(col_fixation); // define gray scale color (0 to 255) of lines
    strokeWeight(thick_fixation);
    line(x_ans1[0],x_ans1[1],x_ans1[2],x_ans1[3]);
    line(y_ans1[0],y_ans1[1],y_ans1[2],y_ans1[3]);
  
    line(x_ans2[0],x_ans2[1],x_ans2[2],x_ans2[3]);
    line(y_ans2[0],y_ans2[1],y_ans2[2],y_ans2[3]);
   pop();
  }
  
  
  function create_fixation_answer_button(){
    button_fixanswer1 = createButton(text_fixation_answer1); 
    button_fixanswer1.size(size_fixation_answer_x, size_fixation_answer_y);
    button_fixanswer1.style('font-size', size_text_button + 'px');
    button_fixanswer1.position(x_fixation_answer1,y_fixation_answer)
    button_fixanswer1.hide();
    
    button_fixanswer2 = createButton(text_fixation_answer2); 
    button_fixanswer2.size(size_fixation_answer_x, size_fixation_answer_y);
    button_fixanswer2.style('font-size', size_text_button + 'px');
    button_fixanswer2.position(x_fixation_answer2,y_fixation_answer);
    button_fixanswer2.hide();
    
    }
  
  function fnc_fixanswer1(){
    Time.count_response_fixation();
    Params.tmp_res_fixation = 1;
    button_fixanswer1.hide();
    button_fixanswer2.hide();
    Time.update();
  }
  
  function fnc_fixanswer2(){
    Time.count_response_fixation();
    Params.tmp_res_fixation = 0;
    button_fixanswer1.hide();
    button_fixanswer2.hide();
    Time.update();  
  }
  
  // scene 4
  function scene_response(){
    Time.count();
    push();
    fill(col_text);
    textSize(size_text);
    textAlign(CENTER);
    textFont(text_font);
    text( 'Which target contrast was strong?', Pos.center_x, Pos.center_y);
    pop();
  
    for (let i=0;i<4;i++){
      if (i==0) {
        Buttons[i].mousePressed(fnc_correct);
      }else{
        Buttons[i].mousePressed(fnc_false);
      }
    }
  }
  
  function create_answer_button(){
    for (let i=0;i<4;i++){
      Buttons[i] = createButton("Here!"); 
      Buttons[i].size(size_img, size_img);
      Buttons[i].style('font-size', size_text_button + 'px');
      Buttons[i].position(Params.dict_pos[Params.trial_stimcond[i]][0],Params.dict_pos[Params.trial_stimcond[i]][1]);
      Buttons[i].hide();
    }
  }
  
  
  function show_button(){
    for (let i=0;i<4;i++){
      Buttons[i].show(); 
      Buttons[i].position(Params.dict_pos[Params.trial_stimcond[i]][0],Params.dict_pos[Params.trial_stimcond[i]][1])
    }  
  }
  
  function fnc_correct(){
    Time.count_response();
    Params.tmp_res_ob = 1;
    for (let i=0;i<4;i++){
        Buttons[i].hide();
    }
    Time.update();
  }
  
  function fnc_false(){
    Time.count_response();
    Params.tmp_res_ob = 0;
    for (let i=0;i<4;i++){
        Buttons[i].hide();
    }
    Time.update();
  }
  
  
  // scene 5
  function scene_end(){
    push();
    fill(col_text);
    noStroke();
    textSize(size_text);
    textAlign(CENTER);
    textFont(text_font);
    text( text_end, Pos.center_x, Pos.center_y);
    pop();
  }
  
  function create_end_button(){
    button_end = createButton('END');
    button_end.size(size_end_w,size_end_h);
    button_end.style('font-size', size_end_text + 'px');
    button_end.position(x_end, y_end);
    button_end.mousePressed(quit_task);
    button_end.hide();
  }
  
  function quit_task(){
    fullscreen(false);
      let parameters_to_save = [
        {'':['results_responses_pos','results_responses_fix','results_rt','results_targetvalue_stim','results_targetvalue_fixation','results_target_distance','results_rt_fixation']},
        {'':Params.results_responses_pos},
        {'':Params.results_responses_fix},
        {'':Params.results_rt},
        {'':Params.results_targetvalue_stim},
        {'':Params.results_targetvalue_fixation},
        {'':Params.results_target_distance},
        {'':Params.results_rt_fixation}
        ]
      //for loacl debugging
      exportCSV(parameters_to_save,',', 'loadblindness');
      location.href='../index.html'
      //
    //post('cognitive_assessment_home', parameters_to_save, 'post');
  }
  