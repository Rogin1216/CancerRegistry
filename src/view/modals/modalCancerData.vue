<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cancer Data</h5>
                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container" id="container">
                                <div class="row">
                                    <div class="col-auto ">
                                        <b>Referred from region/province</b>
                                        <div class="col">
                                            <input type="text" class="form-control" id="" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="row">
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col">
                                                        <b>Name of Referring Health Facility:</b>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <input type="text" class="form-control" id="" placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col">
                                                        <b>Doctor/Health Care Professional:</b>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <input type="text" class="form-control" id="" placeholder="">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col col-lg ">
                                                <b>Reason for Referral</b>
                                                <div class="row">
                                                    <div class="col col-lg-5">
                                                        <input class="form-check-input" type="radio" value="1"
                                                            name="refRdo" id="reasFin">
                                                        <label for="reasFin">Financial Constraint</label>
                                                        <div class="row">
                                                            <div class="col">
                                                                <input class="form-check-input" type="radio" value="2"
                                                                    name="refRdo" id="reasNoRo">
                                                                <label for="reasNoRo">No room available</label>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <input class="form-check-input" type="radio"
                                                                            value="3" name="refRdo" id="reasOp">
                                                                        <label for="reasOp">Seek advice/2<sup>nd</sup>
                                                                            opinion</label>
                                                                        <div class="row">
                                                                            <div class="col">
                                                                                <input class="form-check-input"
                                                                                    type="radio" value="4" name="refRdo"
                                                                                    id="reasEval">
                                                                                <label for="reasEval">Seek specialized
                                                                                    evaluation</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <input class="form-check-input" type="radio" value="5"
                                                            name="refRdo" id="reasNodoc">
                                                        <label for="reasNodoc">No available doctor</label>
                                                        <div class="row">
                                                            <div class="col">
                                                                <input class="form-check-input" type="radio" value="6"
                                                                    name="refRdo" id="reasNoLab">
                                                                <label for="reasNoLab">No laboratory available</label>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <input class="form-check-input" type="radio"
                                                                            value="7" name="refRdo" id="reasSeek">
                                                                        <label for="reasSeek">Seek further treatment
                                                                            appropriate to case</label>
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

                                <div class="row">
                                    <div class="col mt-2">
                                        <b>Date of Consultation/Admission:</b>
                                        <div class="row">
                                            <div class="col">
                                                <input type="date" class="form-control" id="" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col mt-2">
                                        <b>Chief Complaint:</b>
                                        <div class="row">
                                            <div class="col">
                                                <input type="text" class="form-control" id="" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-lg-6 mt-2">
                                        <b>Date of Diagnosis(Clinical or pathologic):</b>
                                        <input type="date" class="form-control" id="" placeholder="">
                                        <div class="row">
                                            <div class="col">
                                                <b>Type of Diagnosis</b>
                                                <div class="row">
                                                    <div class="col">
                                                        <input class="form-check-input" type="radio" value="1"
                                                            name="ToDRdo" id="diagNew">
                                                        <label for="diagNew">New</label>

                                                    </div>

                                                    <div class="col">
                                                        <input class="form-check-input" type="radio" value="2"
                                                            name="ToDRdo" id="diagRetreat">
                                                        <label for="diagRetreat">Retreatment</label>
                                                    </div>
                                                    <div class="col">
                                                        <input class="form-check-input" type="radio" value="3"
                                                            name="ToDRdo" id="diagNotTreat">
                                                        <label for="diagNotTreat">Not treated</label>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input" type="radio" value="4"
                                                                name="ToDRdo" id="diagUnkwn">
                                                            <label for="diagUnkwn">Unknown Treatment</label>
                                                            <div class="row">
                                                                <div class="col">
                                                                    <input class="form-check-input" type="radio"
                                                                        value="5" name="ToDRdo" id="diagInc">
                                                                    <label for="diagInc">Incomplete treatment, now
                                                                        progressive</label>
                                                                    <div class="row">
                                                                        <div class="col">
                                                                            <input class="form-check-input" type="radio"
                                                                                value="6" name="ToDRdo" id="diagCom">
                                                                            <label for="diagCom">Completed First
                                                                                treatment now recurrent</label>
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
                                <div class="row">
                                    <div class="col">
                                        <b>Previous diagnosis of cancer:</b>
                                        <div class="row">
                                            <div class="col">
                                                <input class="form-check-input" type="radio" value="N"
                                                    name="preDiaCancRdo" id="diagCancNo">
                                                <label for="diagCancNo">NO</label>
                                                <div class="row">
                                                    <div class="col">
                                                        <input class="form-check-input" type="radio" value="Y"
                                                            name="preDiaCancRdo" id="diagCancYes">
                                                        <label for="diagCancYes">YES</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-lg-9">
                                        <label for="">if YES:</label>
                                        <div class="row">
                                            <div class="col">
                                                Primary site
                                                <div class="row">
                                                    <div class="col ">
                                                        <input type="text" class="form-control" id="" placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                Date of Diagnosis
                                                <div class="row">
                                                    <div class="col">
                                                        <input type="date" class="form-control" id="" placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                Treatment recieved
                                                <div class="row">
                                                    <div>
                                                        <input type="hidden" name="trChChemo" value="0">
                                                        <input class="form-check-input" type="checkbox" value="1"
                                                            name="trChChemo" id="diagCancChemo">
                                                        <label for="diagCancChemo">Chemotherapy</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div>
                                                        <input type="hidden" name="trChSurg" value="0">
                                                        <input class="form-check-input" type="checkbox" value="1"
                                                            name="trChSurg" id="diagCancSurg">
                                                        <label for="diagCancSurg">Surgery</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <input type="hidden" name="trChRad" value="0">
                                                        <input class="form-check-input" type="checkbox" value="1"
                                                            name="trChRad" id="diagCancRad">
                                                        <label for="diagCancRad">Radiation</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div>
                                                        <input type="hidden" name="trChHorm" value="0">
                                                        <input class="form-check-input" type="checkbox" value="1"
                                                            name="trChHorm" id="diagCancHorm">
                                                        <label for="diagCancHorm">Hormonal</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <input type="hidden" name="trChNone" value="0">
                                                        <input class="form-check-input" type="checkbox" value="1"
                                                            name="trChNone" id="diagCancNone">
                                                        <label for="diagCancNone">None</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                Outcome
                                                <div class="row">
                                                    <div class="col">
                                                        <input class="form-check-input" type="radio" value="1"
                                                            name="outRdo" id="diagCancRemi">
                                                        <label for="diagCancRemi">Remission</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <input class="form-check-input" type="radio" value="2"
                                                            name="outRdo" id="diagCancProg">
                                                        <label for="diagCancProg">Progressive disease</label>
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
    export default {
        name: 'Modal',
        methods: {
            close() {
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
        height: 710px;
        margin-top: 5%;
        margin-left: 20%;
    }

    #container {
        /* border: 1px solid black; */
        justify-content: flex-start;
        text-align: start;
    }
</style>