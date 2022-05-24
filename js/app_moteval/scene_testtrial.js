//scene 0
function scene_instruction(){
  if (mouseIsPressed) {
    fullscreen(true);
    Time.update();
  } else{
    fill(col_text);
    textSize(size_text);
    textAlign(CENTER);
    text( text_start, Pos.center_x, Pos.center_y);
  }
}

//scene 1
function scene_fixation(){
  Time.count();
  if (Time.activetime_block < time_fixation) {
    push();
    stroke(col_fixation); 
    strokeWeight(thick_fixation);
    line(Pos.center_x - len_fixation, Pos.center_y, Pos.center_x + len_fixation, Pos.center_y );
    line(Pos.center_x, Pos.center_y - len_fixation, Pos.center_x, Pos.center_y + len_fixation );
    pop();
  } else{
    Time.update();
  }
}

//scene 2
function scene_targ(){
  Time.count();
  if (Time.activetime_block < duration_target){
    for (let i=0; i < num_totaldot; ++i) {
      if (i < Params.num_target){
        push();
        fill(col_target);
        noStroke();        
        Objs[i].display();
        pop();

      }else{
        push();
        fill(col_target2);
        noStroke();        
        Objs[i].display();
        pop();
      }
    }

  } else if (Time.activetime_block >= duration_target && Time.activetime_block < time_totalstimduration+duration_target){
    push();
    fill(col_target2);
    noStroke();        
    for (let i=0; i < num_totaldot; ++i) {
      Objs[i].update_pos();
      Objs[i].display();
    }
    pop();
  }else if (Time.activetime_block >= time_totalstimduration+duration_target && Time.activetime_block < 
    time_totalstimduration+duration_stop+duration_target){
    push();
    fill(col_target2);
    noStroke();        
    for (let i=0; i < num_totaldot; ++i) {
      Objs[i].display();
    }
    pop();
  }else{
    Time.update();
  }
}

function scene_stim(callback){
if (Params.flag_load == false){   
  Objs = [];
  for (let i=0; i < num_totaldot; ++i) {
    Objs.push(make_pos(Objs))
  };
  Time.blockstart();
  Params.flag_load = true;
} else{
  callback();
}
}

function make_pos(Objs){
  let Obj = [];
  let flag_overlap = false;
  while (Obj.length < 1){
    let x = int((Pos.center_x)-(roi_obj[0]/2)) + int(random(roi_obj[0]));
    let y = int((Pos.center_y)-(roi_obj[1]/2)) + int(random(roi_obj[1]));
    for (j=0;j < Objs.length; j++){
      flag_overlap = false;
      let d = dist(x,y,Objs[j].x,Objs[j].y);
      if (d < Objs[j].diameter){
        flag_overlap = true;
        break;
      }
    }
    if (flag_overlap == false){
      Obj = new DrawEllipse(size_obj,x,y,velocity_dot*Params.trial_stimcond[Params.ind_stimcond],direction_dot_mini,direction_dot_range)
    }
  }
  return Obj
}

class DrawEllipse {
  constructor(diameter,x,y,velocity_dot,direction_dot_min,direction_dot_range) {
    noStroke();
    this.diameter = diameter;
    this.x = x; //center cordinate of the circle
    this.y = y; //center cordinate of the circle
    this.sign_x0 = 1; //plus 1 or minus 1
    this.sign_y0 = 1; //plus 1 or minus 1
    this.velocity_dot = velocity_dot;
    this.direction_dot = direction_dot_min + random(direction_dot_range); //shuffle the direction
  }
  
  display() {
    image(img_obj,this.x-(this.diameter/2),this.y-(this.diameter/2));
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  update_pos(){
      this.x += ((this.sign_x0 * this.velocity_dot) * Math.cos(deg2rad(this.direction_dot)));
      this.y  += ((this.sign_y0 * this.velocity_dot) * Math.sin(deg2rad(this.direction_dot)));
    
      if (Math.abs(this.x-Pos.center_x) > (roi_obj[0]/2)) {
        this.sign_x0 = (- this.sign_x0);
      } 
      if (Math.abs(this.y-Pos.center_y) > (roi_obj[0]/2)) {
        this.sign_y0 = (- this.sign_y0);
      }
  }  
}

// scene 4
function scene_response(){
  Time.count();
  // call function
  for (let i=0; i < num_totaldot; ++i) {
    Button[i].mousePressed(record_response);
  
    if (Params.flag_buttoncheck[i] == 1){
      push();
      fill(col_check);
      noStroke();
      rect(Objs[i].x-(size_obj/2),Objs[i].y-(size_obj/2),size_obj,size_obj);
      pop();
    }
  }


  if (Params.tmp_res_ob.length==Params.num_target){
    Time.count_response();
    Time.update();
  }
}

function create_answer_button(){
  for (let i=0; i < num_totaldot; ++i) {
    Button[i] = createButton("",[i]);
    Button[i].style('font-size', size_text_button + 'px');
    Button[i].size(size_obj, size_obj);
    Button[i].hide();
  }
}

function show_button(){
  for (let i=0; i < num_totaldot; ++i){
    Button[i].show();
    Button[i].position(Objs[i].x-(size_obj/2),Objs[i].y-(size_obj/2));
  }  
}

function record_response(){
  if (Params.flag_buttoncheck[this.value()] == 1){
  }else{
  Params.flag_buttoncheck[this.value()] = 1;
  Params.tmp_res_ob.push(this.value());
  }
  //console.log(this.value())
}

// scene 5
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
    'results_targetvalue_stim': Params.results_targetvalue_stim,
    'results_num_stim': Params.results_num_stim
  }
  post('exit_view_cognitive_task', parameters_to_save, 'post');
 */
  let parameters_to_save = [
      {'':['results_responses','results_rt','results_speed_stim','results_correct']},
      {'':Params.results_responses},
      {'':Params.results_rt},
      {'':Params.results_speed_stim},
      {'':Params.results_correct}
      ]
    //for loacl debugging
  exportCSV(parameters_to_save,',', 'workingmemory');
  location.href='../index.html'
  //
}
