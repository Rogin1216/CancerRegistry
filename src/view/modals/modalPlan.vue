<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Treatment Plan</h5>
                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col">
                                                        <label for="">Medical Treatment</label>
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date</th>
                                                                    <th>Chemo Protocol + # of cycles</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div class="d-block mb-4"><label for="">Start: </label><input type="date"></div>
                                                                        <div class="d-block"><label for="">End: </label><input type="date"></div>
                                                                    </td>
                                                                    <td>
                                                                        <div class="d-block">
                                                                            Cycles: - 0 +
                                                                        </div>
                                                                        <div class="d-block">
                                                                            <textarea name="" id="" cols="20" rows="2"></textarea>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div class="d-block">
                                                                            <select name="" id="">
                                                                                <option value="">Remission</option>
                                                                                <option value="">Stable</option>
                                                                                <option value="">Disease Progress</option>
                                                                                <option value="">R/R</option>
                                                                                <option value="">Others</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="d-block">
                                                                            <textarea name="" id="" cols="20" rows="2"></textarea>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <label for="">Surgery</label>
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date</th>
                                                                    <th>Type of Surgery</th>
                                                                    <th>Intent</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><input type="date"></td>
                                                                    <td>
                                                                        <div class="d-block mb-2">
                                                                            <select name="" id="">
                                                                                <option value="">Chemotherapy</option>
                                                                                <option value="">Surgery</option>
                                                                                <option value="">Radiation</option>
                                                                                <option value="">Hormonal</option>
                                                                                <option value="">Others</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="d-block">
                                                                            <textarea name="" id="" cols="20" rows="2"></textarea>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div class="d-block">
                                                                            <select name="" id="">
                                                                                <option value="">Neoadjuvant</option>
                                                                                <option value="">Adjuvant</option>
                                                                                <option value="">Others</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <label for="">Radiation</label>
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date</th>
                                                                    <th>Fractions</th>
                                                                    <th>Total Dose Recieved</th>
                                                                    <th>Site</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><input type="date"></td>
                                                                    <td>
                                                                        <div class="d-block">
                                                                            <textarea name="" id="" cols="20" rows="2"></textarea>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div class="d-block">
                                                                            Total: <input type="text">
                                                                        </div>
                                                                    </td>
                                                                    <td><input type="text"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
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
        data(){
            return{
                count: 1,
                Neoadjuvant: null,
                Adjuvant: null,
                Metastatic: null,
                protocol:{},
                cycle: {},
                remission:{},
                dose:{},
                rr:{},
                recurrence:{},
                radiationTherapy:null
            }
        },
        computed(){

        },
        methods: {
            close() {
                this.$emit("close")
            },
            add(){
                this.count++
            },
            remove(){
                this.count--
            },
            reccur(){
                if(this.recurrence=='1'){
                    this.remove()
                }
                else{
                    
                    this.add()
                }
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
        width: 1500px;
        height: 900px;
        margin-top: 1%;
        margin-left: 15%;
    }
</style>