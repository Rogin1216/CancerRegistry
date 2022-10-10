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
        <div class="col">
            <div class="row">
                <div class="col border-top border-bottom border-secondary" id="divLightblue">
                    <b>CONCURRENT CANCER SITE/DIAGNOSIS (IF APPLICABLE)</b>
                    <input type="hidden" name="conChNa" value="0">
                    <input class="form-check-input" type="checkbox" value="" name="conChNa" id="NA" checked>
                    <label for="NA" ><b>N/A</b> </label>
                </div>
            </div>
            <div class="row" id="NAdiv">
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
                                        <input type="hidden" name="conSTchAnal" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchAnal" id="contumAnal" >
                                            <label for="contumAnal">Anal</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchBone" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchBone" id="contumBone" >
                                            <label for="contumBone">Bone</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchBreast" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchBreast" id="contumBreast" > 
                                            <label for="contumBreast">Breast</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchCerv" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchCerv" id="contumCerv" >
                                            <label for="contumCerv">Cervical</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="heMalTcell" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchColon" id="contumCol" >
                                            <label for="contumCol">Colon</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchTumEso" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchTumEso" id="contumEso" >
                                            <label for="contumEso">tumEsophageal</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchGast" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchGast" id="contumGas">
                                            <label for="contumGas">Gastric</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchHead" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchHead" id="contumHeadNeck" >
                                            <label for="contumHeadNeck">Head and Neck, specify</label>
                                            <input type="text" class="inputlabelunderlineName" readonly name="contumHeadNeck" value="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchHepa" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchHepa" id="contumHepato" >
                                            <label for="contumHepato">Hepatobiliary, specify</label>
                                            <input type="text" class="inputlabelunderlineName" readonly name="contumHepato" value="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">      
                                        <input type="hidden" name="conSTchKidney" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchKidney" id="contumKid" >
                                            <label for="contumKid">Kidney</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchNeuro" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchNeuro" id="contumNeuro" >
                                            <label for="contumNeuro">Neuroendocrine, site</label>
                                            <input type="text" class="inputlabelunderlineName" readonly name="contumNeuro" value="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchLung" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchLung" id="contumLung" >
                                            <label for="contumLung">Lung:</label>
                                            <input type="text" class="inputlabelunderlineShort" readonly name="contumLungNSC" value="">
                                            <label for="contumLungNSC">NSCLC</label>
                                            <input type="text" class="inputlabelunderlineShort" readonly name="contumLungSCL" value="">
                                            <label for="contumLungSCL">SCLC</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col border-start border-top border-secondary">
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchOva" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchOva" id="contumOva" >
                                            <label for="contumOva">Ovarian</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchPanc" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchPanc" id="contumPanc" >
                                            <label for="contumPanc">Pancreatic</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchPros" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchPros" id="contumPros" >
                                            <label for="contumPros">Prostate</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchRect" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchRect" id="contumRec" >
                                            <label for="contumRec">Rectal</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchSkin" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchSkin" id="contumSkin" >
                                            <label for="contumSkin">Skin</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchSoftTis" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchSoftTis" id="contumSoftTis" >
                                            <label for="contumSoftTis">Soft tissue</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchTestis" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchTestis" id="contumTes" >
                                            <label for="contumTes">Testis</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchThy" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchThy" id="contumThy" >
                                            <label for="contumThy">Thyroid</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchBlad" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchBlad" id="contumBladd" >
                                            <label for="contumBladd">Urinary Bladder</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchUterine" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchUterine" id="contumUter" >
                                            <label for="contumUter">Uterine</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <input type="hidden" name="conSTchOther" value="0">
                                            <input class="form-check-input" type="checkbox" value="1" name="conSTchOther" id="contumOther" >
                                            <label for="contumOther">Others:</label>
                                            <input type="text" class="inputlabelunderlineShort" readonly name="contumOther" value="">
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
                                <input type="hidden" name="conheMalChAll" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="conheMalChAll" id="conhemaAll" >
                                    <label for="conhemaAll">ALL</label>
                                </div>
                                <div class="col">
                                <input type="hidden" name="conheMalChBcell" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="conheMalChBcell" id="conhemaB" >
                                    <label for="conhemaB">B-cell</label>
                                    <input type="hidden" name="conheMalChTcell" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="conheMalChTcell" id="conhemaT" >
                                    <label for="conhemaT">T-cell</label>
                                </div>
                            </div>
                            <div class="row">   
                                <div class="col-auto">
                                <input type="hidden" name="conheMaChAML" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="conheMaChAML" id="conhemaAML" >
                                    <label for="conhemaAML">AML</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                <input type="hidden" name="conheMaChBlymp" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="conheMaChBlymp" id="conhemaBly" >
                                    <label for="conhemaBly">B-lymphoma ,specify</label>
                                    <input type="text" class="inputlabelunderlineName" readonly name="conhemaBlyInput" value="">
                                </div>
                            </div>
                            <div class="row">   
                                <div class="col-auto">
                                <input type="hidden" name="conheMaChHodg" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="conheMaChHodg" id="conhemaHod" >
                                    <label for="conhemaHod">Hodgkin Lymphoma</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-auto">
                                <input type="hidden" name="conheMaChMDS" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="conheMaChMDS" id="conhemaMDS" >
                                    <label for="conhemaMDS">MDS ,specify</label>
                                </div>
                                <div class="col">
                                    <input type="text" class="inputlabelunderlineShort" readonly name="conhemaCMLinput" value="">
                                    <label for="conhemaMDS">CML</label>
                                    <div class="row">
                                        <div class="col">
                                            <input type="text" class="inputlabelunderlineShort" readonly name="conhemaPVinput" value="">
                                            <label for="conhemaMDS">PV</label>
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text" class="inputlabelunderlineShort" readonly name="conhemaETinput" value="">
                                                    <label for="conhemaMDS">ET</label>
                                                    <div class="row">
                                                        <div class="col">
                                                            <input type="text" class="inputlabelunderlineShort" readonly name="conhemaMFinput" value="">
                                                            <label for="conhemaMDS">MF</label>
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
                                <input type="hidden" name="conheMaChTlymp" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="conheMaChTlymp" id="conhemaTlym" >
                                    <label for="conhemaTlym">T-lymphoma</label>
                                    <input type="text" class="inputlabelunderlineName" readonly name="conhemaTinput" value="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                <input type="hidden" name="conheMaChOth" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="conheMaChOth" id="conhemaOthers" >
                                    <label for="conhemaOthers">Others:</label>
                                    <input type="text" class="inputlabelunderlineName" readonly name="conhemaOthersinput" value="">
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