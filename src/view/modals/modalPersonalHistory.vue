<template>
    <div class="modal-backdrop"  >
        <div class="modal" v-on:mouseleave="mouseleave">
            <div class="container">
                <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Personal and Social History</h5>
                                            <button type="button" class="btn-close" @click="close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="container" id="container">
                                                <div class="row">
                                                    <div class="col">
                                                    <label for=""><b>Smoking history</b></label>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input"  name="smokeHistory" type="radio" id="smokeYes" value="Yes">
                                                                    <label class="form-check-label" for="smokeYes">Yes</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" name="smokeHistory" type="radio" id="smokeNo" value="No">
                                                                    <label class="form-check-label" for="smokeNo">No</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" name="smokeHistory" type="radio" id="smokeStopped" value="Stopped">
                                                                    <label class="form-check-label" for="smokeStopped">Stopped</label>
                                                                </div>
                                                            </div>
                                                            <div class="row form-inline">
                                                                <div class="form-group mx-sm-1 mb-2">
                                                                    <input type="text" class="form-control"  id="" placeholder="Pack/year">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <label for=""><b>Second Hand Smoker (SHS)</b></label>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" name="SHS" type="radio" id="shsYes" value="Yes">
                                                                    <label class="form-check-label" for="shsYes">Yes</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" name="SHS" type="radio" id="shsNo" value="No">
                                                                    <label class="form-check-label" for="shsNo">No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <label for=""><b>Alcohol Intake</b></label>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" id="alcoholYes" value="Yes">
                                                                    <label class="form-check-label" for="alcoholYes">Yes</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" id="alcoholNo" value="No">
                                                                    <label class="form-check-label" for="alcoholNo">No</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" id="alcoholStopped" value="Stopped">
                                                                    <label class="form-check-label" for="alcoholStopped">Stopped</label>
                                                                </div>
                                                            </div>
                                                            <div class="row form-inline">
                                                                <div class="form-group mx-sm-1 mb-2">
                                                                    <input type="text" class="form-control" id="" placeholder="drinks/day">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <label for=""><b>Sexually active</b></label>
                                                        <div class="row">
                                                                <div class="col">
                                                                    <div class="form-check form-check-inline">
                                                                        <input class="form-check-input" type="radio" id="sexYes" value="Yes">
                                                                        <label class="form-check-label" for="sexYes">Yes</label>
                                                                    </div>
                                                                    <div class="form-check form-check-inline">
                                                                        <input class="form-check-input" type="radio" id="sexNo" value="No">
                                                                        <label class="form-check-label" for="sexNo">No</label>
                                                                    </div>
                                                                </div>
                                                                <div class="row form-inline">
                                                                <div class="form-group mx-sm-1 mb-2">
                                                                    <input type="text" class="form-control"  id="" placeholder="# of sexual partner">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <label for=""><b>Average Montly Family Income:</b></label>
                                                        <div class="row">
                                                            <div class="form-group mx-sm-1 mb-2">
                                                                <input type="text" class="form-control"  id="" placeholder="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <label for=""><b>Means of Health Expenditure:</b></label>
                                                        <div class="row">
                                                            <div class="form-group mx-sm-1 mb-2">
                                                                <input type="text" class="form-control"  id="" placeholder="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                        
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-secondary border-b border-teal font-semibold" @click="close">Close</button>
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                        </div>
                                        
                                        </div>
                                    </div>                      
            </div>
        </div>
    </div>
    
</template>
  
  <script>
      export default {
          name: 'Modal',
          methods: {
            close() {
                this.$emit("close");
            },
            mouseleave: function(){
                console.log('mouse leave')
            }
          }
      };
  </script>
  
  
  <style scoped>
    .modal-backdrop {
        /* position: fixed; */
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        }
      .modal {
        /* background-color: rgba(0, 0, 0, 0.7); */
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        width: 500px;
        height: 610px;
        margin-top: 5%;
        margin-left: 40%;
    }
    #container{
        justify-content: flex-start;
        text-align: start;
    }
  </style>
