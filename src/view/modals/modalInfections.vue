<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Other Medical Conditions</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mb-3">
                                                        <div class="row">
        <div class="col border border-secondary">
            <div class="row">
                <div class="col text-white" id="divIndigo">
                    <b>INFECTIONS</b> (if applicable)
                </div>
            </div>
            <div class="row">
                <div class="col col-md-3">
                    <input type="hidden" name="infHuPapCh" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="infHuPapCh" id="huPaViIn" >
                    <label for="huPaViIn">Human Papilloma Virus Infection</label>
                </div>
                <div class="col">
                    <label for="">Year Examined/Dx:</label>
                    <input type="text" class="inputlabelunderline" readonly name="infHuPap" placeholder="---" value="">
                </div>
                <div class="col col-md-3">
                    <input type="hidden" name="infHepBCh" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="infHepBCh" id="HepaB" >
                    <label for="HepaB">Hepatitis B Viurs Infection</label>
                </div>
                <div class="col">
                    <label for="">Year Examined/Dx:</label>
                    <input type="text" class="inputlabelunderline" readonly name="infHepaB" placeholder="---" value="">
                </div>
            </div>
            <div class="row border-top border-secondary">
                <div class="col col-md-3">
                    <input type="hidden" name="infHelPyCh" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="infHelPyCh" id="hePyInf" >
                    <label for="hePyInf">Helicobacter Pylori Infection</label>
                </div>
                <div class="col">
                    <label for="">Year Examined/Dx:</label>
                    <input type="text" class="inputlabelunderline" readonly name="infHeliPy" placeholder="---" value="">
                </div>
                <div class="col col-md-3">
                    <input type="hidden" name="infOthCh" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="infOthCh" id="otherInfect" >
                    <label for="otherInfect">Others, specify</label>
                </div>
                <div class="col">
                    <label for="">Year Examined/Dx:</label>
                    <input type="text" class="inputlabelunderline" readonly name="infOthers" placeholder="---" value=""> 
                </div>
            </div>
            <!-- <div class="row">
                <div class="col col-lg-4 border-end border-top border-secondary">
                    Height:
                    <input type="text" class="inputlabelunderlineShort" readonly name="patHeight" value="">
                    cms
                </div>
                <div class="col col-lg-4 border-end border-top border-secondary">
                    Weight:
                    <input type="text" class="inputlabelunderlineShort" readonly name="patWeight" value="">
                    cms
                </div>
                <div class="col col-lg-4 border-top border-secondary" id="divpeach">
                    BSA:
                    <input type="text" class="inputlabelunderlineShort1" name="patBsa" value="">
                </div>
            </div> -->

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
        height: 360px;
        margin-top: 5%;
        margin-left: 25%;
    }
  </style>