<template>
    <div class="modal-backdrop">
 <!-- PRIMARY CURRENT CANCER SITE panel -->
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
        <div class="col">
            <div class="row">
                <div class="col border-top border-bottom border-secondary" id="divLightblue">
                    <b>PRIMARY CURRENT CANCER SITE/DIAGNOSIS</b>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="col col-lg-8">
                            <div class="row">
                            <div class="col border-end border-secondary">
                            <div class="row">
                                <div class="col" id="divpeach">
                                    Solid Tumors:
                                </div>
                            </div>
                            <div class="row" id="container">
                                <div class="col col-lg-7 border-top border-secondary">
                                    <div class="row"> 
                                        <div class="col">
                                            <input type="hidden" name="STchAnal" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchAnal" id="tumAnal">
                                            <label for="tumAnal">Anal</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchBone" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchBone" id="tumBone">
                                            <label for="tumBone">Bone</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchBreast" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchBreast" id="tumBreast">
                                            <label for="tumBreast">Breast</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchCerv" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchCerv" id="tumCerv">
                                            <label for="tumCerv">Cervical</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchColon" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchColon" id="tumCol" >
                                            <label for="tumCol">Colon</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchTumEso" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchTumEso" id="tumEso" >
                                            <label for="tumEso">tumEsophageal</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchGast" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchGast" id="tumGas" >
                                            <label for="tumGas">Gastric</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchHead" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchHead" id="tumHeadNeck" >
                                            <label for="tumHeadNeck">Head and Neck, specify</label>
                                            <input type="text" class="inputlabelunderlineName" readonly name="tumHeadNeck" value="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchHepa" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchHepa" id="tumHepato" >
                                            <label for="tumHepato">Hepatobiliary, specify</label>
                                            <input type="text" class="inputlabelunderlineName" readonly name="tumHepato" value="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchKidney" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchKidney" id="tumKid" >
                                            <label for="tumKid">Kidney</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchNeuro" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchNeuro" id="tumNeuro" >
                                            <label for="tumNeuro">Neuroendocrine, site</label>
                                            <input type="text" class="inputlabelunderlineName" readonly name="tumNeuro" value="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchLung" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchLung" id="tumLung" >
                                            <label for="tumLung">Lung:</label>
                                            <input type="text" class="inputlabelunderlineShort" readonly name="tumLungNSC" value="">
                                            <label for="tumLungNSC">NSCLC</label>
                                            <input type="text" class="inputlabelunderlineShort" readonly name="tumLungSCL" value="">
                                            <label for="tumLungSCL">SCLC</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col border-start border-top border-secondary">
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchOva" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchOva" id="tumOva">
                                            <label for="tumOva">Ovarian</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchPanc" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchPanc" id="tumPanc" >
                                            <label for="tumPanc">Pancreatic</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchPros" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchPros" id="tumPros" >
                                            <label for="tumPros">Prostate</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchRect" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchRect" id="tumRec">
                                            <label for="tumRec">Rectal</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchSkin" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchSkin" id="tumSkin" >
                                            <label for="tumSkin">Skin</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchSoftTis" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchSoftTis" id="tumSoftTis" >
                                            <label for="tumSoftTis">Soft tissue</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchTestis" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchTestis" id="tumTes">
                                            <label for="tumTes">Testis</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchThy" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchThy" id="tumThy">
                                            <label for="tumThy">Thyroid</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchBlad" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchBlad" id="tumBladd">
                                            <label for="tumBladd">Urinary Bladder</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchUterine" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchUterine" id="tumUter" >
                                            <label for="tumUter">Uterine</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="STchOther" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="STchOther" id="tumOther" >
                                            <label for="tumOther">Others:</label>
                                            <input type="text" class="inputlabelunderlineShort" readonly name="tumOther" value="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                        <div class="col" id="container">
                            <div class="row">
                                <div class="col border-bottom border-secondary" id="divpeach">
                                Hematolymphoid malignancies:
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-auto">
                                    <input type="hidden" name="heMalChAll" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="heMalChAll" id="hemaAll" >
                                    <label for="hemaAll">ALL</label>
                                </div>
                                <div class="col">
                                    <input type="hidden" name="heMalChBcell" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="heMalChBcell" id="hemaB" >
                                    <label for="hemaB">B-cell</label>
                                    <input type="hidden" name="heMalChTcell" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="heMalChTcell" id="hemaT" >
                                    <label for="hemaT">T-cell</label>
                                </div>
                            </div>
                            <div class="row">   
                                <div class="col-auto">
                                <input type="hidden" name="heMaChAML" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="heMaChAML" id="hemaAML" >
                                    <label for="hemaAML">AML</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                <input type="hidden" name="heMaChBlymp" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="heMaChBlymp" id="hemaBly" >
                                    <label for="hemaBly">B-lymphoma ,specify</label>
                                    <input type="text" class="inputlabelunderlineName" readonly name="hemaBlyInput" value="">
                                </div>
                            </div>
                            <div class="row">   
                                <div class="col-auto">
                                <input type="hidden" name="heMaChHodg" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="heMaChHodg" id="hemaHod" >
                                    <label for="hemaHod">Hodgkin Lymphoma</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-auto">
                                <input type="hidden" name="heMaChMDS" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="heMaChMDS" id="hemaMDS" >
                                    <label for="hemaMDS">MDS ,specify</label>
                                </div>
                                <div class="col">
                                    <input type="text" class="inputlabelunderlineShort" readonly name="hemaCMLinput" value="">
                                    <label for="hemaMDS">CML</label>
                                    <div class="row">
                                        <div class="col">
                                            <input type="text" class="inputlabelunderlineShort" readonly name="hemaPVinput" value="">
                                            <label for="hemaMDS">PV</label>
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text" class="inputlabelunderlineShort" readonly name="hemaETinput" value="">
                                                    <label for="hemaMDS">ET</label>
                                                    <div class="row">
                                                        <div class="col">
                                                            <input type="text" class="inputlabelunderlineShort" readonly name="hemaMFinput" value="">
                                                            <label for="hemaMDS">MF</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                <input type="hidden" name="heMaChTlymp" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="heMaChTlymp" id="hemaTlym" >
                                    <label for="hemaTlym">T-lymphoma</label>
                                    <input type="text" class="inputlabelunderlineName" readonly name="hemaTinput" value="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                <input type="hidden" name="heMaChOth" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="heMaChOth" id="hemaOthers">
                                    <label for="hemaOthers">Others:</label>
                                    <input type="text" class="inputlabelunderlineName" readonly name="hemaOthersinput" value="">
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
        /* justify-content: center; */
        justify-content: flex-start;    
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
        height: 650px;
        margin-top: 5%;
        margin-left: 25%;
    }
    #container{
        border: 1px solid black;
        justify-content: flex-start;
        text-align: start;
    }

    </style>