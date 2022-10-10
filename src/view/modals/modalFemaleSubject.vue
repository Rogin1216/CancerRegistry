<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">For Female Subjects:</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="mb-3">
                                                        Gynecological History
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Age of Menarche: </label>
                                                                    <input type="number" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Menstrual Status: </label>
                                                                    
                                                                    <select class="form-select" name="" id="">
                                                                        <option value="">Premonopausal</option>
                                                                        <option value="">Postmenopausal</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Age of Menopause: </label>
                                                                    <input type="text" class="form-control">
                                                                    <label for="" class="form-control">Cause: </label>
                                                                    <input type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Contraceptive use (Duration): </label>
                                                                    <input type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                </div>
                                                <div class="col">
                                                    <div class="mb-3">
                                                        OB history
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Age of 1<sup>st</sup> birth: </label>
                                                                    <input type="number" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Pregnancy Stage: </label>
                                                                    <select class="form-select" name="" id="">
                                                                        <option value="">---</option>
                                                                        <option value="">1st trimester</option>
                                                                        <option value="">2nd trimester</option>
                                                                        <option value="">3rd trimester</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" @click="close">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'Modal',
        methods: {
            close(){
                this.$emit("close")
            }
        }
    }
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
        width: 1200px;
        height: 490px;
        margin-top: 5%;
        margin-left: 20%;
    }
  </style>