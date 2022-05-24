class ParameterManager{
    constructor() {
      // Stimulus parameters
      this.repetition = 0;
      this.ind_stimcond = 0;
      this.flag_block = false;
  
      this.flag_correct = true;
      this.num_rep = num_rep;
  
      this.initialize();

      // Results parameters;
      this.tmp_res_ob = 0;
      this.tmp_rt = null;
      this.results_responses = [];
      this.results_rt = [];
      this.results_targetvalue = [];
      this.results_flagcorrect = [];
      this.results_stimind = [];
      this.results_trial = [];
    }
  
    initialize(){
      ind_targlist = shuffle(ind_targlist);
      ind_fillerlist = shuffle(ind_fillerlist);
  
      dict_longtarget = shuffle(dict_longtarget);
      distance_shorttarget = shuffle(distance_shorttarget);
  
      this.array_stim = Array(num_stimulus).fill(0);
      this.trial_stimind = Array(num_stimulus).fill(0);
  
  
      
      
      let j = 0;
      let m = 0;
      while (j < num_longtarget){
        let tmp1 = this.array_stim[dict_longtarget[j]] + 1;
        distance_longtarget = shuffle(distance_longtarget);
        let tmp2 = this.array_stim[dict_longtarget[j]+distance_longtarget[0]]+1;
        if (tmp1==1 && tmp2==1){
          this.array_stim[dict_longtarget[j]] = 1
          this.array_stim[dict_longtarget[j]+distance_longtarget[0]] = 2

          this.trial_stimind[dict_longtarget[j]] = m;
          this.trial_stimind[dict_longtarget[j]+distance_longtarget[0]] = m; 
          m = m+1;
          j = j+1;
        }
      }
      
      j = 0;
      while (j < num_shorttarget){
        let ind_tmp = getRandomInt(min_shorttarget,max_shorttarget)
        let tmp1 = this.array_stim[ind_tmp] + 1;
        let tmp2 = this.array_stim[ind_tmp+distance_shorttarget[j]]+1;
        if (tmp1==1 && tmp2==1){
          this.array_stim[ind_tmp] = 1;
          this.array_stim[ind_tmp+distance_shorttarget[j]] = 2;
          this.trial_stimind[ind_tmp] = m;
          this.trial_stimind[ind_tmp+distance_shorttarget[j]] = m;
          m = m+1;
          j = j+1;
        }
      }
    
       
      let k = 0;
      for (let i=0;i<num_stimulus;i++){
        if (this.array_stim[i]==0){
          this.trial_stimind[i] = k;
          k ++;
        }
        //console.log(this.array_stim[i])
      }
      
    }
  
    next_trial(){
      this.save();
  
      //set the next trial parameters
      this.ind_stimcond ++;
      this.tmp_res_ob = 0;
      this.tmp_rt = null;
      
      if (flag_practice==true){
        if (this.ind_stimcond==prac_num_rep-1){
          this.flag_block = true;
        }
      } else{
        if (this.ind_stimcond==num_stimulus-1){
          this.flag_block = true;
        }
      }
    }
  
    next_block(){
      this.save();
      //assuming only one block
  
      //set the next block parameters
      this.repetition ++;
      this.ind_stimcond = 0;
      this.flag_block = false;
      this.tmp_res_ob = 0;
      this.tmp_rt = null;
    }
  
    make_responseflag(){
      if (this.array_stim[this.ind_stimcond]==2){
        if (this.tmp_res_ob==1){
          this.flag_correct = true;
        }else{
          this.flag_correct = false;
        }
      } else{
        if (this.tmp_res_ob==1){
          this.flag_correct = false;
        }else{
          this.flag_correct = true;
        }
      }
    }
  
    save(){
      // save the current result.
      this.results_responses.push(this.tmp_res_ob);
      this.results_rt.push(this.tmp_rt);
      this.results_targetvalue.push(this.array_stim[this.ind_stimcond]);
      this.results_flagcorrect.push(this.flag_correct);
      this.results_stimind.push(this.trial_stimind[this.ind_stimcond]);
      this.results_trial.push(this.ind_stimcond);
    
      //console.log('response is');
      //console.log(this.tmp_res_ob);
    }
  }