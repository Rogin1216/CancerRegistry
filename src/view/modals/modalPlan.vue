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
                                                        <div class="col ">
    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col">
                    <b>Plan:</b>
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                    <u><i><b>Systemic/Medical:</b></i></u>
                </div>
                <div class="col-auto">
                <input type="hidden" name="trPlNeo" value="0">
                        <input class="form-check-input" type="checkbox" value="1" name="trPlNeo" id="trPlNeo">
                        <label for="trPlNeo">Neoadjuvant</label>
                </div>
                <div class="col-auto">
                <input type="hidden" name="trPlAdj" value="0">
                        <input class="form-check-input" type="checkbox" value="1" name="trPlAdj" id="trPlAdj" >
                        <label for="trPlAdj">Adjuvant</label>
                </div>
                <div class="col-auto">
                <input type="hidden" name="trPlMeta" value="0">
                        <input class="form-check-input" type="checkbox" value="1" name="trPlMeta" id="trPlMeta" >
                        <label for="trPlMeta">Metastatic</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                Protocol:(include inclusive dates)
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                1<sup>st</sup> line
                </div>
                <div class="col-auto">
                    <input type="text" class="inputlabelunderlineName" name="proto1st1" value="">-<input type="text" class="inputlabelunderlineShort" name="proto1stcy1" value="">
                    # of cycles
                    <div class="row">
                        <div class="col">
                        <input type="text" class="inputlabelunderlineName" name="proto1st2" value="">-<input type="text" class="inputlabelunderlineShort" name="proto1stcy2" value="">
                        # of cycles
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                <input type="hidden" name="bgh1st1" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="bgh1st1" id="bgh1st1" >
                    <label for="bgh1st1">BGH</label>
                <input type="hidden" name="oth1st1" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="oth1st1" id="oth1st1" >
                    <label for="oth1st1">other hosp</label>
                    <div class="row">
                        <div class="col">
                    <input type="hidden" name="bgh1st2" value="0">
                        <input class="form-check-input" type="checkbox" value="1" name="bgh1st2" id="bgh1st2" >
                        <label for="bgh1st2">BGH</label>
                    <input type="hidden" name="oth1st2" value="0">
                        <input class="form-check-input" type="checkbox" value="1" name="oth1st2" id="oth1st2" >
                        <label for="oth1st2">other hosp</label>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                <input type="hidden" name="rem1st" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="rem1st" id="rem1st"> 
                    <label for="rem1st">remission</label>
                <input type="hidden" name="stable1st" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="stable1st" id="stable1st" >
                    <label for="stable1st">stable dse</label>
                <input type="hidden" name="RR1st" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="RR1st" id="RR1st" >
                    <label for="RR1st">R/R</label>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                2<sup>nd</sup> line
                </div>
                <div class="col-auto">
                    <input type="text" class="inputlabelunderlineName" name="proto2nd1" value="">-<input type="text" class="inputlabelunderlineShort" name="proto2ndcy1" value="">
                    # of cycles
                    <div class="row">
                        <div class="col">
                        <input type="text" class="inputlabelunderlineName" name="proto2nd2" value="">-<input type="text" class="inputlabelunderlineShort" name="proto2ndcy2" value="">
                        # of cycles
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                <input type="hidden" name="bgh2nd1" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="bgh2nd1" id="bgh2nd1" >
                    <label for="bgh2nd1">BGH</label>
                    <input type="hidden" name="oth2nd1" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="oth2nd1" id="oth2nd1" >
                    <label for="oth2nd1">other hosp</label>
                    <div class="row">
                        <div class="col">
                        <input type="hidden" name="bgh2nd2" value="0">
                        <input class="form-check-input" type="checkbox" value="1" name="bgh2nd2" id="bgh2nd2" >
                        <label for="bgh2nd2">BGH</label>
                        <input type="hidden" name="oth2nd2" value="0">
                        <input class="form-check-input" type="checkbox" value="1" name="oth2nd2" id="oth2nd2" >
                        <label for="oth2nd2">other hosp</label>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                <input type="hidden" name="rem2nd" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="rem2nd" id="rem2nd" >
                    <label for="rem2nd">remission</label>
                    <input type="hidden" name="stable2nd" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="stable2nd" id="stable2nd" >
                    <label for="stable2nd">stable dse</label>
                    <input type="hidden" name="RR2nd" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="RR2nd" id="RR2nd" >
                    <label for="RR2nd">R/R</label>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                3<sup>rd</sup> line
                </div>
                <div class="col-auto">
                    <input type="text" class="inputlabelunderlineName" name="proto3rd1" value="">-<input type="text" class="inputlabelunderlineShort" name="proto3rdcy1" value="">
                    # of cycles
                    <div class="row">
                        <div class="col">
                        <input type="text" class="inputlabelunderlineName" name="proto3rd2" value="">-<input type="text" class="inputlabelunderlineShort" name="proto3rdcy2" value="">
                        # of cycles
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                <input type="hidden" name="bgh3rd1" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="bgh3rd1" id="bgh3rd1" >
                    <label for="bgh3rd1">BGH</label>
                    <input type="hidden" name="oth3rd1" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="oth3rd1" id="oth3rd1" >
                    <label for="oth3rd1">other hosp</label>
                    <div class="row">
                        <div class="col">
                        <input type="hidden" name="bgh3rd2" value="0">
                        <input class="form-check-input" type="checkbox" value="1" name="bgh3rd2" id="bgh3rd2" >
                        <label for="bgh3rd2">BGH</label>
                        <input type="hidden" name="oth3rd2" value="0">
                        <input class="form-check-input" type="checkbox" value="1" name="oth3rd2" id="oth3rd2">
                        <label for="oth3rd2">other hosp</label>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                <input type="hidden" name="rem3rd" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="rem3rd" id="rem3rd" >
                    <label for="rem3rd">remission</label>
                    <input type="hidden" name="heMalTcell" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="stable3rd" id="stable3rd" >
                    <label for="stable3rd">stable dse</label>
                    <input type="hidden" name="RR3rd" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="RR3rd" id="RR3rd">
                    <label for="RR3rd">R/R</label>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                4<sup>th</sup> line
                </div>
                <div class="col-auto">
                    <input type="text" class="inputlabelunderlineName" name="proto4th1" value="">-<input type="text" class="inputlabelunderlineShort" name="proto4thcy1" value="">
                    # of cycles
                    <div class="row">
                        <div class="col">
                        <input type="text" class="inputlabelunderlineName" name="proto4th2" value="">-<input type="text" class="inputlabelunderlineShort" name="proto4thcy2" value="">
                        # of cycles
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                <input type="hidden" name="bgh4th1" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="bgh4th1" id="bgh4th1" >
                    <label for="bgh4th1">BGH</label>
                    <input type="hidden" name="oth4th1" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="oth4th1" id="oth4th1" >
                    <label for="oth4th1">other hosp</label>
                    <div class="row">
                        <div class="col">
                        <input type="hidden" name="bgh4th2" value="0">
                        <input class="form-check-input" type="checkbox" value="1" name="bgh4th2" id="bgh4th2" >
                        <label for="bgh4th2">BGH</label>
                        <input type="hidden" name="oth4th2" value="0">
                        <input class="form-check-input" type="checkbox" value="1" name="oth4th2" id="oth4th2" >
                        <label for="oth4th2">other hosp</label>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                <input type="hidden" name="rem4th" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="rem4th" id="rem4th" >
                    <label for="rem4th">remission</label>
                    <input type="hidden" name="stable4th" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="stable4th" id="stable4th" >
                    <label for="stable4th">stable dse</label>
                    <input type="hidden" name="RR4th" value="0">
                    <input class="form-check-input" type="checkbox" value="1" name="RR4th" id="RR4th" >
                    <label for="RR4th">R/R</label>
                    
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
           <div class="row">
               <div class="col">
                   <b><i><u>Radiation Therapy:</u></i></b>
                   <input class="form-check-input" type="radio" value="1" name="radTherapy" id="radiaThNo">
                    <label for="radiaThNo">NO</label>
                    <input class="form-check-input" type="radio" value="2" name="radTherapy" id="radiaThYes" >
                    <label for="radiaThYes">YES</label>
               </div>
           </div>
           <div class="row">
               <div class="col">
                   <b>Identify site:</b>
                   <input type="text" class="inputlabelunderlineName" name="radSite" value="">
               </div>
           </div>
           <div class="row">
               <div class="col">
                   Setting: 
                    <input class="form-check-input" type="radio" value="1" name="idSiteSetting" id="radiaThPre" >
                    <label for="radiaThPre">Pre-operative</label>
                    <input class="form-check-input" type="radio" value="2" name="idSiteSetting" id="radiaThPost" >
                    <label for="radiaThPost">Post-operative</label>
                    <input class="form-check-input" type="radio" value="3" name="idSiteSetting" id="radiaThPall" >
                    <label for="radiaThPall">Palliative</label>
               </div>
           </div>

           <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="col-auto">
                            Dose:
                        </div>
                        <div class="col-auto">
                        <input type="hidden" name="radiaThReg" value="0">
                            <input class="form-check-input" type="checkbox" value="1" name="radiaThReg" id="radiaThReg" >
                            <label for="radiaThReg">Regular</label>
                            <div class="row">
                                <div class="col">
                                <input type="hidden" name="radiaThbst" value="0">
                                    <input class="form-check-input" type="checkbox" value="1" name="radiaThbst" id="radiaThbst" >
                                    <label for="radiaThbst">Boost</label>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            Sites:
                            <input type="text" class="inputlabelunderlineName" name="doseRegSite" value="">
                            <div class="row">
                                <div class="col">
                                    Sites:
                                    <input type="text" class="inputlabelunderlineName" name="doseBoostSite" value="">
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
            <div class="row">
                <div class="col">
                    <b>Surgery </b>
                    <input class="form-check-input" type="radio" value="1" name="radThSurg" id="radiaThSurgNo" >
                    <label for="radiaThSurgNo">NO</label>
                    <input class="form-check-input" type="radio" value="2" name="radThSurg" id="radiaThSurgYes" >
                    <label for="radiaThSurgYes">YES</label>
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                Date: <input type="date" name="date_surgery" value="">
                </div>
                <div class="col">
                Surgeon:
                <input type="text" class="inputlabelunderlineName" name="surSurgeon" value="">
                </div>
            </div>
            <div class="row">
                <div class="col">
                Planned Operation:
                <input type="text" class="inputlabelunderlineName" name="surPlanOp" value="">
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col">
                    <b><i><u>Hormonal:</u></i></b>
                </div>
            </div>
            <div class="row">
                <div class="col">
                <input type="text" class="inputlabelunderlineName" name="surHormone" value="">
                </div>
            </div>
        </div>
        <div class="col">
            <div class="row">
                <div class="col">
                    <u>Remarks:</u>
                </div>
            </div>
            <div class="row">
                <div class="col">
                <input type="text" class="inputlabelunderlineName" name="surRemarks" value="">
                </div>
            </div>
        </div>
    </div>
    <!-- yearly update -->
    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col border border-secondary">
                    <div class="row">
                        <div class="col border-bottom border-secondary">
                            <b>Year 1</b>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col border-end border-secondary">
                            Date
                        </div>
                        <div class="col">
                            N
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                </div>
                <div class="col border border-secondary">
                    <div class="row">
                        <div class="col border-bottom border-secondary">
                            <b>Year 2</b>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col border-end border-secondary">
                            Date
                        </div>
                        <div class="col">
                            N
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                </div>
                <div class="col border border-secondary">
                    <div class="row">
                        <div class="col border-bottom border-secondary">
                            <b>Year 3</b>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col border-end border-secondary">
                            Date
                        </div>
                        <div class="col">
                            N
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                </div>
                <div class="col border border-secondary">
                    <div class="row">
                        <div class="col border-bottom border-secondary">
                            <b>Year 4</b>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col border-end border-secondary">
                            Date
                        </div>
                        <div class="col">
                            N
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                </div>
                <div class="col border border-secondary">
                    <div class="row">
                        <div class="col border-bottom border-secondary">
                            <b>Year 5</b>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col border-end border-secondary">
                            Date
                        </div>
                        <div class="col">
                            N
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                    <div class="row border-top border-secondary">
                        <div class="col border-end border-secondary">
                        --
                        </div>
                        <div class="col">
                        --
                        </div>
                    </div>
                </div>
            </div>
            
            
            
           
        </div>
    </div>
    <div class="row">
        <div class="col">
           <div class="row">
               <div class="col">
               Others:
               </div>
           </div>
           <div class="row">
               <div class="col">
                    <input type="text" class="inputlabelunderline" name="surOthers" value="" placeholder="---">
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
        height: 900px;
        margin-top: 1%;
        margin-left: 25%;
    }
  </style>