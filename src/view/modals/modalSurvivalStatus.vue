<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalLaterality" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Survival Status</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="wrapper">
                                                        <div>
                                                            <input type="text" placeholder="text here">
                                                        </div>
                                                        <div v-for="key in count" :key="key">
                                                            <div>
                                                                <input type="text" v-model="values['dynamic-field-'+key]" :id="key">
                                                            </div>
                                                        </div>
                                                        <div class="d-inline">
                                                            <button id="add_more_fields" @click="add">add</button>
                                                        </div>
                                                        <div class="d-inline">
                                                            <button id="remore_fields" @click="remove">remove</button>
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
        data(){
            return{
                count: 1,
                values:{}
            }
        },
        name: 'Modal',

        methods: {
            close(){
                this.$emit("close")
            },
            add: function(){
                this.count++;
            },
            remove: function(){
                this.count--;
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
        height: 420px;
        margin-top: 5%;
        margin-left: 25%;
    }


  </style>