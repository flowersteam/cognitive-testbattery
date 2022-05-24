class ParameterManager{
    constructor() {
      // Stimulus parameters
      this.repetition = 0;
      this.ind_stimcond = 0;
      this.flag_block = false;
      this.flag_load = false;
      this.count_color = -1;

      this.flag_buttoncheck = Array(array_stimcond.length).fill(0);

      this.num_rep = num_rep_main;
      this.num_memory = shuffle(num_memory_main);
  
      //save
      this.results_responses = [];
      this.results_rt = [];
      this.results_targetvalue_stim = [];
      this.results_num_stim = [];
      this.results_correct = [];
      this.initialize();  
    }

      initialize(){
        this.num_memory = shuffle(this.num_memory);
        //ConditionManager
        let center_x = (Pos.center_x)-(size_target/2);
        let center_y =  (Pos.center_y)-(size_target/2);
        this.dict_pos = [
                          [center_x-1.5*shift_position,center_y-1.5*shift_position],
                          [center_x-0.5*shift_position,center_y-1.5*shift_position],
                          [center_x+0.5*shift_position,center_y-1.5*shift_position],
                          [center_x+1.5*shift_position,center_y-1.5*shift_position],
                          [center_x-1.5*shift_position,center_y-0.5*shift_position],
                          [center_x-0.5*shift_position,center_y-0.5*shift_position],
                          [center_x+0.5*shift_position,center_y-0.5*shift_position],
                          [center_x+1.5*shift_position,center_y-0.5*shift_position],
                          [center_x-1.5*shift_position,center_y+0.5*shift_position],
                          [center_x-0.5*shift_position,center_y+0.5*shift_position],
                          [center_x+0.5*shift_position,center_y+0.5*shift_position],
                          [center_x+1.5*shift_position,center_y+0.5*shift_position],
                          [center_x-1.5*shift_position,center_y+1.5*shift_position],
                          [center_x-0.5*shift_position,center_y+1.5*shift_position],
                          [center_x+0.5*shift_position,center_y+1.5*shift_position],
                          [center_x+1.5*shift_position,center_y+1.5*shift_position],
                        ];
    
        this.trial_stimcond = shuffle(array_stimcond); 
        this.tmp_res_ob = [];
        this.tmp_rt = null;
        this.order = -1;  
      }

      next_trial(){
        this.save();
        //set the next trial parameters 
        this.ind_stimcond ++;
        this.flag_load = false;
        this.tmp_res_ob = [];
        this.tmp_rt = null;
        this.count_color = -1;
        this.order = -1;
        this.flag_buttoncheck = Array(array_stimcond.length).fill(0);
        this.trial_stimcond = shuffle(array_stimcond);
  
        if (this.ind_stimcond==this.num_memory.length-1){
          this.flag_block = true;
        }
      }
    
      next_block(){
        this.save();
        //set the next block parameters
        this.flag_load = false;
        this.tmp_res_ob = [];
        this.tmp_rt = null;
        this.count_color = -1;
        this.order = -1;
        this.flag_buttoncheck = Array(array_stimcond.length).fill(0);
  
  
        this.flag_block = false;
        this.repetition ++;
        this.trial_stimcond = shuffle(array_stimcond); 
        this.ind_stimcond = 0;
        this.num_memory = shuffle(this.num_memory);
      }
    
      save(){
        // save the current result.
        let tmp_ordercheck =0
        for (let i=0;i<this.tmp_res_ob.length;i++){
        tmp_ordercheck = tmp_ordercheck+Math.abs(this.tmp_res_ob[i]-i);
        }
        if (tmp_ordercheck==0){
          this.results_correct.push(1);
        } else{
          this.results_correct.push(0);
        }
        //console.log(this.results_correct)
        //console.log(tmp_ordercheck)
        
        this.results_responses.push(this.tmp_res_ob);
        this.results_rt.push(this.tmp_rt);
        this.results_targetvalue_stim.push(this.trial_stimcond);
        this.results_num_stim.push(this.num_memory[this.ind_stimcond])
        //console.log('response is');
        //console.log(this.tmp_res_ob);
      }
  }