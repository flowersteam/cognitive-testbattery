//scene 0
function scene_instruction(){
    if (mouseIsPressed) {
      fullscreen(true);
      Time.update();
    } else {
      fill(col_text);
      textSize(size_text);
      textAlign(CENTER);
      textFont(text_font);
      text( text_start, Pos.center_x, (Pos.center_y)+(size_text/2));
    }
  }
  
  //scene 1
  function scene_fixation(){
    Time.count();
    if (Time.activetime_block < time_fixation) {
      push();
      stroke(col_fixation); // define gray scale color (0 to 255) of lines
      strokeWeight(thick_fixation);
      line(Pos.center_x - len_fixation, Pos.center_y, Pos.center_x + len_fixation, Pos.center_y );
      line(Pos.center_x, Pos.center_y - len_fixation, Pos.center_x, Pos.center_y + len_fixation );
      pop();
    } else {
      Time.update();
    }
  }
  
  //scene 2
  function scene_stim(){
    Time.count();
  
    if (keyIsPressed){
      if(keyCode===keyRes1) {
        Time.count_response();
        Params.tmp_res_ob = 1;
      }
    }
  
    if (Time.activetime_block < time_stimduration){    
      push();
      //image(Imgs[0],CANVAS_WIDTH,CANVAS_HEIGHT);    
      if (flag_practice==true){
        if (Params.array_stim[Params.ind_stimcond]==0){
          Imgs_filler_tutorial[Params.trial_stimind[Params.ind_stimcond]].resize(size_rescale, size_rescale);
          image(Imgs_filler_tutorial[Params.trial_stimind[Params.ind_stimcond]],(Pos.center_x)-(size_rescale/2),(Pos.center_y)-(size_rescale/2));
        }else if (Params.array_stim[Params.ind_stimcond]==1){
          Imgs_targ_tutorial[Params.trial_stimind[Params.ind_stimcond]].resize(size_rescale, size_rescale);
          image(Imgs_targ_tutorial[Params.trial_stimind[Params.ind_stimcond]],(Pos.center_x)-(size_rescale/2),(Pos.center_y)-(size_rescale/2));
        }else if (Params.array_stim[Params.ind_stimcond]==2){
          Imgs_targ_tutorial[Params.trial_stimind[Params.ind_stimcond]].resize(size_rescale, size_rescale);
          image(Imgs_targ_tutorial[Params.trial_stimind[Params.ind_stimcond]],(Pos.center_x)-(size_rescale/2),(Pos.center_y)-(size_rescale/2));
        }
      }else{
        if (Params.array_stim[Params.ind_stimcond]==0){
          Imgs_filler[Params.trial_stimind[Params.ind_stimcond]].resize(size_rescale, size_rescale);
          image(Imgs_filler[Params.trial_stimind[Params.ind_stimcond]],(Pos.center_x)-(size_rescale/2),(Pos.center_y)-(size_rescale/2));
        }else if (Params.array_stim[Params.ind_stimcond]==1){
          Imgs_targ[Params.trial_stimind[Params.ind_stimcond]].resize(size_rescale, size_rescale);
          image(Imgs_targ[Params.trial_stimind[Params.ind_stimcond]],(Pos.center_x)-(size_rescale/2),(Pos.center_y)-(size_rescale/2));
        }else if (Params.array_stim[Params.ind_stimcond]==2){
          Imgs_targ[Params.trial_stimind[Params.ind_stimcond]].resize(size_rescale, size_rescale);
          image(Imgs_targ[Params.trial_stimind[Params.ind_stimcond]],(Pos.center_x)-(size_rescale/2),(Pos.center_y)-(size_rescale/2));
        }
      }
      //console.log(Params.array_stim[Params.ind_stimcond])
      pop();
      /*
      pop();
      push();
      fill(col_text);
      textSize(size_text);
      textAlign(CENTER);
      text( 'Press key "f" if you saw this previously', Pos.center_x, (Pos.center_y)+pos_guide);
      pop();
      */
    } else{
      Time.update();
    }
  }
  
  
  //scene 3
  function scene_feedback(){
    Time.count();
    if (Time.activetime_block < time_feedback) {
      if (Params.flag_correct ==true) {
        push();
        noFill();
        stroke(col_correct);
        strokeWeight(width_feedback);
        ellipse(Pos.center_x, Pos.center_y, size_feedback, size_feedback);
        pop();
      } else {
        push();
        noFill();
        stroke(col_wrong);
        strokeWeight(width_feedback);
        line(Pos.center_x - len_feedback, Pos.center_y+ len_feedback, Pos.center_x + len_feedback, Pos.center_y - len_feedback);
        line(Pos.center_x- len_feedback, Pos.center_y - len_feedback, Pos.center_x + len_feedback, Pos.center_y + len_feedback);
        pop();
      }
    } else {
      Time.update();
    }
  }
  
  // scene 4
  function scene_end(){
    if (mouseIsPressed) {
      Time.update();
    } else {
      push();
      fill(col_text);
      noStroke();
      textSize(size_text);
      textAlign(CENTER);
      textFont(text_font);
      text( text_end, Pos.center_x, Pos.center_y);
      pop();
    }
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
        {'':['results_responses','results_rt','results_targetvalue','results_flagcorrect','results_stimind','results_trial']},
        {'':Params.results_responses},
        {'':Params.results_rt},
        {'':Params.results_targetvalue},
        {'':Params.results_flagcorrect},
        {'':Params.results_stimind},
        {'':Params.results_trial}
        ]
      //for loacl debugging
      exportCSV(parameters_to_save,',', 'memorability');
      location.href='../index.html'
      //
    //post('cognitive_assessment_home', parameters_to_save, 'post');
  }
  