class ParameterManager{
    constructor() {
      // Stimulus parameters
      this.repetition = 0;
      this.ind_stimcond = 0;
      this.flag_block = false;
      this.flag_load = false;

      //save
      this.results_responses = [];
      this.results_rt = [];
      this.results_targetvalue_stim = [];
      this.results_speed_stim = [];
      this.results_correct = [];
      this.initialize();  
    }

      initialize(){
        this.num_rep = num_rep_main;
        this.num_target = num_target_main;
        this.flag_buttoncheck = Array(this.num_totaldot).fill(0);  
        //ConditionManager
        this.array_stimcond = array_stimcond_main;
        this.trial_stimcond = shuffle(this.array_stimcond); 
        this.tmp_res_ob = [];
        this.tmp_rt = null;
      }

      next_trial(){
        this.save();
        //set the next trial parameters 
        this.ind_stimcond ++;
        this.flag_load = false;
        this.tmp_res_ob = [];
        this.tmp_rt = null;
        this.flag_buttoncheck = Array(this.num_totaldot).fill(0);
        
        if (this.ind_stimcond==this.array_stimcond.length-1){
          this.flag_block = true;
        }
      }
    
      next_block(){
        this.save();
        //set the next block parameters
        this.flag_load = false;
        this.tmp_res_ob = [];
        this.tmp_rt = null;
        this.flag_buttoncheck = Array(this.num_totaldot).fill(0);
  
        this.flag_block = false;
        this.repetition ++;
        this.trial_stimcond = shuffle(this.array_stimcond); 
        this.ind_stimcond = 0;
        this.num_target = shuffle(this.num_target);
      }
    
      save(){
        // save the current result.
        let tmp_ordercheck = 0;;
        for (let i=0;i<this.tmp_res_ob.length;i++){
          if (this.tmp_res_ob[i]>4){
          } else{
            tmp_ordercheck ++;
          }
        }
        this.results_correct.push(tmp_ordercheck/this.tmp_res_ob.length);

        //console.log(this.results_correct)
        //console.log(tmp_ordercheck)
        
        this.results_responses.push(this.tmp_res_ob);
        this.results_rt.push(this.tmp_rt);
        this.results_speed_stim.push(this.trial_stimcond[this.ind_stimcond])
        //console.log('response is');
        //console.log(this.tmp_res_ob);
      }
  }