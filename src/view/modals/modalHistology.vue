<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalHistology" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel"><b>Histology (Morphology)/Biopsy result:</b> (PLEASE FILL UP COMPLETELY)</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mb-3">
                                                        
                                                        <div class="row">
                                                            <div class="col" id="col">
                                                                <div class="row mb-2">
                                                                    <div class="col-auto">
                                                                        Biopsy type: 
                                                                    </div>
                                                                    <div class="col">
                                                                        <input type="checkbox" class="form-check-input me-2" id="Endoscopy">
                                                                        <label class="form-check-label" for="Endoscopy">Endoscopy</label>
                                                                    </div>
                                                                    <div class="col">
                                                                        <input type="checkbox" class="form-check-input me-2" id="FNAB">
                                                                        <label class="form-check-label" for="FNAB">FNAB </label>
                                                                    </div>
                                                                    <div class="col">
                                                                        <input type="checkbox" class="form-check-input me-2" id="core">
                                                                        <label class="form-check-label" for="core">Core Biopsy </label>
                                                                    </div>
                                                                    <div class="col">
                                                                        <input type="checkbox" class="form-check-input me-2" id="Excision">
                                                                        <label class="form-check-label" for="Excision">Excision/Incision </label>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-2">
                                                                    <div class="col-sm-6">
                                                                        <div class="row">
                                                                            <div class="col-auto">
                                                                                <label for="" class="form-check-label">Tissue biopsied: </label>
                                                                            </div>
                                                                            <div class="col">
                                                                                <input type="text" class="form-control">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <div class="row">
                                                                            <div class="col-auto">
                                                                                <label for="" class="form-check-label">Tumor Size(cms): </label>
                                                                            </div>
                                                                            <div class="col-sm">
                                                                                <input type="text" class="form-control">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-2">
                                                                    <div class="col-sm-6">
                                                                        <div class="row">
                                                                            <div class="col-auto">
                                                                                <label for="" class="form-check-label">Histopathology: </label>
                                                                            </div>
                                                                            <div class="col">
                                                                                <input type="text" class="form-control">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-2">
                                                                    <div class="col-sm-6">
                                                                        <div class="row">
                                                                            <div class="col-auto">
                                                                                <label for="" class="form-check-label">Carcinoma Type: </label>
                                                                            </div>
                                                                            <div class="col">
                                                                                <input type="text" class="form-control">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-2">
                                                                    <div class="col-sm-6">
                                                                        <div class="row">
                                                                            <div class="col-auto">
                                                                                <label for="" class="form-check-label">Neuroendocrine, Tumor and Grade: </label>
                                                                            </div>
                                                                            <div class="col">
                                                                                <input type="text" class="form-control">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-2">
                                                                    <div class="col-sm-6">
                                                                        <div class="row">
                                                                            <div class="col-auto">
                                                                                <label for="" class="form-check-label">Mesenchymal (Sarcoma etc), specify: </label>
                                                                            </div>
                                                                            <div class="col">
                                                                                <input type="text" class="form-control">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-2">
                                                                    <div class="col-sm-6">
                                                                        <div class="row">
                                                                            <div class="col-auto">
                                                                                <label for="" class="form-check-label">Others: </label>
                                                                            </div>
                                                                            <div class="col">
                                                                                <input type="text" class="form-control">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2">
                                                            <div class="col-sm-2">
                                                                Histologic Grade:
                                                            </div>
                                                            <div class="col">
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        <input type="checkbox" class="form-check-input me-2" id="Well">
                                                                    </div>
                                                                    <div class="col-auto">
                                                                        <label for="Well" class="form-check-label">Well differentiated </label>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        <input type="checkbox" class="form-check-input me-2" id="Moderately">
                                                                    </div>
                                                                    <div class="col-auto">
                                                                        <label for="Moderately" class="form-check-label">Moderately differentiated </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        <input type="checkbox" class="form-check-input me-2" id="Poorly">
                                                                    </div>
                                                                    <div class="col-auto">
                                                                        <label for="Poorly" class="form-check-label">Poorly differentiated </label>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        <input type="checkbox" class="form-check-input me-2" id="Undifferentiated">
                                                                    </div>
                                                                    <div class="col-auto">
                                                                        <label for="Undifferentiated" class="form-check-label">Undifferentiated </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-2">
                                                            <div class="col-sm-6">
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        <label for="" class="form-check-label">LVI: </label>
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="input-group mb-3">
                                                                            <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1">
                                                                            <span class="input-group-text" id="basic-addon1">( - )</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="input-group mb-3">
                                                                            <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1">
                                                                            <span class="input-group-text" id="basic-addon1">( + )</span>
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
        width: 1300px;
        height: 700px;
        margin-top: 5%;
        margin-left: 20%;
    }
    #col{
        justify-content: flex-start;
        text-align: start;
    }
  </style>