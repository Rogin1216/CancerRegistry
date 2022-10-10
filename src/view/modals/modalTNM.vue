<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalTNM" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">TNM Staging System</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mb-3">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="row justify-content-center mb-2">
                                                                    <div class="col-auto">
                                                                        <div class="form-check">
                                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                                <b>T</b>
                                                                            </label>
                                                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                                                <option selected>-- select --</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-auto">
                                                                        <div class="form-check">
                                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                                <b>N</b>
                                                                            </label>
                                                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                                                <option selected>-- select --</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-auto">
                                                                        <div class="form-check">
                                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                                <b>M</b>
                                                                            </label>
                                                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                                                <option selected>-- select --</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="row mb-2">
                                                                            <div class="col">
                                                                                <label for=""><b>Pathologic Stage: </b></label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">   
                                                                            <div class="col">
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" v-model="test" value="Stage_0" id="0">
                                                                                        <label class="form-check-label" for="0">
                                                                                            Stage 0
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" v-model="test" value="Stage_1A" id="1A">
                                                                                        <label class="form-check-label" for="1A">
                                                                                            Stage 1A
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" v-model="test" value="Stage_1B" id="1B">
                                                                                        <label class="form-check-label" for="1B">
                                                                                            Stage 1B
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col">
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" v-model="test" value="Stage_IIA" id="IIA">
                                                                                        <label class="form-check-label" for="IIA">
                                                                                            Stage IIA
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" v-model="test" value="Stage_IIB" id="IIB">
                                                                                        <label class="form-check-label" for="IIB">
                                                                                            Stage IIB
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col">
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" v-model="test" value="Stage_IIIA" id="IIIA">
                                                                                        <label class="form-check-label" for="IIIA">
                                                                                            Stage IIIA
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" v-model="test" value="Stage_IIIB" id="IIIB">
                                                                                        <label class="form-check-label" for="IIIB">
                                                                                            Stage IIIB
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" v-model="test" value="Stage_IIIC" id="IIIC">
                                                                                        <label class="form-check-label" for="IIIC">
                                                                                            Stage IIIC
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" v-model="test" value="Stage_IV" id="IV">
                                                                                        <label class="form-check-label" for="IV">
                                                                                            Stage IV
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
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
        width: 900px;
        height: 450px;
        margin-top: 5%;
        margin-left: 30%;
    }
  </style>