import { defineStore } from 'pinia'

export const usePatStore = defineStore('patStore', {
    setup(){

    },
    data(){
        return{
            isCancerPatient: 'Y',
            hpercode:this.$route.params.hpercode,
            // personalHistory:{
            //     SmokingHistory: '',
            //     PackPerYear:'',
            //     SecondHandSmoker:'',
            //     AlcoholIntake:'',
            //     DrinksAday:'',
            //     Coitaldebut:'',
            //     NumberOfPartner:'',
            //     AvgMonthlyFamIncome:'',
            //     Vaccines:{
            //         v1:'',
            //         v2:'',
            //         v3:'',
            //         v4:'',
            //     }
            // },
            formStore:{
                enccode:this.$route.params.hpercode,
                entryBy:'',
                section:'PersonalAndSocialistory',
                sectionCode:'01',
                data:{
                    SmokingHistory:'N',
                    CurrentSmoker: null,
                    PackPerYear: null,
                    SecondHandSmoker: null,
                    AlcoholIntake: 'N',
                    CurrentDrinker: null,
                    DrinksAday: null,
                    Coitaldebut: null,
                    NotApplicable: null,
                    NumberOfPartner: null,
                    AvgMonthlyFamIncome:null,
                    Vaccines:
                        {
                            v1:null,
                            v2:null,
                            v3:null,
                            v4:null
                        },
                    primary1st: null,
                    primary2nd: null,
                    booster1st: null,
                    booster2nd: null
                }
            }
        }
    },
    state: ()=>({
        info:'detailStore',
        count:1,
        name:'rogin',
        hpercodeStore:'',
        personalHistory:{
            SmokingHistory: '',
            PackPerYear:'',
            SecondHandSmoker:'',
            AlcoholIntake:'',
            DrinksAday:'',
            Coitaldebut:'',
            NumberOfPartner:'',
            AvgMonthlyFamIncome:'',
            Vaccines:{
                v1:'',
                v2:'',
                v3:'',
                v4:'',
            },
            primary1st: null,
            primary2nd: null,
            booster1st: null,
            booster2nd: null
        },
        occupational:{
            ExposureTo:{
                AirContaminants:null,
                ToxicWaste:null,
                Radiation:null,
                Pesticides:null,
                Chemicals:null,
                WeatherEvents:null,
                None:null,
                Others:null,
            },
            ExposureToOthers: null,
            LongestJobHeld: null
        },
        medicalCondition:{
            Condition:null,
            Medication:null,
        },
        forFemaleSubjects:{
            AgeOfMenarche:null,
            MenstrualStatus:null,
            AgeOfMenopause:null,
            Cause:null,
            ContraCeptiveUse:null,
            Age1stLiveBirth:null,
            PregnancyStage:null
        },
        cancerData:{
            ReferredFromRegion:null,
            NameOfReferringHealthFacility:null,
            DoctorHealthCareProf:null,
            ReasonForReferral:null,
            DateOfConsultation:null,
            ChiefComplaint:null,
            ClinicalDate:null,
            PathologicDate:null,
            PreviousDiagnosis:null,
            PrimarySite:null,
            TreatmentRecieved:{
                Chemotherapy:null,
                Surgery:null,
                Radiation:null,
                Hormonal:null,
                none:null,
                others:null,
            },
            Chemotherapy:{
                protocol:null,
                cycles:null,
                date:null,
            },
            Surgery:{
                procedure:null,
                date:null
            },
            Radiation:{
                site:null,
                dateStarted:null
            },
            Hormonal:{
                medication:null,
                duration:null,
                dateStarted:null
            },
            Status:null
        },
        primarySite:{
            SolidTumor:{
                    Anal:'',
                    AnalSite:'',
                    Bone:'',
                    BoneSite:'',
                    Breast:'',
                    BreastSite:'',
                    Cervical:'',
                    CervicalSite:'',
                    Colon:'',
                    ColonSite:'',
                    Esophageal:'',
                    EsophagealSite:'',
                    Gastric:'',
                    GastricSite:'',
                    HeadAndNeck:'',
                    HeadAndNeckSite:'',
                    Hepatobiliary:'',
                    HepatobiliarySite:'',
                    Kidney:'',
                    KidneySite:'',
                    Neuroendocrine:'',
                    NeuroendocrineSite:'',
                    NSCLC:'',
                    SCLC:'',
                    Lung:'',
                    Ovarian:'',
                    OvarianSite:'',
                    Pancreatic:'',
                    PancreaticSite:'',
                    Protstate:'',
                    ProstateSite:'',
                    Rectal:'',
                    RectalSite:'',
                    Skin:'',
                    SkinSite:'',
                    SoftTissue:'',
                    SoftTissueSite:'',
                    Testis:'',
                    TestisSite:'',
                    Thyroid:'',
                    ThyroidSite:'',
                    UrinaryBladdder:'',
                    UrinaryBladderSite:'',
                    Uterine:'',
                    UterineSite:'',
                    Others:'',
                    OthersInput:'',
                },
                Histology:{
                    WellDifferentiated:'',
                    ModeratleyDifferentiated:'',
                    PoorlyDifferentiated:'',
                    Undifferentiated:''
                },
                Malignancies:{
                    ALL:'',
                    Bcell: '',
                    Tcell: '',
                    MixedLineage: '',
                    ALLOthers:'',
                    AML:'',
                    AMLSpecify:'',
                    Blymph:'',
                    BlymphSpecify:'',
                    Hodgkin:'',
                    MPN:'',
                    MPNSpecify:'',
                    MDS:'',
                    Mylona:'',
                    MylonaSpecify:'',
                    CML:'',
                    PV:'',
                    ET:'',
                    MF:'',
                    Tlymph:'',
                    TlymphSpecify:'',
                    OthersSpecify:''
                },
        },
        concurrentSite:{
            SolidTumor:{
                    Anal:'',
                    AnalSite:'',
                    Bone:'',
                    BoneSite:'',
                    Breast:'',
                    BreastSite:'',
                    Cervical:'',
                    CervicalSite:'',
                    Colon:'',
                    ColonSite:'',
                    Esophageal:'',
                    EsophagealSite:'',
                    Gastric:'',
                    GastricSite:'',
                    HeadAndNeck:'',
                    HeadAndNeckSite:'',
                    Hepatobiliary:'',
                    HepatobiliarySite:'',
                    Kidney:'',
                    KidneySite:'',
                    Neuroendocrine:'',
                    NeuroendocrineSite:'',
                    NSCLC:'',
                    SCLC:'',
                    Lung:'',
                    Ovarian:'',
                    OvarianSite:'',
                    Pancreatic:'',
                    PancreaticSite:'',
                    Protstate:'',
                    ProstateSite:'',
                    Rectal:'',
                    RectalSite:'',
                    Skin:'',
                    SkinSite:'',
                    SoftTissue:'',
                    SoftTissueSite:'',
                    Testis:'',
                    TestisSite:'',
                    Thyroid:'',
                    ThyroidSite:'',
                    UrinaryBladdder:'',
                    UrinaryBladderSite:'',
                    Uterine:'',
                    UterineSite:'',
                    Others:'',
                    OthersInput:'',
                },
                Histology:{
                    WellDifferentiated:'',
                    ModeratleyDifferentiated:'',
                    PoorlyDifferentiated:'',
                    Undifferentiated:''
                },
                Malignancies:{
                    ALL:'',
                    Bcell: '',
                    Tcell: '',
                    MixedLineage: '',
                    ALLOthers:'',
                    AML:'',
                    AMLSpecify:'',
                    Blymph:'',
                    BlymphSpecify:'',
                    Hodgkin:'',
                    MPN:'',
                    MPNSpecify:'',
                    MDS:'',
                    Mylona:'',
                    MylonaSpecify:'',
                    CML:'',
                    PV:'',
                    ET:'',
                    MF:'',
                    Tlymph:'',
                    TlymphSpecify:'',
                    OthersSpecify:''
                },
        },
        tnm:{
            T:null,
            N:null,
            M:null,
            PathologicStage:{
                stage1:'N',
                stage1a:null,
                stage1b:null,
                stage1c:null,
                stage2:'N',
                stage2a:null,
                stage2b:null,
                stage2c:null,
                stage3:'N',
                stage3a:null,
                stage3b:null,
                stage3c:null
            },
        },
        staging:{
            site:{
                none:null,
                distant:null,
                bone:null,
                liver:null,
                lung:null,
                brain:null,
                ovary:null,
                skin:null,
                other:null,
                unknown:null
            },
            others:null
        },
        
    }),
    getters:{
        
        async first(){
            // console.log("getters first")
            this.getCancerInStore
        //     const res1 = await this.getCancerData(this.hpercode,'PersonalAndSocialistory')
        // if(res1.data.length != 0)this.personalHistory = JSON.parse(res1.data[0].data )
        }

    },
    actions:{
        getCancerInStore(){
            console.log("getCancerInStore")
        },

        // async getCancerDataStore(enccodeID, sectionName){
        //     const enccode = {
        //        enccode: enccodeID,
        //        section: sectionName
        //     }
            
        //     const response = await axios.post("http://192.168.7.188:8040/api/spCancerGetDataPerSection",enccode)

        //     return response
        // },
        close() {
                
            this.$emit("close");
        },
    }
})