<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalLaterality" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Staging(other than TNM)</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mb-3">
                                                        <div class="label"><b>Staging(other than TNM):</b></div>
                                                        <div class="row">
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="In-Situ" id="In-Situ">
                                                                <label class="form-check-label" for="In-Situ">
                                                                    In-Situ
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Localized" id="Localized">
                                                                <label class="form-check-label" for="Localized">
                                                                    Localized
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Extension" id="Extension">
                                                                <label class="form-check-label" for="Extension">
                                                                    Direct Extension
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Lymph" id="Lymph">
                                                                <label class="form-check-label" for="Lymph">
                                                                    Regional Lymph Node
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="3+4" id="3+4">
                                                                <label class="form-check-label" for="3+4">
                                                                    3+4
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Metastasis" id="Metastasis">
                                                                <label class="form-check-label" for="Metastasis">
                                                                    Distant Metastasis
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Unknown" id="Unknown">
                                                                <label class="form-check-label" for="Unknown">
                                                                    Unknown
                                                                </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <b>Sites of Distant Metastatis: </b>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="None" id="None">
                                                                <label class="form-check-label" for="None">
                                                                    None
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Distant_Lymph" id="Distant_Lymph">
                                                                <label class="form-check-label" for="Distant_Lymph">
                                                                    Distant Lymph Nodes
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Bone" id="Bone">
                                                                <label class="form-check-label" for="Bone">
                                                                    Bone
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Liver" id="Liver">
                                                                <label class="form-check-label" for="Liver">
                                                                    Liver
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Pleura" id="Pleura">
                                                                <label class="form-check-label" for="Pleura">
                                                                    Lung(Pleura)
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Brain" id="Brain">
                                                                <label class="form-check-label" for="Brain">
                                                                    Brain
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Ovary" id="Ovary">
                                                                <label class="form-check-label" for="Ovary">
                                                                    Ovary
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Skin" id="Skin">
                                                                <label class="form-check-label" for="Skin">
                                                                    Skin
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="Other" id="Other">
                                                                <label class="form-check-label" for="Other">
                                                                    Other:
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <input type="text" class="form-control">
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="test" value="UnknownSites" id="UnknownSites">
                                                                <label class="form-check-label" for="UnknownSites">
                                                                    Unknown
                                                                </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="row">
                                                            <div class="col">
                                                                <b>Number of Metastatistic sites: </b>
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
        height: 420px;
        margin-top: 5%;
        margin-left: 25%;
    }
  </style>