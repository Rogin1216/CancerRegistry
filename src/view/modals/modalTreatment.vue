<template>
    
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Treatment Details:</h5>
                        <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row mb-2">
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <b>Treatment Purpose:</b>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="radio" name="purpose" id="complete" value="Curative-complete">
                                                        <label for="complete">Curative-complete</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="radio" name="purpose" id="incomplete" value="Curative-incomplete">
                                                        <label for="incomplete">Curative-incomplete</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="radio" name="purpose" id="Palliative" value="Palliative">
                                                        <label for="Palliative">Palliative only</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="radio" name="purpose" id="treatOther" value="Others">
                                                        <label for="treatOther">Others, specify: </label>
                                                        <input type="text">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <b>Primary Treatment in BGH:</b>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-auto">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="radio" name="primary" id="treatYes" value="Yes">
                                                        <label for="treatYes">Yes</label>
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="radio" name="primary" id="treatNo" value="No">
                                                        <label for="treatNo">No</label>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <label for="">Date:</label>
                                                        <input type="date" class="form-control">
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
                                            <b>Additional/Adjuvant Treatment/s</b>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="addSurgery" value="Surgery">
                                                        <label for="addSurgery">Surgery</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="addRadiotherapy" value="Radiotherapy">
                                                        <label for="addRadiotherapy">Radiotherapy</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="addChemotherapy" value="Chemotherapy">
                                                        <label for="addChemotherapy">Chemotherapy</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="addImmunotherapy" value="Immunotherapy">
                                                        <label for="addImmunotherapy">Immunotherapy/Cryotherapy</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="addHormonal" value="Hormonal">
                                                        <label for="addHormonal">Hormonal</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="addUnknown" value="Unknown">
                                                        <label for="addUnknown">Unknown</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="addOther" value="Other">
                                                        <label for="addOther">Others, specify: </label>
                                                        <input type="text">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <b>Planned other Additional/Adjuvant Treatment/s</b>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="planSurgery" value="Surgery">
                                                        <label for="planSurgery">Surgery</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="planRadiotherapy" value="Radiotherapy">
                                                        <label for="planRadiotherapy">Radiotherapy</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="planChemotherapy" value="Chemotherapy">
                                                        <label for="planChemotherapy">Chemotherapy</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="planImmunotherapy" value="Immunotherapy">
                                                        <label for="planImmunotherapy">Immunotherapy/Cryotherapy</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="planHormonal" value="Hormonal">
                                                        <label for="planHormonal">Hormonal</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="planUnknown" value="Unknown">
                                                        <label for="planUnknown">Unknown</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="planOthers" value="Others">
                                                        <label for="planOthers">Others, specify: </label>
                                                        <input type="text">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                               <div class="row mt-2">
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <b>Treatment/s received in other Hospital</b>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="othSurgery" value="Surgery">
                                                        <label for="othSurgery">Surgery</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="othRadiotherapy" value="Radiotherapy">
                                                        <label for="othRadiotherapy">Radiotherapy</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="othChemotherapy" value="Chemotherapy">
                                                        <label for="othChemotherapy">Chemotherapy</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="othImmunotherapy" value="Immunotherapy">
                                                        <label for="othImmunotherapy">Immunotherapy/Cryotherapy</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="othHormonal" value="Hormonal">
                                                        <label for="othHormonal">Hormonal</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="othUnknown" value="Unknown">
                                                        <label for="othUnknown">Unknown</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex flex-row bd-highlight">
                                                        <input class="form-check-input" type="checkbox" name="" id="othOthers" value="Others">
                                                        <label for="othOthers">Others, specify: </label>
                                                        <input type="text">
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
        height: 780px;
        margin-top: 5%;
        margin-left: 30%;
    }
  </style>