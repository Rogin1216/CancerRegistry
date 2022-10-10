<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalTestBaseline" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Test at Baseline</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row"> 
                                                <div class="col" id="col">
                                                    <div class="row">
                                                            <div class="col">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="CBC" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    CBC
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="FBS" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    FBS
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="CREATININE" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    CREATININE
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="AST/ALT" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    AST/ALT
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="ANC" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    ANC
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="CXR" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    CXR
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="ECG" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    ECG
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="UTZ" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    UTZ
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="CT-SCAN" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    CT-SCAN
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="ENDOSCOPY" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    ENDOSCOPY
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="MRI" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    MRI
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="others" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    Others:
                                                                </label>
                                                                <input type="text" class="form-control">
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
    // import { ref } from 'vue';
    // const checkedNames = ref([])

    // function close(){
    //             this.$emit("close")
    // }

    export default{
        name: 'Modal',
        data(){
            return{
                test: []
            }
        },
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
        width: 400px;
        height: 420px;
        margin-top: 5%;
        margin-left: 40%;
    }
    #col{
        /* border: 1px solid black; */
        justify-content: flex-start;
        text-align: start;
    }
  </style>