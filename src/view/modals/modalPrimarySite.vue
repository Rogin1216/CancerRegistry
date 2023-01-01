<template>
    <div class="modal-backdrop">
        <!-- PRIMARY CURRENT CANCER SITE panel -->
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Primary Current Cancer Site/Diagnosis</h5>
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
                                                                            v-model="this.patStore.primarySite.SolidTumor.Anal" :false-value="''"
                                                                            id="tumAnal">
                                                                        <label
                                                                            for="tumAnal">Anal</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.primarySite.SolidTumor.AnalSite"
                                                                            >
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Bone'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Bone" :false-value="''"
                                                                            id="tumBone">
                                                                        <label
                                                                            for="tumBone">Bone</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.BoneSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Breast'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Breast" :false-value="''"
                                                                            id="tumBreast">
                                                                        <label
                                                                            for="tumBreast">Breast</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.BreastSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Cervical'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Cervical" :false-value="''"
                                                                            id="tumCerv">
                                                                        <label
                                                                            for="tumCerv">Cervical</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.CervicalSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Colon'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Colon" :false-value="''"
                                                                            id="tumCol"> 
                                                                        <label
                                                                            for="tumCol">Colon</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.ColonSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Esphageal'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Esophageal" :false-value="''"
                                                                            id="tumEso">
                                                                        <label
                                                                            for="tumEso">Esophageal</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.EsophagealSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Gastric'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Gastric" :false-value="''"
                                                                            id="tumGas">
                                                                        <label
                                                                            for="tumGas">Gastric</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.GastricSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Head & Neck'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.HeadAndNeck" :false-value="''"
                                                                            id="tumHeadNeck">
                                                                        <label
                                                                            for="tumHeadNeck">Head
                                                                            and Neck,
                                                                            specify</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.HeadAndNeckSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Hepatobiliary'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Hepatobiliary" :false-value="''"
                                                                            id="tumHepato">
                                                                        <label
                                                                            for="tumHepato">Hepatobiliary,
                                                                            specify</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            name="tumHepato"
                                                                            v-model="this.patStore.primarySite.SolidTumor.HepatobiliarySite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Kidney'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Kidney" :false-value="''"
                                                                            id="tumKid">
                                                                        <label
                                                                            for="tumKid">Kidney</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.KidneySite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Neuroendocrine'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Neuroendocrine" :false-value="''"
                                                                            id="tumNeuro">
                                                                        <label
                                                                            for="tumNeuro">Neuroendocrine,
                                                                            site</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            name="tumNeuro"
                                                                            v-model="this.patStore.primarySite.SolidTumor.NeuroendocrineSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Lung'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Lung" :false-value="null"
                                                                            id="tumLung">
                                                                        <label
                                                                            for="tumLung" class="me-3">Lung:</label>
                                                                        <!-- <input type="text"
                                                                            class="inputlabelunderlineShort"
                                                                            name="tumLungNSC"
                                                                            value=""> -->
                                                                        <input type="checkbox" class="form-check-input" id="tumLungNSC"
                                                                            v-model="this.patStore.primarySite.SolidTumor.NSCLC"
                                                                            :true-value="'NSCLC'">
                                                                        <label
                                                                            for="tumLungNSC">NSCLC</label>
                                                                        <!-- <input type="text"
                                                                            class="inputlabelunderlineShort"
                                                                            name="tumLungSCL"
                                                                            value=""> -->
                                                                        <input type="checkbox" class="form-check-input" id="tumLungSCL"
                                                                            v-model="this.patStore.primarySite.SolidTumor.SCLC"
                                                                            :true-value="'SCLC'">
                                                                        <label
                                                                            for="tumLungSCL">SCLC</label>
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
                                                                            v-model="this.patStore.primarySite.SolidTumor.Ovarian" :false-value="''"
                                                                            id="tumOva">
                                                                        <label
                                                                            for="tumOva">Ovarian</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.OvarianSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Pancreatic'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Pancreatic" :false-value="''"
                                                                            id="tumPanc">
                                                                        <label
                                                                            for="tumPanc">Pancreatic</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.PancreaticSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Prostate'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Protstate" :false-value="''"
                                                                            id="tumPros">
                                                                        <label
                                                                            for="tumPros">Prostate</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.ProstateSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Rectal'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Rectal" :false-value="''"
                                                                            id="tumRec">
                                                                        <label
                                                                            for="tumRec">Rectal</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.RectalSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Skin'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Skin" :false-value="''"
                                                                            id="tumSkin">
                                                                        <label
                                                                            for="tumSkin">Skin</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.SkinSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Soft Tissue'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.SoftTissue" :false-value="''"
                                                                            id="tumSoftTis">
                                                                        <label for="tumSoftTis">Soft
                                                                            tissue</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.SoftTissueSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Testis'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Testis" :false-value="''"
                                                                            id="tumTes">
                                                                        <label
                                                                            for="tumTes">Testis</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.TestisSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Thyroid'"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Thyroid" :false-value="''"
                                                                            id="tumThy">
                                                                        <label
                                                                            for="tumThy">Thyroid</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.ThyroidSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Urinary Bladder'" :false-value="''"
                                                                            v-model="this.patStore.primarySite.SolidTumor.UrinaryBladdder"
                                                                            id="tumBladd">
                                                                        <label
                                                                            for="tumBladd">Urinary
                                                                            Bladder</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.UrinaryBladderSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Uterine'" :false-value="''"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Uterine"
                                                                            id="tumUter">
                                                                        <label
                                                                            for="tumUter">Uterine</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            
                                                                            v-model="this.patStore.primarySite.SolidTumor.UterineSite">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <input
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            :true-value="'Others'" :false-value="''"
                                                                            v-model="this.patStore.primarySite.SolidTumor.Others"
                                                                            id="tumOther">
                                                                        <label
                                                                            for="tumOther">Others:</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineShort"
                                                                            name="tumOther"
                                                                            v-model="this.patStore.primarySite.SolidTumor.OthersInput">
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
                                                                            <input type="checkbox" class="form-check-input me-2" id="Well" v-model="this.patStore.primarySite.Histology.WellDifferentiated" :true-value="'Well Differentiated'">
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <label for="Well" class="form-check-label">Well differentiated </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-auto">
                                                                            <input type="checkbox" class="form-check-input me-2" id="Moderately" v-model="this.patStore.primarySite.Histology.ModeratleyDifferentiated" :true-value="'Moderately Differentiated'">
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <label for="Moderately" class="form-check-label">Moderately differentiated </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="row">
                                                                        <div class="col-auto">
                                                                            <input type="checkbox" class="form-check-input me-2" id="Poorly" v-model="this.patStore.primarySite.Histology.PoorlyDifferentiated" :true-value="'Poorly Differentiated'">
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <label for="Poorly" class="form-check-label">Poorly differentiated </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-auto">
                                                                            <input type="checkbox" class="form-check-input me-2" id="Undifferentiated" v-model="this.patStore.primarySite.Histology.Undifferentiated" :true-value="'Undifferentiated'">
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <label for="Undifferentiated" class="form-check-label">Undifferentiated </label>
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
                                                                        <input class="form-check-input" v-model="this.patStore.primarySite.Malignancies.ALL"
                                                                            type="checkbox" :true-value="'ALL'"
                                                                            name="heMalChAll" id="hemaAll">
                                                                        <label for="hemaAll">ALL :</label>
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="d-block">
                                                                            <div class="d-inline p-1">
                                                                                <input class="form-check-input" v-model="this.patStore.primarySite.Malignancies.Bcell"
                                                                                    type="checkbox" :true-value="'B-cell'"
                                                                                    name="heMalChBcell" id="hemaB">
                                                                                <label for="hemaB" class="form-check-label">B-cell</label>
                                                                            </div>
                                                                            <div class="d-inline p-1">
                                                                                <input class="form-check-input" v-model="this.patStore.primarySite.Malignancies.Tcell"
                                                                                    type="checkbox" :true-value="'T-cell'"
                                                                                    name="heMalChTcell" id="hemaT">
                                                                                <label for="hemaT">T-cell</label>
                                                                            </div>
                                                                            <div class="d-inline p-1">
                                                                                <input class="form-check-input" v-model="this.patStore.primarySite.Malignancies.MixedLineage"
                                                                                    type="checkbox" :true-value="'Mixed lineage'"
                                                                                    name="heMalChTcell" id="ML">
                                                                                <label for="ML">Mixed lineage</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="d-block">
                                                                            <div class="d-inline p-1">
                                                                                <label for="hemaT">Others: </label>
                                                                                <input type="text" v-model="this.patStore.primarySite.Malignancies.ALLOthers">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'AML'"
                                                                            v-model="this.patStore.primarySite.Malignancies.AML" id="hemaAML">
                                                                        <label for="hemaAML">AML: </label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.primarySite.Malignancies.AMLSpecify">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'B-lymphoma'"
                                                                            v-model="this.patStore.primarySite.Malignancies.Blymph" id="hemaBly">
                                                                        <label for="hemaBly">B-lymphoma
                                                                            ,specify</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.primarySite.Malignancies.BlymphSpecify">
                                                                            
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'Hodgkin Lymphoma'"
                                                                            v-model="this.patStore.primarySite.Malignancies.Hodgkin" id="hemaHod">
                                                                        <label for="hemaHod">Hodgkin
                                                                            Lymphoma</label>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'MPN'"
                                                                            v-model="this.patStore.primarySite.Malignancies.MPN" id="MPN">
                                                                        <label for="MPN">MPN:</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.primarySite.Malignancies.MPNSpecify">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'Multiple Mylona'"
                                                                            v-model="this.patStore.primarySite.Malignancies.Mylona" id="mylona">
                                                                        <label for="mylona">Multiple Mylona:</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.primarySite.Malignancies.MylonaSpecify">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-auto">
                                                                        
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'MDS'"
                                                                            v-model="this.patStore.primarySite.Malignancies.MDS" id="hemaMDS">
                                                                        <label for="hemaMDS">MDS ,specify</label>
                                                                    </div>
                                                                    <div class="col">
                                                                        <input type="text"
                                                                            class="inputlabelunderlineShort"
                                                                            v-model="this.patStore.primarySite.Malignancies.CML">
                                                                        <label for="hemaMDS">CML</label>
                                                                        <div class="row">
                                                                            <div class="col">
                                                                                <input type="text"
                                                                                    class="inputlabelunderlineShort"
                                                                                    v-model="this.patStore.primarySite.Malignancies.PV">
                                                                                <label for="hemaMDS">PV</label>
                                                                                <div class="row">
                                                                                    <div class="col">
                                                                                        <input type="text"
                                                                                            class="inputlabelunderlineShort"
                                                                                            v-model="this.patStore.primarySite.Malignancies.ET"
                                                                                            >
                                                                                        <label
                                                                                            for="hemaMDS">ET</label>
                                                                                        <div class="row">
                                                                                            <div class="col">
                                                                                                <input type="text"
                                                                                                    class="inputlabelunderlineShort"
                                                                                                    v-model="this.patStore.primarySite.Malignancies.MF">
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
                                                                            type="checkbox" :true-value="'T-lymphoma'"
                                                                            v-model="this.patStore.primarySite.Malignancies.Tlymph" id="Tlymph">
                                                                        <label for="Tlymph">T-lymphoma</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.primarySite.Malignancies.TlymphSpecify">
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <input class="form-check-input"
                                                                            type="checkbox" :true-value="'Others'"
                                                                            v-model="this.patStore.primarySite.Malignancies.Others" id="others">
                                                                        <label for="others">Others:</label>
                                                                        <input type="text"
                                                                            class="inputlabelunderlineName"
                                                                            v-model="this.patStore.primarySite.Malignancies.OthersSpecify">
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
import { storeToRefs } from 'pinia';
    export default {
        setup(){
            const patStore = usePatStore()
            const { count , formStore} = storeToRefs(patStore)
            return { patStore, count, formStore }
        },
        data(){
            return{
                form:{
                    enccode:this.$route.params.hpercode,
                    entryBy:'',
                    section:'primarySite',
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
                            ET:null,
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
            this.form.data = this.patStore.primarySite
            // const res = await this.getCancerData(this.form.enccode,'primarySite')
                // if(res.data.length != 0)this.form.data = JSON.parse(res.data[0].data )
            // this.getCancerData(this.form.enccode, 'primarySite').then(response => {
            //     if(JSON.parse(response.data[0].data) != null)
            //         this.form.data = JSON.parse(response.data[0].data);
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