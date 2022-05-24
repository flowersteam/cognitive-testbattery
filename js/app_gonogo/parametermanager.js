class ParameterManager{
    constructor() {
      // Stimulus parameters
      this.repetition = 0;
      this.ind_stimcond = 0;
      this.previous_buffer = null;
      this.flag_block = false;
  
      this.num_rep = num_rep_main;
      this.time_stimduration = time_stimduration_main;

      // go nogo setting
      this.trial_stimcond = shuffle(array_stimcond);
      this.stim_target = stim_target;
      this.stim_previous = stim_previous;
      this.stim_filler = shuffle(stim_filler);
      this.ind_previous = null;
      this.ind_targ = null;
  
      let num_true = round(this.num_rep/2)
      this.flag_gonogo = Array.prototype.concat(
        new Array(num_true).fill(1),
        new Array(this.num_rep-num_true).fill(0));
      this.flag_gonogo = shuffle(this.flag_gonogo);
      this.set_stimlusorder();
  
      // Results parameters;
      this.tmp_res_ob = 0;
      this.tmp_rt = null;
      this.results_responses = [];
      this.results_rt = [];
      this.results_ind_previous = [];
      this.results_targetvalue = [];
    }
    
    next_trial(){
      if (this.ind_stimcond==this.ind_previous+1){
        this.save(); //This task saves the data once per block.
      } 
      //set the next trial parameters
      this.previous_buffer = this.trial_stimcond[this.ind_stimcond];
      this.ind_stimcond ++;
      this.tmp_res_ob = 0;
      this.tmp_rt = null;
      if (this.ind_stimcond==array_stimcond.length-1){
        this.flag_block = true;
      }
    }
  
    feedback(){
      //still not used
      push();
      noStroke();
      textSize(size_text);
      textAlign(CENTER);
      if(this.trial_stimcond[this.ind_previous+1]==stim_target){
        if (this.tmp_res_ob==1){
          noFill();
          stroke(col_1);
          strokeWeight(width_feedback);
          ellipse(Pos.center_x, Pos.center_y, size_feedback, size_feedback);
        }else{
          noFill();
          stroke(col_0);
          strokeWeight(width_feedback);
          line(Pos.center_x - len_fixation, Pos.center_y+ len_fixation, Pos.center_x + len_fixation, Pos.center_y - len_fixation);
          line(Pos.center_x- len_fixation, Pos.center_y - len_fixation, Pos.center_x+ len_fixation, Pos.center_y + len_fixation);
        }
      }else{
        if (this.tmp_res_ob==2){
          noFill();
          stroke(col_0);
          strokeWeight(width_feedback);
          line(Pos.center_x - len_fixation, Pos.center_y+ len_fixation, Pos.center_x + len_fixation, Pos.center_y - len_fixation);
          line(Pos.center_x- len_fixation, Pos.center_y - len_fixation, Pos.center_x + len_fixation, Pos.center_y + len_fixation);
        }else{
          noFill();
          stroke(col_1);
          strokeWeight(width_feedback);
          ellipse(Pos.center_x, Pos.center_y, size_feedback, size_feedback);
        }   
      }
      pop();
    }
  
    next_block(){
      //set the next block parameters
      this.previous_buffer = this.trial_stimcond[this.ind_stimcond];
      this.repetition ++;
      this.set_stimlusorder();
      this.ind_stimcond = 0;
      this.flag_block = false;
      this.tmp_res_ob = 0;
      this.tmp_rt = null;
    }
  
    set_stimlusorder(){
      this.trial_stimcond = shuffle(array_stimcond);
      this.stim_filler = shuffle(stim_filler);
      this.ind_previous = this.trial_stimcond.indexOf(this.stim_previous);
      this.ind_targ = this.trial_stimcond.indexOf(this.stim_target);
  
      if (this.ind_previous==this.trial_stimcond.length-1){
        let tmp_ind = this.trial_stimcond.indexOf(this.stim_filler[1]);
        this.trial_stimcond[this.ind_previous] = this.stim_filler[1];
        this.trial_stimcond[tmp_ind] = this.stim_previous;
        this.ind_previous = tmp_ind;
      }
  
      //console.log('gonogo flag is');
      //console.log(this.flag_gonogo[this.repetition]);
      if (this.flag_gonogo[this.repetition]==1){
        if (this.ind_previous+1!=this.ind_targ){
          this.trial_stimcond[this.ind_previous+1] = this.stim_target;
        }
      }else{
        if (this.ind_previous+1==this.ind_targ){
          this.trial_stimcond[this.ind_targ] = this.stim_filler[0];
        }
      }
    }
  
    save(){
      // save the current result.
      this.results_responses.push(this.tmp_res_ob);
      this.results_rt.push(this.tmp_rt);
      this.results_ind_previous.push(this.ind_previous);
      this.results_targetvalue.push(this.trial_stimcond[this.ind_previous+1]);
      //console.log('response is');
      //console.log(this.tmp_res_ob);
    }
  }
  
  