<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Occupational/Environmental History</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container" id="container">
                                            <div class="row">
                                                <div class="col">
                                                    <label for=""><b>Exposure to:</b> </label>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-check">
                                                        <input class="form-check-input"  type="checkbox" id="" value="Air contaminants">
                                                        <label class="form-check-label" for="">Air contaminants</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input"  type="checkbox" id="" value="Toxic waste">
                                                        <label class="form-check-label" for="">Toxic waste</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="" value="Radiation" >
                                                        <label class="form-check-label" for="">Radiation</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input"  type="checkbox" id="" value="Pesticides" >
                                                        <label class="form-check-label" for="">Pesticides</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input"  type="checkbox" id="" value="Chemicals in consumer products" >
                                                        <label class="form-check-label" for="">Chemicals in consumer products</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input"  type="checkbox" id="" value="Extreme temperatures and weather events" >
                                                        <label class="form-check-label" for="">Extreme temperatures and weather events</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input"  type="checkbox" id="" value="Extreme temperatures and weather events" >
                                                        <label class="form-check-label" for="">None</label>
                                                        </div>

                                                        <div class="form-check form-check-inline">
                                                        <input class="form-check-input"  type="checkbox" id="" value="Extreme temperatures and weather events" >
                                                        <label class="form-check-label" for="">Others:</label>
                                                        <input type="text" class="form-control">
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <label for=""><b>Longest Job Held:</b></label>
                                                    <div class="row">
                                                        <div class="col">
                                                            <input type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-secondary border-b border-teal font-semibold" @click="close">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
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
        height: 560px;
        margin-top: 5%;
        margin-left: 40%;
    }
    #container{
        justify-content: flex-start;
        text-align: start;
    }
  </style>
<!-- 
 -->
