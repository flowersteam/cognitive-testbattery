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
function show_stim(){
Time.count();
if (Time.activetime_block < Params.time_stimduration){
  for (let i=0; i < Params.trial_stimcond[Params.ind_stimcond]; ++i) {
    Objs[i].display();
  }
} else{
  Time.update();
}
}

function scene_stim(callback){
if (Params.flag_load==false){
  Objs = [];
  for (let i=0; i < Params.trial_stimcond[Params.ind_stimcond]; ++i) {
    Objs.push(make_pos(Objs))
  };
  Time.blockstart();
  Params.flag_load = true; 
}else{
  callback();
}
}

//make object class not overlapping with other positions.
function make_pos_tutorial(Objs){
let Obj = [];
let flag_overlap = false;
while (Obj.length < 1){
  let x = int((Pos.center_x)-(roi_obj/2)) + int(random(roi_obj));
  let y = int((pos_tutorialimage_y1)-(roi_obj/2)) + int(random(roi_obj));
  for (j=0;j < Objs.length; j++){
    flag_overlap = false;
    let d = dist(x,y,Objs[j].x,Objs[j].y);
    if (d < Objs[j].diameter){
      flag_overlap = true;
      break;
    }
  }
  if (flag_overlap == false){
    Obj = new DrawEllipse(size_obj,x,y)
  }
}
return Obj
}

function make_pos(Objs){
  let Obj = [];
  let flag_overlap = false;
  while (Obj.length < 1){
    let x = int((Pos.center_x)-(roi_obj/2)) + int(random(roi_obj));
    let y = int((Pos.center_y)-(roi_obj/2)) + int(random(roi_obj));
    for (j=0;j < Objs.length; j++){
      flag_overlap = false;
      let d = dist(x,y,Objs[j].x,Objs[j].y);
      if (d < Objs[j].diameter){
        flag_overlap = true;
        break;
      }
    }
    if (flag_overlap == false){
      Obj = new DrawEllipse(size_obj,x,y)
    }
  }
  return Obj
  }

class DrawEllipse {
constructor(diameter,x,y) {
  noStroke();
  this.diameter = diameter;
  this.x = x;
  this.y = y;
}

display() {
  ellipse(this.x, this.y, this.diameter, this.diameter);
}
}

// scene 3
function scene_backmask(){
Time.count();
if (Time.activetime_block < time_maskduration){
  image(img, (Pos.center_x)-(size_img[0]/2), (Pos.center_y)-(size_img[1]/2),size_img[0],size_img[1]);
} else{
  Time.update();
}
}


// scene 4
function scene_response(){  
push();
fill(col_text);
textSize(size_text);
textAlign(CENTER);
textFont(text_font);
text( "How many circles are presented?", x_answer, y_answer);
pop();

push();
fill(col_answer);
textSize(size_answer);
noStroke();
textAlign(CENTER);
stroke('black');
strokeWeight(weight_stroke);
text("%d".replace("%d",sel.value()), Pos.center_x, Pos.center_y+(size_answer/2));;
pop();

button_ok.mousePressed(()=>{
  //save the response and the stimulus condition
  Params.tmp_res_ob = sel.value();
  Time.count_response();
  button_ok.hide();
  div_ticks.hide();
  array_span.forEach(element => element.hide());
  sel.hide();
  Time.update();    
  });
/*
for (let i=0; i<max_answer; i++){
  push();
  stroke(col_fixation); // define gray scale color (0 to 255) of lines
  strokeWeight(tick_slider_width);
  line(x_response+xwidth+i*step_slider, y_response+(size_slider_h/2), x_response+xwidth+i*step_slider, y_response+(size_slider_h/2)+tick_slider);
  pop();
  
}
*/
}

function create_selector_input(){
sel = createSlider(1,max_answer,5,1);
sel.size(size_slider_w,size_slider_h);
sel.position(x_response, y_response);
sel.id('input_select');
//sel.changed(active_button);
sel.hide();
// Show ticks:
div_ticks = createDiv();
div_ticks.addClass('ticks');
for (i=0; i < max_answer; i++) {
  var tmp_span = createSpan(`${i+1}`);
  tmp_span.addClass('tick');
  tmp_span.parent(div_ticks);
  tmp_span.style('display: flex');
  tmp_span.hide();
  array_span.push(tmp_span);
}
div_ticks.position(x_response+size_slider_w/(2*(max_answer-1)), y_response + shift_div_ticks);
div_ticks.size(size_slider_w*((max_answer-2)/(max_answer-1)),size_slider_h);
div_ticks.hide();
}

function create_answer_button(){
button_ok = createButton('OK');
button_ok.size(size_button_w,size_button_h);
button_ok.style('font-size', size_text_button + 'px');
button_ok.position(x_ok, y_ok);
button_ok.hide();
}

function show_button(){
let tmp = shuffle(make_array(1,max_answer,max_answer));
sel.value(tmp[0]);
sel.show();
div_ticks.style('display', 'flex');
array_span.forEach(element => element.show());
button_ok.show();
}
/*
function active_button(){
//item = sel.value();
}
*/

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
/*
let parameters_to_save = {
  'results_responses': Params.results_responses,
  'results_targetvalue': Params.results_targetvalue
}
post('exit_view_cognitive_task', parameters_to_save, 'post');
*/
let parameters_to_save = [
    {'':['results_responses','results_rt','results_targetvalue']},
    {'':Params.results_responses},
    {'':Params.results_rt},
    {'':Params.results_targetvalue}
    ]
  //for loacl debugging
  exportCSV(parameters_to_save,',', 'enumeration');
  location.href='../index.html'

}

