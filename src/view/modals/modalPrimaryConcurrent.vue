<template>
    <div class="modal-backdrop">
        <!-- PRIMARY CURRENT CANCER SITE panel -->
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Concurrent Cancer Site/Diagnosis</h5>
                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="row my-2">
                                            <div class="col">
                                                <div class="row border border">
                                                    <div class="col">
                                                        <div class="row">
                                                            <div class="col">
                                                                <b>Solid Tumors:</b>
                                                            </div>
                                                        </div>
                                                        <div class="row p-2" id="container">
                                                            <div class="col col-lg-7 border-secondary">
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Anal'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Anal" :false-value="''"
                                                                            id="tumAnal1">
                                                                        <label
                                                                            for="tumAnal1">Anal</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.AnalSite"
                                                                            >
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Bone'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Bone" :false-value="''"
                                                                            id="tumBone1">
                                                                        <label
                                                                            for="tumBone1">Bone</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.BoneSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Breast'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Breast" :false-value="''"
                                                                            id="tumBreast1">
                                                                        <label
                                                                            for="tumBreast1">Breast</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.BreastSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Cervical'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Cervical" :false-value="''"
                                                                            id="tumCerv1">
                                                                        <label
                                                                            for="tumCerv1">Cervical</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.CervicalSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Colon'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Colon" :false-value="''"
                                                                            id="tumCol1"> 
                                                                        <label
                                                                            for="tumCol1">Colon</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.ColonSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Esphageal'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Esophageal" :false-value="''"
                                                                            id="tumEso1">
                                                                        <label
                                                                            for="tumEso1">Esophageal</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.EsophagealSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Gastric'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Gastric" :false-value="''"
                                                                            id="tumGas1">
                                                                        <label
                                                                            for="tumGas1">Gastric</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.GastricSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Head & Neck'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.HeadAndNeck" :false-value="''"
                                                                            id="tumHeadNeck1">
                                                                        <label
                                                                            for="tumHeadNeck1">Head
                                                                            and Neck,
                                                                            specify</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.HeadAndNeckSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Hepatobiliary'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Hepatobiliary" :false-value="''"
                                                                            id="tumHepato1">
                                                                        <label
                                                                            for="tumHepato1">Hepatobiliary,
                                                                            specify</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            name="tumHepato"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.HepatobiliarySite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Kidney'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Kidney" :false-value="''"
                                                                            id="tumKid1">
                                                                        <label
                                                                            for="tumKid1">Kidney</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.KidneySite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Neuroendocrine'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Neuroendocrine" :false-value="''"
                                                                            id="tumNeuro1">
                                                                        <label
                                                                            for="tumNeuro1">Neuroendocrine,
                                                                            site</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            name="tumNeuro"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.NeuroendocrineSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Lung'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Lung" :false-value="null"
                                                                            id="tumLung1">
                                                                        <label
                                                                            for="tumLung1" class="me-3">Lung:</label>
                                                                        <!-- <input type="text"
                                                                            class="inputlabelunderlineShort"
                                                                            name="tumLungNSC"
                                                                            value=""> -->
                                                                        <input type="checkbox" class="form-check-input" id="tumLungNSC1"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.NSCLC"
                                                                            :true-value="'NSCLC'">
                                                                        <label
                                                                            for="tumLungNSC1">NSCLC</label>
                                                                        <!-- <input type="text"
                                                                            class="inputlabelunderlineShort"
                                                                            name="tumLungSCL"
                                                                            value=""> -->
                                                                        <input type="checkbox" class="form-check-input" id="tumLungSCL1"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.SCLC"
                                                                            :true-value="'SCLC'">
                                                                        <label
                                                                            for="tumLungSCL1">SCLC</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="col border-secondary">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Ovarian'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Ovarian" :false-value="''"
                                                                            id="tumOva1">
                                                                        <label
                                                                            for="tumOva1">Ovarian</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.OvarianSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Pancreatic'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Pancreatic" :false-value="''"
                                                                            id="tumPanc1">
                                                                        <label
                                                                            for="tumPanc1">Pancreatic</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.PancreaticSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Prostate'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Protstate" :false-value="''"
                                                                            id="tumPros1">
                                                                        <label
                                                                            for="tumPros1">Prostate</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.ProstateSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Rectal'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Rectal" :false-value="''"
                                                                            id="tumRec1">
                                                                        <label
                                                                            for="tumRec1">Rectal</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.RectalSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Skin'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Skin" :false-value="''"
                                                                            id="tumSkin1">
                                                                        <label
                                                                            for="tumSkin1">Skin</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.SkinSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Soft Tissue'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.SoftTissue" :false-value="''"
                                                                            id="tumSoftTis1">
                                                                        <label for="tumSoftTis1">Soft
                                                                            tissue</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.SoftTissueSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Testis'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Testis" :false-value="''"
                                                                            id="tumTes1">
                                                                        <label
                                                                            for="tumTes1">Testis</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.TestisSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Thyroid'"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Thyroid" :false-value="''"
                                                                            id="tumThy1">
                                                                        <label
                                                                            for="tumThy1">Thyroid</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.ThyroidSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Urinary Bladder'" :false-value="''"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.UrinaryBladdder"
                                                                            id="tumBladd1">
                                                                        <label
                                                                            for="tumBladd1">Urinary
                                                                            Bladder</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.UrinaryBladderSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Uterine'" :false-value="''"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Uterine"
                                                                            id="tumUter1">
                                                                        <label
                                                                            for="tumUter1">Uterine</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.UterineSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Others'" :false-value="''"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.Others"
                                                                            id="tumOther1">
                                                                        <label
                                                                            for="tumOther1">Others:</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineShort"
                                                                            name="tumOther"
                                                                            v-model="this.patStore.concurrentSite.SolidTumor.OthersInput">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="row">
                                                            <div>
                                                                <b>Histology</b>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div>
                                                                <div class="col">
                                                                    <div class="row">
                                                                        <div class="col-auto">
                                                                            <input type="checkbox" class="form-check-input me-2" id="Well1" v-model="this.patStore.concurrentSite.Histology.WellDifferentiated" :true-value="'Well Differentiated'" :false-value="''">
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <label for="Well1" class="form-check-label">Well differentiated </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-auto">
                                                                            <input type="checkbox" class="form-check-input me-2" id="Moderately1" v-model="this.patStore.concurrentSite.Histology.ModeratleyDifferentiated" :true-value="'Moderately Differentiated'" :false-value="''">
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <label for="Moderately1" class="form-check-label">Moderately differentiated </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="row">
                                                                        <div class="col-auto">
                                                                            <input type="checkbox" class="form-check-input me-2" id="Poorly1" v-model="this.patStore.concurrentSite.Histology.PoorlyDifferentiated" :true-value="'Poorly Differentiated'" :false-value="''">
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <label for="Poorly1" class="form-check-label">Poorly differentiated </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-auto">
                                                                            <input type="checkbox" class="form-check-input me-2" id="Undifferentiated1" v-model="this.patStore.concurrentSite.Histology.Undifferentiated" :true-value="'Undifferentiated'" :false-value="''">
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <label for="Undifferentiated1" class="form-check-label">Undifferentiated </label>
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
                                            <div class="col ">
                                                <div class="row border border">
                                                    <div class="col">
                                                        <div class="row">
                                                            <div class="col">
                                                                <b>Hematolymphoid malignancies:</b>
                                                            </div>
                                                        </div>
                                                        <div class="row p-2" id="container">
                                                            <div class="col">
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        <input class="form-check-input" v-model="this.patStore.concurrentSite.Malignancies.ALL"
                                                                            type="checkbox" :true-value="'ALL'" :false-value="''"
                                                                            name="heMalChAll" id="hemaAll1">
                                                                        <label for="hemaAll1">ALL :</label>
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="d-block">
                                                                            <div class="d-inline p-1">
                                                                                <input class="form-check-input" v-model="this.patStore.concurrentSite.Malignancies.Bcell"
                                                                                    type="checkbox" :true-value="'B-cell'" :false-value="''"
                                                                                    name="heMalChBcell" id="hemaB1">
                                                                                <label for="hemaB1" class="form-check-label">B-cell</label>
                                                                            </div>
                                                                            <div class="d-inline p-1">
                                                                                <input class="form-check-input" v-model="this.patStore.concurrentSite.Malignancies.Tcell"
                                                                                    type="checkbox" :true-value="'T-cell'" :false-value="''"
                                                                                    name="heMalChTcell" id="hemaT1">
                                                                                <label for="hemaT1">T-cell</label>
                                                                            </div>
                                                                            <div class="d-inline p-1">
                                                                                <input class="form-check-input" v-model="this.patStore.concurrentSite.Malignancies.MixedLineage"
                                                                                    type="checkbox" :true-value="'Mixed lineage'" :false-value="''"
                                                                                    name="heMalChTcell" id="ML1">
                                                                                <label for="ML1">Mixed lineage</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="d-block">
                                                                            <div class="d-inline p-1">
                                                                                <label for="hemaT">Others: </label>
                                                                                <input type="text" v-model="this.patStore.concurrentSite.Malignancies.ALLOthers">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'AML'" :false-value="''"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.AML" id="hemaAML1">
                                                                        <label for="hemaAML1">AML: </label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.AMLSpecify">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'B-lymphoma'" :false-value="''"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.Blymph" id="hemaBly1">
                                                                        <label for="hemaBly1">B-lymphoma
                                                                            ,specify</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.BlymphSpecify">
                                                                            
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'Hodgkin Lymphoma'" :false-value="''"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.Hodgkin" id="hemaHod1">
                                                                        <label for="hemaHod1">Hodgkin
                                                                            Lymphoma</label>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'MPN'" :false-value="''"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.MPN" id="MPN1">
                                                                        <label for="MPN1">MPN:</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.MPNSpecify">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'Multiple Mylona'" :false-value="''"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.Mylona" id="mylona1">
                                                                        <label for="mylona1">Multiple Mylona:</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.MylonaSpecify">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'MDS'" :false-value="''"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.MDS" id="hemaMDS1">
                                                                        <label for="hemaMDS1">MDS ,specify</label>
                                                                    </div>
                                                                    <div class="col">
                                                                        <input type="text"
                                                                            class="inputlabelunderlineShort"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.CML">
                                                                        <label for="hemaMDS">CML</label>
                                                                        <div class="row">
                                                                            <div class="col">
                                                                                <input type="text"
                                                                                    class="inputlabelunderlineShort"
                                                                                    v-model="this.patStore.concurrentSite.Malignancies.PV">
                                                                                <label for="hemaMDS">PV</label>
                                                                                <div class="row">
                                                                                    <div class="col">
                                                                                        <input type="text"
                                                                                            class="inputlabelunderlineShort"
                                                                                            name="hemaETinput"
                                                                                            value="">
                                                                                        <label
                                                                                            for="hemaMDS">ET</label>
                                                                                        <div class="row">
                                                                                            <div class="col">
                                                                                                <input type="text"
                                                                                                    class="inputlabelunderlineShort"
                                                                                                    v-model="this.patStore.concurrentSite.Malignancies.MF">
                                                                                                <label
                                                                                                    for="hemaMDS">MF</label>
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
                                                                        
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'T-lymphoma'" :false-value="''"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.Tlymph" id="Tlymph1">
                                                                        <label for="Tlymph1">T-lymphoma</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.TlymphSpecify">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'Others'" :false-value="''"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.Others" id="others1">
                                                                        <label for="others1">Others:</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.concurrentSite.Malignancies.OthersSpecify">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="col-4">
                                                        <div class="row">
                                                            <div>
                                                                <b>Histology</b>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div>
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
                            <button type="button" class="btn btn-primary" @click="save">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { usePatStore } from '@/store/PatStore';
    export default {
        setup(){
            const patStore = usePatStore()
            return { patStore  }
        },
        data(){
            return{
                form:{
                    enccode:this.$route.params.hpercode,
                    entryBy:'',
                    section:'concurrentSite',
                    data:{
                        SolidTumor:{
                            Anal:null,
                            AnalSite:null,
                            Bone:null,
                            BoneSite:null,
                            Breast:null,
                            BreastSite:null,
                            Cervical:null,
                            CervicalSite:null,
                            Colon:null,
                            ColonSite:null,
                            Esophageal:null,
                            EsophagealSite:null,
                            Gastric:null,
                            GastricSite:null,
                            HeadAndNeck:null,
                            HeadAndNeckSite:null,
                            Hepatobiliary:null,
                            HepatobiliarySite:null,
                            Kidney:null,
                            KidneySite:null,
                            Neuroendocrine:null,
                            NeuroendocrineSite:null,
                            NSCLC:null,
                            SCLC:null,
                            Lung:null,
                            Ovarian:null,
                            OvarianSite:null,
                            Pancreatic:null,
                            PancreaticSite:null,
                            Protstate:null,
                            ProstateSite:null,
                            Rectal:null,
                            RectalSite:null,
                            Skin:null,
                            SkinSite:null,
                            SoftTissue:null,
                            SoftTissueSite:null,
                            Testis:null,
                            TestisSite:null,
                            Thyroid:null,
                            ThyroidSite:null,
                            UrinaryBladdder:null,
                            UrinaryBladderSite:null,
                            Uterine:null,
                            UterineSite:null,
                            Others:null,
                            OthersInput:null,
                        },
                    Histology:{
                        WellDifferentiated:null,
                        ModeratleyDifferentiated:null,
                        PoorlyDifferentiated:null,
                        Undifferentiated:null
                    },
                    Malignancies:{
                        ALL:null,
                        Bcell: null,
                        Tcell: null,
                        MixedLineage: null,
                        ALLOthers:null,
                        AML:null,
                        AMLSpecify:null,
                        Blymph:null,
                        BlymphSpecify:null,
                        Hodgkin:null,
                        MPN:null,
                        MPNSpecify:null,
                        MDS:null,
                        Mylona:null,
                        MylonaSpecify:null,
                        CML:null,
                        PV:null,
                        MF:null,
                        Tlymph:null,
                        TlymphSpecify:null,
                        OthersSpecify:null
                    },
                    }
                }

            }
        },
        name: 'Modal',
        async created(){
            this.form.data = this.patStore.concurrentSite
            // const res = await this.getCancerData(this.hpercode,'concurrentSite')
            //     if(res.data.length != 0)this.concurrentSite = JSON.parse(res.data[0].data )
            // this.getCancerData(this.form.enccode, 'concurrentSite').then(response => {
            //     if(JSON.parse(response.data[0].data) != null)
            //         this.this.patStore.concurrentSite = JSON.parse(response.data[0].data);
            // })
        },
        methods: {
            async getCancerData(enccodeID, sectionName){
                const enccode = {
                   enccode: enccodeID,
                   section: sectionName
                }
                const response = await axios.post("http://192.168.7.66:8040/api/spCancerGetDataPerSection",enccode)
                return response
            },
            async save(){
                console.log(JSON.stringify(this.form))
                const json = {
                    json: JSON.stringify(this.form)
                }
                const response = await axios.post("http://192.168.7.66:8040/api/saveCancerDataJSON",json)
                this.close()
                return response;
            },
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
        height: 930px;
        margin-top: 2%;
        margin-left: 25%;
    }

    #container {

        justify-content: flex-start;
        text-align: start;
    }
</style>