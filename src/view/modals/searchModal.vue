<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalLaterality" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                    <div class="modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLabel">Survival Status</h5> -->
                        
                        <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div class="d-block">
                        <div class="containerInput">
                            <div class="row">
                                <div class="col">
                                    <div class="divInput d-inline">
                                        <label for="">Hospital Code:</label>
                                        <input class="divInputBox" type="text" v-model="this.listStore.hpercode">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="divInput d-inline">
                                        <label for="">First name:</label>
                                        <input class="divInputBox" type="text" v-model="this.listStore.firstName">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="divInput d-inline">
                                        <label for="">Last name:</label>
                                        <input class="divInputBox" type="text" v-model="this.listStore.lastName">
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="divInput d-inline">
                                <div class="row mt-2">
                                    <label for="">Type of Cancer</label>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">lung</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Carcinoma</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto ">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Sarcoma</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto ">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Anal</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto ">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Bone</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Breast</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Cervical</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto ">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Gastric</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto ">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Skin</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto ">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Ovarian</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <label for="">Treatment</label>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Chemotherapy</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Surgery</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Hormonal</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <label for="">Status</label>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Remission</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input me-2" type="checkbox">
                                                <label for="">Stable disease</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div> -->
                        </div>
                    </div>
                    <!-- <div class="d-block">
                        <div class="containerInput">
                            <div class="divInput d-inline">
                                <label for="">Gender:</label>
                                <div class="d-inline">
                                    <input type="radio">
                                    <label for="">Male</label>
                                </div>
                                <div class="d-inline">
                                    <input type="radio">
                                    <label for="">Male</label>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-secondary" @click="close">Close</button> -->
                        <button class="btn btn-danger" @click="clearBtn">Clear Fields</button>
                        <button type="button" @click="filterSearch" class="btn btn-primary">Filter</button>
                    </div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useListStore } from '@/store/ListStore';
    export default{
        setup(){
        const listStore = useListStore()
        // const { formStore } = storeToRefs(patStore)
        return { listStore }
    },
        data(){
            return{
                count: 1,
                values:{},
                allPat:[],
                filtered:[]
            }
        },
        name: 'Modal',

        async created(){
            this.allPat = await this.listStore.allPatients
            
        },
        methods: {
            close(){
                this.$emit("close")
            },
            async filterSearch(){
                console.log()
                // console.log(this.listStore.show)
                // console.log(this.listStore.firstName)
                // console.log(this.listStore.show = this.listStore.list_allpatient
                if(this.listStore.firstName || this.listStore.lastName || this.listStore.hpercode){
                    this.listStore.show = this.listStore.list_allpatient
                    .filter((td) => {return this.listStore.firstName.toLowerCase().split(" ").every(v => td.patfirst.toLowerCase().includes(v))})
                    .filter((td) => {return this.listStore.lastName.toLowerCase().split(" ").every(v => td.patlast.toLowerCase().includes(v))})
                    .filter((td) => {return this.listStore.hpercode.toLowerCase().split(" ").every(v => td.hpercode.toLowerCase().includes(v))})
                }
                    
                // else{
                //     console.log(await this.listStore.allPatients)
                //     return await this.listStore.allPatients
                // }
                this.$emit("close")
            },
            clearBtn(){
                this.listStore.firstName =''
                this.listStore.lastName = ''
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
        height: 620px;
        margin-top: 5%;
        margin-left: 25%;
    }
    .containerInput{
        
        width:900px;
        margin: 5px 0 0 0;
        border-radius: 10px;
        padding: 5px;
    }
    input[type=text]{
        outline:none;
    }
    .divInputBox:focus, input[type=text]:focus{
        box-shadow:0 0 5px rgba(81, 203, 238, 1);

    }
    .divInputBox{
        border-bottom: 1px solid rgba(81, 203, 238, 1);
        margin-top:5px;
    }


  </style>