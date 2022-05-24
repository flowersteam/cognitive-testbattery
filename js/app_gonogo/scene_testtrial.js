//scene 0
function scene_instruction(){
  if (mouseIsPressed) {
    fullscreen(true);
    Time.update();
  } else {
    push();
    fill(col_text);
    textSize(size_text);
    textAlign(CENTER);
    textFont(text_font);
    text( text_start, Pos.center_x, Pos.center_y);
    pop();
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
function scene_targ(){
  if (Time.activetime_block < Params.time_stimduration + time_maskduration){ 
    if (Params.ind_stimcond==Params.ind_previous+1){
      if (flag_practice==true){
        Params.feedback();
      }
    }
  } else{
    Time.update();
  }
}

function scene_stim(callback){
  Time.count();

  if (Params.ind_stimcond==Params.ind_previous+1){
    if (keyIsPressed){
      // 32 means space
      if (keyCode == keyRes1) {
        if (Params.flag_gonogo[Params.repetition]==1){
          Time.count_response();
          Params.tmp_res_ob = 1; //1 means the correct response.
        }else{
          Time.count_response();
          Params.tmp_res_ob = 2; //2 means the false alarm.
        }
      }
    }
  }


  if (Time.activetime_block < Params.time_stimduration){    
    push();
    fill(col_target);
    textSize(size_target);
    noStroke();
    textAlign(CENTER);
    textFont(text_font);
    text("%d".replace("%d",Params.trial_stimcond[Params.ind_stimcond]), Pos.center_x, (Pos.center_y)+(size_target/2));
    pop();
  } else{
    callback();
  }
}

// scene 4
function scene_end(){
    push();
    fill(col_text);
    noStroke();
    textSize(size_text);
    textAlign(CENTER);
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
  /*
  let parameters_to_save = {
    'results_responses': Params.results_responses,
    'results_rt': Params.results_rt,
    'results_ind_previous': Params.results_ind_previous,
    'results_targetvalue': Params.results_targetvalue
  }
post('exit_view_cognitive_task', parameters_to_save, 'post');
*/
  let parameters_to_save = [
    {'':['results_responses','results_rt','results_ind_previous','results_targetvalue']},
    {'':Params.results_responses},
    {'':Params.results_rt},
    {'':Params.results_ind_previous},
    {'':Params.results_targetvalue}
    ]
  //for loacl debugging
  exportCSV(parameters_to_save,',', 'gonogo');
  location.href='../index.html'
  //
}