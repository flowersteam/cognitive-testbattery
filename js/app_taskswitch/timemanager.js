class TimeManager{
    constructor() {
      this.scene = 0;
      this.starttime_exp = Date.now();
      this.starttime_block = null;
      this.activetime_block = null;
  
      this.scene_start = 0;
      //for main experiment
      this.scene_mainstart = 1;
      this.scene_key = 3;
      this.scene_back = 1;
      this.end_scene = 4;

      //for tutorial
      this.scene_tutorialstart = 6;
      this.tutorial_end = 10;
      this.scene_break = 11;
  
    }
  
    show(){
        if(Time.scene==0){
            scene_instruction();
          }else if(Time.scene==1){
            scene_fixation();
          }else if(Time.scene==2){
            scene_stim();
          }else if(Time.scene==3){
            scene_backmask();
          }else if(Time.scene==4){
            scene_end();
          }else if(this.scene==6){
            //tutorial
            scene_tutorial1();
          }else if(this.scene==7){
            scene_tutorial2();
          }else if(this.scene==8){
            scene_tutorial3();
          }else if(this.scene==9){
            scene_tutorial4();
          }else if(this.scene==10){
            scene_tutorial5();
          }else if(this.scene==11){
            scene_break();
          }
    }
    
    update(){
      if (this.scene==this.scene_start){
        this.scene = this.scene_tutorialstart;
        button_next.show();
        this.starttime_block = Date.now(); 
      }else if(this.scene==this.scene_key){
        //here is the end part of the trial.
        this.repeat();
        this.starttime_block = Date.now();      
      }else{
        this.scene ++;
        this.starttime_block = Date.now();
      }
    }
    update_tutorial_next(){
      if(this.scene==this.scene_tutorialstart){
        this.scene ++;
        this.starttime_block = Date.now(); 
      }else{
        this.scene ++;
        this.starttime_block = Date.now();
      }
    }

    update_tutorial_previous(){
      if(this.scene==this.scene_tutorialstart){
        this.scene --;
        this.starttime_block = Date.now();      
      }else{
        this.scene --;
        this.starttime_block = Date.now();
      }
    }
    start(){
      this.scene = this.scene_mainstart;
      this.starttime_block = Date.now();
    }
  
    repeat(){
      if (Params.flag_block ==true){
        Params.next_block();
        // This experiment is regarded as one block experiment. The preset repetetion is recalculated in one block in the constructer.
        if (flag_practice==true){
          this.scene = this.tutorial_end;
          button_start.show();
        }else{
          if (flag_break==true){
            this.scene = this.scene_break;
            button_start.show();
          }else{
            this.scene = this.scene_end;
            button_end.show();
          }
        }
      }else{
        Params.next_trial();      
        this.scene = this.scene_back;
      }
    }
    
    count(){
      // Calculate the duration since the target scene (block) started
      this.activetime_block = (Date.now() - this.starttime_block);
    }
  
    count_response(){
      // Calculate the reaction time of the participant
      Params.tmp_rt = (Date.now() - this.starttime_block);
    }
  
    blockstart(){
      this.starttime_block = Date.now();
    }
   }
  