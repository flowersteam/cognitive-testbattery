class ParameterManager{
    constructor() {
      // Stimulus parameters
      this.repetition = 0;
      this.ind_stimcond = 0;
      this.flag_block = false;

      this.num_rep = num_rep_main;
      this.time_stimduration = time_stimduration_main;
      this.array_stimcond = array_stimcond_main;
      this.trial_stimcond = shuffle(this.array_stimcond);
      this.flag_load = false;
  
      this.tmp_res_ob = 0;
      this.tmp_rt = null;
      this.results_responses = [];
      this.results_rt = [];
      this.results_targetvalue = [];
    }
  
    next_trial(){
      this.save(); 
      //set the next trial parameters
      this.flag_load = false;
      this.ind_stimcond ++;
      this.tmp_res_ob = 0;
      this.tmp_rt = null;
      if (this.ind_stimcond==this.array_stimcond.length-1){
        this.flag_block = true;
      }
    }
  
    next_block(){
      this.save(); 
      //set the next block parameters
      this.flag_load = false;
      this.repetition ++;
      this.trial_stimcond = shuffle(this.array_stimcond);
      this.ind_stimcond = 0;
      this.flag_block = false;
      this.tmp_res_ob = 0;
      this.tmp_rt = null;
    }
  
    save(){
      // save the current result.
      this.results_responses.push(this.tmp_res_ob);
      this.results_rt.push(this.tmp_rt);
      this.results_targetvalue.push(this.trial_stimcond[this.ind_stimcond]);
      //console.log('response is');
      //console.log(this.tmp_res_ob);
    }
  
  }
  