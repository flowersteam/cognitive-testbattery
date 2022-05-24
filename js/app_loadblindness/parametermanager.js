class ParameterManager{
    constructor() {
      // Stimulus parameters
      this.repetition = 0;
      this.ind_stimcond = 0;
      this.flag_block = false;
      this.repetition = 0;

      this.num_rep = num_rep_main;
      this.time_stimduration = time_stimduration_main; 
  
      //ConditionManager
      this.trial_ind_distance = shuffle(ind_distance);
      this.initialize();
      //save
      this.tmp_res_ob = 0;
      this.tmp_res_fixation = null;
      this.tmp_rt = null;
      this.tmp_rt_fixation = null;

      this.results_responses_pos = [];
      this.results_responses_fix = [];
      this.results_rt = [];
      this.results_targetvalue_stim = [];
      this.results_targetvalue_fixation = [];
      this.results_target_distance = [];
      this.results_rt_fixation = [];
  
    }

    initialize(){
      this.x_pos1 = (Pos.center_x)-distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2))-size_img;
      this.x_pos2 = (Pos.center_x)+distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2));
      this.y_pos1 = (Pos.center_y)-distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2))-size_img;
      this.y_pos2 = (Pos.center_y)+distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2));
      this.dict_pos = [[this.x_pos1,this.y_pos1],[this.x_pos2,this.y_pos1],[this.x_pos1,this.y_pos2],[this.x_pos2,this.y_pos2]];
      this.dict_fixation = [[0,length_longer],[length_longer,0]];
  
      this.trial_fixation = shuffle(array_fixation);
      this.trial_stimcond = shuffle(array_stimcond); 
    }
    
    next_trial(){
      //if not correct response for fixation length, the process doesn't go on.
      if (this.tmp_res_fixation==this.trial_fixation[0]){
      this.save(); 
      //set the next trial parameters
      this.trial_fixation = shuffle(array_fixation);
      this.trial_stimcond = shuffle(array_stimcond); 
      this.ind_stimcond ++;
      this.tmp_res_ob = 0;
      this.tmp_res_fixation = null;
      this.tmp_rt = null;
      this.tmp_rt_fixation = null;
      this.x_pos1 = (Pos.center_x)-distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2))-size_img;
      this.x_pos2 = (Pos.center_x)+distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2));
      this.y_pos1 = (Pos.center_y)-distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2))-size_img;
      this.y_pos2 = (Pos.center_y)+distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2));
      this.dict_pos = [[this.x_pos1,this.y_pos1],[this.x_pos2,this.y_pos1],[this.x_pos1,this.y_pos2],[this.x_pos2,this.y_pos2]];
      if (this.ind_stimcond==ind_distance.length-1){
        this.flag_block = true;
      }
      }
      this.trial_fixation = shuffle(array_fixation);
      this.trial_stimcond = shuffle(array_stimcond);
    }
  
    //no block at the moment in this experiment
    next_block(){
      if (this.tmp_res_fixation==this.trial_fixation[0]){
      //set the next block parameters
      this.save(); 
      this.repetition ++;
      this.trial_ind_distance = shuffle(ind_distance);
      this.ind_stimcond = 0;
      this.flag_block = false;
      this.tmp_res_ob = 0;
      this.tmp_res_fixation = null;
      this.tmp_rt = null;
      this.tmp_rt_fixation = null;
      this.x_pos1 = (Pos.center_x)-distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2))-size_img;
      this.x_pos2 = (Pos.center_x)+distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2));
      this.y_pos1 = (Pos.center_y)-distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2))-size_img;
      this.y_pos2 = (Pos.center_y)+distance_from_center[this.trial_ind_distance[this.ind_stimcond]]*(1/Math.sqrt(2));
      this.dict_pos = [[this.x_pos1,this.y_pos1],[this.x_pos2,this.y_pos1],[this.x_pos1,this.y_pos2],[this.x_pos2,this.y_pos2]];
      }
      this.trial_fixation = shuffle(array_fixation);
      this.trial_stimcond = shuffle(array_stimcond); 
    }
  
    save(){
      // save the current result.
      this.results_responses_pos.push(this.tmp_res_ob);
      this.results_responses_fix.push(this.tmp_res_fixation);
      this.results_rt.push(this.tmp_rt);
      this.results_rt_fixation.push(this.tmp_rt_fixation);
      this.results_targetvalue_stim.push(this.trial_stimcond[this.ind_stimcond]);
      this.results_targetvalue_fixation.push(this.trial_fixation[0]);
      this.results_target_distance.push(distance_from_center[this.trial_ind_distance[this.ind_stimcond]]);
      //console.log('response is');
      //console.log(this.tmp_res_ob);
    }
  
  }