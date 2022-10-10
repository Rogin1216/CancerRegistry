<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalLaterality" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-sm">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Laterality</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col" id="col">
                                                    <div class="mb-3">
                                                        <div class="col">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Left" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    Left
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Right" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    Right
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Mid" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    Mid
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Bilateral" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    Bilateral
                                                                </label>
                                                                </div>
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Undertermined" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    Undertermined
                                                                </label>
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
        width: 300px;
        height: 380px;
        margin-top: 5%;
        margin-left: 45%;
    }
    #col{
        /* border: 1px solid black; */
        justify-content: flex-start;
        text-align: start;
    }
  </style>