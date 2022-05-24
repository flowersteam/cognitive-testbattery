//scene 0
function scene_instruction(){
  if (mouseIsPressed) {
    fullscreen(true);
    Time.update();
  } else {
    fill(col_text);
    textSize(size_text);
    textAlign(CENTER);
    text( text_start, Pos.center_x, (Pos.center_y)+(size_text/2));
  }
}

//scene 1

function scene_fixation(){
  Time.count();
  if (Time.activetime_block < time_fixation) {
    push();
    fill(col_instruction);
    textSize(size_instruct_txt);
    noStroke();
    textAlign(CENTER);
    if (Params.ind_task ==0){
      image(img_task1,Pos.center_x-(size_obj/2), Pos.center_y-(size_obj/2));
      image(img_instruct1,x_instruct, y_instruct);
      text(text_1left,x_instruct_text1,y_instruct_text);
      text(text_1right,x_instruct_text2,y_instruct_text);
    }else{
      image(img_task2,Pos.center_x-(size_obj/2), Pos.center_y-(size_obj/2));
      image(img_instruct2,x_instruct, y_instruct);
      text(text_2left,x_instruct_text1,y_instruct_text);
      text(text_2right,x_instruct_text2,y_instruct_text);
    }
    pop();

  } else {
    Time.update();
  }
}



//scene 2
function scene_stim(){
  Time.count();
  if (keyIsPressed){
    if (keyCode == keyRes1) {
      Time.count_response();
      Params.tmp_res_ob = 1;
      Time.update();
    } else if (keyCode == keyRes2) {
      Time.count_response();
      Params.tmp_res_ob = 2;
      Time.update();
    }
  }

  if (Time.activetime_block < time_stimduration){    
    push();
    fill(col_instruction);
    textSize(size_instruct_txt);
    noStroke();
    textAlign(CENTER);
    if (Params.ind_task ==0){
      image(img_task1,Pos.center_x-(size_obj/2), Pos.center_y-(size_obj/2));
      image(img_instruct1,x_instruct, y_instruct);
      text(text_1left,x_instruct_text1,y_instruct_text);
      text(text_1right,x_instruct_text2,y_instruct_text);
    }else{
      image(img_task2,Pos.center_x-(size_obj/2), Pos.center_y-(size_obj/2));
      image(img_instruct2,x_instruct, y_instruct);
      text(text_2left,x_instruct_text1,y_instruct_text);
      text(text_2right,x_instruct_text2,y_instruct_text);
    }
    pop();
    push();
    fill(col_instruction);
    textSize(size_instruction);
    noStroke();
    textAlign(CENTER);
    text("%d".replace("%d",Params.trial_target[0]), Pos.center_x, (Pos.center_y)+(size_instruction/2));    
    pop();
    
  } else{
    Time.update();
  }
}




function scene_backmask(){
  Time.count();
  if (Time.activetime_block <  time_maskduration){
    //show a blank for this experiment
    //image(img, (Pos.center_x)-(size_img[0]/2), (Pos.center_y)-(size_img[1]/2));
  } else{
    Time.update();
  }
}

// scene 3
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
    'results_ind_switch': Params.results_ind_switch,
    'results_indtask': Params.results_indtask
  }
  post('exit_view_cognitive_task', parameters_to_save, 'post');
*/
  let parameters_to_save = [
      {'':['results_responses','results_rt','results_ind_switch','results_indtask','results_trial_target']},
      {'':Params.results_responses},
      {'':Params.results_rt},
      {'':Params.results_ind_switch},
      {'':Params.results_indtask},
      {'':Params.results_trial_target}
      ]
    //for loacl debugging
    exportCSV(parameters_to_save,',', 'taskswitch');
    location.href='../index.html'
    //

}
  