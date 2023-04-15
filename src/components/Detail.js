import './Detail.css';
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import jrcolor from "./images sources/jr-color.svg"


function Detail () {

    const [timeStatusDetail, setTimeStatusDetail] = useState('')
    const [locationDetail, setLocationDetail] = useState('')
    const [jobDetail, setJobDetail] = useState('')
    const [descriptionDetail, setDescriptionDetail] = useState('')
    const [companyDetail, setCompanyDetail] = useState('')
    const [companyLogoDetail, setCompanyLogoDetail] = useState('')
    const [companyUrlDetail, setCompanyUrlDetail] = useState('')
    const [companyNameDetail, setCompanyNameDetail] = useState('')
    const [howApplyDetail, setHowApplyDetail] = useState('')
    const [textDetail1, setText1Detail] = useState('')
    const [otherJobDetail, setOtherJobDetail] = useState('')
    const [name, setName] = useState('')

    Axios.defaults.withCredentials = true
   

let navigate = useNavigate()

const location = useLocation()

useEffect(() => {

    extractJsonstring()

    setTimeout(() => {

            createElementManual()
   
    }, 500)

}, [])



let findTag
let findApplyTag
let flagCompanyName
let ind1 = []
let ind2 = []
let ind3 = []
let ind4 = []
let ind5 = []
let ind6 = []
let ind7 = []
let ind8 = []
let ind9 = []
let ind10 = []
let ind11 = []
let ind12 = []
let ind13 = []
let ind14 = []
let regex1
let regex2
let regex3
let regex4
let regex5
let regex6
let regex7
let regex8
let regex9
let regex10
let regex11
let resultRegex1
let resultRegex2
let resultRegex3
let resultRegex4
let resultRegex5
let resultRegex6
let resultRegex7
let resultRegex8
let resultRegex9
let resultRegex10
let resultRegex11
let resultRegex12
let resultRegex13
let resultRegex14
let textTitle = []
let textTitleH1 = []
let textDescription = []
let textApplyDescription = []
let textLinkDescription = []
let textApplyLinkDescription = []
let textList = []
let textStyle = []
let i = 0
const extractJsonstring = () => {

    Axios.get("http://localhost:3001/accesstoken")
    .then((response) => {
        if(response.data.message){
          

                navigate("/", {
                  state: 
                    { 
                      message: "There is no cookies, please login first !"
                    },
                })
                  
             
        } else {

            setTimeStatusDetail(location.state.row1.type)
            setLocationDetail(location.state.row1.location)
            setJobDetail(location.state.row1.title)

            if(location.state.row1.company == 'Bertrandt Technikum GmbH Ehningen '){
                setJobDetail(location.state.row1.title.slice(0, 48))
            }

            if(location.state.row1.company == 'Bertrandt Technikum GmbH Ehningen'){
                setJobDetail(location.state.row1.title.slice(0, 45))
            }
            
            //company url is searched from website directly not from API
            if(location.state.row1.company == 'SweetRush'){
                setCompanyLogoDetail('https://insights.sweetrush.com/hubfs/Branding_SweetRush_2022/SweetRush_Logo_Gradients_FC.png')
            }

            if(location.state.row1.company == 'MANDARIN MEDIEN Gesellschaft für digitale Lösungen mbH'){
                setCompanyLogoDetail('https://www.mandarin-medien.de/bundles/app/img/MM_Logo_negativ2.svg')
            }

            if(location.state.row1.company == 'Car Registration, Inc. '){
                setCompanyLogoDetail('https://cdn.carregistration.com/skin/ca/images/CarRegistration-large.svg')
            }

            if(location.state.row1.company == 'JobRad GmbH'){
                setCompanyLogoDetail(jrcolor)
            }

            if(location.state.row1.company == 'DEVK Versicherungen'){

                const flag = document.querySelector('.url1')

                flag.style.opacity = "0"

                setCompanyLogoDetail('https://bewerbungsportal.devk.de/job_portal2/devk-logo-view-new.svg')
            }

            if(location.state.row1.company == 'Blindside'){

                const flag = document.querySelector('.url1')

                flag.style.opacity = "0"

                setCompanyLogoDetail('https://uploads-ssl.webflow.com/62690cc26e253150ef3e96f4/62690cc26e253125c93e9744_Group%202436.svg')
            }

            if(location.state.row1.company == 'Amco International Education Services'){

                const flag = document.querySelector('.url1')

                flag.style.opacity = "0"

                setCompanyLogoDetail('http://stage-es.amco.me/content/uploads/2015/06/logo_sc.png')
            }

            if(location.state.row1.company == 'Mimi Hearing Technologies GmbH'){

                const flag = document.querySelector('.url1')

                flag.style.opacity = "0"

                setCompanyLogoDetail('https://mimi.io/wp-content/uploads/2022/06/logo.svg')
            }

            if(location.state.row1.company == 'OSI International Holding GmbH'){

                const flag = document.querySelector('.url1')

                flag.style.opacity = "0"

                setCompanyLogoDetail('https://www.osigroup.com/wp-content/uploads/osi-logo-1.png')
            }

            if(location.state.row1.company == 'Crawford, Murphy and Tilly, Inc.'){

                const flag = document.querySelector('.url1')

                flag.style.opacity = "0"

                setCompanyLogoDetail('https://www.cmtengr.com/wp-content/uploads/CMT_3C_rgb_2018.522-Wide.jpg')
            }

            if(location.state.row1.company == 'Demyst '){

                const flag = document.querySelector('.url1')

                flag.style.opacity = "0"

                setCompanyLogoDetail('https://www.demyst.com/_next/static/media/DemystLogo.72890529.svg')
            }

            if(location.state.row1.company == 'Bertrandt Technikum GmbH Ehningen ' || location.state.row1.company == 'Bertrandt Technikum GmbH Ehningen'){

                const flag = document.querySelector('.url1')

                flag.style.opacity = "0"

                setCompanyLogoDetail('https://www.bertrandt.com/fileadmin/default/logo-bertrandt.svg')
            }




            setCompanyUrlDetail(location.state.row1.company_url)

            if(location.state.row1.company_url == null && location.state.row1.company == 'Car Registration, Inc. '){
                setCompanyUrlDetail('https://www.carregistration.com/')
            }

            if(location.state.row1.company_url == null && location.state.row1.company == 'Amco International Education Services'){
                setCompanyUrlDetail('https://www.amco.me/en')
            }

            if(location.state.row1.company == 'OSI International Holding GmbH'){
                setCompanyUrlDetail('https://www.osigroup.com/')
            }

            if(location.state.row1.company == 'Crawford, Murphy and Tilly, Inc.'){
                setCompanyUrlDetail('https://www.cmtengr.com/')
            }

            if(location.state.row1.company == 'Bertrandt Technikum GmbH Ehningen '){
                setCompanyUrlDetail('https://www.bertrandt.com/')
            }

            if(location.state.row1.company == 'Bertrandt Technikum GmbH Ehningen'){
                setCompanyUrlDetail('https://www.bertrandt.com/')
            }

            setHowApplyDetail(location.state.row1.how_to_apply)
            setOtherJobDetail(location.state.row3)

            findTag = location.state.row1.description
            findApplyTag = location.state.row1.how_to_apply
            flagCompanyName = location.state.row1.company
          

            setName(location.state.row2)

            if(location.state.row1.company == 'MANDARIN MEDIEN Gesellschaft für digitale Lösungen mbH'){
                setCompanyNameDetail(flagCompanyName.slice(0,15))
            }

            else if(location.state.row1.company == 'Amco International Education Services'){
                setCompanyNameDetail(flagCompanyName.slice(0,18))
            }

            else if(location.state.row1.company == 'Mimi Hearing Technologies GmbH'){
                setCompanyNameDetail(flagCompanyName.slice(0,25))
            }

            else if(location.state.row1.company == 'OSI International Holding GmbH'){
                setCompanyNameDetail(flagCompanyName.slice(0,25))
            }

            else if(location.state.row1.company == 'Crawford, Murphy and Tilly, Inc.'){
                setCompanyNameDetail('CMT')
            }

            else if(location.state.row1.company == 'Bertrandt Technikum GmbH Ehningen '){
                setCompanyNameDetail(flagCompanyName.slice(0,19))
            }

            else if(location.state.row1.company == 'Bertrandt Technikum GmbH Ehningen'){
                setCompanyNameDetail(flagCompanyName.slice(0,19))
            }

            else{
                setCompanyNameDetail(flagCompanyName)
            }
            
            //console.log(findTag)

            //it will take a few seconds 
            // if want to load more quick, try to use slice directly with row4 state differentiation
            regex1 = /<\/strong><\/p>/gi
            regex2 = /<p><strong>/gi
            regex3 = /<p>/gi
            regex4 = /<\/p>/gi
            regex5 = /<\/li>/gi
            regex6 = /<li>/gi
            regex7 = /<\/strong>/gi
            regex8 = /<strong>/gi
            regex9 = /ht/gi
            regex10 = /<\/h1>/gi
            regex11 = /<h1>/gi

            //title
            while(resultRegex1 = regex1.exec(findTag)){
                ind1.push(resultRegex1.index)
            }

            //title
            while(resultRegex2 = regex2.exec(findTag)){
                ind2.push(resultRegex2.index)
            }

            //titleText
            i=0
            while(ind1[i] > ind2[i] && i<ind1.length){
                textTitle.push(findTag.slice(ind2[i] + 11, ind1[i]))
                i++

                while(ind1[i] < ind2[i]){
                    ind1.splice(i, 1)
                
                    //textTitle.push(findTag.slice(ind2[ind2.length-1] + 11, ind1[ind1.length - 1]))
                }
            }

            //titleh1
            while(resultRegex13 = regex10.exec(findTag)){
                ind13.push(resultRegex13.index)
            }

            //titleh1
            while(resultRegex14 = regex11.exec(findTag)){
                ind14.push(resultRegex14.index)
            }

            //titleTextH1
            i=0
            while(ind13[i] > ind14[i] && i<ind13.length){
                textTitleH1.push(findTag.slice(ind14[i] + 4, ind13[i]))
                i++

                while(ind13[i] < ind14[i]){
                    ind13.splice(i, 1)
                
                    //textTitle.push(findTag.slice(ind2[ind2.length-1] + 11, ind1[ind1.length - 1]))
                }
            }

            //Description
            while(resultRegex3 = regex3.exec(findTag)){
                ind3.push(resultRegex3.index)
                
            }

            //Description
            for(let i=0; i<ind3.length; i++){
                for(let j = 0; j<ind2.length; j++){
                    if(ind3[i] == ind2[j]){
                        ind3.splice(i, 1)
                    }
                }
            }

            //Description
            while(resultRegex4 = regex4.exec(findTag)){
                ind4.push(resultRegex4.index)
                
            }

            //Description
            for(let i=0; i<ind4.length; i++){
                for(let j = 0; j<ind1.length; j++){
                    if(ind4[i]-9 == ind1[j]){
                        ind4.splice(i, 1)
                    }
                }
            }

            //TitleDescription
            i=0
            while(ind4[i] > ind3[i] && i<ind4.length){
                textDescription.push(findTag.slice(ind3[i] + 3, ind4[i]))
                i++

                while(ind4[i] < ind3[i]){
                    ind4.splice(i, 1)
                
                    //textTitle.push(findTag.slice(ind2[ind2.length-1] + 11, ind1[ind1.length - 1]))
                }
            }

            //List
            while(resultRegex5 = regex5.exec(findTag)){
                ind5.push(resultRegex5.index)
                
            }

            //List
            while(resultRegex6 = regex6.exec(findTag)){
                ind6.push(resultRegex6.index)
                
            }

            //TitleList
            i=0
            while(ind5[i] > ind6[i] && i<ind5.length){
                textList.push(findTag.slice(ind6[i] + 4, ind5[i]))
                i++

                while(ind5[i] < ind6[i]){
                    ind5.splice(i, 1)
                
                    //textTitle.push(findTag.slice(ind2[ind2.length-1] + 11, ind1[ind1.length - 1]))
                }
            }

            //Style
            while(resultRegex7 = regex7.exec(findTag)){
                ind7.push(resultRegex7.index)
                
            }

            //Style
            for(let i=0; i<ind7.length; i++){
                for(let j = 0; j<ind1.length; j++){
                    if(ind7[i] == ind1[j]){
                        ind7.splice(i, 1)
                    }
                }
            }

            //Style
            while(resultRegex8 = regex8.exec(findTag)){
                ind8.push(resultRegex8.index)
                
            }

            //Style
            for(let i=0; i<ind8.length; i++){
                for(let j = 0; j<ind2.length; j++){
                    if(ind8[i]-3 == ind2[j]){
                        ind8.splice(i, 1)
                    }
                }
            }

            //TitleStyle
            i=0
            while(ind7[i] > ind8[i] && i<ind7.length){
                textStyle.push(findTag.slice(ind8[i] + 8, ind7[i]))
                i++

                while(ind7[i] < ind8[i]){
                    ind7.splice(i, 1)
                
                    //textTitle.push(findTag.slice(ind2[ind2.length-1] + 11, ind1[ind1.length - 1]))
                }
            }

            //Combination of TitleList and TitleStyle
            let v = []
            for(let i=0; i<textList.length; i++){
                for(let j = 0; j<textStyle.length; j++){
                    if(textList[i].includes(textStyle[j])){

                        v = textList[i].indexOf(textStyle[j])

                    if(v > 1){
                            textList[i] = textList[i].slice(0, v-8)
                    }

                    }
                }
            }

            //Combination of TitleDescription and TitleStyle
            let k = []
            for(let i=0; i<textDescription.length; i++){
                for(let j = 0; j<textStyle.length; j++){
                    if(textDescription[i].includes(textStyle[j])){

                        k = textDescription[i].indexOf(textStyle[j])

                    if(k > 1){
                        textDescription[i] = textDescription[i].slice(0, k-8)
                    }

                    }
                }
            }

            //Apply Description
            while(resultRegex9 = regex3.exec(findApplyTag)){
                ind9.push(resultRegex9.index)
                
            }

            //Apply Description
            while(resultRegex10 = regex4.exec(findApplyTag)){
                ind10.push(resultRegex10.index)
                
            }

            //TitleApplyDescription
            i=0
            while(ind10[i] > ind9[i] && i<ind10.length){
                textApplyDescription.push(findApplyTag.slice(ind9[i] + 3, ind10[i]))
                i++

                while(ind10[i] < ind9[i]){
                    ind10.splice(i, 1)
                
                    //textTitle.push(findTag.slice(ind2[ind2.length-1] + 11, ind1[ind1.length - 1]))
                }
            }

           
            //Link Apply
            while(resultRegex11 = regex9.exec(findApplyTag)){
                ind11.push(resultRegex11.index)
                
            }

            //TextLinkApply Description
            textApplyLinkDescription.push(textApplyDescription[0].slice(ind11[ind11.length - 1]-3, textApplyDescription[0].length - 4))
            textApplyDescription[0] = textApplyDescription[0].slice(0, ind11[ind11.length - 1]-3)    
            
            // find link in text description
            for(let i=0; i<textDescription.length; i++){

                if(textDescription[i].includes('http')){

                    while(resultRegex12 = regex9.exec(textDescription[i])){
                        ind12.push(resultRegex12.index)
                    }

                    textLinkDescription.push(textDescription[i].slice(ind12[ind12.length - 1], textDescription[i].length - 5))
                    textDescription[i] = textDescription[i].slice(0, ind12[ind11.length - 1])
                }    
                
            }

            
        
        }

    })
   
}

const createElementManual= () => {

    let title1
    let title2
    let title3
    let title32
    let title33
    let title4
    let title4b
    let title4c
    let title5
    let title6
    let title7
    let title8
    let title9
    let titleH1
    let titleH2
    let titleH3
    let description1
    let description1b
    let description1c
    let description1d
    let description1e
    let description2
    let description22
    let description3
    let description4
    let description42
    let description421
    let description422
    let description423
    let description43
    let description44
    let description45
    let description46
    let description47
    let description48
    let description49
    let description5
    let description52
    let description53
    let description54
    let description55
    let description56
    let description57
    let description58
    let description6
    let description7
    let description8
    let description9
    let description10
    let linkdescription1
    let linkdescription2
    let linkdescription3
    let linkdescription4
    let description11
    let description11b
    let description11c
    let description11d
    let description11e
    let description11f
    let description11g
    let description12
    let description13
    let description14
    let description15
    let description16
    let description17
    let description17b
    let description17c
    let description17d
    let description17e
    let description17f
    let description18
    let applydescription1
    let applydescription2
    let applydescription3
    let applydescription4
    let applydescription5
    let applydescription6
    let applylinkdescription1
    let applylinkdescription2
    let applylinkdescription3
    let list1
    let list2
    let list2b
    let list2c
    let list3
    let list4
    let list5
    let list6
    let list7
    let list8
    let list9
    let list10
    let list11
    let list11b
    let list11c
    let list11d
    let list11e
    let list12
    let list13
    let list14
    let list15
    let list16
    let list17
    let list18
    let list19
    let list20
    let list21
    let list22
    let list23
    let list24
    let list25
    let list26
    let list27
    let list28
    let list29
    let list30
    let list31
    let list32
    let style1
    let style2
    let style3
    let style4
    let style5
    let style6
    let style7
    let style8
    let style9
    let style10
   
    const statecontainer = document.querySelector('.second1content')
    const detailcontainer = document.querySelector('.detailcontainer1')
    const secondcontainer = document.querySelector('.second1content')
    const maindashboard = document.querySelector('.maindashboard2')
    const applycontainer = document.querySelector('.applycontainer1')
    const flag = document.querySelector('.url1')
   


    //console.log(location.state)
    
    if(location.state.row4 == 0) {  

        if(textTitle[0] != null){

            title1 = document.createElement("p")
            title1.innerHTML = textTitle[0]
            statecontainer.appendChild(title1)
            
    
            title1.style.position = "absolute"
            title1.style.top = "-30px"
            title1.style.left = "0px"
            title1.style.fontSize = "25px"
            title1.style.width = "1000px"
            title1.style.textAlign = "justify"
            title1.style.fontFamily = "Arial, Helvetica, sans-serif"
            title1.style.fontWeight = "bolder"
            title1.style.color = "floralwhite"
            
        }
    
        if(textTitle[1] != null){
    
            title2 = document.createElement("p")
            title2.innerHTML = textTitle[1]
            statecontainer.appendChild(title2)
            
    
            title2.style.position = "absolute"
            title2.style.top = "58px"
            title2.style.left = "0px"
            title2.style.fontSize = "20px"
            title2.style.width = "1000px"
            title2.style.textAlign = "justify"
            title2.style.fontFamily = "Arial, Helvetica, sans-serif"
            title2.style.fontWeight = "normal"
            title2.style.color = "floralwhite"
                
        }
    
        if(textDescription[0] != null){
    
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            // add 20 px
            description1.style.top = "100px"
            description1.style.left = "0px"
            description1.style.fontSize = "15px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "normal"
            description1.style.color = "floralwhite"
        }
    
        if(textDescription[1] != null){
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            //add 13px
            description2.style.top = "143px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
        }
    
        if(textDescription[2] != null){
    
            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            //add 13px
            description3.style.top = "205px"
            description3.style.left = "0px"
            description3.style.fontSize = "15px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
            
        }
    
        if(textTitle[2] != null){
    
            title3 = document.createElement("p")
            title3.innerHTML = textTitle[2]
            statecontainer.appendChild(title3)
            
    
            title3.style.position = "absolute"
            title3.style.top = "268px"
            title3.style.left = "0px"
            title3.style.fontSize = "20px"
            title3.style.width = "1000px"
            title3.style.textAlign = "justify"
            title3.style.fontFamily = "Arial, Helvetica, sans-serif"
            title3.style.fontWeight = "normal"
            title3.style.color = "floralwhite"
            
        }
    
        if(textTitle[3] != null){
    
            title4 = document.createElement("p")
            title4.innerHTML = "---------------------------------------- " + textTitle[3] + " ----------------------------------------"
            statecontainer.appendChild(title4)
            
    
            title4.style.position = "absolute"
            // add 15px
            title4.style.top = "301px"
            title4.style.left = "0px"
            title4.style.fontSize = "17px"
            title4.style.width = "1000px"
            title4.style.textAlign = "justify"
            title4.style.fontFamily = "Arial, Helvetica, sans-serif"
            title4.style.fontWeight = "normal"
            title4.style.color = "floralwhite"
            
        }
    
        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "326px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }
    
        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "348px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "1000px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }
    
        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
            // add 10px
            list3.style.position = "absolute"
            list3.style.top = "370px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }
    
        if(textList[3] != null){
            
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "392px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "1000px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
    
            style1 = document.createElement("p")
            style1.innerHTML = textStyle[0]
            list4.appendChild(style1)
    
            style1.style.position = "absolute"
            style1.style.top = "-17px"
            style1.style.left = "358px"
            style1.style.fontSize = "15px"
            style1.style.width = "1000px"
            style1.style.textAlign = "justify"
            style1.style.fontFamily = "impact"
            style1.style.fontWeight = "normal"
            style1.style.color = "floralwhite"
    
            
        }
    
        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            //add 10px
            list5.style.top = "414px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "980px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
    
            style2 = document.createElement("p")
            style2.innerHTML = "> " + textStyle[1]
            list5.appendChild(style2)
    
            style2.style.position = "absolute"
            //add 10px
            style2.style.top = "23px"
            style2.style.left = "0px"
            style2.style.fontSize = "15px"
            style2.style.width = "980px"
            style2.style.textAlign = "justify"
            style2.style.fontFamily = "impact"
            style2.style.fontWeight = "normal"
            style2.style.color = "floralwhite"
    
            
        }
    
        if(textList[6] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            //add 10px
            list6.style.top = "493px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "1000px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }
    
        if(textTitle[4] != null){
    
            title5 = document.createElement("p")
            title5.innerHTML = "-------------------- " + textTitle[4] + " --------------------"
            statecontainer.appendChild(title5)
            
    
            title5.style.position = "absolute"
            //add 30px
            title5.style.top = "532px"
            title5.style.left = "0px"
            title5.style.fontSize = "17px"
            title5.style.width = "1000px"
            title5.style.textAlign = "justify"
            title5.style.fontFamily = "Arial, Helvetica, sans-serif"
            title5.style.fontWeight = "normal"
            title5.style.color = "floralwhite"
            
        }
    
        if(textList[7] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "557px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "1000px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }
    
        if(textList[8] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "578px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "1000px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }
    
        if(textList[9] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "600px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "1000px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }
    
        if(textList[10] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 12px
            list10.style.top = "622px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "1000px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }
    
        if(textList[11] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 12px
            list11.style.top = "644px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "1000px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }
    
        if(textTitle[5] != null){
    
            title6 = document.createElement("p")
            title6.innerHTML = textTitle[5]
            statecontainer.appendChild(title6)
            
    
            title6.style.position = "absolute"
            //add 40px
            title6.style.top = "689px"
            title6.style.left = "0px"
            title6.style.fontSize = "20px"
            title6.style.width = "1000px"
            title6.style.textAlign = "justify"
            title6.style.fontFamily = "Arial, Helvetica, sans-serif"
            title6.style.fontWeight = "normal"
            title6.style.color = "floralwhite"
            
        }
    
        if(textList[12] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 12px
            list12.style.top = "720px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "1000px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }
    
        if(textList[13] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 12px
            list13.style.top = "742px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "1000px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }
    
        if(textList[14] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 12px
            list14.style.top = "764px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "1000px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }
    
        if(textList[15] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list15)
            
    
            list15.style.position = "absolute"
            // add 12px
            list15.style.top = "786px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "1000px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }
    
        if(textTitle[6] != null){
    
            title7 = document.createElement("p")
            title7.innerHTML = textTitle[6]
            statecontainer.appendChild(title7)
            
    
            title7.style.position = "absolute"
            //add 40px
            title7.style.top = "831px"
            title7.style.left = "0px"
            title7.style.fontSize = "20px"
            title7.style.width = "1000px"
            title7.style.textAlign = "justify"
            title7.style.fontFamily = "Arial, Helvetica, sans-serif"
            title7.style.fontWeight = "normal"
            title7.style.color = "floralwhite"
            
        }
    
        if(textList[16] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list16)
            
    
            list16.style.position = "absolute"
            // add 12px
            list16.style.top = "863px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "1000px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }
    
        if(textList[17] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list17)
            
    
            list17.style.position = "absolute"
            // add 12px
            list17.style.top = "885px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "1000px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }
    
        if(textTitle[7] != null){
    
            title8 = document.createElement("p")
            title8.innerHTML = textTitle[7] + ":"
            statecontainer.appendChild(title8)
            
    
            title8.style.position = "absolute"
            //add 40px
            title8.style.top = "930px"
            title8.style.left = "0px"
            title8.style.fontSize = "20px"
            title8.style.width = "1000px"
            title8.style.textAlign = "justify"
            title8.style.fontFamily = "Arial, Helvetica, sans-serif"
            title8.style.fontWeight = "normal"
            title8.style.color = "floralwhite"
            
        }
    
        if(textDescription[3] != null){
    
            description4 = document.createElement("p")
            description4.innerHTML = textDescription[3]
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            //add 20px
            description4.style.top = "972px"
            description4.style.left = "0px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
        }
    
        if(textDescription[4] != null){
    
            description5 = document.createElement("p")
            description5.innerHTML = textDescription[4]
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            //add 13px
            description5.style.top = "1015px"
            description5.style.left = "0px"
            description5.style.fontSize = "15px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
    
            style3 = document.createElement("p")
            style3.innerHTML = textStyle[2]
            description5.appendChild(style3)
    
            style3.style.position = "absolute"
            //add 10px
            style3.style.top = "-16px"
            style3.style.left = "360px"
            style3.style.fontSize = "15px"
            style3.style.width = "980px"
            style3.style.textAlign = "justify"
            style3.style.fontFamily = "impact"
            style3.style.fontWeight = "normal"
            style3.style.color = "floralwhite"
    
            
        }
    
        if(textDescription[5] != null){
    
            description6 = document.createElement("p")
            description6.innerHTML = textDescription[5]
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            //add 13px
            description6.style.top = "1038px"
            description6.style.left = "0px"
            description6.style.fontSize = "15px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "normal"
            description6.style.color = "floralwhite"
    
            style4 = document.createElement("p")
            style4.innerHTML = textStyle[3]
            description6.appendChild(style4)
    
            style4.style.position = "absolute"
           
            style4.style.top = "-16px"
            style4.style.left = "950px"
            style4.style.fontSize = "15px"
            style4.style.width = "80px"
            style4.style.textAlign = "justify"
            style4.style.fontFamily = "impact"
            style4.style.fontWeight = "normal"
            style4.style.color = "floralwhite"
    
            if(style4.offsetWidth > 60){
                style4.innerHTML = textStyle[3].slice(0,8)
    
                style5 = document.createElement("p")
                style5.innerHTML = textStyle[3].slice(8)
                description6.appendChild(style5)
    
                style5.style.position = "absolute"
                //add 13px
                style5.style.top = "2px"
                style5.style.left = "0px"
                style5.style.fontSize = "15px"
                style5.style.width = "80px"
                style5.style.textAlign = "justify"
                style5.style.fontFamily = "impact"
                style5.style.fontWeight = "normal"
                style5.style.color = "floralwhite"
            }
    
            
    
        }
    
        if(textDescription[6] != null){
    
            description7 = document.createElement("p")
            description7.innerHTML = textDescription[6]
            statecontainer.appendChild(description7)
    
            description7.style.position = "absolute"
            //add 13px
            description7.style.top = "1079px"
            description7.style.left = "0px"
            description7.style.fontSize = "15px"
            description7.style.width = "1000px"
            description7.style.textAlign = "justify"
            description7.style.fontFamily = "Arial, Helvetica, sans-serif"
            description7.style.fontWeight = "normal"
            description7.style.color = "floralwhite"
    
            style6 = document.createElement("p")
            style6.innerHTML = textStyle[4]
            description7.appendChild(style6)
    
            style6.style.position = "absolute"
           
            style6.style.top = "-16px"
            style6.style.left = "977px"
            style6.style.fontSize = "15px"
            style6.style.width = "80px"
            style6.style.textAlign = "justify"
            style6.style.fontFamily = "impact"
            style6.style.fontWeight = "normal"
            style6.style.color = "floralwhite"
    
            if(style4.offsetWidth > 60){
                style6.innerHTML = textStyle[4].slice(0,1)
    
                style7 = document.createElement("p")
                style7.innerHTML = textStyle[4].slice(2)
                description7.appendChild(style7)
    
                style7.style.position = "absolute"
                //add 13px
                style7.style.top = "2px"
                style7.style.left = "0px"
                style7.style.fontSize = "15px"
                style7.style.width = "80px"
                style7.style.textAlign = "justify"
                style7.style.fontFamily = "impact"
                style7.style.fontWeight = "normal"
                style7.style.color = "floralwhite"
            }
    
        }
    
        if(textDescription[7] != null){
    
            description8 = document.createElement("p")
            description8.innerHTML = textDescription[7]
            statecontainer.appendChild(description8)
    
            description8.style.position = "absolute"
            //add 13px
            description8.style.top = "1120px"
            description8.style.left = "0px"
            description8.style.fontSize = "15px"
            description8.style.width = "1000px"
            description8.style.textAlign = "justify"
            description8.style.fontFamily = "Arial, Helvetica, sans-serif"
            description8.style.fontWeight = "normal"
            description8.style.color = "floralwhite"
    
            style8 = document.createElement("p")
            style8.innerHTML = textStyle[5]
            description8.appendChild(style8)
    
            style8.style.position = "absolute"
           
            style8.style.top = "-16px"
            style8.style.left = "774px"
            style8.style.fontSize = "15px"
            style8.style.width = "80px"
            style8.style.textAlign = "justify"
            style8.style.fontFamily = "impact"
            style8.style.fontWeight = "normal"
            style8.style.color = "floralwhite"
        }
    
        if(textDescription[8] != null){
    
            description9 = document.createElement("p")
            description9.innerHTML = textDescription[8]
            statecontainer.appendChild(description9)
    
            description9.style.position = "absolute"
            //add 13px
            description9.style.top = "1142px"
            description9.style.left = "0px"
            description9.style.fontSize = "15px"
            description9.style.width = "1000px"
            description9.style.textAlign = "justify"
            description9.style.fontFamily = "Arial, Helvetica, sans-serif"
            description9.style.fontWeight = "normal"
            description9.style.color = "floralwhite"
    
            style9 = document.createElement("p")
            style9.innerHTML = textStyle[6]
            description9.appendChild(style9)
    
            style9.style.position = "absolute"
           
            style9.style.top = "1px"
            style9.style.left = "271px"
            style9.style.fontSize = "15px"
            style9.style.width = "80px"
            style9.style.textAlign = "justify"
            style9.style.fontFamily = "impact"
            style9.style.fontWeight = "normal"
            style9.style.color = "floralwhite"
        }
    
        if(textDescription[9] != null){
    
            description10 = document.createElement("p")
            description10.innerHTML = textDescription[9]
            statecontainer.appendChild(description10)
    
            description10.style.position = "absolute"
            //add 13px
            description10.style.top = "1181px"
            description10.style.left = "0px"
            description10.style.fontSize = "15px"
            description10.style.width = "1000px"
            description10.style.textAlign = "justify"
            description10.style.fontFamily = "Arial, Helvetica, sans-serif"
            description10.style.fontWeight = "normal"
            description10.style.color = "floralwhite"
    
            style10 = document.createElement("p")
            style10.innerHTML = textStyle[7]
            description10.appendChild(style10)
    
            style10.style.position = "absolute"
           
            style10.style.top = "-16px"
            style10.style.left = "253px"
            style10.style.fontSize = "15px"
            style10.style.width = "80px"
            style10.style.textAlign = "justify"
            style10.style.fontFamily = "impact"
            style10.style.fontWeight = "normal"
            style10.style.color = "floralwhite"
        }
    
        if(textDescription[10] != null){
    
            description11 = document.createElement("p")
            description11.innerHTML = textDescription[10]
            statecontainer.appendChild(description11)
    
            description11.style.position = "absolute"
            //add 13px
            description11.style.top = "1202px"
            description11.style.left = "0px"
            description11.style.fontSize = "15px"
            description11.style.width = "1000px"
            description11.style.textAlign = "justify"
            description11.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11.style.fontWeight = "normal"
            description11.style.color = "floralwhite"
    
            linkdescription1 = document.createElement("p")
            linkdescription1.innerHTML = textLinkDescription[0]
            description11.appendChild(linkdescription1)
            
    
            linkdescription1.style.position = "absolute"
            // add 15px
            linkdescription1.style.top = "3px"
            linkdescription1.style.left = "0px"
            linkdescription1.style.fontSize = "15px"
            linkdescription1.style.width = "1000px"
            linkdescription1.style.textAlign = "justify"
            linkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription1.style.fontWeight = "normal"
            linkdescription1.style.color = "floralwhite"
            linkdescription1.style.textDecoration = "underline"
            linkdescription1.style.cursor = "pointer"
    
            linkdescription1.addEventListener("click", openNewTab)
    
            function openNewTab() {
                window.open(textLinkDescription[0])
            }
        }
    
        if(textDescription[11] != null){
    
            description12 = document.createElement("p")
            description12.innerHTML = textDescription[11]
            statecontainer.appendChild(description12)
    
            description12.style.position = "absolute"
            //add 13px
            description12.style.top = "1243px"
            description12.style.left = "0px"
            description12.style.fontSize = "15px"
            description12.style.width = "1000px"
            description12.style.textAlign = "justify"
            description12.style.fontFamily = "Arial, Helvetica, sans-serif"
            description12.style.fontWeight = "normal"
            description12.style.color = "floralwhite"
        }
    
        if(textDescription[12] != null){
    
            description13 = document.createElement("p")
            description13.innerHTML = textDescription[12]
            statecontainer.appendChild(description13)
    
            description13.style.position = "absolute"
            //add 13px
            description13.style.top = "1283px"
            description13.style.left = "0px"
            description13.style.fontSize = "15px"
            description13.style.width = "1000px"
            description13.style.textAlign = "justify"
            description13.style.fontFamily = "Arial, Helvetica, sans-serif"
            description13.style.fontWeight = "normal"
            description13.style.color = "floralwhite"
        }
    
        if(textDescription[8] != null){
    
            title9 = document.createElement("p")
            title9.innerHTML = textTitle[8]
            statecontainer.appendChild(title9)
            
    
            title9.style.position = "absolute"
            // add 40px
            title9.style.top = "1352px"
            title9.style.left = "0px"
            title9.style.fontSize = "17px"
            title9.style.width = "1000px"
            title9.style.textAlign = "justify"
            title9.style.fontFamily = "Arial, Helvetica, sans-serif"
            title9.style.fontWeight = "bolder"
            title9.style.color = "floralwhite"
    
           
    
            if(title9.style.top == "1352px" && title9.offsetHeight == 60){
    
                secondcontainer.style.height = "1468px"
                detailcontainer.style.height = "1601px"
                maindashboard.style.height = "1705px"
            }
            
        }
    
        if(textApplyDescription[0] != null){
    
            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0]
            applycontainer.appendChild(applydescription1)
            
    
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "50px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "330px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "darkred"
    
            applylinkdescription1 = document.createElement("p")
            applylinkdescription1.innerHTML = textApplyLinkDescription[0]
            applydescription1.appendChild(applylinkdescription1)
            
    
            applylinkdescription1.style.position = "absolute"
            // add 15px
            applylinkdescription1.style.top = "50px"
            applylinkdescription1.style.left = "0px"
            applylinkdescription1.style.fontSize = "15px"
            applylinkdescription1.style.width = "330px"
            applylinkdescription1.style.textAlign = "justify"
            applylinkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applylinkdescription1.style.fontWeight = "normal"
            applylinkdescription1.style.color = "floralwhite"
            applylinkdescription1.style.textDecoration = "underline"
            applylinkdescription1.style.cursor = "pointer"
    
            applylinkdescription1.addEventListener("click", openNewTab)
    
            function openNewTab() {
                window.open(textApplyLinkDescription[0])
            }
            
        }
    }

    if(location.state.row4 == 1){
        
        if(textDescription[0] != null){
    
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
        }

        if(textTitle[0] != null){
    
            title1 = document.createElement("p")
            title1.innerHTML = textTitle[0]
            statecontainer.appendChild(title1)
            
    
            title1.style.position = "absolute"
            // Margin has 40px
            title1.style.top = "178px"
            title1.style.left = "0px"
            title1.style.fontSize = "20px"
            title1.style.width = "1000px"
            title1.style.textAlign = "justify"
            title1.style.fontFamily = "Arial, Helvetica, sans-serif"
            title1.style.fontWeight = "normal"
            title1.style.color = "floralwhite"
    
        }

        if(textDescription[1] != null){
           
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            // add 20 px
            description2.style.top = "220px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
        }

        if(textTitle[1] != null){
    
            title2 = document.createElement("p")
            title2.innerHTML = textTitle[1]
            statecontainer.appendChild(title2)
            
    
            title2.style.position = "absolute"
            // Margin has 40px
            title2.style.top = "283px"
            title2.style.left = "0px"
            title2.style.fontSize = "20px"
            title2.style.width = "1000px"
            title2.style.textAlign = "justify"
            title2.style.fontFamily = "Arial, Helvetica, sans-serif"
            title2.style.fontWeight = "normal"
            title2.style.color = "floralwhite"
    
        }

        if(textTitle[2] != null){
    
            title3 = document.createElement("p")
            title3.innerHTML = "---------------------------------------- " + textTitle[2] + " ----------------------------------------"
            statecontainer.appendChild(title3)
            
    
            title3.style.position = "absolute"
            // add 15px
            title3.style.top = "340px"
            title3.style.left = "0px"
            title3.style.fontSize = "17px"
            title3.style.width = "1000px"
            title3.style.textAlign = "justify"
            title3.style.fontFamily = "Arial, Helvetica, sans-serif"
            title3.style.fontWeight = "normal"
            title3.style.color = "floralwhite"
            
        }

        if(textDescription[2] != null){
           
    
            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            // add 20 px
            description3.style.top = "375px"
            description3.style.left = "0px"
            description3.style.fontSize = "15px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
        }

        if(textTitle[3] != null){
    
            title4 = document.createElement("p")
            title4.innerHTML = "---------------------------------------- " + textTitle[3] + " ----------------------------------------"
            statecontainer.appendChild(title4)
            
    
            title4.style.position = "absolute"
            // add 30px
            title4.style.top = "450px"
            title4.style.left = "0px"
            title4.style.fontSize = "17px"
            title4.style.width = "1000px"
            title4.style.textAlign = "justify"
            title4.style.fontFamily = "Arial, Helvetica, sans-serif"
            title4.style.fontWeight = "normal"
            title4.style.color = "floralwhite"
            
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "476px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "498px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "1000px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "520px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "542px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "1000px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "564px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "1000px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "586px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "1000px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }
        
        if(textTitle[4] != null){
    
            title5 = document.createElement("p")
            title5.innerHTML = "---------------------------------------------- " + textTitle[4] + " ----------------------------------------------"
            statecontainer.appendChild(title5)
            
    
            title5.style.position = "absolute"
            // add 30px
            title5.style.top = "626px"
            title5.style.left = "0px"
            title5.style.fontSize = "17px"
            title5.style.width = "1000px"
            title5.style.textAlign = "justify"
            title5.style.fontFamily = "Arial, Helvetica, sans-serif"
            title5.style.fontWeight = "normal"
            title5.style.color = "floralwhite"
            
        }

        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "652px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "1000px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "674px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "1000px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "696px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "1000px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "718px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "1000px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "740px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "1000px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "762px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "1000px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "784px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "1000px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }

        if(textDescription[3] != null){

            description4 = document.createElement("p")
            description4.innerHTML = textDescription[3]
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            // add 20 px
            description4.style.top = "826px"
            description4.style.left = "0px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
        }

        if(textTitle[5] != null){
    
            title6 = document.createElement("p")
            title6.innerHTML = "----------------------------------------------- " + textTitle[5] + " -----------------------------------------------"
            statecontainer.appendChild(title6)
            
    
            title6.style.position = "absolute"
            // add 30px
            title6.style.top = "883px"
            title6.style.left = "0px"
            title6.style.fontSize = "17px"
            title6.style.width = "1000px"
            title6.style.textAlign = "justify"
            title6.style.fontFamily = "Arial, Helvetica, sans-serif"
            title6.style.fontWeight = "normal"
            title6.style.color = "floralwhite"
            
        }

        if(textList[13] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "909px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "1000px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textList[14] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
            
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "931px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "1000px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }

        if(textList[15] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list16)
            
    
            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "953px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "1000px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }

        if(textList[16] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list17)
            
    
            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "975px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "1000px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }

        if(textList[17] != null){
    
            list18 = document.createElement("p")
            list18.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list18)
            
    
            list18.style.position = "absolute"
            // add 10px
            list18.style.top = "997px"
            list18.style.left = "20px"
            list18.style.fontSize = "15px"
            list18.style.width = "1000px"
            list18.style.textAlign = "justify"
            list18.style.fontFamily = "Arial, Helvetica, sans-serif"
            list18.style.fontWeight = "normal"
            list18.style.color = "floralwhite"
            
        }

        if(textList[18] != null){
    
            list19 = document.createElement("p")
            list19.innerHTML = "> " + textList[18]
            statecontainer.appendChild(list19)
            
    
            list19.style.position = "absolute"
            // add 10px
            list19.style.top = "1019px"
            list19.style.left = "20px"
            list19.style.fontSize = "15px"
            list19.style.width = "1000px"
            list19.style.textAlign = "justify"
            list19.style.fontFamily = "Arial, Helvetica, sans-serif"
            list19.style.fontWeight = "normal"
            list19.style.color = "floralwhite"
            
        }

        if(textList[19] != null){
    
            list20 = document.createElement("p")
            list20.innerHTML = "> " + textList[19]
            statecontainer.appendChild(list20)
            
    
            list20.style.position = "absolute"
            // add 10px
            list20.style.top = "1041px"
            list20.style.left = "20px"
            list20.style.fontSize = "15px"
            list20.style.width = "1000px"
            list20.style.textAlign = "justify"
            list20.style.fontFamily = "Arial, Helvetica, sans-serif"
            list20.style.fontWeight = "normal"
            list20.style.color = "floralwhite"
            
        }

        if(textList[20] != null){
    
            list21 = document.createElement("p")
            list21.innerHTML = "> " + textList[20]
            statecontainer.appendChild(list21)
            
    
            list21.style.position = "absolute"
            // add 10px
            list21.style.top = "1063px"
            list21.style.left = "20px"
            list21.style.fontSize = "15px"
            list21.style.width = "1000px"
            list21.style.textAlign = "justify"
            list21.style.fontFamily = "Arial, Helvetica, sans-serif"
            list21.style.fontWeight = "normal"
            list21.style.color = "floralwhite"
            
        }

        if(textList[21] != null){
    
            list22 = document.createElement("p")
            list22.innerHTML = "> " + textList[21]
            statecontainer.appendChild(list22)
            
    
            list22.style.position = "absolute"
            // add 10px
            list22.style.top = "1085px"
            list22.style.left = "20px"
            list22.style.fontSize = "15px"
            list22.style.width = "1000px"
            list22.style.textAlign = "justify"
            list22.style.fontFamily = "Arial, Helvetica, sans-serif"
            list22.style.fontWeight = "normal"
            list22.style.color = "floralwhite"
            
        }

        if(textList[22] != null){
    
            list23 = document.createElement("p")
            list23.innerHTML = "> " + textList[22]
            statecontainer.appendChild(list23)
            
    
            list23.style.position = "absolute"
            // add 10px
            list23.style.top = "1107px"
            list23.style.left = "20px"
            list23.style.fontSize = "15px"
            list23.style.width = "1000px"
            list23.style.textAlign = "justify"
            list23.style.fontFamily = "Arial, Helvetica, sans-serif"
            list23.style.fontWeight = "normal"
            list23.style.color = "floralwhite"
            
        }

        if(textList[23] != null){
    
            list24 = document.createElement("p")
            list24.innerHTML = "> " + textList[23]
            statecontainer.appendChild(list24)
            
    
            list24.style.position = "absolute"
            // add 10px
            list24.style.top = "1129px"
            list24.style.left = "20px"
            list24.style.fontSize = "15px"
            list24.style.width = "1000px"
            list24.style.textAlign = "justify"
            list24.style.fontFamily = "Arial, Helvetica, sans-serif"
            list24.style.fontWeight = "normal"
            list24.style.color = "floralwhite"
            
        }

        if(textTitle[6] != null){
    
            title7 = document.createElement("p")
            title7.innerHTML = "------------------------------------------------------ " + textTitle[6] + " ------------------------------------------------------"
            statecontainer.appendChild(title7)
            
    
            title7.style.position = "absolute"
            // add 30px
            title7.style.top = "1168px"
            title7.style.left = "0px"
            title7.style.fontSize = "17px"
            title7.style.width = "1000px"
            title7.style.textAlign = "justify"
            title7.style.fontFamily = "Arial, Helvetica, sans-serif"
            title7.style.fontWeight = "normal"
            title7.style.color = "floralwhite"
            
        }

        if(textDescription[4] != null){

            description5 = document.createElement("p")
            description5.innerHTML = textDescription[4]
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            // add 20 px
            description5.style.top = "1198px"
            description5.style.left = "0px"
            description5.style.fontSize = "15px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
        }

        if(textDescription[5] != null){

            description6 = document.createElement("p")
            description6.innerHTML = textDescription[5]
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            // add 20 px
            description6.style.top = "1220px"
            description6.style.left = "0px"
            description6.style.fontSize = "15px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "normal"
            description6.style.color = "floralwhite"

        }

        if(textDescription[6] != null){

            description7 = document.createElement("p")
            description7.innerHTML = textDescription[6]
            statecontainer.appendChild(description7)
    
            description7.style.position = "absolute"
            // add 20 px
            description7.style.top = "1220px"
            description7.style.left = "0px"
            description7.style.fontSize = "15px"
            description7.style.width = "1000px"
            description7.style.textAlign = "justify"
            description7.style.fontFamily = "Arial, Helvetica, sans-serif"
            description7.style.fontWeight = "normal"
            description7.style.color = "floralwhite"

            linkdescription1 = document.createElement("p")
            linkdescription1.innerHTML = textLinkDescription[0].slice(0, 130)
            statecontainer.appendChild(linkdescription1)
    
            linkdescription1.style.position = "absolute"
            // add 20 px
            linkdescription1.style.top = "1259px"
            linkdescription1.style.left = "0px"
            linkdescription1.style.fontSize = "15px"
            linkdescription1.style.width = "100px"
            linkdescription1.style.textAlign = "justify"
            linkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription1.style.fontWeight = "normal"
            linkdescription1.style.color = "floralwhite"

            
            linkdescription2 = document.createElement("p")
            linkdescription2.innerHTML = textLinkDescription[0].slice(131)
            statecontainer.appendChild(linkdescription2)
    
            linkdescription2.style.position = "absolute"
            // add 20 px
            linkdescription2.style.top = "1282px"
            linkdescription2.style.left = "0px"
            linkdescription2.style.fontSize = "15px"
            linkdescription2.style.width = "100px"
            linkdescription2.style.textAlign = "justify"
            linkdescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription2.style.fontWeight = "normal"
            linkdescription2.style.color = "floralwhite"

            

            if(linkdescription2.style.top == "1282px"){
    
                secondcontainer.style.height = "1352px"
                detailcontainer.style.height = "1484px"
                maindashboard.style.height = "1587px"
            }

        }

        if(textApplyDescription[0] != null){

            
    
            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0]
            applycontainer.appendChild(applydescription1)
            
    
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "50px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "330px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "darkred"
    
            applylinkdescription1 = document.createElement("p")
            applylinkdescription1.innerHTML = textApplyLinkDescription[0].slice(0,47)
            applydescription1.appendChild(applylinkdescription1)
            
    
            applylinkdescription1.style.position = "absolute"
            // add 15px
            applylinkdescription1.style.top = "-10px"
            applylinkdescription1.style.left = "0px"
            applylinkdescription1.style.fontSize = "15px"
            applylinkdescription1.style.width = "330px"
            applylinkdescription1.style.textAlign = "justify"
            applylinkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applylinkdescription1.style.fontWeight = "normal"
            applylinkdescription1.style.color = "floralwhite"
            applylinkdescription1.style.textDecoration = "underline"
            applylinkdescription1.style.cursor = "pointer"

            applylinkdescription2 = document.createElement("p")
            applylinkdescription2.innerHTML = textApplyLinkDescription[0].slice(48, 87)
            applydescription1.appendChild(applylinkdescription2)
            
    
            applylinkdescription2.style.position = "absolute"
            // add 15px
            applylinkdescription2.style.top = "13px"
            applylinkdescription2.style.left = "0px"
            applylinkdescription2.style.fontSize = "15px"
            applylinkdescription2.style.width = "330px"
            applylinkdescription2.style.textAlign = "justify"
            applylinkdescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applylinkdescription2.style.fontWeight = "normal"
            applylinkdescription2.style.color = "floralwhite"
            applylinkdescription2.style.textDecoration = "underline"
            applylinkdescription2.style.cursor = "pointer"


            applylinkdescription3 = document.createElement("p")
            applylinkdescription3.innerHTML = textApplyLinkDescription[0].slice(88)
            applydescription1.appendChild(applylinkdescription3)
            
    
            applylinkdescription3.style.position = "absolute"
            // add 15px
            applylinkdescription3.style.top = "35px"
            applylinkdescription3.style.left = "0px"
            applylinkdescription3.style.fontSize = "15px"
            applylinkdescription3.style.width = "330px"
            applylinkdescription3.style.textAlign = "justify"
            applylinkdescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            applylinkdescription3.style.fontWeight = "normal"
            applylinkdescription3.style.color = "floralwhite"
            applylinkdescription3.style.textDecoration = "underline"
            applylinkdescription3.style.cursor = "pointer"
    
            applylinkdescription1.addEventListener("click", openNewTab)
            applylinkdescription2.addEventListener("click", openNewTab)
            applylinkdescription3.addEventListener("click", openNewTab)
    
            function openNewTab() {
                window.open(textApplyLinkDescription[0])
            }
            
        }
    

        
    }

    if(location.state.row4 == 2){
        
        if(textDescription[0] != null){
    
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
        }

        if(textTitle[0] != null){
    
            title1 = document.createElement("p")
            title1.innerHTML = textTitle[0]
            statecontainer.appendChild(title1)
            
    
            title1.style.position = "absolute"
            // Margin has 40px
            title1.style.top = "178px"
            title1.style.left = "0px"
            title1.style.fontSize = "20px"
            title1.style.width = "1000px"
            title1.style.textAlign = "justify"
            title1.style.fontFamily = "Arial, Helvetica, sans-serif"
            title1.style.fontWeight = "normal"
            title1.style.color = "floralwhite"
    
        }

        if(textDescription[1] != null){
           
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            // add 20 px
            description2.style.top = "220px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
        }

        if(textTitle[1] != null){
    
            title2 = document.createElement("p")
            title2.innerHTML = textTitle[1]
            statecontainer.appendChild(title2)
            
    
            title2.style.position = "absolute"
            // Margin has 40px
            title2.style.top = "283px"
            title2.style.left = "0px"
            title2.style.fontSize = "20px"
            title2.style.width = "1000px"
            title2.style.textAlign = "justify"
            title2.style.fontFamily = "Arial, Helvetica, sans-serif"
            title2.style.fontWeight = "normal"
            title2.style.color = "floralwhite"
    
        }

        if(textTitle[2] != null){
    
            title3 = document.createElement("p")
            title3.innerHTML = "---------------------------------------- " + textTitle[2] + " ----------------------------------------"
            statecontainer.appendChild(title3)
            
    
            title3.style.position = "absolute"
            // add 15px
            title3.style.top = "340px"
            title3.style.left = "0px"
            title3.style.fontSize = "17px"
            title3.style.width = "1000px"
            title3.style.textAlign = "justify"
            title3.style.fontFamily = "Arial, Helvetica, sans-serif"
            title3.style.fontWeight = "normal"
            title3.style.color = "floralwhite"
            
        }

        if(textDescription[2] != null){
           
    
            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            // add 20 px
            description3.style.top = "375px"
            description3.style.left = "0px"
            description3.style.fontSize = "15px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
        }

        if(textDescription[3] != null){

            description4 = document.createElement("p")
            description4.innerHTML = textDescription[3]
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            // add 15 px
            description4.style.top = "420px"
            description4.style.left = "0px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
        }

        if(textDescription[4] != null){

            description5 = document.createElement("p")
            description5.innerHTML = textDescription[4]
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            // add 20 px
            description5.style.top = "483px"
            description5.style.left = "0px"
            description5.style.fontSize = "15px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
        }

        if(textTitle[3] != null){

            //continue from here
    
            title4 = document.createElement("p")
            title4.innerHTML = "---------------------------------------- " + textTitle[3] + " ----------------------------------------"
            statecontainer.appendChild(title4)
            
    
            title4.style.position = "absolute"
            // add 30px
            title4.style.top = "523px"
            title4.style.left = "0px"
            title4.style.fontSize = "17px"
            title4.style.width = "1000px"
            title4.style.textAlign = "justify"
            title4.style.fontFamily = "Arial, Helvetica, sans-serif"
            title4.style.fontWeight = "normal"
            title4.style.color = "floralwhite"
            
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "549px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "572px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "1000px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "594px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "616px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "1000px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "638px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "1000px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "660px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "1000px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }

        if(textTitle[4] != null){
    
            title5 = document.createElement("p")
            title5.innerHTML = "---------------------------------------------- " + textTitle[4] + " ----------------------------------------------"
            statecontainer.appendChild(title5)
            
    
            title5.style.position = "absolute"
            // add 30px
            title5.style.top = "699px"
            title5.style.left = "0px"
            title5.style.fontSize = "17px"
            title5.style.width = "1000px"
            title5.style.textAlign = "justify"
            title5.style.fontFamily = "Arial, Helvetica, sans-serif"
            title5.style.fontWeight = "normal"
            title5.style.color = "floralwhite"
            
        }

        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "725px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "1000px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "747px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "1000px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "769px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "1000px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "791px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "1000px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textList[10] != null){

           
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "813px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "1000px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
        
        }

        if(textList[11] != null){

           
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "835px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "1000px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
        
        }

        if(textList[12] != null){

            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "857px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "1000px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
        
        }

        if(textDescription[5] != null){

            description6 = document.createElement("p")
            description6.innerHTML = textDescription[5]
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            // add 20 px
            description6.style.top = "900px"
            description6.style.left = "0px"
            description6.style.fontSize = "15px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "normal"
            description6.style.color = "floralwhite"
        }

        if(textTitle[5] != null){

    
            title6 = document.createElement("p")
            title6.innerHTML = "----------------------------------------------- " + textTitle[5] + " -----------------------------------------------"
            statecontainer.appendChild(title6)
            
    
            title6.style.position = "absolute"
            // add 30px
            title6.style.top = "957px"
            title6.style.left = "0px"
            title6.style.fontSize = "17px"
            title6.style.width = "1000px"
            title6.style.textAlign = "justify"
            title6.style.fontFamily = "Arial, Helvetica, sans-serif"
            title6.style.fontWeight = "normal"
            title6.style.color = "floralwhite"
            
        }

        if(textList[13] != null){

            //continue from here
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "984px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "1000px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textList[14] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
            
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "1006px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "1000px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }

        if(textList[15] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list16)
            
    
            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "1028px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "1000px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }

        if(textList[16] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list17)
            
    
            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "1050px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "1000px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }

        if(textList[17] != null){
    
            list18 = document.createElement("p")
            list18.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list18)
            
    
            list18.style.position = "absolute"
            // add 10px
            list18.style.top = "1072px"
            list18.style.left = "20px"
            list18.style.fontSize = "15px"
            list18.style.width = "1000px"
            list18.style.textAlign = "justify"
            list18.style.fontFamily = "Arial, Helvetica, sans-serif"
            list18.style.fontWeight = "normal"
            list18.style.color = "floralwhite"
            
        }

        if(textList[18] != null){
    
            list19 = document.createElement("p")
            list19.innerHTML = "> " + textList[18]
            statecontainer.appendChild(list19)
            
    
            list19.style.position = "absolute"
            // add 10px
            list19.style.top = "1094px"
            list19.style.left = "20px"
            list19.style.fontSize = "15px"
            list19.style.width = "1000px"
            list19.style.textAlign = "justify"
            list19.style.fontFamily = "Arial, Helvetica, sans-serif"
            list19.style.fontWeight = "normal"
            list19.style.color = "floralwhite"
            
        }

        if(textList[19] != null){
    
            list20 = document.createElement("p")
            list20.innerHTML = "> " + textList[19]
            statecontainer.appendChild(list20)
            
    
            list20.style.position = "absolute"
            // add 10px
            list20.style.top = "1116px"
            list20.style.left = "20px"
            list20.style.fontSize = "15px"
            list20.style.width = "1000px"
            list20.style.textAlign = "justify"
            list20.style.fontFamily = "Arial, Helvetica, sans-serif"
            list20.style.fontWeight = "normal"
            list20.style.color = "floralwhite"
            
        }

        if(textList[20] != null){
    
            list21 = document.createElement("p")
            list21.innerHTML = "> " + textList[20]
            statecontainer.appendChild(list21)
            
    
            list21.style.position = "absolute"
            // add 10px
            list21.style.top = "1138px"
            list21.style.left = "20px"
            list21.style.fontSize = "15px"
            list21.style.width = "1000px"
            list21.style.textAlign = "justify"
            list21.style.fontFamily = "Arial, Helvetica, sans-serif"
            list21.style.fontWeight = "normal"
            list21.style.color = "floralwhite"
            
        }

        if(textList[21] != null){
    
            list22 = document.createElement("p")
            list22.innerHTML = "> " + textList[21]
            statecontainer.appendChild(list22)
            
    
            list22.style.position = "absolute"
            // add 10px
            list22.style.top = "1160px"
            list22.style.left = "20px"
            list22.style.fontSize = "15px"
            list22.style.width = "1000px"
            list22.style.textAlign = "justify"
            list22.style.fontFamily = "Arial, Helvetica, sans-serif"
            list22.style.fontWeight = "normal"
            list22.style.color = "floralwhite"
            
        }

        if(textList[22] != null){
    
            list23 = document.createElement("p")
            list23.innerHTML = "> " + textList[22]
            statecontainer.appendChild(list23)
            
    
            list23.style.position = "absolute"
            // add 10px
            list23.style.top = "1182px"
            list23.style.left = "20px"
            list23.style.fontSize = "15px"
            list23.style.width = "1000px"
            list23.style.textAlign = "justify"
            list23.style.fontFamily = "Arial, Helvetica, sans-serif"
            list23.style.fontWeight = "normal"
            list23.style.color = "floralwhite"
            
        }

        if(textList[23] != null){
    
            //continue from here
            list24 = document.createElement("p")
            list24.innerHTML = "> " + textList[23]
            statecontainer.appendChild(list24)
            
    
            list24.style.position = "absolute"
            // add 10px
            list24.style.top = "1204px"
            list24.style.left = "20px"
            list24.style.fontSize = "15px"
            list24.style.width = "1000px"
            list24.style.textAlign = "justify"
            list24.style.fontFamily = "Arial, Helvetica, sans-serif"
            list24.style.fontWeight = "normal"
            list24.style.color = "floralwhite"
            
        }

        if(textTitle[6] != null){
    
            title7 = document.createElement("p")
            title7.innerHTML = "------------------------------------------------------ " + textTitle[6] + " ------------------------------------------------------"
            statecontainer.appendChild(title7)
            
    
            title7.style.position = "absolute"
            // add 30px
            title7.style.top = "1243px"
            title7.style.left = "0px"
            title7.style.fontSize = "17px"
            title7.style.width = "1000px"
            title7.style.textAlign = "justify"
            title7.style.fontFamily = "Arial, Helvetica, sans-serif"
            title7.style.fontWeight = "normal"
            title7.style.color = "floralwhite"
            
        }

        if(textDescription[6] != null){

            description7 = document.createElement("p")
            description7.innerHTML = textDescription[6]
            statecontainer.appendChild(description7)
    
            description7.style.position = "absolute"
            // add 20 px
            description7.style.top = "1279px"
            description7.style.left = "0px"
            description7.style.fontSize = "15px"
            description7.style.width = "1000px"
            description7.style.textAlign = "justify"
            description7.style.fontFamily = "Arial, Helvetica, sans-serif"
            description7.style.fontWeight = "normal"
            description7.style.color = "floralwhite"
        }

        if(textDescription[7] != null){

            description8 = document.createElement("p")
            description8.innerHTML = textDescription[7]
            statecontainer.appendChild(description8)
    
            description8.style.position = "absolute"
            // add 20 px
            description8.style.top = "1307px"
            description8.style.left = "0px"
            description8.style.fontSize = "15px"
            description8.style.width = "1000px"
            description8.style.textAlign = "justify"
            description8.style.fontFamily = "Arial, Helvetica, sans-serif"
            description8.style.fontWeight = "normal"
            description8.style.color = "floralwhite"

            linkdescription1 = document.createElement("p")
            linkdescription1.innerHTML = textLinkDescription[0].slice(0, 130)
            statecontainer.appendChild(linkdescription1)
    
            linkdescription1.style.position = "absolute"
            // add 20 px
            linkdescription1.style.top = "1352px"
            linkdescription1.style.left = "0px"
            linkdescription1.style.fontSize = "15px"
            linkdescription1.style.width = "100px"
            linkdescription1.style.textAlign = "justify"
            linkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription1.style.fontWeight = "normal"
            linkdescription1.style.color = "floralwhite"

            
            linkdescription2 = document.createElement("p")
            linkdescription2.innerHTML = textLinkDescription[0].slice(131)
            statecontainer.appendChild(linkdescription2)
    
            linkdescription2.style.position = "absolute"
            // add 20 px
            linkdescription2.style.top = "1372px"
            linkdescription2.style.left = "0px"
            linkdescription2.style.fontSize = "15px"
            linkdescription2.style.width = "100px"
            linkdescription2.style.textAlign = "justify"
            linkdescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription2.style.fontWeight = "normal"
            linkdescription2.style.color = "floralwhite"

            if(linkdescription2.style.top == "1372px"){

               
                secondcontainer.style.height = "1432px"
                detailcontainer.style.height = "1565px"
                maindashboard.style.height = "1670px"
            }

        }

        if(textApplyDescription[0] != null){

            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0]
            applycontainer.appendChild(applydescription1)
            
           
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "50px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "330px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "darkred"

      
            applylinkdescription1 = document.createElement("p")
            applylinkdescription1.innerHTML = textApplyLinkDescription[0].slice(0,47)
            applydescription1.appendChild(applylinkdescription1)
            
    
            applylinkdescription1.style.position = "absolute"
            // add 15px
            applylinkdescription1.style.top = "-10px"
            applylinkdescription1.style.left = "0px"
            applylinkdescription1.style.fontSize = "15px"
            applylinkdescription1.style.width = "330px"
            applylinkdescription1.style.textAlign = "justify"
            applylinkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applylinkdescription1.style.fontWeight = "normal"
            applylinkdescription1.style.color = "floralwhite"
            applylinkdescription1.style.textDecoration = "underline"
            applylinkdescription1.style.cursor = "pointer"

            applylinkdescription2 = document.createElement("p")
            applylinkdescription2.innerHTML = textApplyLinkDescription[0].slice(48, 87)
            applydescription1.appendChild(applylinkdescription2)
            
    
            applylinkdescription2.style.position = "absolute"
            // add 15px
            applylinkdescription2.style.top = "13px"
            applylinkdescription2.style.left = "0px"
            applylinkdescription2.style.fontSize = "15px"
            applylinkdescription2.style.width = "330px"
            applylinkdescription2.style.textAlign = "justify"
            applylinkdescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applylinkdescription2.style.fontWeight = "normal"
            applylinkdescription2.style.color = "floralwhite"
            applylinkdescription2.style.textDecoration = "underline"
            applylinkdescription2.style.cursor = "pointer"


            applylinkdescription3 = document.createElement("p")
            applylinkdescription3.innerHTML = textApplyLinkDescription[0].slice(88)
            applydescription1.appendChild(applylinkdescription3)
            
    
            applylinkdescription3.style.position = "absolute"
            // add 15px
            applylinkdescription3.style.top = "35px"
            applylinkdescription3.style.left = "0px"
            applylinkdescription3.style.fontSize = "15px"
            applylinkdescription3.style.width = "330px"
            applylinkdescription3.style.textAlign = "justify"
            applylinkdescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            applylinkdescription3.style.fontWeight = "normal"
            applylinkdescription3.style.color = "floralwhite"
            applylinkdescription3.style.textDecoration = "underline"
            applylinkdescription3.style.cursor = "pointer"
    
            applylinkdescription1.addEventListener("click", openNewTab)
            applylinkdescription2.addEventListener("click", openNewTab)
            applylinkdescription3.addEventListener("click", openNewTab)
    
            function openNewTab() {
                window.open(textApplyLinkDescription[0])
            }
            
        }
    
    }

    if(location.state.row4 == 3){
        
        if(textDescription[0] != null){
    
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
        }

        if(textTitle[0] != null){
    
            title1 = document.createElement("p")
            title1.innerHTML = textTitle[0]
            statecontainer.appendChild(title1)
            
    
            title1.style.position = "absolute"
            // Margin has 40px
            title1.style.top = "178px"
            title1.style.left = "0px"
            title1.style.fontSize = "20px"
            title1.style.width = "1000px"
            title1.style.textAlign = "justify"
            title1.style.fontFamily = "Arial, Helvetica, sans-serif"
            title1.style.fontWeight = "normal"
            title1.style.color = "floralwhite"
    
        }

        if(textDescription[1] != null){
           
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            // add 20 px
            description2.style.top = "220px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
        }
        
        if(textTitle[1] != null){
    
            title2 = document.createElement("p")
            title2.innerHTML = "---------------------------------------- " + textTitle[1] + " ----------------------------------------"
            statecontainer.appendChild(title2)
            
    
            title2.style.position = "absolute"
            // Margin has 40px
            title2.style.top = "322px"
            title2.style.left = "0px"
            title2.style.fontSize = "17px"
            title2.style.width = "1000px"
            title2.style.textAlign = "justify"
            title2.style.fontFamily = "Arial, Helvetica, sans-serif"
            title2.style.fontWeight = "normal"
            title2.style.color = "floralwhite"
    
        }
        
        if(textTitle[2] != null){
    
            title3 = document.createElement("p")
            title3.innerHTML = textTitle[2].slice(0, 42)
            statecontainer.appendChild(title3)
            
    
            title3.style.position = "absolute"
            // add 15px
            title3.style.top = "353px"
            title3.style.left = "0px"
            title3.style.fontSize = "15px"
            title3.style.width = "1000px"
            title3.style.textAlign = "justify"
            title3.style.fontFamily = "Arial, Helvetica, sans-serif"
            title3.style.fontWeight = "normal"
            title3.style.color = "floralwhite"
            title3.style.zIndex = "10"

            title32 = document.createElement("p")
            title32.innerHTML = textTitle[2].slice(42, length - 34)
            statecontainer.appendChild(title32)
            
    
            title32.style.position = "absolute"
            // add 15px
            title32.style.top = "353px"
            title32.style.left = "0px"
            title32.style.fontSize = "15px"
            title32.style.width = "1000px"
            title32.style.textAlign = "justify"
            title32.style.fontFamily = "Arial, Helvetica, sans-serif"
            title32.style.fontWeight = "normal"
            title32.style.color = "floralwhite"
            title32.style.textIndent = "230px"

            title33 = document.createElement("p")
            title33.innerHTML = textTitle[2].slice(length - 18)
            statecontainer.appendChild(title33)
          
    
            title33.style.position = "absolute"
            // add 15px
            title33.style.top = "434px"
            title33.style.left = "0px"
            title33.style.fontSize = "20px"
            title33.style.width = "1000px"
            title33.style.textAlign = "justify"
            title33.style.fontFamily = "Arial, Helvetica, sans-serif"
            title33.style.fontWeight = "normal"
            title33.style.color = "floralwhite"
            
            
        }

        if(textTitle[3] != null){
    
            title4 = document.createElement("p")
            title4.innerHTML = "------------------------------------------ " + textTitle[3].slice(length - 27) + " ------------------------------------------"
            statecontainer.appendChild(title4)
            
    
            title4.style.position = "absolute"
            // add 20px
            title4.style.top = "476px"
            title4.style.left = "0px"
            title4.style.fontSize = "15px"
            title4.style.width = "1000px"
            title4.style.textAlign = "justify"
            title4.style.fontFamily = "Arial, Helvetica, sans-serif"
            title4.style.fontWeight = "normal"
            title4.style.color = "floralwhite"
 
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "499px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "521px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "1000px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "543px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "543px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "565px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "1000px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textTitle[4] != null){
    
            title5 = document.createElement("p")
            title5.innerHTML =  "------------------------------------------------------- " + textTitle[4].slice(length - 17) + " -------------------------------------------------------"
            statecontainer.appendChild(title5)
  
    
            title5.style.position = "absolute"
            // add 15px
            title5.style.top = "607px"
            title5.style.left = "0px"
            title5.style.fontSize = "15px"
            title5.style.width = "1000px"
            title5.style.textAlign = "justify"
            title5.style.fontFamily = "Arial, Helvetica, sans-serif"
            title5.style.fontWeight = "normal"
            title5.style.color = "floralwhite"
 
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "629px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "1000px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "652px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "1000px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }

        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "674px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "1000px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "696px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "1000px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "718px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "1000px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "740px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "1000px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textTitle[5] != null){
    
            title6 = document.createElement("p")
            title6.innerHTML = "------------------------------------------------- " + textTitle[5].slice(length - 23) + " -------------------------------------------------"
            statecontainer.appendChild(title6)
  
    
            title6.style.position = "absolute"
            // add 30px
            title6.style.top = "782px"
            title6.style.left = "0px"
            title6.style.fontSize = "15px"
            title6.style.width = "1000px"
            title6.style.textAlign = "justify"
            title6.style.fontFamily = "Arial, Helvetica, sans-serif"
            title6.style.fontWeight = "normal"
            title6.style.color = "floralwhite"
 
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "804px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "1000px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "826px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "1000px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "848px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "1000px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }

        if(textDescription[2] != null){
           
    
            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            // add 20 px
            description3.style.top = "890px"
            description3.style.left = "0px"
            description3.style.fontSize = "15px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
        }

        if(textTitle[6] != null){
    
            title7 = document.createElement("p")
            title7.innerHTML = textTitle[6].slice(length - 18)
            statecontainer.appendChild(title7)
            
    
            title7.style.position = "absolute"
            // add 40px
            title7.style.top = "959px"
            title7.style.left = "0px"
            title7.style.fontSize = "20px"
            title7.style.width = "1000px"
            title7.style.textAlign = "justify"
            title7.style.fontFamily = "Arial, Helvetica, sans-serif"
            title7.style.fontWeight = "normal"
            title7.style.color = "floralwhite"
          

        }

        if(textTitle[7] != null){
    
            title8 = document.createElement("p")
            title8.innerHTML = "------------------------------------------- " + textTitle[7].slice(length - 26) + " -------------------------------------------" 
            statecontainer.appendChild(title8)
            
    
            title8.style.position = "absolute"
            // add 20px
            title8.style.top = "1001px"
            title8.style.left = "0px"
            title8.style.fontSize = "15px"
            title8.style.width = "1000px"
            title8.style.textAlign = "justify"
            title8.style.fontFamily = "Arial, Helvetica, sans-serif"
            title8.style.fontWeight = "normal"
            title8.style.color = "floralwhite"
         

        }

        if(textList[13] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "1023px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "1000px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textList[14] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
            
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "1045px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "1000px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }

        if(textList[15] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list16)
            
    
            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "1067px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "1000px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }

        if(textList[16] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list17)
            
    
            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "1089px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "1000px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }

        if(textList[17] != null){
    
            list18 = document.createElement("p")
            list18.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list18)
            
    
            list18.style.position = "absolute"
            // add 10px
            list18.style.top = "1111px"
            list18.style.left = "20px"
            list18.style.fontSize = "15px"
            list18.style.width = "1000px"
            list18.style.textAlign = "justify"
            list18.style.fontFamily = "Arial, Helvetica, sans-serif"
            list18.style.fontWeight = "normal"
            list18.style.color = "floralwhite"
            
        }

        if(textList[18] != null){
    
            list19 = document.createElement("p")
            list19.innerHTML = "> " + textList[18]
            statecontainer.appendChild(list19)
            
    
            list19.style.position = "absolute"
            // add 10px
            list19.style.top = "1133px"
            list19.style.left = "20px"
            list19.style.fontSize = "15px"
            list19.style.width = "1000px"
            list19.style.textAlign = "justify"
            list19.style.fontFamily = "Arial, Helvetica, sans-serif"
            list19.style.fontWeight = "normal"
            list19.style.color = "floralwhite"
            
        }

        if(textList[19] != null){
    
            list20 = document.createElement("p")
            list20.innerHTML = "> " + textList[19]
            statecontainer.appendChild(list20)
            
    
            list20.style.position = "absolute"
            // add 10px
            list20.style.top = "1155px"
            list20.style.left = "20px"
            list20.style.fontSize = "15px"
            list20.style.width = "1000px"
            list20.style.textAlign = "justify"
            list20.style.fontFamily = "Arial, Helvetica, sans-serif"
            list20.style.fontWeight = "normal"
            list20.style.color = "floralwhite"
            
        }

        if(textList[20] != null){
    
            list21 = document.createElement("p")
            list21.innerHTML = "> " + textList[20]
            statecontainer.appendChild(list21)
            
    
            list21.style.position = "absolute"
            // add 10px
            list21.style.top = "1177px"
            list21.style.left = "20px"
            list21.style.fontSize = "15px"
            list21.style.width = "1000px"
            list21.style.textAlign = "justify"
            list21.style.fontFamily = "Arial, Helvetica, sans-serif"
            list21.style.fontWeight = "normal"
            list21.style.color = "floralwhite"
            
        }

        if(textList[21] != null){
    
            list22 = document.createElement("p")
            list22.innerHTML = "> " + textList[21]
            statecontainer.appendChild(list22)
            
    
            list22.style.position = "absolute"
            // add 10px
            list22.style.top = "1199px"
            list22.style.left = "20px"
            list22.style.fontSize = "15px"
            list22.style.width = "1000px"
            list22.style.textAlign = "justify"
            list22.style.fontFamily = "Arial, Helvetica, sans-serif"
            list22.style.fontWeight = "normal"
            list22.style.color = "floralwhite"
            
        }

        if(textList[22] != null){
    
            list23 = document.createElement("p")
            list23.innerHTML = "> " + textList[22]
            statecontainer.appendChild(list23)
            
    
            list23.style.position = "absolute"
            // add 10px
            list23.style.top = "1221px"
            list23.style.left = "20px"
            list23.style.fontSize = "15px"
            list23.style.width = "1000px"
            list23.style.textAlign = "justify"
            list23.style.fontFamily = "Arial, Helvetica, sans-serif"
            list23.style.fontWeight = "normal"
            list23.style.color = "floralwhite"
            
        }

        if(textList[23] != null){
    
            list24 = document.createElement("p")
            list24.innerHTML = "> " + textList[23]
            statecontainer.appendChild(list24)
            
    
            list24.style.position = "absolute"
            // add 10px
            list24.style.top = "1243px"
            list24.style.left = "20px"
            list24.style.fontSize = "15px"
            list24.style.width = "1000px"
            list24.style.textAlign = "justify"
            list24.style.fontFamily = "Arial, Helvetica, sans-serif"
            list24.style.fontWeight = "normal"
            list24.style.color = "floralwhite"
            
        }

        if(textTitle[8] != null){
    
            title9 = document.createElement("p")
            title9.innerHTML = "------------------------------------------------------------- " + textTitle[8].slice(length - 7) + " -------------------------------------------------------------" 
            statecontainer.appendChild(title9)
            
    
            title9.style.position = "absolute"
            // add 30px
            title9.style.top = "1285px"
            title9.style.left = "0px"
            title9.style.fontSize = "15px"
            title9.style.width = "1000px"
            title9.style.textAlign = "justify"
            title9.style.fontFamily = "Arial, Helvetica, sans-serif"
            title9.style.fontWeight = "normal"
            title9.style.color = "floralwhite"
         

        }

        if(textDescription[3] != null){

            description4 = document.createElement("p")
            description4.innerHTML = textDescription[3]
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            // add 20 px
            description4.style.top = "1317px"
            description4.style.left = "0px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
        }
        
        if(textDescription[4] != null){

            description5 = document.createElement("p")
            description5.innerHTML = textDescription[4]
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            // add 20 px
            description5.style.top = "1307px"
            description5.style.left = "0px"
            description5.style.fontSize = "15px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"

            
            linkdescription1 = document.createElement("p")
            linkdescription1.innerHTML = textLinkDescription[0].slice(0, 130)
            statecontainer.appendChild(linkdescription1)
    
            linkdescription1.style.position = "absolute"
            // add 20 px
            linkdescription1.style.top = "1367px"
            linkdescription1.style.left = "0px"
            linkdescription1.style.fontSize = "15px"
            linkdescription1.style.width = "100px"
            linkdescription1.style.textAlign = "justify"
            linkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription1.style.fontWeight = "normal"
            linkdescription1.style.color = "floralwhite"

            
            linkdescription2 = document.createElement("p")
            linkdescription2.innerHTML = textLinkDescription[0].slice(131)
            statecontainer.appendChild(linkdescription2)
    
            linkdescription2.style.position = "absolute"
            // add 20 px
            linkdescription2.style.top = "1386px"
            linkdescription2.style.left = "0px"
            linkdescription2.style.fontSize = "15px"
            linkdescription2.style.width = "100px"
            linkdescription2.style.textAlign = "justify"
            linkdescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription2.style.fontWeight = "normal"
            linkdescription2.style.color = "floralwhite"

            
            if(linkdescription2.style.top == "1386px"){
    
                secondcontainer.style.height = "1445px"
                detailcontainer.style.height = "1577px"
                maindashboard.style.height = "1681px"
            }

        }

        if(textApplyDescription[0] != null){

            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0]
            applycontainer.appendChild(applydescription1)
            
           
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "50px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "330px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "darkred"

      
            applylinkdescription1 = document.createElement("p")
            applylinkdescription1.innerHTML = textApplyLinkDescription[0].slice(0,47)
            applydescription1.appendChild(applylinkdescription1)
            
    
            applylinkdescription1.style.position = "absolute"
            // add 15px
            applylinkdescription1.style.top = "-10px"
            applylinkdescription1.style.left = "0px"
            applylinkdescription1.style.fontSize = "15px"
            applylinkdescription1.style.width = "330px"
            applylinkdescription1.style.textAlign = "justify"
            applylinkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applylinkdescription1.style.fontWeight = "normal"
            applylinkdescription1.style.color = "floralwhite"
            applylinkdescription1.style.textDecoration = "underline"
            applylinkdescription1.style.cursor = "pointer"

            applylinkdescription2 = document.createElement("p")
            applylinkdescription2.innerHTML = textApplyLinkDescription[0].slice(48, 87)
            applydescription1.appendChild(applylinkdescription2)
            
    
            applylinkdescription2.style.position = "absolute"
            // add 15px
            applylinkdescription2.style.top = "13px"
            applylinkdescription2.style.left = "0px"
            applylinkdescription2.style.fontSize = "15px"
            applylinkdescription2.style.width = "330px"
            applylinkdescription2.style.textAlign = "justify"
            applylinkdescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applylinkdescription2.style.fontWeight = "normal"
            applylinkdescription2.style.color = "floralwhite"
            applylinkdescription2.style.textDecoration = "underline"
            applylinkdescription2.style.cursor = "pointer"


            applylinkdescription3 = document.createElement("p")
            applylinkdescription3.innerHTML = textApplyLinkDescription[0].slice(88)
            applydescription1.appendChild(applylinkdescription3)
            
    
            applylinkdescription3.style.position = "absolute"
            // add 15px
            applylinkdescription3.style.top = "35px"
            applylinkdescription3.style.left = "0px"
            applylinkdescription3.style.fontSize = "15px"
            applylinkdescription3.style.width = "330px"
            applylinkdescription3.style.textAlign = "justify"
            applylinkdescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            applylinkdescription3.style.fontWeight = "normal"
            applylinkdescription3.style.color = "floralwhite"
            applylinkdescription3.style.textDecoration = "underline"
            applylinkdescription3.style.cursor = "pointer"
    
            applylinkdescription1.addEventListener("click", openNewTab)
            applylinkdescription2.addEventListener("click", openNewTab)
            applylinkdescription3.addEventListener("click", openNewTab)
    
            function openNewTab() {
                window.open(textApplyLinkDescription[0])
            }
            
        }
    
    }

    if(location.state.row4 == 4){

        
        if(textDescription[0] != null){
    
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
        }

        if(textDescription[1] != null){
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "21px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
        }

        if(textDescription[2] != null){
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[2].slice(0, 15)
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "158px"
            description2.style.left = "0px"
            description2.style.fontSize = "17px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
        }

        if(textDescription[2] != null){
    
            description22 = document.createElement("p")
            description22.innerHTML = textDescription[2].slice(16)
            statecontainer.appendChild(description22)
    
            description22.style.position = "absolute"
            description22.style.top = "194px"
            description22.style.left = "0px"
            description22.style.fontSize = "15px"
            description22.style.width = "1000px"
            description22.style.textAlign = "justify"
            description22.style.fontFamily = "Arial, Helvetica, sans-serif"
            description22.style.fontWeight = "normal"
            description22.style.color = "floralwhite"
        }

        if(textDescription[3] != null){
    
            description3 = document.createElement("p")
            description3.innerHTML = textDescription[3]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "294px"
            description3.style.left = "0px"
            description3.style.fontSize = "15px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description4 = document.createElement("p")
            description4.innerHTML = textDescription[4].slice(0, 25)
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "378px"
            description4.style.left = "0px"
            description4.style.fontSize = "17px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description42 = document.createElement("p")
            description42.innerHTML = textDescription[4].slice(26, 166)
            statecontainer.appendChild(description42)
    
            description42.style.position = "absolute"
            description42.style.top = "404px"
            description42.style.left = "20px"
            description42.style.fontSize = "15px"
            description42.style.width = "1000px"
            description42.style.textAlign = "justify"
            description42.style.fontFamily = "Arial, Helvetica, sans-serif"
            description42.style.fontWeight = "normal"
            description42.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description43 = document.createElement("p")
            description43.innerHTML = textDescription[4].slice(167, 267)
            statecontainer.appendChild(description43)
    
            description43.style.position = "absolute"
            description43.style.top = "426px"
            description43.style.left = "20px"
            description43.style.fontSize = "15px"
            description43.style.width = "1000px"
            description43.style.textAlign = "justify"
            description43.style.fontFamily = "Arial, Helvetica, sans-serif"
            description43.style.fontWeight = "normal"
            description43.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description44 = document.createElement("p")
            description44.innerHTML = textDescription[4].slice(268, 314)
            statecontainer.appendChild(description44)
    
            description44.style.position = "absolute"
            description44.style.top = "448px"
            description44.style.left = "20px"
            description44.style.fontSize = "15px"
            description44.style.width = "1000px"
            description44.style.textAlign = "justify"
            description44.style.fontFamily = "Arial, Helvetica, sans-serif"
            description44.style.fontWeight = "normal"
            description44.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description45 = document.createElement("p")
            description45.innerHTML = textDescription[4].slice(315, 412)
            statecontainer.appendChild(description45)
    
            description45.style.position = "absolute"
            description45.style.top = "470px"
            description45.style.left = "20px"
            description45.style.fontSize = "15px"
            description45.style.width = "1000px"
            description45.style.textAlign = "justify"
            description45.style.fontFamily = "Arial, Helvetica, sans-serif"
            description45.style.fontWeight = "normal"
            description45.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description46 = document.createElement("p")
            description46.innerHTML = textDescription[4].slice(413, 462)
            statecontainer.appendChild(description46)
    
            description46.style.position = "absolute"
            description46.style.top = "492px"
            description46.style.left = "20px"
            description46.style.fontSize = "15px"
            description46.style.width = "1000px"
            description46.style.textAlign = "justify"
            description46.style.fontFamily = "Arial, Helvetica, sans-serif"
            description46.style.fontWeight = "normal"
            description46.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description47 = document.createElement("p")
            description47.innerHTML = textDescription[4].slice(463, 579)
            statecontainer.appendChild(description47)
    
            description47.style.position = "absolute"
            description47.style.top = "514px"
            description47.style.left = "20px"
            description47.style.fontSize = "15px"
            description47.style.width = "1000px"
            description47.style.textAlign = "justify"
            description47.style.fontFamily = "Arial, Helvetica, sans-serif"
            description47.style.fontWeight = "normal"
            description47.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description48 = document.createElement("p")
            description48.innerHTML = textDescription[4].slice(580, 634)
            statecontainer.appendChild(description48)
    
            description48.style.position = "absolute"
            description48.style.top = "536px"
            description48.style.left = "20px"
            description48.style.fontSize = "15px"
            description48.style.width = "1000px"
            description48.style.textAlign = "justify"
            description48.style.fontFamily = "Arial, Helvetica, sans-serif"
            description48.style.fontWeight = "normal"
            description48.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description49 = document.createElement("p")
            description49.innerHTML = textDescription[4].slice(635, 690)
            statecontainer.appendChild(description49)
    
            description49.style.position = "absolute"
            description49.style.top = "558px"
            description49.style.left = "20px"
            description49.style.fontSize = "15px"
            description49.style.width = "1000px"
            description49.style.textAlign = "justify"
            description49.style.fontFamily = "Arial, Helvetica, sans-serif"
            description49.style.fontWeight = "normal"
            description49.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description421 = document.createElement("p")
            description421.innerHTML = textDescription[4].slice(691, 735)
            statecontainer.appendChild(description421)
    
            description421.style.position = "absolute"
            description421.style.top = "580px"
            description421.style.left = "20px"
            description421.style.fontSize = "15px"
            description421.style.width = "1000px"
            description421.style.textAlign = "justify"
            description421.style.fontFamily = "Arial, Helvetica, sans-serif"
            description421.style.fontWeight = "normal"
            description421.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description422 = document.createElement("p")
            description422.innerHTML = textDescription[4].slice(736, 793)
            statecontainer.appendChild(description422)
    
            description422.style.position = "absolute"
            description422.style.top = "602px"
            description422.style.left = "20px"
            description422.style.fontSize = "15px"
            description422.style.width = "1000px"
            description422.style.textAlign = "justify"
            description422.style.fontFamily = "Arial, Helvetica, sans-serif"
            description422.style.fontWeight = "normal"
            description422.style.color = "floralwhite"
        }

        if(textDescription[4] != null){
    
            description423 = document.createElement("p")
            description423.innerHTML = textDescription[4].slice(794, 823)
            statecontainer.appendChild(description423)
    
            description423.style.position = "absolute"
            description423.style.top = "624px"
            description423.style.left = "20px"
            description423.style.fontSize = "15px"
            description423.style.width = "1000px"
            description423.style.textAlign = "justify"
            description423.style.fontFamily = "Arial, Helvetica, sans-serif"
            description423.style.fontWeight = "normal"
            description423.style.color = "floralwhite"
        }

        if(textDescription[5] != null){
    
            description5 = document.createElement("p")
            description5.innerHTML = textDescription[5].slice(0, 24)
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            description5.style.top = "664px"
            description5.style.left = "0px"
            description5.style.fontSize = "17px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
        }

        if(textDescription[5] != null){
    
            description52 = document.createElement("p")
            description52.innerHTML = textDescription[5].slice(25, 75)
            statecontainer.appendChild(description52)
    
            description52.style.position = "absolute"
            description52.style.top = "689px"
            description52.style.left = "20px"
            description52.style.fontSize = "15px"
            description52.style.width = "1000px"
            description52.style.textAlign = "justify"
            description52.style.fontFamily = "Arial, Helvetica, sans-serif"
            description52.style.fontWeight = "normal"
            description52.style.color = "floralwhite"
        }

        if(textDescription[5] != null){
    
            description53 = document.createElement("p")
            description53.innerHTML = textDescription[5].slice(76, 150)
            statecontainer.appendChild(description53)
    
            description53.style.position = "absolute"
            description53.style.top = "711px"
            description53.style.left = "20px"
            description53.style.fontSize = "15px"
            description53.style.width = "1000px"
            description53.style.textAlign = "justify"
            description53.style.fontFamily = "Arial, Helvetica, sans-serif"
            description53.style.fontWeight = "normal"
            description53.style.color = "floralwhite"
        }

        if(textDescription[5] != null){
    
            description54 = document.createElement("p")
            description54.innerHTML = textDescription[5].slice(151, 201)
            statecontainer.appendChild(description54)
    
            description54.style.position = "absolute"
            description54.style.top = "733px"
            description54.style.left = "20px"
            description54.style.fontSize = "15px"
            description54.style.width = "1000px"
            description54.style.textAlign = "justify"
            description54.style.fontFamily = "Arial, Helvetica, sans-serif"
            description54.style.fontWeight = "normal"
            description54.style.color = "floralwhite"
        }

        if(textDescription[5] != null){
    
            description55 = document.createElement("p")
            description55.innerHTML = textDescription[5].slice(202, 224)
            statecontainer.appendChild(description55)
    
            description55.style.position = "absolute"
            description55.style.top = "755px"
            description55.style.left = "20px"
            description55.style.fontSize = "15px"
            description55.style.width = "1000px"
            description55.style.textAlign = "justify"
            description55.style.fontFamily = "Arial, Helvetica, sans-serif"
            description55.style.fontWeight = "normal"
            description55.style.color = "floralwhite"
        }

        if(textDescription[5] != null){
    
            description56 = document.createElement("p")
            description56.innerHTML = textDescription[5].slice(225, 303)
            statecontainer.appendChild(description56)
    
            description56.style.position = "absolute"
            description56.style.top = "777px"
            description56.style.left = "20px"
            description56.style.fontSize = "15px"
            description56.style.width = "1000px"
            description56.style.textAlign = "justify"
            description56.style.fontFamily = "Arial, Helvetica, sans-serif"
            description56.style.fontWeight = "normal"
            description56.style.color = "floralwhite"
        }

        if(textDescription[5] != null){
    
            description57 = document.createElement("p")
            description57.innerHTML = textDescription[5].slice(304, 397)
            statecontainer.appendChild(description57)
    
            description57.style.position = "absolute"
            description57.style.top = "799px"
            description57.style.left = "20px"
            description57.style.fontSize = "15px"
            description57.style.width = "1000px"
            description57.style.textAlign = "justify"
            description57.style.fontFamily = "Arial, Helvetica, sans-serif"
            description57.style.fontWeight = "normal"
            description57.style.color = "floralwhite"
        }

        if(textDescription[5] != null){
    
            
            description58 = document.createElement("p")
            description58.innerHTML = textDescription[5].slice(398, 475)
            statecontainer.appendChild(description58)
    
            description58.style.position = "absolute"
            description58.style.top = "822px"
            description58.style.left = "20px"
            description58.style.fontSize = "15px"
            description58.style.width = "1000px"
            description58.style.textAlign = "justify"
            description58.style.fontFamily = "Arial, Helvetica, sans-serif"
            description58.style.fontWeight = "normal"
            description58.style.color = "floralwhite"
        }

        if(textDescription[6] != null){
    
            description6 = document.createElement("p")
            description6.innerHTML = textDescription[6]
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            description6.style.top = "874px"
            description6.style.left = "0px"
            description6.style.fontSize = "15px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "normal"
            description6.style.color = "floralwhite"
        }

        if(textDescription[7] != null){
    
            description7 = document.createElement("p")
            description7.innerHTML = textDescription[7]
            statecontainer.appendChild(description7)
    
            description7.style.position = "absolute"
            description7.style.top = "891px"
            description7.style.left = "0px"
            description7.style.fontSize = "15px"
            description7.style.width = "1000px"
            description7.style.textAlign = "justify"
            description7.style.fontFamily = "Arial, Helvetica, sans-serif"
            description7.style.fontWeight = "normal"
            description7.style.color = "floralwhite"
        }

        if(textDescription[8] != null){
    
            description8 = document.createElement("p")
            description8.innerHTML = textDescription[8]
            statecontainer.appendChild(description8)
    
            description8.style.position = "absolute"
            description8.style.top = "923px"
            description8.style.left = "0px"
            description8.style.fontSize = "15px"
            description8.style.width = "1000px"
            description8.style.textAlign = "justify"
            description8.style.fontFamily = "Arial, Helvetica, sans-serif"
            description8.style.fontWeight = "normal"
            description8.style.color = "floralwhite"
        }

        if(textDescription[9] != null){
    
            description9 = document.createElement("p")
            description9.innerHTML = textDescription[9]
            statecontainer.appendChild(description9)
    
            description9.style.position = "absolute"
            description9.style.top = "1008px"
            description9.style.left = "0px"
            description9.style.fontSize = "15px"
            description9.style.width = "1000px"
            description9.style.textAlign = "justify"
            description9.style.fontFamily = "Arial, Helvetica, sans-serif"
            description9.style.fontWeight = "normal"
            description9.style.color = "floralwhite"

            if(description9.style.top == "1008px"){

    
                secondcontainer.style.height = "1080px"
                detailcontainer.style.height = "1213px"
                maindashboard.style.height = "1316px"
            }
        }
        
        if(textApplyDescription[1] != null){

            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[1].slice(0, 121)
            applycontainer.appendChild(applydescription1)
            
           
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "65px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "330px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "darkred"

          

            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[1].slice(122)
            applycontainer.appendChild(applydescription2)
            
           
            applydescription2.style.position = "absolute"   
            applydescription2.style.top = "101px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "330px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "darkred"
      
        }
    
    }

    if(location.state.row4 == 7){

        if(textDescription[0] != null){
    
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
        }

        if(textTitle[0] != null){
    
            title1 = document.createElement("p")
            title1.innerHTML = textTitle[0]
            statecontainer.appendChild(title1)
    
            title1.style.position = "absolute"
            title1.style.top = "294px"
            title1.style.left = "0px"
            title1.style.fontSize = "20px"
            title1.style.width = "1000px"
            title1.style.textAlign = "justify"
            title1.style.fontFamily = "Arial, Helvetica, sans-serif"
            title1.style.fontWeight = "normal"
            title1.style.color = "floralwhite"
        }

        if(textDescription[1] != null){
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "337px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
        }

        if(textTitle[1] != null){
    
            title2 = document.createElement("p")
            title2.innerHTML = "---------------------------------------- " + textTitle[1] + " ----------------------------------------"
            statecontainer.appendChild(title2)
            
    
            title2.style.position = "absolute"
            // add 15px
            title2.style.top = "429px"
            title2.style.left = "0px"
            title2.style.fontSize = "17px"
            title2.style.width = "1000px"
            title2.style.textAlign = "justify"
            title2.style.fontFamily = "Arial, Helvetica, sans-serif"
            title2.style.fontWeight = "normal"
            title2.style.color = "floralwhite"
            
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "454px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1].slice(0, 18)
            statecontainer.appendChild(list2)
       
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "476px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "1000px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"


            list2b = document.createElement("p")
            list2b.innerHTML = textList[1].slice(28, 49)
            statecontainer.appendChild(list2b)
            
            //console.log(textList[1].slice(27, 50))
    
            list2b.style.position = "absolute"
            // add 10px
            list2b.style.top = "476px"
            list2b.style.left = "175px"
            list2b.style.fontSize = "15px"
            list2b.style.width = "1000px"
            list2b.style.textAlign = "justify"
            list2b.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2b.style.fontWeight = "normal"
            list2b.style.color = "floralwhite"
            list2b.style.textDecoration = "underline"
            list2b.style.cursor = "pointer"
            

            list2b.addEventListener("click", openNewTab)
            
    
            function openNewTab() {
                window.open(textList[1].slice(28, 49))
            }

            list2c = document.createElement("p")
            list2c.innerHTML = textList[1].slice(69)
            statecontainer.appendChild(list2c)
       
            list2c.style.position = "absolute"
            // add 10px
            list2c.style.top = "476px"
            list2c.style.left = "320px"
            list2c.style.fontSize = "15px"
            list2c.style.width = "1000px"
            list2c.style.textAlign = "justify"
            list2c.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2c.style.fontWeight = "normal"
            list2c.style.color = "floralwhite"
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "498px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "520px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "1000px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "542px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "1000px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textTitle[2] != null){
    
            title3 = document.createElement("p")
            title3.innerHTML = "---------------------------------------- " + textTitle[2] + " ----------------------------------------"
            statecontainer.appendChild(title3)
            
    
            title3.style.position = "absolute"
            // add 15px
            title3.style.top = "582px"
            title3.style.left = "0px"
            title3.style.fontSize = "17px"
            title3.style.width = "1000px"
            title3.style.textAlign = "justify"
            title3.style.fontFamily = "Arial, Helvetica, sans-serif"
            title3.style.fontWeight = "normal"
            title3.style.color = "floralwhite"
            
        }

        if(textDescription[2] != null){
    
            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "608px"
            description3.style.left = "0px"
            description3.style.fontSize = "15px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "648px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "1000px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }

        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "670px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "1000px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "692px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "1000px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "714px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "1000px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "736px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "1000px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "758px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "1000px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }

        if(textDescription[3] != null){
    
            description4 = document.createElement("p")
            description4.innerHTML = textDescription[3]
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "790px"
            description4.style.left = "0px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
        }

        if(textTitle[3] != null){
    
            title4 = document.createElement("p")
            title4.innerHTML = "-------------------------------------------- " + textTitle[3] + " --------------------------------------------"
            statecontainer.appendChild(title4)
            
    
            title4.style.position = "absolute"
            // add 15px
            title4.style.top = "847px"
            title4.style.left = "0px"
            title4.style.fontSize = "17px"
            title4.style.width = "1000px"
            title4.style.textAlign = "justify"
            title4.style.fontFamily = "Arial, Helvetica, sans-serif"
            title4.style.fontWeight = "normal"
            title4.style.color = "floralwhite"
            
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "872px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "1000px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "894px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "1000px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }

        if(textList[13] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "916px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "1000px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textList[14] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
            
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "938px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "1000px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }

        if(textDescription[4] != null){
    
            description5 = document.createElement("p")
            description5.innerHTML = textDescription[4]
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            description5.style.top = "980px"
            description5.style.left = "0px"
            description5.style.fontSize = "15px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
        }

        if(textTitle[4] != null){
    
            title5 = document.createElement("p")
            title5.innerHTML = textTitle[4]
            statecontainer.appendChild(title5)
            
    
            title5.style.position = "absolute"
            // add 15px
            title5.style.top = "1043px"
            title5.style.left = "0px"
            title5.style.fontSize = "20px"
            title5.style.width = "1000px"
            title5.style.textAlign = "justify"
            title5.style.fontFamily = "Arial, Helvetica, sans-serif"
            title5.style.fontWeight = "normal"
            title5.style.color = "floralwhite"
            
        }

        if(textList[15] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list16)
            
    
            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "1076px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "1000px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }

        if(textList[16] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list17)
            
    
            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "1098px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "1000px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }

        if(textList[17] != null){
    
            list18= document.createElement("p")
            list18.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list18)
            
    
            list18.style.position = "absolute"
            // add 10px
            list18.style.top = "1119px"
            list18.style.left = "20px"
            list18.style.fontSize = "15px"
            list18.style.width = "1000px"
            list18.style.textAlign = "justify"
            list18.style.fontFamily = "Arial, Helvetica, sans-serif"
            list18.style.fontWeight = "normal"
            list18.style.color = "floralwhite"

            if(list18.style.top == "1119px"){

                  
                secondcontainer.style.height = "1191px"
                detailcontainer.style.height = "1324px"
                maindashboard.style.height = "1427px"
            }
            
        }
 
        if(textApplyDescription[0] != null){

            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0].slice(106)
            applycontainer.appendChild(applydescription1)
          

            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "80px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "330px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            applydescription1.style.textDecoration = "underline"
            applydescription1.style.cursor = "pointer"


            applydescription1.addEventListener("click", openNewTab)
    
            function openNewTab() {
                window.open(textApplyDescription[0].slice(106))
            }
      
        }
    
    }



    if(location.state.row4 == 5){

        if(textDescription[0] != null){
    
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
        }

        if(textDescription[1] != null){
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "22px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
        }

        if(textDescription[2] != null){
    
            description3 = document.createElement("p")
            description3.innerHTML = "---------------------------------------- " + textDescription[2] + " ----------------------------------------"
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "144px"
            description3.style.left = "0px"
            description3.style.fontSize = "17px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "169px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "192px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "1000px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "214px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "236px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "1000px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "258px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "1000px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textDescription[3] != null){
    
            description4 = document.createElement("p")
            description4.innerHTML = "-------------------------------------------- " + textDescription[3] + " --------------------------------------------"
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "298px"
            description4.style.left = "0px"
            description4.style.fontSize = "17px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "323px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "1000px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }

        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "345px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "1000px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "367px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "1000px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "389px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "1000px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "411px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "1000px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "433px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "1000px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "455px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "1000px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }

        if(textDescription[4] != null){
    
            description5 = document.createElement("p")
            description5.innerHTML = "--------------------------------------- " + textDescription[4] + " ---------------------------------------"
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            description5.style.top = "495px"
            description5.style.left = "0px"
            description5.style.fontSize = "17px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "521px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "1000px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }

        if(textList[13] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "543px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "1000px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textList[14] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
            
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "565px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "1000px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }

        if(textList[15] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list16)
            
    
            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "587px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "1000px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }

        if(textList[16] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list17)
            
    
            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "609px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "1000px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }

        if(textDescription[5] != null){
    
            description6 = document.createElement("p")
            description6.innerHTML = textDescription[5]
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            description6.style.top = "648px"
            description6.style.left = "0px"
            description6.style.fontSize = "17px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "bolder"
            description6.style.color = "floralwhite"


            linkdescription1 = document.createElement("p")
            linkdescription1.innerHTML = textDescription[5].slice(61, 149)
            statecontainer.appendChild(linkdescription1)
    
            linkdescription1.style.position = "absolute"
            linkdescription1.style.top = "666px"
            linkdescription1.style.left = "0px"
            linkdescription1.style.fontSize = "17px"
            linkdescription1.style.width = "1000px"
            linkdescription1.style.textAlign = "justify"
            linkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription1.style.fontWeight = "normal"
            linkdescription1.style.color = "floralwhite"
            linkdescription1.style.textDecoration = "underline"
            linkdescription1.style.cursor = "pointer"

            linkdescription1.addEventListener("click", openNewTab)
            
    
            function openNewTab() {
                window.open(textDescription[5].slice(61, 149))
            }

        }

        if(textDescription[6] != null){
    
            description7 = document.createElement("p")
            description7.innerHTML = textDescription[6]
            statecontainer.appendChild(description7)
    
            description7.style.position = "absolute"
            description7.style.top = "701px"
            description7.style.left = "0px"
            description7.style.fontSize = "17px"
            description7.style.width = "1000px"
            description7.style.textAlign = "justify"
            description7.style.fontFamily = "Arial, Helvetica, sans-serif"
            description7.style.fontWeight = "bolder"
            description7.style.color = "floralwhite"


            linkdescription2 = document.createElement("p")
            linkdescription2.innerHTML = textLinkDescription[1] + 'A'
            statecontainer.appendChild(linkdescription2)
    
            linkdescription2.style.position = "absolute"
            linkdescription2.style.top = "719px"
            linkdescription2.style.left = "0px"
            linkdescription2.style.fontSize = "17px"
            linkdescription2.style.width = "1000px"
            linkdescription2.style.textAlign = "justify"
            linkdescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription2.style.fontWeight = "normal"
            linkdescription2.style.color = "floralwhite"
            linkdescription2.style.textDecoration = "underline"
            linkdescription2.style.cursor = "pointer"

            linkdescription2.addEventListener("click", openNewTab)
            
    
            function openNewTab() {
                window.open(textLinkDescription[1] + 'A')
            }

        }

        if(textDescription[7] != null){
    
            description8 = document.createElement("p")
            description8.innerHTML = textDescription[7].slice(0, 18)
            statecontainer.appendChild(description8)
    
            description8.style.position = "absolute"
            description8.style.top = "795px"
            description8.style.left = "0px"
            description8.style.fontSize = "17px"
            description8.style.width = "1000px"
            description8.style.textAlign = "justify"
            description8.style.fontFamily = "Arial, Helvetica, sans-serif"
            description8.style.fontWeight = "bolder"
            description8.style.color = "floralwhite"


            linkdescription3 = document.createElement("p")
            linkdescription3.innerHTML = textDescription[7].slice(68, textDescription[7].length - 4 )
            statecontainer.appendChild(linkdescription3)
    
            
            linkdescription3.style.position = "absolute"
            linkdescription3.style.top = "813px"
            linkdescription3.style.left = "0px"
            linkdescription3.style.fontSize = "17px"
            linkdescription3.style.width = "1000px"
            linkdescription3.style.textAlign = "justify"
            linkdescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription3.style.fontWeight = "normal"
            linkdescription3.style.color = "floralwhite"
            linkdescription3.style.textDecoration = "underline"
            linkdescription3.style.cursor = "pointer"
          

            linkdescription3.addEventListener("click", openNewTab)
            
    
            function openNewTab() {
                window.open(textDescription[7].slice(68, textDescription[7].length - 4 ))
            }

        }

        if(textDescription[8] != null){
    
            description9 = document.createElement("p")
            description9.innerHTML = textDescription[8]
            statecontainer.appendChild(description9)
    
            description9.style.position = "absolute"
            description9.style.top = "849px"
            description9.style.left = "0px"
            description9.style.fontSize = "17px"
            description9.style.width = "1000px"
            description9.style.textAlign = "justify"
            description9.style.fontFamily = "Arial, Helvetica, sans-serif"
            description9.style.fontWeight = "bolder"
            description9.style.color = "floralwhite"


        }

        if(textDescription[9] != null){
    
            description10 = document.createElement("p")
            description10.innerHTML = textDescription[9]
            statecontainer.appendChild(description10)
    
            description10.style.position = "absolute"
            description10.style.top = "883px"
            description10.style.left = "0px"
            description10.style.fontSize = "17px"
            description10.style.width = "1000px"
            description10.style.textAlign = "justify"
            description10.style.fontFamily = "Arial, Helvetica, sans-serif"
            description10.style.fontWeight = "bolder"
            description10.style.color = "floralwhite"


        }

        if(textDescription[10] != null){
    
            description11 = document.createElement("p")
            description11.innerHTML = textDescription[10]
            statecontainer.appendChild(description11)
    
            description11.style.position = "absolute"
            description11.style.top = "902px"
            description11.style.left = "0px"
            description11.style.fontSize = "17px"
            description11.style.width = "1000px"
            description11.style.textAlign = "justify"
            description11.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11.style.fontWeight = "bolder"
            description11.style.color = "floralwhite"

            if(description11.style.top == "902px"){
    
                secondcontainer.style.height = "975px"
                detailcontainer.style.height = "1108px"
                maindashboard.style.height = "1212px"
            }

        }
        
        if(companyLogoDetail != null){

            flag.style.top = "23px"
            flag.style.width = "100%"
            flag.style.opacity = "1"
        }

        if(textApplyDescription[0] != null){

            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0].slice(9, 57)
            applycontainer.appendChild(applydescription1)

            applycontainer.style.height = "168px"
            
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "40px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "330px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            applydescription1.style.textDecoration = "underline"
            applydescription1.style.cursor = "pointer"



            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[0].slice(58, 106)
            applycontainer.appendChild(applydescription2)

            
            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "57px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "340px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"



            applydescription3 = document.createElement("p")
            applydescription3.innerHTML = textApplyDescription[0].slice(107, 152)
            applycontainer.appendChild(applydescription3)

            
            applydescription3.style.position = "absolute"
            // add 15px
            applydescription3.style.top = "74px"
            applydescription3.style.left = "10px"
            applydescription3.style.fontSize = "15px"
            applydescription3.style.width = "340px"
            applydescription3.style.textAlign = "justify"
            applydescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription3.style.fontWeight = "normal"
            applydescription3.style.color = "floralwhite"
            applydescription3.style.textDecoration = "underline"
            applydescription3.style.cursor = "pointer"



            applydescription4 = document.createElement("p")
            applydescription4.innerHTML = textApplyDescription[0].slice(153, 201)
            applycontainer.appendChild(applydescription4)

            
            applydescription4.style.position = "absolute"
            // add 15px
            applydescription4.style.top = "91px"
            applydescription4.style.left = "10px"
            applydescription4.style.fontSize = "15px"
            applydescription4.style.width = "340px"
            applydescription4.style.textAlign = "justify"
            applydescription4.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription4.style.fontWeight = "normal"
            applydescription4.style.color = "floralwhite"
            applydescription4.style.textDecoration = "underline"
            applydescription4.style.cursor = "pointer"


            applydescription5 = document.createElement("p")
            applydescription5.innerHTML = textApplyDescription[0].slice(202, 250)
            applycontainer.appendChild(applydescription5)

            
            applydescription5.style.position = "absolute"
            // add 15px
            applydescription5.style.top = "108px"
            applydescription5.style.left = "10px"
            applydescription5.style.fontSize = "15px"
            applydescription5.style.width = "340px"
            applydescription5.style.textAlign = "justify"
            applydescription5.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription5.style.fontWeight = "normal"
            applydescription5.style.color = "floralwhite"
            applydescription5.style.textDecoration = "underline"
            applydescription5.style.cursor = "pointer"



            applydescription6 = document.createElement("p")
            applydescription6.innerHTML = textApplyDescription[0].slice(251, 282)
            applycontainer.appendChild(applydescription6)

            
            applydescription6.style.position = "absolute"
            // add 15px
            applydescription6.style.top = "125px"
            applydescription6.style.left = "10px"
            applydescription6.style.fontSize = "15px"
            applydescription6.style.width = "340px"
            applydescription6.style.textAlign = "justify"
            applydescription6.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription6.style.fontWeight = "normal"
            applydescription6.style.color = "floralwhite"
            applydescription6.style.textDecoration = "underline"
            applydescription6.style.cursor = "pointer"


            applydescription1.addEventListener("click", openNewTab)
            applydescription2.addEventListener("click", openNewTab)
            applydescription3.addEventListener("click", openNewTab)
            applydescription4.addEventListener("click", openNewTab)
            applydescription5.addEventListener("click", openNewTab)
            applydescription6.addEventListener("click", openNewTab)
    
            function openNewTab() {
                window.open(textApplyDescription[0].slice(9, textApplyDescription[0].length - 2))
            }
      
        }
    
    }

    if(location.state.row4 == 6){

        if(textDescription[0] != null){
    
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
        }

        if(textDescription[1] != null){
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "22px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
        }

        if(textDescription[2] != null){
    
            description3 = document.createElement("p")
            description3.innerHTML = "---------------------------------------- " + textDescription[2] + " ----------------------------------------"
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "124px"
            description3.style.left = "0px"
            description3.style.fontSize = "17px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "149px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "171px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "1000px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }
   
        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "194px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "216px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "1000px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
        
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "238px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "1000px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
        
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "260px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "1000px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }

        if(textDescription[3] != null){
    
            description4 = document.createElement("p")
            description4.innerHTML = "-------------------------------------------- " + textDescription[3] + " --------------------------------------------"
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "299px"
            description4.style.left = "0px"
            description4.style.fontSize = "17px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
        }

        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
        
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "324px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "980px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
           
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
        
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "364px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "980px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
           
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
        
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "386px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "980px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
           
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
        
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "408px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "980px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
           
            
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10].slice(0, 64)
            statecontainer.appendChild(list11)
        
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "430px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "980px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"


            list11b = document.createElement("p")
            list11b.innerHTML = textList[10].slice(65, 83)
            statecontainer.appendChild(list11b)
        
    
            list11b.style.position = "absolute"
            // add 10px
            list11b.style.top = "452px"
            list11b.style.left = "40px"
            list11b.style.fontSize = "15px"
            list11b.style.width = "980px"
            list11b.style.textAlign = "justify"
            list11b.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11b.style.fontWeight = "normal"
            list11b.style.color = "floralwhite"


            list11c = document.createElement("p")
            list11c.innerHTML = textList[10].slice(84, 136)
            statecontainer.appendChild(list11c)
        
    
            list11c.style.position = "absolute"
            // add 10px
            list11c.style.top = "474px"
            list11c.style.left = "40px"
            list11c.style.fontSize = "15px"
            list11c.style.width = "980px"
            list11c.style.textAlign = "justify"
            list11c.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11c.style.fontWeight = "normal"
            list11c.style.color = "floralwhite"


            list11d = document.createElement("p")
            list11d.innerHTML = textList[10].slice(137, 145)
            statecontainer.appendChild(list11d)
        
    
            list11d.style.position = "absolute"
            // add 10px
            list11d.style.top = "496px"
            list11d.style.left = "40px"
            list11d.style.fontSize = "15px"
            list11d.style.width = "980px"
            list11d.style.textAlign = "justify"
            list11d.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11d.style.fontWeight = "normal"
            list11d.style.color = "floralwhite"



            list11e = document.createElement("p")
            list11e.innerHTML = textList[10].slice(146, 169)
            statecontainer.appendChild(list11e)
        
    
            list11e.style.position = "absolute"
            // add 10px
            list11e.style.top = "518px"
            list11e.style.left = "40px"
            list11e.style.fontSize = "15px"
            list11e.style.width = "980px"
            list11e.style.textAlign = "justify"
            list11e.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11e.style.fontWeight = "normal"
            list11e.style.color = "floralwhite"
           
            
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
        
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "540px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "980px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
           
            
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
        
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "562px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "980px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
           
            
        }

        if(textList[13] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
        
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "584px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "980px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
           
            
        }

        if(textDescription[4] != null){
    
            description5 = document.createElement("p")
            description5.innerHTML = "--------------------------------------- " + textDescription[4] + " ---------------------------------------"
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            description5.style.top = "624px"
            description5.style.left = "0px"
            description5.style.fontSize = "17px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
        }

        if(textList[14] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
        
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "649px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "980px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
           
            
        }

        if(textList[15] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list16)
        
    
            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "672px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "980px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
           
            
        }

        if(textList[16] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list17)
        
    
            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "694px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "980px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
           
            
        }

        if(textList[17] != null){
    
            list18 = document.createElement("p")
            list18.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list18)
        
    
            list18.style.position = "absolute"
            // add 10px
            list18.style.top = "716px"
            list18.style.left = "20px"
            list18.style.fontSize = "15px"
            list18.style.width = "980px"
            list18.style.textAlign = "justify"
            list18.style.fontFamily = "Arial, Helvetica, sans-serif"
            list18.style.fontWeight = "normal"
            list18.style.color = "floralwhite"
           
            
        }

        if(textList[18] != null){
    
            list19 = document.createElement("p")
            list19.innerHTML = "> " + textList[18]
            statecontainer.appendChild(list19)
        
    
            list19.style.position = "absolute"
            // add 10px
            list19.style.top = "738px"
            list19.style.left = "20px"
            list19.style.fontSize = "15px"
            list19.style.width = "980px"
            list19.style.textAlign = "justify"
            list19.style.fontFamily = "Arial, Helvetica, sans-serif"
            list19.style.fontWeight = "normal"
            list19.style.color = "floralwhite"
           
            
        }
        
        if(textDescription[5] != null){
    
            description6 = document.createElement("p")
            description6.innerHTML = textDescription[5]
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            description6.style.top = "778px"
            description6.style.left = "0px"
            description6.style.fontSize = "17px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "bolder"
            description6.style.color = "floralwhite"


            linkdescription1 = document.createElement("p")
            linkdescription1.innerHTML = textDescription[5].slice(61, 149)
            statecontainer.appendChild(linkdescription1)

            linkdescription1.style.position = "absolute"
            linkdescription1.style.top = "796px"
            linkdescription1.style.left = "0px"
            linkdescription1.style.fontSize = "17px"
            linkdescription1.style.width = "1000px"
            linkdescription1.style.textAlign = "justify"
            linkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription1.style.fontWeight = "normal"
            linkdescription1.style.color = "floralwhite"
            linkdescription1.style.textDecoration = "underline"
            linkdescription1.style.cursor = "pointer"

            linkdescription1.addEventListener("click", openNewTab)
            
    
            function openNewTab() {
                window.open(textDescription[5].slice(61, 149))
            }

        }
        
        if(textDescription[6] != null){
    
            description7 = document.createElement("p")
            description7.innerHTML = textDescription[6]
            statecontainer.appendChild(description7)
    
            description7.style.position = "absolute"
            description7.style.top = "832px"
            description7.style.left = "0px"
            description7.style.fontSize = "17px"
            description7.style.width = "1000px"
            description7.style.textAlign = "justify"
            description7.style.fontFamily = "Arial, Helvetica, sans-serif"
            description7.style.fontWeight = "bolder"
            description7.style.color = "floralwhite"


            linkdescription2 = document.createElement("p")
            linkdescription2.innerHTML = textLinkDescription[1] + 'w'
            statecontainer.appendChild(linkdescription2)
    
            linkdescription2.style.position = "absolute"
            linkdescription2.style.top = "849px"
            linkdescription2.style.left = "0px"
            linkdescription2.style.fontSize = "17px"
            linkdescription2.style.width = "1000px"
            linkdescription2.style.textAlign = "justify"
            linkdescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription2.style.fontWeight = "normal"
            linkdescription2.style.color = "floralwhite"
            linkdescription2.style.textDecoration = "underline"
            linkdescription2.style.cursor = "pointer"

            linkdescription2.addEventListener("click", openNewTab)
            
    
            function openNewTab() {
                window.open(textLinkDescription[1] + 'w')
            }

        }
        
        if(textDescription[7] != null){
    
            description8 = document.createElement("p")
            description8.innerHTML = textDescription[7].slice(0, 18)
            statecontainer.appendChild(description8)
    
            description8.style.position = "absolute"
            description8.style.top = "925px"
            description8.style.left = "0px"
            description8.style.fontSize = "17px"
            description8.style.width = "1000px"
            description8.style.textAlign = "justify"
            description8.style.fontFamily = "Arial, Helvetica, sans-serif"
            description8.style.fontWeight = "bolder"
            description8.style.color = "floralwhite"


            linkdescription3 = document.createElement("p")
            linkdescription3.innerHTML = textDescription[7].slice(68, textDescription[7].length - 4 )
            statecontainer.appendChild(linkdescription3)
    
            
            linkdescription3.style.position = "absolute"
            linkdescription3.style.top = "943px"
            linkdescription3.style.left = "0px"
            linkdescription3.style.fontSize = "17px"
            linkdescription3.style.width = "1000px"
            linkdescription3.style.textAlign = "justify"
            linkdescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription3.style.fontWeight = "normal"
            linkdescription3.style.color = "floralwhite"
            linkdescription3.style.textDecoration = "underline"
            linkdescription3.style.cursor = "pointer"
          

            linkdescription3.addEventListener("click", openNewTab)
            
    
            function openNewTab() {
                window.open(textDescription[7].slice(68, textDescription[7].length - 4 ))
            }

        }

        if(textDescription[8] != null){
    
            description9 = document.createElement("p")
            description9.innerHTML = textDescription[8]
            statecontainer.appendChild(description9)
    
            description9.style.position = "absolute"
            description9.style.top = "979px"
            description9.style.left = "0px"
            description9.style.fontSize = "17px"
            description9.style.width = "1000px"
            description9.style.textAlign = "justify"
            description9.style.fontFamily = "Arial, Helvetica, sans-serif"
            description9.style.fontWeight = "bolder"
            description9.style.color = "floralwhite"


        }

        if(textDescription[9] != null){
    
            description10 = document.createElement("p")
            description10.innerHTML = textDescription[9]
            statecontainer.appendChild(description10)
    
            description10.style.position = "absolute"
            description10.style.top = "1012px"
            description10.style.left = "0px"
            description10.style.fontSize = "17px"
            description10.style.width = "1000px"
            description10.style.textAlign = "justify"
            description10.style.fontFamily = "Arial, Helvetica, sans-serif"
            description10.style.fontWeight = "bolder"
            description10.style.color = "floralwhite"


        }
        
        if(textDescription[10] != null){
    
            description11 = document.createElement("p")
            description11.innerHTML = textDescription[10]
            statecontainer.appendChild(description11)
    
            description11.style.position = "absolute"
            description11.style.top = "1030px"
            description11.style.left = "0px"
            description11.style.fontSize = "17px"
            description11.style.width = "1000px"
            description11.style.textAlign = "justify"
            description11.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11.style.fontWeight = "bolder"
            description11.style.color = "floralwhite"

            
            if(description11.style.top == "1030px"){
    
                secondcontainer.style.height = "1104px"
                detailcontainer.style.height = "1237px"
                maindashboard.style.height = "1341px"
            }

        }

        if(companyLogoDetail != null){

            flag.style.top = "23px"
            flag.style.width = "100%"
            flag.style.opacity = "1"
        }

        if(textApplyDescription[0] != null){

            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0].slice(9, 57)
            applycontainer.appendChild(applydescription1)

            applycontainer.style.height = "168px"
            
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "40px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "340px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            applydescription1.style.textDecoration = "underline"
            applydescription1.style.cursor = "pointer"



            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[0].slice(58, 105)
            applycontainer.appendChild(applydescription2)

            
            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "57px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "340px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"



            applydescription3 = document.createElement("p")
            applydescription3.innerHTML = textApplyDescription[0].slice(106, 153)
            applycontainer.appendChild(applydescription3)

            
            applydescription3.style.position = "absolute"
            // add 15px
            applydescription3.style.top = "74px"
            applydescription3.style.left = "10px"
            applydescription3.style.fontSize = "15px"
            applydescription3.style.width = "340px"
            applydescription3.style.textAlign = "justify"
            applydescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription3.style.fontWeight = "normal"
            applydescription3.style.color = "floralwhite"
            applydescription3.style.textDecoration = "underline"
            applydescription3.style.cursor = "pointer"



            applydescription4 = document.createElement("p")
            applydescription4.innerHTML = textApplyDescription[0].slice(154, 200)
            applycontainer.appendChild(applydescription4)

            
            applydescription4.style.position = "absolute"
            // add 15px
            applydescription4.style.top = "91px"
            applydescription4.style.left = "10px"
            applydescription4.style.fontSize = "15px"
            applydescription4.style.width = "340px"
            applydescription4.style.textAlign = "justify"
            applydescription4.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription4.style.fontWeight = "normal"
            applydescription4.style.color = "floralwhite"
            applydescription4.style.textDecoration = "underline"
            applydescription4.style.cursor = "pointer"



            applydescription5 = document.createElement("p")
            applydescription5.innerHTML = textApplyDescription[0].slice(247, 263)
            applycontainer.appendChild(applydescription5)

            
            applydescription5.style.position = "absolute"
            // add 15px
            applydescription5.style.top = "125px"
            applydescription5.style.left = "10px"
            applydescription5.style.fontSize = "15px"
            applydescription5.style.width = "340px"
            applydescription5.style.textAlign = "justify"
            applydescription5.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription5.style.fontWeight = "normal"
            applydescription5.style.color = "floralwhite"
            applydescription5.style.textDecoration = "underline"
            applydescription5.style.cursor = "pointer"



            applydescription6 = document.createElement("p")
            applydescription6.innerHTML = textApplyDescription[0].slice(201, 246)
            applycontainer.appendChild(applydescription6)

            
            applydescription6.style.position = "absolute"
            // add 15px
            applydescription6.style.top = "108px"
            applydescription6.style.left = "10px"
            applydescription6.style.fontSize = "15px"
            applydescription6.style.width = "340px"
            applydescription6.style.textAlign = "justify"
            applydescription6.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription6.style.fontWeight = "normal"
            applydescription6.style.color = "floralwhite"
            applydescription6.style.textDecoration = "underline"
            applydescription6.style.cursor = "pointer"


            applydescription1.addEventListener("click", openNewTab)
            applydescription2.addEventListener("click", openNewTab)
            applydescription3.addEventListener("click", openNewTab)
            applydescription4.addEventListener("click", openNewTab)
            applydescription5.addEventListener("click", openNewTab)
            applydescription6.addEventListener("click", openNewTab)
    
            function openNewTab() {
                window.open(textApplyDescription[0].slice(9, textApplyDescription[0].length - 2))
            }
      
        }
    }

    if(location.state.row4 == 8){

        if(textDescription[0] != null){
    
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
        }

        if(textDescription[1] != null){
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "129px"
            description2.style.left = "0px"
            description2.style.fontSize = "25px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "bolder"
            description2.style.color = "floralwhite"
        }

        if(textDescription[2] != null){
    
            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "225px"
            description3.style.left = "0px"
            description3.style.fontSize = "25px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "bolder"
            description3.style.color = "floralwhite"
        }

        if(textTitle[0] != null){

            title1 = document.createElement("p")
            title1.innerHTML = "---------------------------------------- " + textTitle[0] + " ----------------------------------------"
            statecontainer.appendChild(title1)
            
    
            title1.style.position = "absolute"
            title1.style.top = "342px"
            title1.style.left = "0px"
            title1.style.fontSize = "17px"
            title1.style.width = "1000px"
            title1.style.textAlign = "justify"
            title1.style.fontFamily = "Arial, Helvetica, sans-serif"
            title1.style.fontWeight = "normal"
            title1.style.color = "floralwhite"
            
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "368px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "390px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "1000px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "412px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "980px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "452px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "980px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "492px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "980px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "533px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "980px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }

        if(textTitle[1] != null){

            title2 = document.createElement("p")
            title2.innerHTML = "----------------------------------- " + textTitle[1] + " -----------------------------------"
            statecontainer.appendChild(title2)
            
    
            title2.style.position = "absolute"
            title2.style.top = "591px"
            title2.style.left = "0px"
            title2.style.fontSize = "17px"
            title2.style.width = "1000px"
            title2.style.textAlign = "justify"
            title2.style.fontFamily = "Arial, Helvetica, sans-serif"
            title2.style.fontWeight = "normal"
            title2.style.color = "floralwhite"
            
        }

        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "618px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "980px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "640px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "980px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "662px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "980px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "684px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "980px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "706px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "980px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }

        if(textTitle[2] != null){

            title3 = document.createElement("p")
            title3.innerHTML = "--------------------------------------- " + textTitle[2] + " ---------------------------------------"
            statecontainer.appendChild(title3)
            
    
            title3.style.position = "absolute"
            title3.style.top = "746px"
            title3.style.left = "0px"
            title3.style.fontSize = "17px"
            title3.style.width = "1000px"
            title3.style.textAlign = "justify"
            title3.style.fontFamily = "Arial, Helvetica, sans-serif"
            title3.style.fontWeight = "normal"
            title3.style.color = "floralwhite"
            
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "772px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "980px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "794px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "980px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }

        if(textList[13] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "816px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "980px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textList[14] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
            
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "838px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "980px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }

        if(textList[15] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list16)
            
    
            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "860px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "980px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }

        if(textList[16] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list17)
            
    
            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "882px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "980px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }

        if(textList[17] != null){
    
            list18 = document.createElement("p")
            list18.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list18)
            
    
            list18.style.position = "absolute"
            // add 10px
            list18.style.top = "904px"
            list18.style.left = "20px"
            list18.style.fontSize = "15px"
            list18.style.width = "980px"
            list18.style.textAlign = "justify"
            list18.style.fontFamily = "Arial, Helvetica, sans-serif"
            list18.style.fontWeight = "normal"
            list18.style.color = "floralwhite"
            
        }

        if(textList[18] != null){
    
            list19 = document.createElement("p")
            list19.innerHTML = "> " + textList[18]
            statecontainer.appendChild(list19)
            
    
            list19.style.position = "absolute"
            // add 10px
            list19.style.top = "926px"
            list19.style.left = "20px"
            list19.style.fontSize = "15px"
            list19.style.width = "980px"
            list19.style.textAlign = "justify"
            list19.style.fontFamily = "Arial, Helvetica, sans-serif"
            list19.style.fontWeight = "normal"
            list19.style.color = "floralwhite"

            if(list19.style.top == "926px"){
    
                secondcontainer.style.height = "988px"
                detailcontainer.style.height = "1120px"
                maindashboard.style.height = "1223px"
            }
            
        }

        if(companyLogoDetail != null){

            flag.style.width = "100%"
            flag.style.opacity = "1"
        }

        if(textApplyDescription[0] != null){

            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0].slice(9, 60)
            applycontainer.appendChild(applydescription1)

            
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "45px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "350px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            applydescription1.style.textDecoration = "underline"
            applydescription1.style.cursor = "pointer"



            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[0].slice(61, 107)
            applycontainer.appendChild(applydescription2)

            
            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "63px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "350px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"



            applydescription3 = document.createElement("p")
            applydescription3.innerHTML = textApplyDescription[0].slice(108, 156)
            applycontainer.appendChild(applydescription3)

            
            applydescription3.style.position = "absolute"
            // add 15px
            applydescription3.style.top = "81px"
            applydescription3.style.left = "10px"
            applydescription3.style.fontSize = "15px"
            applydescription3.style.width = "350px"
            applydescription3.style.textAlign = "justify"
            applydescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription3.style.fontWeight = "normal"
            applydescription3.style.color = "floralwhite"
            applydescription3.style.textDecoration = "underline"
            applydescription3.style.cursor = "pointer"



            applydescription4 = document.createElement("p")
            applydescription4.innerHTML = textApplyDescription[0].slice(157, 206)
            applycontainer.appendChild(applydescription4)

            
            applydescription4.style.position = "absolute"
            // add 15px
            applydescription4.style.top = "99px"
            applydescription4.style.left = "10px"
            applydescription4.style.fontSize = "15px"
            applydescription4.style.width = "350px"
            applydescription4.style.textAlign = "justify"
            applydescription4.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription4.style.fontWeight = "normal"
            applydescription4.style.color = "floralwhite"
            applydescription4.style.textDecoration = "underline"
            applydescription4.style.cursor = "pointer"




            applydescription5 = document.createElement("p")
            applydescription5.innerHTML = textApplyDescription[0].slice(207, 253)
            applycontainer.appendChild(applydescription5)

            
            applydescription5.style.position = "absolute"
            // add 15px
            applydescription5.style.top = "117px"
            applydescription5.style.left = "10px"
            applydescription5.style.fontSize = "15px"
            applydescription5.style.width = "350px"
            applydescription5.style.textAlign = "justify"
            applydescription5.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription5.style.fontWeight = "normal"
            applydescription5.style.color = "floralwhite"
            applydescription5.style.textDecoration = "underline"
            applydescription5.style.cursor = "pointer"


            applydescription1.addEventListener("click", openNewTab)
            applydescription2.addEventListener("click", openNewTab)
            applydescription3.addEventListener("click", openNewTab)
            applydescription4.addEventListener("click", openNewTab)
            applydescription5.addEventListener("click", openNewTab)
    
            function openNewTab() {
                window.open(textApplyDescription[0].slice(9, textApplyDescription[0].length - 2))
            }
      
        }
    }

    if(location.state.row4 == 9){
             
        if(textDescription[0] != null){
    
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
        }
        
        if(textDescription[1] != null){
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "22px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
        }

        if(textDescription[2] != null){
    
            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "71px"
            description3.style.left = "0px"
            description3.style.fontSize = "15px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
        }
   
        if(textDescription[3] != null){
    
            description4 = document.createElement("p")
            description4.innerHTML = "---------------------------------------- " + textDescription[3] + " ----------------------------------------"
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "156px"
            description4.style.left = "0px"
            description4.style.fontSize = "17px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "181px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }
    
        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "203px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "1000px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }
        
        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "226px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "248px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "1000px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textDescription[4] != null){
    
            description5 = document.createElement("p")
            description5.innerHTML = "-------------------------------------------- " + textDescription[4] + " --------------------------------------------"
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            description5.style.top = "287px"
            description5.style.left = "0px"
            description5.style.fontSize = "17px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
        
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "313px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "980px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
  
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
        
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "335px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "980px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
           
            
        }
        
        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
        
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "358px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "980px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
           
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
        
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "380px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "980px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
           
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
        
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "402px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "980px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
           
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
        
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "424px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "980px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
           
            
        }
   
        if(textDescription[5] != null){
    
            description6 = document.createElement("p")
            description6.innerHTML = "--------------------------------------- " + textDescription[5] + " ---------------------------------------"
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            description6.style.top = "464px"
            description6.style.left = "0px"
            description6.style.fontSize = "17px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "normal"
            description6.style.color = "floralwhite"
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
        
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "489px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "980px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
           
            
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
        
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "511px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "980px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
           
            
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
        
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "533px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "980px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
           
            
        }

        if(textList[13] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
        
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "555px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "980px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
           
            
        }

        if(textList[14] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
        
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "577px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "980px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
           
            
        }

        if(textDescription[6] != null){
    
            description7 = document.createElement("p")
            description7.innerHTML = textDescription[6]
            statecontainer.appendChild(description7)
    
            description7.style.position = "absolute"
            description7.style.top = "626px"
            description7.style.left = "0px"
            description7.style.fontSize = "17px"
            description7.style.width = "1000px"
            description7.style.textAlign = "justify"
            description7.style.fontFamily = "Arial, Helvetica, sans-serif"
            description7.style.fontWeight = "bolder"
            description7.style.color = "floralwhite"


            linkdescription1 = document.createElement("p")
            linkdescription1.innerHTML = textDescription[6].slice(61, 149)
            statecontainer.appendChild(linkdescription1)

            linkdescription1.style.position = "absolute"
            linkdescription1.style.top = "644px"
            linkdescription1.style.left = "0px"
            linkdescription1.style.fontSize = "17px"
            linkdescription1.style.width = "1000px"
            linkdescription1.style.textAlign = "justify"
            linkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription1.style.fontWeight = "normal"
            linkdescription1.style.color = "floralwhite"
            linkdescription1.style.textDecoration = "underline"
            linkdescription1.style.cursor = "pointer"

            linkdescription1.addEventListener("click", openNewTab)
            
    
            function openNewTab() {
                window.open(textDescription[6].slice(61, 149))
            }

        }

        if(textDescription[7] != null){
    
            description8 = document.createElement("p")
            description8.innerHTML = textDescription[7]
            statecontainer.appendChild(description8)
    
            description8.style.position = "absolute"
            description8.style.top = "680px"
            description8.style.left = "0px"
            description8.style.fontSize = "17px"
            description8.style.width = "1000px"
            description8.style.textAlign = "justify"
            description8.style.fontFamily = "Arial, Helvetica, sans-serif"
            description8.style.fontWeight = "bolder"
            description8.style.color = "floralwhite"


            linkdescription2 = document.createElement("p")
            linkdescription2.innerHTML = textLinkDescription[1] + 'A'
            statecontainer.appendChild(linkdescription2)

    
            linkdescription2.style.position = "absolute"
            linkdescription2.style.top = "698px"
            linkdescription2.style.left = "0px"
            linkdescription2.style.fontSize = "17px"
            linkdescription2.style.width = "1000px"
            linkdescription2.style.textAlign = "justify"
            linkdescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription2.style.fontWeight = "normal"
            linkdescription2.style.color = "floralwhite"
            linkdescription2.style.textDecoration = "underline"
            linkdescription2.style.cursor = "pointer"

            linkdescription2.addEventListener("click", openNewTab)
            
    
            function openNewTab() {
                window.open(textLinkDescription[1] + 'A')
            }

        }

        if(textDescription[8] != null){
    
            description9 = document.createElement("p")
            description9.innerHTML = textDescription[8].slice(0, 18)
            statecontainer.appendChild(description9)
    
            description9.style.position = "absolute"
            description9.style.top = "774px"
            description9.style.left = "0px"
            description9.style.fontSize = "17px"
            description9.style.width = "1000px"
            description9.style.textAlign = "justify"
            description9.style.fontFamily = "Arial, Helvetica, sans-serif"
            description9.style.fontWeight = "bolder"
            description9.style.color = "floralwhite"


            linkdescription3 = document.createElement("p")
            linkdescription3.innerHTML = textDescription[8].slice(68, textDescription[8].length - 4 )
            statecontainer.appendChild(linkdescription3)
    
            
            linkdescription3.style.position = "absolute"
            linkdescription3.style.top = "793px"
            linkdescription3.style.left = "0px"
            linkdescription3.style.fontSize = "17px"
            linkdescription3.style.width = "1000px"
            linkdescription3.style.textAlign = "justify"
            linkdescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription3.style.fontWeight = "normal"
            linkdescription3.style.color = "floralwhite"
            linkdescription3.style.textDecoration = "underline"
            linkdescription3.style.cursor = "pointer"
          

            linkdescription3.addEventListener("click", openNewTab)
            
    
            function openNewTab() {
                window.open(textDescription[8].slice(68, textDescription[8].length - 4 ))
            }

        }

        if(textDescription[9] != null){
    
            description10 = document.createElement("p")
            description10.innerHTML = textDescription[9]
            statecontainer.appendChild(description10)
    
            description10.style.position = "absolute"
            description10.style.top = "849px"
            description10.style.left = "0px"
            description10.style.fontSize = "17px"
            description10.style.width = "1000px"
            description10.style.textAlign = "justify"
            description10.style.fontFamily = "Arial, Helvetica, sans-serif"
            description10.style.fontWeight = "bolder"
            description10.style.color = "floralwhite"


        }

        if(textDescription[10] != null){
    
            description11 = document.createElement("p")
            description11.innerHTML = textDescription[10]
            statecontainer.appendChild(description11)
    
            description11.style.position = "absolute"
            description11.style.top = "882px"
            description11.style.left = "0px"
            description11.style.fontSize = "17px"
            description11.style.width = "1000px"
            description11.style.textAlign = "justify"
            description11.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11.style.fontWeight = "bolder"
            description11.style.color = "floralwhite"


        }

        if(textDescription[11] != null){
    
            description12 = document.createElement("p")
            description12.innerHTML = textDescription[11]
            statecontainer.appendChild(description12)
    
            description12.style.position = "absolute"
            description12.style.top = "900px"
            description12.style.left = "0px"
            description12.style.fontSize = "17px"
            description12.style.width = "1000px"
            description12.style.textAlign = "justify"
            description12.style.fontFamily = "Arial, Helvetica, sans-serif"
            description12.style.fontWeight = "bolder"
            description12.style.color = "floralwhite"

            
            if(description12.style.top == "900px"){
    
                secondcontainer.style.height = "973px"
                detailcontainer.style.height = "1105px"
                maindashboard.style.height = "1210px"
            }

        }

        if(companyLogoDetail != null){

            flag.style.top = "23px"
            flag.style.width = "100%"
            flag.style.opacity = "1"
        }

        if(textApplyDescription[0] != null){

            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0].slice(9, 57)
            applycontainer.appendChild(applydescription1)

            applycontainer.style.height = "171px"
            
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "40px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "340px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            applydescription1.style.textDecoration = "underline"
            applydescription1.style.cursor = "pointer"


            
            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[0].slice(58, 105)
            applycontainer.appendChild(applydescription2)


            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "57px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "340px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"



            applydescription3 = document.createElement("p")
            applydescription3.innerHTML = textApplyDescription[0].slice(106, 149)
            applycontainer.appendChild(applydescription3)


            applydescription3.style.position = "absolute"
            // add 15px
            applydescription3.style.top = "74px"
            applydescription3.style.left = "10px"
            applydescription3.style.fontSize = "15px"
            applydescription3.style.width = "340px"
            applydescription3.style.textAlign = "justify"
            applydescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription3.style.fontWeight = "normal"
            applydescription3.style.color = "floralwhite"
            applydescription3.style.textDecoration = "underline"
            applydescription3.style.cursor = "pointer"



            applydescription4 = document.createElement("p")
            applydescription4.innerHTML = textApplyDescription[0].slice(150, 197)
            applycontainer.appendChild(applydescription4)


            applydescription4.style.position = "absolute"
            // add 15px
            applydescription4.style.top = "91px"
            applydescription4.style.left = "10px"
            applydescription4.style.fontSize = "15px"
            applydescription4.style.width = "340px"
            applydescription4.style.textAlign = "justify"
            applydescription4.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription4.style.fontWeight = "normal"
            applydescription4.style.color = "floralwhite"
            applydescription4.style.textDecoration = "underline"
            applydescription4.style.cursor = "pointer"



            applydescription5 = document.createElement("p")
            applydescription5.innerHTML = textApplyDescription[0].slice(198, 241)
            applycontainer.appendChild(applydescription5)


            applydescription5.style.position = "absolute"
            // add 15px
            applydescription5.style.top = "108px"
            applydescription5.style.left = "10px"
            applydescription5.style.fontSize = "15px"
            applydescription5.style.width = "340px"
            applydescription5.style.textAlign = "justify"
            applydescription5.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription5.style.fontWeight = "normal"
            applydescription5.style.color = "floralwhite"
            applydescription5.style.textDecoration = "underline"
            applydescription5.style.cursor = "pointer"



            applydescription6 = document.createElement("p")
            applydescription6.innerHTML = textApplyDescription[0].slice(242, 271)
            applycontainer.appendChild(applydescription6)


            applydescription6.style.position = "absolute"
            // add 15px
            applydescription6.style.top = "125px"
            applydescription6.style.left = "10px"
            applydescription6.style.fontSize = "15px"
            applydescription6.style.width = "340px"
            applydescription6.style.textAlign = "justify"
            applydescription6.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription6.style.fontWeight = "normal"
            applydescription6.style.color = "floralwhite"
            applydescription6.style.textDecoration = "underline"
            applydescription6.style.cursor = "pointer"

         

            applydescription1.addEventListener("click", openNewTab)
            applydescription2.addEventListener("click", openNewTab)
            applydescription3.addEventListener("click", openNewTab)
            applydescription4.addEventListener("click", openNewTab)
            applydescription5.addEventListener("click", openNewTab)
            applydescription6.addEventListener("click", openNewTab)
    
            function openNewTab() {
                window.open(textApplyDescription[0].slice(9, textApplyDescription[0].length - 2))
            }
      
        }


    }

    if(location.state.row4 == 12){


        if(textDescription[0] != null){
    
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
        }

        if(textTitleH1[0] != null){
    
            titleH1 = document.createElement("p")
            titleH1.innerHTML = "---------------------------------------- " + textTitleH1[0] + " ----------------------------------------"
            statecontainer.appendChild(titleH1)
    
            titleH1.style.position = "absolute"
            titleH1.style.top = "153px"
            titleH1.style.left = "0px"
            titleH1.style.fontSize = "17px"
            titleH1.style.width = "1000px"
            titleH1.style.textAlign = "justify"
            titleH1.style.fontFamily = "Arial, Helvetica, sans-serif"
            titleH1.style.fontWeight = "normal"
            titleH1.style.color = "floralwhite"
        }

        if(textDescription[1] != null){
    
            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "179px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
        }

        if(textTitleH1[1] != null){
    
            titleH1 = document.createElement("p")
            titleH1.innerHTML = "---------------------------------------- " + textTitleH1[1] + " ----------------------------------------"
            statecontainer.appendChild(titleH1)
    
            titleH1.style.position = "absolute"
            titleH1.style.top = "271px"
            titleH1.style.left = "0px"
            titleH1.style.fontSize = "17px"
            titleH1.style.width = "1000px"
            titleH1.style.textAlign = "justify"
            titleH1.style.fontFamily = "Arial, Helvetica, sans-serif"
            titleH1.style.fontWeight = "normal"
            titleH1.style.color = "floralwhite"
        }

        if(textDescription[2] != null){
    
            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "297px"
            description3.style.left = "0px"
            description3.style.fontSize = "15px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "337px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "359px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "1000px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "381px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "403px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "1000px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "425px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "1000px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textTitleH1[2] != null){
    
            titleH2 = document.createElement("p")
            titleH2.innerHTML = "----------------------------------------------- " + textTitleH1[2] + " -----------------------------------------------"
            statecontainer.appendChild(titleH2)
    
            titleH2.style.position = "absolute"
            titleH2.style.top = "464px"
            titleH2.style.left = "0px"
            titleH2.style.fontSize = "17px"
            titleH2.style.width = "1000px"
            titleH2.style.textAlign = "justify"
            titleH2.style.fontFamily = "Arial, Helvetica, sans-serif"
            titleH2.style.fontWeight = "normal"
            titleH2.style.color = "floralwhite"
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "489px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "1000px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }

        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "512px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "1000px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "534px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "1000px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "556px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "1000px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "578px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "1000px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "600px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "1000px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "622px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "1000px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "644px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "1000px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }

        if(textList[13] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "666px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "1000px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textList[14] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
            
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "688px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "1000px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }

        if(textList[15] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list16)
            
    
            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "710px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "1000px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }

        if(textList[16] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list17)
            
    
            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "732px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "1000px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }

        if(textList[17] != null){
    
            list18 = document.createElement("p")
            list18.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list18)
            
    
            list18.style.position = "absolute"
            // add 10px
            list18.style.top = "754px"
            list18.style.left = "20px"
            list18.style.fontSize = "15px"
            list18.style.width = "1000px"
            list18.style.textAlign = "justify"
            list18.style.fontFamily = "Arial, Helvetica, sans-serif"
            list18.style.fontWeight = "normal"
            list18.style.color = "floralwhite"
            
        }

        if(textList[18] != null){
    
            list19 = document.createElement("p")
            list19.innerHTML = "> " + textList[18]
            statecontainer.appendChild(list19)
            
    
            list19.style.position = "absolute"
            // add 10px
            list19.style.top = "776px"
            list19.style.left = "20px"
            list19.style.fontSize = "15px"
            list19.style.width = "1000px"
            list19.style.textAlign = "justify"
            list19.style.fontFamily = "Arial, Helvetica, sans-serif"
            list19.style.fontWeight = "normal"
            list19.style.color = "floralwhite"
            
        }

        if(textList[19] != null){
    
            list20 = document.createElement("p")
            list20.innerHTML = "> " + textList[19]
            statecontainer.appendChild(list20)
            
    
            list20.style.position = "absolute"
            // add 10px
            list20.style.top = "798px"
            list20.style.left = "20px"
            list20.style.fontSize = "15px"
            list20.style.width = "1000px"
            list20.style.textAlign = "justify"
            list20.style.fontFamily = "Arial, Helvetica, sans-serif"
            list20.style.fontWeight = "normal"
            list20.style.color = "floralwhite"
            
        }

        if(textList[20] != null){
    
            list21 = document.createElement("p")
            list21.innerHTML = "> " + textList[20]
            statecontainer.appendChild(list21)
            
    
            list21.style.position = "absolute"
            // add 10px
            list21.style.top = "820px"
            list21.style.left = "20px"
            list21.style.fontSize = "15px"
            list21.style.width = "1000px"
            list21.style.textAlign = "justify"
            list21.style.fontFamily = "Arial, Helvetica, sans-serif"
            list21.style.fontWeight = "normal"
            list21.style.color = "floralwhite"


            if(list21.style.top == "820px"){
    
                secondcontainer.style.height = "892px"
                detailcontainer.style.height = "1024px"
                maindashboard.style.height = "1128px"
            }
            
        }

        if(companyLogoDetail != null){

            flag.style.top = "-10px"
            flag.style.left = "38px"
            flag.style.width = "100%"
            flag.style.opacity = "1"
        }

        if(textApplyDescription[1] != null){

            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[1].slice(0, 20)
            applycontainer.appendChild(applydescription1)

          
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "80px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "340px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
 
           
            
            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[1].slice(54)
            applycontainer.appendChild(applydescription2)


            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "80px"
            applydescription2.style.left = "157px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "200px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"


            applydescription2.addEventListener("click", openNewTab)
           
    
            function openNewTab() {
                window.location.href = "mailto:javierg@amco.me"
            }
      
            
        }

    }



    if(location.state.row4 == 10){

        if(textDescription[0] != null){
   
            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0].slice(0, 14)
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "180px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
            description1.style.zIndex = "2"

            
            description1b = document.createElement("p")
            description1b.innerHTML = findTag.slice(27, 83)
            statecontainer.appendChild(description1b)
    
            description1b.style.position = "absolute"
            description1b.style.top = "-30px"
            description1b.style.left = "0px"
            description1b.style.fontSize = "25px"
            description1b.style.width = "1000px"
            description1b.style.textAlign = "justify"
            description1b.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1b.style.fontWeight = "bolder"
            description1b.style.color = "floralwhite"
            description1b.style.textIndent = "184px"
            description1b.style.textDecoration = "underline"
            description1b.style.cursor = "pointer"



            description1c = document.createElement("p")
            description1c.innerHTML = findTag.slice(84, 148)
            statecontainer.appendChild(description1c)
    
            description1c.style.position = "absolute"
            description1c.style.top = "0px"
            description1c.style.left = "0px"
            description1c.style.fontSize = "25px"
            description1c.style.width = "1000px"
            description1c.style.textAlign = "justify"
            description1c.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1c.style.fontWeight = "bolder"
            description1c.style.color = "floralwhite"
            description1c.style.textDecoration = "underline"
            description1c.style.cursor = "pointer"



            description1d = document.createElement("p")
            description1d.innerHTML = findTag.slice(149, 179)
            statecontainer.appendChild(description1d)
    
            description1d.style.position = "absolute"
            description1d.style.top = "30px"
            description1d.style.left = "0px"
            description1d.style.fontSize = "25px"
            description1d.style.width = "400px"
            description1d.style.textAlign = "justify"
            description1d.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1d.style.fontWeight = "bolder"
            description1d.style.color = "floralwhite"
            description1d.style.textDecoration = "underline"
            description1d.style.cursor = "pointer"
            description1d.style.zIndex = "2"
    

            description1e = document.createElement("p")
            description1e.innerHTML = findTag.slice(181, 771)
            statecontainer.appendChild(description1e)
    
            description1e.style.position = "absolute"
            description1e.style.top = "30px"
            description1e.style.left = "0px"
            description1e.style.fontSize = "25px"
            description1e.style.width = "1000px"
            description1e.style.textAlign = "justify"
            description1e.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1e.style.fontWeight = "bolder"
            description1e.style.textIndent = "446px"
            description1e.style.color = "floralwhite"


            description1b.addEventListener("click", openNewTab)
            description1c.addEventListener("click", openNewTab)
            description1d.addEventListener("click", openNewTab)
           
    
            function openNewTab() {
                window.open(findTag.slice(27, 179))
            }
      
    
        }

        if(textTitle[0] != null){
    
            title1 = document.createElement("p")
            title1.innerHTML = textTitle[0]
            statecontainer.appendChild(title1)
    
            title1.style.position = "absolute"
            title1.style.top = "296px"
            title1.style.left = "0px"
            title1.style.fontSize = "20px"
            title1.style.width = "1000px"
            title1.style.textAlign = "justify"
            title1.style.fontFamily = "Arial, Helvetica, sans-serif"
            title1.style.fontWeight = "normal"
            title1.style.color = "floralwhite"


           
        }

        if(textDescription[1] != null){

            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "338px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
           
        }

        if(textTitle[1] != null){
    
            title2 = document.createElement("p")
            title2.innerHTML = textTitle[1]
            statecontainer.appendChild(title2)
    
            title2.style.position = "absolute"
            title2.style.top = "454px"
            title2.style.left = "0px"
            title2.style.fontSize = "20px"
            title2.style.width = "1000px"
            title2.style.textAlign = "justify"
            title2.style.fontFamily = "Arial, Helvetica, sans-serif"
            title2.style.fontWeight = "normal"
            title2.style.color = "floralwhite"


           
        }

        if(textDescription[2] != null){

            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "496px"
            description3.style.left = "0px"
            description3.style.fontSize = "15px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
           
        }

        if(textTitle[2] != null){
    
            title3 = document.createElement("p")
            title3.innerHTML = textTitle[2]
            statecontainer.appendChild(title3)
    
            title3.style.position = "absolute"
            title3.style.top = "594px"
            title3.style.left = "0px"
            title3.style.fontSize = "20px"
            title3.style.width = "1000px"
            title3.style.textAlign = "justify"
            title3.style.fontFamily = "Arial, Helvetica, sans-serif"
            title3.style.fontWeight = "normal"
            title3.style.color = "floralwhite"

        }

        if(textDescription[3] != null){

            description4 = document.createElement("p")
            description4.innerHTML = textDescription[3].slice(0, 97)
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "636px"
            description4.style.left = "0px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"



            style1 = document.createElement("p")
            style1.innerHTML = textStyle[0]
            description4.appendChild(style1)
    
            style1.style.position = "absolute"
            //add 10px
            style1.style.top = "-16px"
            style1.style.left = "663px"
            style1.style.fontSize = "15px"
            style1.style.width = "280px"
            style1.style.textAlign = "justify"
            style1.style.fontFamily = "impact"
            style1.style.fontWeight = "normal"
            style1.style.color = "floralwhite"



            description42 = document.createElement("p")
            description42.innerHTML = findTag.slice(2346, 2363)
            statecontainer.appendChild(description42)
    
            description42.style.position = "absolute"
            description42.style.top = "636px"
            description42.style.left = "873px"
            description42.style.fontSize = "15px"
            description42.style.width = "200px"
            description42.style.textAlign = "justify"
            description42.style.fontFamily = "Arial, Helvetica, sans-serif"
            description42.style.fontWeight = "normal"
            description42.style.color = "floralwhite"
            description42.style.letterSpacing = "0.5px"



            description43 = document.createElement("p")
            description43.innerHTML = findTag.slice(2364, 2371)
            statecontainer.appendChild(description43)
    
            description43.style.position = "absolute"
            description43.style.top = "656px"
            description43.style.left = "0px"
            description43.style.fontSize = "15px"
            description43.style.width = "200px"
            description43.style.textAlign = "justify"
            description43.style.fontFamily = "Arial, Helvetica, sans-serif"
            description43.style.fontWeight = "normal"
            description43.style.color = "floralwhite"
            description43.style.letterSpacing = "0.5px"
           
        }

        if(textTitle[3] != null){
    
            title4 = document.createElement("p")
            title4.innerHTML = textTitle[3].slice(0, 5)
            statecontainer.appendChild(title4)

            title4.style.position = "absolute"
            title4.style.top = "702px"
            title4.style.left = "0px"
            title4.style.fontSize = "20px"
            title4.style.width = "1000px"
            title4.style.textAlign = "justify"
            title4.style.fontFamily = "Arial, Helvetica, sans-serif"
            title4.style.fontWeight = "normal"
            title4.style.color = "floralwhite"



            title4b = document.createElement("p")
            title4b.innerHTML = textTitle[3].slice(15, 119)
            statecontainer.appendChild(title4b)

            title4b.style.position = "absolute"
            title4b.style.top = "702px"
            title4b.style.left = "63px"
            title4b.style.fontSize = "20px"
            title4b.style.width = "1000px"
            title4b.style.textAlign = "justify"
            title4b.style.fontFamily = "Arial, Helvetica, sans-serif"
            title4b.style.fontWeight = "normal"
            title4b.style.color = "floralwhite"
            title4b.style.letterSpacing = "0.13px"



            title4c = document.createElement("p")
            title4c.innerHTML = textTitle[3].slice(120, 144)
            statecontainer.appendChild(title4c)

            title4c.style.position = "absolute"
            title4c.style.top = "726px"
            title4c.style.left = "0px"
            title4c.style.fontSize = "20px"
            title4c.style.width = "1000px"
            title4c.style.textAlign = "justify"
            title4c.style.fontFamily = "Arial, Helvetica, sans-serif"
            title4c.style.fontWeight = "normal"
            title4c.style.color = "floralwhite"
    

        }

        if(textDescription[4] != null){

            //fix this

            description5 = document.createElement("p")
            description5.innerHTML = "------------------------------ " + textDescription[4]
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            description5.style.top = "768px"
            description5.style.left = "0px"
            description5.style.fontSize = "17px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"



            style2 = document.createElement("p")
            style2.innerHTML = textStyle[1]
            description5.appendChild(style2)
    
            style2.style.position = "absolute"
            //add 10px
            style2.style.top = "-18px"
            style2.style.left = "230px"
            style2.style.fontSize = "17px"
            style2.style.width = "280px"
            style2.style.textAlign = "justify"
            style2.style.fontFamily = "impact"
            style2.style.fontWeight = "normal"
            style2.style.color = "floralwhite"


           
            description52 = document.createElement("p")
            description52.innerHTML = findTag.slice(2596, 2607) + " ------------------------------"
            statecontainer.appendChild(description52)
    
            description52.style.position = "absolute"
            description52.style.top = "768px"
            description52.style.left = "469px"
            description52.style.fontSize = "17px"
            description52.style.width = "400px"
            description52.style.textAlign = "justify"
            description52.style.fontFamily = "Arial, Helvetica, sans-serif"
            description52.style.fontWeight = "normal"
            description52.style.color = "floralwhite"
            description52.style.letterSpacing = "0.5px"

        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "794px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "816px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "1000px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "838px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "860px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "1000px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "882px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "980px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textTitle[4] != null){

          

            title5 = document.createElement("p")
            title5.innerHTML =  "---------------------------------------------- " + textTitle[4].slice(0, 27) + " ----------------------------------------------"
            statecontainer.appendChild(title5)
    
            title5.style.position = "absolute"
            title5.style.top = "939px"
            title5.style.left = "0px"
            title5.style.fontSize = "17px"
            title5.style.width = "1000px"
            title5.style.textAlign = "justify"
            title5.style.fontFamily = "Arial, Helvetica, sans-serif"
            title5.style.fontWeight = "normal"
            title5.style.color = "floralwhite"


        }

        if(textList[5] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "965px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "980px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textList[6] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "987px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "980px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }

        if(textList[7] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "1009px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "980px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list8)
            

            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "1031px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "980px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list9)
            

            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "1053px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "980px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[10] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list10)
            

            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "1075px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "980px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textList[11] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list11)
            

            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "1097px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "980px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }

        if(textList[12] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "+ " + textList[12]
            statecontainer.appendChild(list12)
            

            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "1119px"
            list12.style.left = "40px"
            list12.style.fontSize = "15px"
            list12.style.width = "980px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }

        if(textList[13] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "+ " + textList[13]
            statecontainer.appendChild(list13)
            

            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "1141px"
            list13.style.left = "40px"
            list13.style.fontSize = "15px"
            list13.style.width = "980px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }

        if(textList[14] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "+ " + textList[14]
            statecontainer.appendChild(list14)
            

            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "1163px"
            list14.style.left = "40px"
            list14.style.fontSize = "15px"
            list14.style.width = "980px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textTitle[5] != null){

            title6 = document.createElement("p")
            title6.innerHTML =  "------------------------------------------------------- " + textTitle[5].slice(0 , 13) + " -------------------------------------------------------"
            statecontainer.appendChild(title6)
    
            title6.style.position = "absolute"
            title6.style.top = "1203px"
            title6.style.left = "0px"
            title6.style.fontSize = "17px"
            title6.style.width = "1000px"
            title6.style.textAlign = "justify"
            title6.style.fontFamily = "Arial, Helvetica, sans-serif"
            title6.style.fontWeight = "normal"
            title6.style.color = "floralwhite"


        }

        if(textList[15] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list15)
            

            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "1229px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "980px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }

        if(textList[16] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list16)
            

            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "1252px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "980px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }

        if(textList[17] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list17)
            

            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "1274px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "980px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }

        if(textList[18] != null){
    
            list18 = document.createElement("p")
            list18.innerHTML = "> " + textList[18]
            statecontainer.appendChild(list18)
            

            list18.style.position = "absolute"
            // add 10px
            list18.style.top = "1296px"
            list18.style.left = "20px"
            list18.style.fontSize = "15px"
            list18.style.width = "980px"
            list18.style.textAlign = "justify"
            list18.style.fontFamily = "Arial, Helvetica, sans-serif"
            list18.style.fontWeight = "normal"
            list18.style.color = "floralwhite"
            
        }

        if(textList[19] != null){
    
            list19 = document.createElement("p")
            list19.innerHTML = "> " + textList[19]
            statecontainer.appendChild(list19)
            

            list19.style.position = "absolute"
            // add 10px
            list19.style.top = "1318px"
            list19.style.left = "20px"
            list19.style.fontSize = "15px"
            list19.style.width = "980px"
            list19.style.textAlign = "justify"
            list19.style.fontFamily = "Arial, Helvetica, sans-serif"
            list19.style.fontWeight = "normal"
            list19.style.color = "floralwhite"
            
        }

        if(textList[20] != null){
    
            list20 = document.createElement("p")
            list20.innerHTML = "> " + textList[20]
            statecontainer.appendChild(list20)
            

            list20.style.position = "absolute"
            // add 10px
            list20.style.top = "1340px"
            list20.style.left = "20px"
            list20.style.fontSize = "15px"
            list20.style.width = "980px"
            list20.style.textAlign = "justify"
            list20.style.fontFamily = "Arial, Helvetica, sans-serif"
            list20.style.fontWeight = "normal"
            list20.style.color = "floralwhite"
            
        }

        if(textList[21] != null){
    
            list21 = document.createElement("p")
            list21.innerHTML = "> " + textList[21]
            statecontainer.appendChild(list21)
            

            list21.style.position = "absolute"
            // add 10px
            list21.style.top = "1362px"
            list21.style.left = "20px"
            list21.style.fontSize = "15px"
            list21.style.width = "980px"
            list21.style.textAlign = "justify"
            list21.style.fontFamily = "Arial, Helvetica, sans-serif"
            list21.style.fontWeight = "normal"
            list21.style.color = "floralwhite"
            
        }

        if(textList[22] != null){
    
            list22 = document.createElement("p")
            list22.innerHTML = "> " + textList[22]
            statecontainer.appendChild(list22)
            

            list22.style.position = "absolute"
            // add 10px
            list22.style.top = "1384px"
            list22.style.left = "20px"
            list22.style.fontSize = "15px"
            list22.style.width = "980px"
            list22.style.textAlign = "justify"
            list22.style.fontFamily = "Arial, Helvetica, sans-serif"
            list22.style.fontWeight = "normal"
            list22.style.color = "floralwhite"
            
        }

        if(textList[23] != null){
    
            list23 = document.createElement("p")
            list23.innerHTML = "> " + textList[23]
            statecontainer.appendChild(list23)
            

            list23.style.position = "absolute"
            // add 10px
            list23.style.top = "1406px"
            list23.style.left = "20px"
            list23.style.fontSize = "15px"
            list23.style.width = "980px"
            list23.style.textAlign = "justify"
            list23.style.fontFamily = "Arial, Helvetica, sans-serif"
            list23.style.fontWeight = "normal"
            list23.style.color = "floralwhite"
            
        }

        if(textList[24] != null){
    
            list24 = document.createElement("p")
            list24.innerHTML = "> " + textList[24]
            statecontainer.appendChild(list24)
            

            list24.style.position = "absolute"
            // add 10px
            list24.style.top = "1428px"
            list24.style.left = "20px"
            list24.style.fontSize = "15px"
            list24.style.width = "980px"
            list24.style.textAlign = "justify"
            list24.style.fontFamily = "Arial, Helvetica, sans-serif"
            list24.style.fontWeight = "normal"
            list24.style.color = "floralwhite"
            
        }

        if(textDescription[5] != null){

       
            description6 = document.createElement("p")
            description6.innerHTML = findTag.slice(4660, 4698)
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            description6.style.top = "1478px"
            description6.style.left = "0px"
            description6.style.fontSize = "17px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "normal"
            description6.style.color = "floralwhite"



            linkdescription1 = document.createElement("p")
            linkdescription1.innerHTML = textLinkDescription[1].slice(157) + "o"
            description6.appendChild(linkdescription1)
    
            linkdescription1.style.position = "absolute"
            linkdescription1.style.top = "-18px"
            linkdescription1.style.left = "300px"
            linkdescription1.style.fontSize = "17px"
            linkdescription1.style.width = "980px"
            linkdescription1.style.textAlign = "justify"
            linkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription1.style.fontWeight = "normal"
            linkdescription1.style.color = "floralwhite"
            linkdescription1.style.textDecoration = "underline"
            linkdescription1.style.cursor = "pointer"


            linkdescription1.addEventListener("click", openNewTab)
           
    
            function openNewTab() {
                window.open("http://" + textLinkDescription[1].slice(157) + "o")
            }
        }

        if(textTitle[6] != null){

            title7 = document.createElement("p")
            title7.innerHTML =  textTitle[6]
            statecontainer.appendChild(title7)
    
            title7.style.position = "absolute"
            title7.style.top = "1531px"
            title7.style.left = "0px"
            title7.style.fontSize = "17px"
            title7.style.width = "1000px"
            title7.style.textAlign = "justify"
            title7.style.fontFamily = "Arial, Helvetica, sans-serif"
            title7.style.fontWeight = "normal"
            title7.style.color = "floralwhite"


        }

        if(textList[25] != null){
    
            list25 = document.createElement("p")
            list25.innerHTML = "> " + textList[25]
            statecontainer.appendChild(list25)
            

            list25.style.position = "absolute"
            // add 10px
            list25.style.top = "1613px"
            list25.style.left = "20px"
            list25.style.fontSize = "15px"
            list25.style.width = "980px"
            list25.style.textAlign = "justify"
            list25.style.fontFamily = "Arial, Helvetica, sans-serif"
            list25.style.fontWeight = "normal"
            list25.style.color = "floralwhite"
            
        }

        if(textList[26] != null){
    
            list26 = document.createElement("p")
            list26.innerHTML = "> " + textList[26]
            statecontainer.appendChild(list26)
            

            list26.style.position = "absolute"
            // add 10px
            list26.style.top = "1635px"
            list26.style.left = "20px"
            list26.style.fontSize = "15px"
            list26.style.width = "980px"
            list26.style.textAlign = "justify"
            list26.style.fontFamily = "Arial, Helvetica, sans-serif"
            list26.style.fontWeight = "normal"
            list26.style.color = "floralwhite"
            
        }

        if(textList[27] != null){
    
            list27 = document.createElement("p")
            list27.innerHTML = "> " + textList[27]
            statecontainer.appendChild(list27)
            

            list27.style.position = "absolute"
            // add 10px
            list27.style.top = "1657px"
            list27.style.left = "20px"
            list27.style.fontSize = "15px"
            list27.style.width = "980px"
            list27.style.textAlign = "justify"
            list27.style.fontFamily = "Arial, Helvetica, sans-serif"
            list27.style.fontWeight = "normal"
            list27.style.color = "floralwhite"
            
        }

        if(textList[28] != null){
    
            list28 = document.createElement("p")
            list28.innerHTML = "> " + textList[28]
            statecontainer.appendChild(list28)
            

            list28.style.position = "absolute"
            // add 10px
            list28.style.top = "1679px"
            list28.style.left = "20px"
            list28.style.fontSize = "15px"
            list28.style.width = "980px"
            list28.style.textAlign = "justify"
            list28.style.fontFamily = "Arial, Helvetica, sans-serif"
            list28.style.fontWeight = "normal"
            list28.style.color = "floralwhite"
            
        }

        if(textList[29] != null){
    
            list29 = document.createElement("p")
            list29.innerHTML = "> " + textList[29]
            statecontainer.appendChild(list29)
            

            list29.style.position = "absolute"
            // add 10px
            list29.style.top = "1701px"
            list29.style.left = "20px"
            list29.style.fontSize = "15px"
            list29.style.width = "980px"
            list29.style.textAlign = "justify"
            list29.style.fontFamily = "Arial, Helvetica, sans-serif"
            list29.style.fontWeight = "normal"
            list29.style.color = "floralwhite"
            
        }

        if(textList[30] != null){
    
            list30 = document.createElement("p")
            list30.innerHTML = "+ " + textList[30]
            statecontainer.appendChild(list30)
            

            list30.style.position = "absolute"
            // add 10px
            list30.style.top = "1741px"
            list30.style.left = "40px"
            list30.style.fontSize = "15px"
            list30.style.width = "980px"
            list30.style.textAlign = "justify"
            list30.style.fontFamily = "Arial, Helvetica, sans-serif"
            list30.style.fontWeight = "normal"
            list30.style.color = "floralwhite"
            
        }

        if(textList[31] != null){
    
            list31 = document.createElement("p")
            list31.innerHTML = "+ " + textList[31]
            statecontainer.appendChild(list31)
            

            list31.style.position = "absolute"
            // add 10px
            list31.style.top = "1763px"
            list31.style.left = "40px"
            list31.style.fontSize = "15px"
            list31.style.width = "980px"
            list31.style.textAlign = "justify"
            list31.style.fontFamily = "Arial, Helvetica, sans-serif"
            list31.style.fontWeight = "normal"
            list31.style.color = "floralwhite"
            
        }

        if(textList[32] != null){
    
            list32 = document.createElement("p")
            list32.innerHTML = "+ " + textList[32]
            statecontainer.appendChild(list32)
            

            list32.style.position = "absolute"
            // add 10px
            list32.style.top = "1785px"
            list32.style.left = "40px"
            list32.style.fontSize = "15px"
            list32.style.width = "980px"
            list32.style.textAlign = "justify"
            list32.style.fontFamily = "Arial, Helvetica, sans-serif"
            list32.style.fontWeight = "normal"
            list32.style.color = "floralwhite"
            
        }

        if(textLinkDescription[2] != null){

       
            linkdescription2 = document.createElement("p")
            linkdescription2.innerHTML = textLinkDescription[2].slice(0, 115)
            statecontainer.appendChild(linkdescription2)
    
            linkdescription2.style.position = "absolute"
            linkdescription2.style.top = "1815px"
            linkdescription2.style.left = "0px"
            linkdescription2.style.fontSize = "17px"
            linkdescription2.style.width = "980px"
            linkdescription2.style.textAlign = "justify"
            linkdescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription2.style.fontWeight = "normal"
            linkdescription2.style.color = "floralwhite"



            linkdescription3 = document.createElement("p")
            linkdescription3.innerHTML = textLinkDescription[2].slice(116, 223)
            statecontainer.appendChild(linkdescription3)
    
            linkdescription3.style.position = "absolute"
            linkdescription3.style.top = "1838px"
            linkdescription3.style.left = "0px"
            linkdescription3.style.fontSize = "17px"
            linkdescription3.style.width = "980px"
            linkdescription3.style.textAlign = "justify"
            linkdescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription3.style.fontWeight = "normal"
            linkdescription3.style.color = "floralwhite"



            linkdescription4 = document.createElement("p")
            linkdescription4.innerHTML = textLinkDescription[2].slice(224)
            statecontainer.appendChild(linkdescription4)
    
            linkdescription4.style.position = "absolute"
            linkdescription4.style.top = "1861px"
            linkdescription4.style.left = "0px"
            linkdescription4.style.fontSize = "17px"
            linkdescription4.style.width = "980px"
            linkdescription4.style.textAlign = "justify"
            linkdescription4.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription4.style.fontWeight = "normal"
            linkdescription4.style.color = "floralwhite"


            if(linkdescription4.style.top == "1861px"){
    
                secondcontainer.style.height = "1935px"
                detailcontainer.style.height = "2068px"
                maindashboard.style.height = "2172px"
            }

            
        }
        
        if(companyLogoDetail != null){

            flag.style.top = "15px"
            //flag.style.left = "38px"
            flag.style.width = "100%"
            flag.style.height = "80%"
            flag.style.opacity = "1"
        }

        if(textApplyDescription[1] != null){

            
           
            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[1].slice(9, 55)
            applycontainer.appendChild(applydescription1)

          
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "63px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "340px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            applydescription1.style.textDecoration = "underline"
            applydescription1.style.cursor = "pointer"



            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[1].slice(56, 98)
            applycontainer.appendChild(applydescription2)

          
            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "80px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "340px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"




            applydescription3 = document.createElement("p")
            applydescription3.innerHTML = textApplyDescription[1].slice(100)
            applycontainer.appendChild(applydescription3)

          
            applydescription3.style.position = "absolute"
            // add 15px
            applydescription3.style.top = "97px"
            applydescription3.style.left = "10px"
            applydescription3.style.fontSize = "15px"
            applydescription3.style.width = "340px"
            applydescription3.style.textAlign = "justify"
            applydescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription3.style.fontWeight = "normal"
            applydescription3.style.color = "floralwhite"
            applydescription3.style.textDecoration = "underline"
            applydescription3.style.cursor = "pointer"
 

            applydescription1.addEventListener("click", openNewTab)
            applydescription2.addEventListener("click", openNewTab)
            applydescription3.addEventListener("click", openNewTab)
           
            
    
            function openNewTab() {
                window.open(textApplyLinkDescription[0])
            }
      
            
        }
       
    }

    if(location.state.row4 == 11){

        if(textTitle[0] != null){
    
            title1 = document.createElement("p")
            title1.innerHTML = textTitle[0]
            statecontainer.appendChild(title1)
    
            title1.style.position = "absolute"
            title1.style.top = "-30px"
            title1.style.left = "0px"
            title1.style.fontSize = "25px"
            title1.style.width = "1000px"
            title1.style.textAlign = "justify"
            title1.style.fontFamily = "Arial, Helvetica, sans-serif"
            title1.style.fontWeight = "normal"
            title1.style.color = "floralwhite"

        }

        if(textDescription[0] != null){

            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "22px"
            description1.style.left = "0px"
            description1.style.fontSize = "15px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "normal"
            description1.style.color = "floralwhite"
           
        }

        if(textDescription[1] != null){

            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1].slice(0, 83)
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "72px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"



            style1 = document.createElement("p")
            style1.innerHTML = textStyle[0]
            description2.appendChild(style1)
    
            style1.style.position = "absolute"
            //add 10px
            style1.style.top = "-16px"
            style1.style.left = "581px"
            style1.style.fontSize = "15px"
            style1.style.width = "280px"
            style1.style.textAlign = "justify"
            style1.style.fontFamily = "impact"
            style1.style.fontWeight = "normal"
            style1.style.color = "floralwhite"
           
        }

        if(textTitle[1] != null){
    
            title2 = document.createElement("p")
            title2.innerHTML = textTitle[1]
            statecontainer.appendChild(title2)
    
            title2.style.position = "absolute"
            title2.style.top = "118px"
            title2.style.left = "0px"
            title2.style.fontSize = "20px"
            title2.style.width = "1000px"
            title2.style.textAlign = "justify"
            title2.style.fontFamily = "Arial, Helvetica, sans-serif"
            title2.style.fontWeight = "normal"
            title2.style.color = "floralwhite"

        }

        if(textDescription[2] != null){

            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "160px"
            description3.style.left = "0px"
            description3.style.fontSize = "15px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"


        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "235px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "1000px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "257px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "980px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "314px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "1000px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "336px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "1000px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "358px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "1000px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "380px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "1000px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }

        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "402px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "980px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textTitle[2] != null){
    
            title3 = document.createElement("p")
            title3.innerHTML = textTitle[2]
            statecontainer.appendChild(title3)
    
            title3.style.position = "absolute"
            title3.style.top = "465px"
            title3.style.left = "0px"
            title3.style.fontSize = "20px"
            title3.style.width = "1000px"
            title3.style.textAlign = "justify"
            title3.style.fontFamily = "Arial, Helvetica, sans-serif"
            title3.style.fontWeight = "normal"
            title3.style.color = "floralwhite"

        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "497px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "980px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "519px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "980px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "541px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "980px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "563px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "980px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "585px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "980px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "607px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "980px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }

        if(textList[13] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "629px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "980px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textTitle[3] != null){
    
            title4 = document.createElement("p")
            title4.innerHTML = textTitle[3]
            statecontainer.appendChild(title4)
    
            title4.style.position = "absolute"
            title4.style.top = "675px"
            title4.style.left = "0px"
            title4.style.fontSize = "20px"
            title4.style.width = "1000px"
            title4.style.textAlign = "justify"
            title4.style.fontFamily = "Arial, Helvetica, sans-serif"
            title4.style.fontWeight = "normal"
            title4.style.color = "floralwhite"

        }

        if(textDescription[3] != null){

            description4 = document.createElement("p")
            description4.innerHTML = textDescription[3]
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "717px"
            description4.style.left = "0px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"


        }

        if(textLinkDescription[0] != null){

       
            linkdescription1 = document.createElement("p")
            linkdescription1.innerHTML = textLinkDescription[0].slice(0, 115)
            statecontainer.appendChild(linkdescription1)
    
            linkdescription1.style.position = "absolute"
            linkdescription1.style.top = "781px"
            linkdescription1.style.left = "0px"
            linkdescription1.style.fontSize = "17px"
            linkdescription1.style.width = "980px"
            linkdescription1.style.textAlign = "justify"
            linkdescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription1.style.fontWeight = "normal"
            linkdescription1.style.color = "floralwhite"



            linkdescription2 = document.createElement("p")
            linkdescription2.innerHTML = textLinkDescription[0].slice(116, 223)
            statecontainer.appendChild(linkdescription2)
    
            linkdescription2.style.position = "absolute"
            linkdescription2.style.top = "800px"
            linkdescription2.style.left = "0px"
            linkdescription2.style.fontSize = "17px"
            linkdescription2.style.width = "980px"
            linkdescription2.style.textAlign = "justify"
            linkdescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription2.style.fontWeight = "normal"
            linkdescription2.style.color = "floralwhite"



            linkdescription3 = document.createElement("p")
            linkdescription3.innerHTML = textLinkDescription[0].slice(224)
            statecontainer.appendChild(linkdescription3)
    
            linkdescription3.style.position = "absolute"
            linkdescription3.style.top = "818px"
            linkdescription3.style.left = "0px"
            linkdescription3.style.fontSize = "17px"
            linkdescription3.style.width = "980px"
            linkdescription3.style.textAlign = "justify"
            linkdescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            linkdescription3.style.fontWeight = "normal"
            linkdescription3.style.color = "floralwhite"


            if(linkdescription3.style.top == "818px"){
    
                secondcontainer.style.height = "892px"
                detailcontainer.style.height = "1024px"
                maindashboard.style.height = "1127px"
            }

            
        }

        if(companyLogoDetail != null){

            flag.style.top = "0px"
            //flag.style.left = "38px"
            flag.style.width = "100%"
            flag.style.height = "99.5%"
            flag.style.opacity = "1"
        }

        if(textApplyDescription[1] != null){

            
           
            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[1].slice(9, 57)
            applycontainer.appendChild(applydescription1)

          
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "63px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "340px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            applydescription1.style.textDecoration = "underline"
            applydescription1.style.cursor = "pointer"



            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[1].slice(57, 97)
            applycontainer.appendChild(applydescription2)

          
            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "80px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "340px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"




            applydescription3 = document.createElement("p")
            applydescription3.innerHTML = textApplyDescription[1].slice(97)
            applycontainer.appendChild(applydescription3)

          
            applydescription3.style.position = "absolute"
            // add 15px
            applydescription3.style.top = "97px"
            applydescription3.style.left = "10px"
            applydescription3.style.fontSize = "15px"
            applydescription3.style.width = "340px"
            applydescription3.style.textAlign = "justify"
            applydescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription3.style.fontWeight = "normal"
            applydescription3.style.color = "floralwhite"
            applydescription3.style.textDecoration = "underline"
            applydescription3.style.cursor = "pointer"
 

            applydescription1.addEventListener("click", openNewTab)
            applydescription2.addEventListener("click", openNewTab)
            applydescription3.addEventListener("click", openNewTab)
           
            
    
            function openNewTab() {
                window.open(textApplyLinkDescription[0])
            }
      
            
        }
    }

    if(location.state.row4 == 13){


        if(textDescription[0] != null){

            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "normal"
            description1.style.color = "floralwhite"
           
        }

        if(textDescription[1] != null){

            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "182px"
            description2.style.left = "0px"
            description2.style.fontSize = "25px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
           
        }

        if(textDescription[2] != null){

            description3 = document.createElement("p")
            description3.innerHTML = "---------------------------------------- " + textDescription[2] + " ----------------------------------------"
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "337px"
            description3.style.left = "0px"
            description3.style.fontSize = "17px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
           
        }

        if(textDescription[3] != null){

            description4 = document.createElement("p")
            description4.innerHTML = "> " + textDescription[3] 
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "363px"
            description4.style.left = "20px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
           
        }

        if(textDescription[4] != null){

            description5 = document.createElement("p")
            description5.innerHTML = "> " + textDescription[4] 
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            description5.style.top = "385px"
            description5.style.left = "20px"
            description5.style.fontSize = "15px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
           
        }

        if(textDescription[5] != null){

            description6 = document.createElement("p")
            description6.innerHTML = "> " + textDescription[5] 
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            description6.style.top = "407px"
            description6.style.left = "20px"
            description6.style.fontSize = "15px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "normal"
            description6.style.color = "floralwhite"
           
        }

        if(textDescription[6] != null){

            description7 = document.createElement("p")
            description7.innerHTML = "> " + textDescription[6] 
            statecontainer.appendChild(description7)
    
            description7.style.position = "absolute"
            description7.style.top = "429px"
            description7.style.left = "20px"
            description7.style.fontSize = "15px"
            description7.style.width = "1000px"
            description7.style.textAlign = "justify"
            description7.style.fontFamily = "Arial, Helvetica, sans-serif"
            description7.style.fontWeight = "normal"
            description7.style.color = "floralwhite"
           
        }

        if(textDescription[7] != null){

            description8 = document.createElement("p")
            description8.innerHTML = "> " + textDescription[7] 
            statecontainer.appendChild(description8)
    
            description8.style.position = "absolute"
            description8.style.top = "452px"
            description8.style.left = "20px"
            description8.style.fontSize = "15px"
            description8.style.width = "1000px"
            description8.style.textAlign = "justify"
            description8.style.fontFamily = "Arial, Helvetica, sans-serif"
            description8.style.fontWeight = "normal"
            description8.style.color = "floralwhite"
           
        }

        if(textDescription[8] != null){

            description9 = document.createElement("p")
            description9.innerHTML = "> " + textDescription[8] 
            statecontainer.appendChild(description9)
    
            description9.style.position = "absolute"
            description9.style.top = "474px"
            description9.style.left = "20px"
            description9.style.fontSize = "15px"
            description9.style.width = "1000px"
            description9.style.textAlign = "justify"
            description9.style.fontFamily = "Arial, Helvetica, sans-serif"
            description9.style.fontWeight = "normal"
            description9.style.color = "floralwhite"
           
        }

        if(textDescription[9] != null){

            description10 = document.createElement("p")
            description10.innerHTML = "> " + textDescription[9] 
            statecontainer.appendChild(description10)
    
            description10.style.position = "absolute"
            description10.style.top = "496px"
            description10.style.left = "20px"
            description10.style.fontSize = "15px"
            description10.style.width = "1000px"
            description10.style.textAlign = "justify"
            description10.style.fontFamily = "Arial, Helvetica, sans-serif"
            description10.style.fontWeight = "normal"
            description10.style.color = "floralwhite"
           
        }

        if(textDescription[10] != null){

            description11 = document.createElement("p")
            description11.innerHTML = "> " + textDescription[10] 
            statecontainer.appendChild(description11)
    
            description11.style.position = "absolute"
            description11.style.top = "518px"
            description11.style.left = "20px"
            description11.style.fontSize = "15px"
            description11.style.width = "1000px"
            description11.style.textAlign = "justify"
            description11.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11.style.fontWeight = "normal"
            description11.style.color = "floralwhite"
           
        }

        if(textDescription[11] != null){

            description12 = document.createElement("p")
            description12.innerHTML = "> " + textDescription[11] 
            statecontainer.appendChild(description12)
    
            description12.style.position = "absolute"
            description12.style.top = "540px"
            description12.style.left = "20px"
            description12.style.fontSize = "15px"
            description12.style.width = "1000px"
            description12.style.textAlign = "justify"
            description12.style.fontFamily = "Arial, Helvetica, sans-serif"
            description12.style.fontWeight = "normal"
            description12.style.color = "floralwhite"
           
        }

        if(textDescription[12] != null){

            description13 = document.createElement("p")
            description13.innerHTML = "> " + textDescription[12] 
            statecontainer.appendChild(description13)
    
            description13.style.position = "absolute"
            description13.style.top = "562px"
            description13.style.left = "20px"
            description13.style.fontSize = "15px"
            description13.style.width = "1000px"
            description13.style.textAlign = "justify"
            description13.style.fontFamily = "Arial, Helvetica, sans-serif"
            description13.style.fontWeight = "normal"
            description13.style.color = "floralwhite"
           
        }

        if(textDescription[13] != null){

            description14 = document.createElement("p")
            description14.innerHTML = "> " + textDescription[13] 
            statecontainer.appendChild(description14)
    
            description14.style.position = "absolute"
            description14.style.top = "584px"
            description14.style.left = "20px"
            description14.style.fontSize = "15px"
            description14.style.width = "980px"
            description14.style.textAlign = "justify"
            description14.style.fontFamily = "Arial, Helvetica, sans-serif"
            description14.style.fontWeight = "normal"
            description14.style.color = "floralwhite"
           
        }

        if(textDescription[14] != null){

            description15 = document.createElement("p")
            description15.innerHTML = "> " + textDescription[14] 
            statecontainer.appendChild(description15)
    
            description15.style.position = "absolute"
            description15.style.top = "624px"
            description15.style.left = "20px"
            description15.style.fontSize = "15px"
            description15.style.width = "980px"
            description15.style.textAlign = "justify"
            description15.style.fontFamily = "Arial, Helvetica, sans-serif"
            description15.style.fontWeight = "normal"
            description15.style.color = "floralwhite"
           
        }

        if(textDescription[15] != null){

            description16 = document.createElement("p")
            description16.innerHTML = "> " + textDescription[15] 
            statecontainer.appendChild(description16)
    
            description16.style.position = "absolute"
            description16.style.top = "664px"
            description16.style.left = "20px"
            description16.style.fontSize = "15px"
            description16.style.width = "980px"
            description16.style.textAlign = "justify"
            description16.style.fontFamily = "Arial, Helvetica, sans-serif"
            description16.style.fontWeight = "normal"
            description16.style.color = "floralwhite"
           

            if(description16.style.top == "664px"){
    
                secondcontainer.style.height = "787px"
                detailcontainer.style.height = "919px"
                maindashboard.style.height = "1022px"
            }

        }

        if(companyLogoDetail != null){

            flag.style.top = "0px"
            //flag.style.left = "38px"
            flag.style.width = "100%"
            flag.style.height = "99.5%"
            flag.style.opacity = "1"
        }

        if(textApplyDescription[1] != null){

           
            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[1].slice(0, 32)
            applycontainer.appendChild(applydescription1)

          
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "69px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "340px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            


            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[1].slice(88)
            applycontainer.appendChild(applydescription2)

          
            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "86px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "340px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"



            applydescription1.addEventListener("click", openNewTab)
            applydescription2.addEventListener("click", openNewTab)
            
   
            function openNewTab() {
                window.open(textApplyDescription[1].slice(43, 86))
            }
      
            
        }

    }

    if(location.state.row4 == 14){


        if(textDescription[0] != null){

            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-24px"
            description1.style.left = "0px"
            description1.style.fontSize = "20px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "normal"
            description1.style.color = "floralwhite"
           
        }

        if(textDescription[1] != null){

            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "18px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
           
        }

        if(textDescription[2] != null){

            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "134px"
            description3.style.left = "0px"
            description3.style.fontSize = "20px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
           
        }

        if(textDescription[3] != null){

            description4 = document.createElement("p")
            description4.innerHTML = textDescription[3]
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "176px"
            description4.style.left = "0px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
           
        }

        if(textDescription[4] != null){

            description5 = document.createElement("p")
            description5.innerHTML = "---------------------------------------- " + textDescription[4] + " ----------------------------------------"
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            description5.style.top = "279px"
            description5.style.left = "0px"
            description5.style.fontSize = "17px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
           
        }

        if(textDescription[5] != null){

            description6 = document.createElement("p")
            description6.innerHTML = "> " + textDescription[5]
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            description6.style.top = "305px"
            description6.style.left = "20px"
            description6.style.fontSize = "15px"
            description6.style.width = "980px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "normal"
            description6.style.color = "floralwhite"
           
        }

        if(textDescription[6] != null){

            description7 = document.createElement("p")
            description7.innerHTML = "> " + textDescription[6]
            statecontainer.appendChild(description7)
    
            description7.style.position = "absolute"
            description7.style.top = "345px"
            description7.style.left = "20px"
            description7.style.fontSize = "15px"
            description7.style.width = "980px"
            description7.style.textAlign = "justify"
            description7.style.fontFamily = "Arial, Helvetica, sans-serif"
            description7.style.fontWeight = "normal"
            description7.style.color = "floralwhite"
           
        }

        if(textDescription[7] != null){

            description8 = document.createElement("p")
            description8.innerHTML = "> " + textDescription[7]
            statecontainer.appendChild(description8)
    
            description8.style.position = "absolute"
            description8.style.top = "385px"
            description8.style.left = "20px"
            description8.style.fontSize = "15px"
            description8.style.width = "980px"
            description8.style.textAlign = "justify"
            description8.style.fontFamily = "Arial, Helvetica, sans-serif"
            description8.style.fontWeight = "normal"
            description8.style.color = "floralwhite"
           
        }

        if(textDescription[8] != null){

            description9 = document.createElement("p")
            description9.innerHTML = "> " + textDescription[8]
            statecontainer.appendChild(description9)
    
            description9.style.position = "absolute"
            description9.style.top = "425px"
            description9.style.left = "20px"
            description9.style.fontSize = "15px"
            description9.style.width = "980px"
            description9.style.textAlign = "justify"
            description9.style.fontFamily = "Arial, Helvetica, sans-serif"
            description9.style.fontWeight = "normal"
            description9.style.color = "floralwhite"
           
        }

        if(textDescription[9] != null){

            description10 = document.createElement("p")
            description10.innerHTML = "----------------------------------------- " + textDescription[9] + " -----------------------------------------"
            statecontainer.appendChild(description10)
    
            description10.style.position = "absolute"
            description10.style.top = "482px"
            description10.style.left = "0px"
            description10.style.fontSize = "17px"
            description10.style.width = "1000px"
            description10.style.textAlign = "justify"
            description10.style.fontFamily = "Arial, Helvetica, sans-serif"
            description10.style.fontWeight = "normal"
            description10.style.color = "floralwhite"
           
        }

        if(textDescription[10] != null){

            description11 = document.createElement("p")
            description11.innerHTML = "> " + textDescription[10].slice(0, 71)
            statecontainer.appendChild(description11)
    
            description11.style.position = "absolute"
            description11.style.top = "508px"
            description11.style.left = "20px"
            description11.style.fontSize = "15px"
            description11.style.width = "980px"
            description11.style.textAlign = "justify"
            description11.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11.style.fontWeight = "normal"
            description11.style.color = "floralwhite"



            description11b = document.createElement("p")
            description11b.innerHTML = "> " + textDescription[10].slice(71, 127)
            statecontainer.appendChild(description11b)
    
            description11b.style.position = "absolute"
            description11b.style.top = "530px"
            description11b.style.left = "20px"
            description11b.style.fontSize = "15px"
            description11b.style.width = "980px"
            description11b.style.textAlign = "justify"
            description11b.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11b.style.fontWeight = "normal"
            description11b.style.color = "floralwhite"



            description11c = document.createElement("p")
            description11c.innerHTML = "> " + textDescription[10].slice(127, 231)
            statecontainer.appendChild(description11c)
    
            description11c.style.position = "absolute"
            description11c.style.top = "552px"
            description11c.style.left = "20px"
            description11c.style.fontSize = "15px"
            description11c.style.width = "980px"
            description11c.style.textAlign = "justify"
            description11c.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11c.style.fontWeight = "normal"
            description11c.style.color = "floralwhite"



            description11d = document.createElement("p")
            description11d.innerHTML = "> " + textDescription[10].slice(231, 385)
            statecontainer.appendChild(description11d)
    
            description11d.style.position = "absolute"
            description11d.style.top = "574px"
            description11d.style.left = "20px"
            description11d.style.fontSize = "15px"
            description11d.style.width = "980px"
            description11d.style.textAlign = "justify"
            description11d.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11d.style.fontWeight = "normal"
            description11d.style.color = "floralwhite"



            description11e = document.createElement("p")
            description11e.innerHTML = "> " + textDescription[10].slice(385, 511)
            statecontainer.appendChild(description11e)
    
            description11e.style.position = "absolute"
            description11e.style.top = "614px"
            description11e.style.left = "20px"
            description11e.style.fontSize = "15px"
            description11e.style.width = "980px"
            description11e.style.textAlign = "justify"
            description11e.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11e.style.fontWeight = "normal"
            description11e.style.color = "floralwhite"



            description11f = document.createElement("p")
            description11f.innerHTML = "> -" + textDescription[10].slice(512, 575)
            statecontainer.appendChild(description11f)
    
            description11f.style.position = "absolute"
            description11f.style.top = "636px"
            description11f.style.left = "20px"
            description11f.style.fontSize = "15px"
            description11f.style.width = "980px"
            description11f.style.textAlign = "justify"
            description11f.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11f.style.fontWeight = "normal"
            description11f.style.color = "floralwhite"



            description11g = document.createElement("p")
            description11g.innerHTML = "> -" + textDescription[10].slice(576, 631)
            statecontainer.appendChild(description11g)
    
            description11g.style.position = "absolute"
            description11g.style.top = "658px"
            description11g.style.left = "20px"
            description11g.style.fontSize = "15px"
            description11g.style.width = "980px"
            description11g.style.textAlign = "justify"
            description11g.style.fontFamily = "Arial, Helvetica, sans-serif"
            description11g.style.fontWeight = "normal"
            description11g.style.color = "floralwhite"

           
        }

        if(textDescription[11] != null){

            description12 = document.createElement("p")
            description12.innerHTML = "###### " + textDescription[11] + " ######"
            statecontainer.appendChild(description12)
    
            description12.style.position = "absolute"
            description12.style.top = "690px"
            description12.style.left = "160px"
            description12.style.fontSize = "15px"
            description12.style.width = "980px"
            description12.style.textAlign = "justify"
            description12.style.fontFamily = "Arial, Helvetica, sans-serif"
            description12.style.fontWeight = "normal"
            description12.style.color = "floralwhite"


        }

        if(textDescription[12] != null){

            description13 = document.createElement("p")
            description13.innerHTML = textDescription[12]
            statecontainer.appendChild(description13)
    
            description13.style.position = "absolute"
            description13.style.top = "712px"
            description13.style.left = "40px"
            description13.style.fontSize = "15px"
            description13.style.width = "961px"
            description13.style.textAlign = "justify"
            description13.style.fontFamily = "Arial, Helvetica, sans-serif"
            description13.style.fontWeight = "normal"
            description13.style.color = "floralwhite"


        }

        if(textDescription[13] != null){

            description14 = document.createElement("p")
            description14.innerHTML = textDescription[13]
            statecontainer.appendChild(description14)
    
            description14.style.position = "absolute"
            description14.style.top = "798px"
            description14.style.left = "40px"
            description14.style.fontSize = "15px"
            description14.style.width = "961px"
            description14.style.textAlign = "justify"
            description14.style.fontFamily = "Arial, Helvetica, sans-serif"
            description14.style.fontWeight = "normal"
            description14.style.color = "floralwhite"


        }

        if(textDescription[14] != null){

            description15 = document.createElement("p")
            description15.innerHTML = textDescription[14]
            statecontainer.appendChild(description15)
    
            description15.style.position = "absolute"
            description15.style.top = "848px"
            description15.style.left = "40px"
            description15.style.fontSize = "15px"
            description15.style.width = "961px"
            description15.style.textAlign = "justify"
            description15.style.fontFamily = "Arial, Helvetica, sans-serif"
            description15.style.fontWeight = "normal"
            description15.style.color = "floralwhite"


        }

        if(textDescription[15] != null){

            description16 = document.createElement("p")
            description16.innerHTML = "--------------------------------------------- " + textDescription[15] + " ---------------------------------------------"
            statecontainer.appendChild(description16)
    
            description16.style.position = "absolute"
            description16.style.top = "905px"
            description16.style.left = "0px"
            description16.style.fontSize = "17px"
            description16.style.width = "961px"
            description16.style.textAlign = "justify"
            description16.style.fontFamily = "Arial, Helvetica, sans-serif"
            description16.style.fontWeight = "normal"
            description16.style.color = "floralwhite"


        }

        if(textDescription[16] != null){
            
            description17 = document.createElement("p")
            description17.innerHTML = "> " + textDescription[16].slice(0, 117)
            statecontainer.appendChild(description17)
    
            description17.style.position = "absolute"
            description17.style.top = "932px"
            description17.style.left = "20px"
            description17.style.fontSize = "15px"
            description17.style.width = "980px"
            description17.style.textAlign = "justify"
            description17.style.fontFamily = "Arial, Helvetica, sans-serif"
            description17.style.fontWeight = "normal"
            description17.style.color = "floralwhite"


            description17b = document.createElement("p")
            description17b.innerHTML = "> " + textDescription[16].slice(117, 232)
            statecontainer.appendChild(description17b)
    
            description17b.style.position = "absolute"
            description17b.style.top = "954px"
            description17b.style.left = "20px"
            description17b.style.fontSize = "15px"
            description17b.style.width = "980px"
            description17b.style.textAlign = "justify"
            description17b.style.fontFamily = "Arial, Helvetica, sans-serif"
            description17b.style.fontWeight = "normal"
            description17b.style.color = "floralwhite"



            description17c = document.createElement("p")
            description17c.innerHTML = "> " + textDescription[16].slice(232, 444)
            statecontainer.appendChild(description17c)
    
            description17c.style.position = "absolute"
            description17c.style.top = "976px"
            description17c.style.left = "20px"
            description17c.style.fontSize = "15px"
            description17c.style.width = "980px"
            description17c.style.textAlign = "justify"
            description17c.style.fontFamily = "Arial, Helvetica, sans-serif"
            description17c.style.fontWeight = "normal"
            description17c.style.color = "floralwhite"



            description17d = document.createElement("p")
            description17d.innerHTML = "> " + textDescription[16].slice(444, 535)
            statecontainer.appendChild(description17d)
    
            description17d.style.position = "absolute"
            description17d.style.top = "1016px"
            description17d.style.left = "20px"
            description17d.style.fontSize = "15px"
            description17d.style.width = "980px"
            description17d.style.textAlign = "justify"
            description17d.style.fontFamily = "Arial, Helvetica, sans-serif"
            description17d.style.fontWeight = "normal"
            description17d.style.color = "floralwhite"



            description17e = document.createElement("p")
            description17e.innerHTML = "> " + textDescription[16].slice(535, 626)
            statecontainer.appendChild(description17e)
    
            description17e.style.position = "absolute"
            description17e.style.top = "1038px"
            description17e.style.left = "20px"
            description17e.style.fontSize = "15px"
            description17e.style.width = "980px"
            description17e.style.textAlign = "justify"
            description17e.style.fontFamily = "Arial, Helvetica, sans-serif"
            description17e.style.fontWeight = "normal"
            description17e.style.color = "floralwhite"



            description17f = document.createElement("p")
            description17f.innerHTML = "> " + textDescription[16].slice(626)
            statecontainer.appendChild(description17f)
    
            description17f.style.position = "absolute"
            description17f.style.top = "1060px"
            description17f.style.left = "20px"
            description17f.style.fontSize = "15px"
            description17f.style.width = "980px"
            description17f.style.textAlign = "justify"
            description17f.style.fontFamily = "Arial, Helvetica, sans-serif"
            description17f.style.fontWeight = "normal"
            description17f.style.color = "floralwhite"

        }

        if(textDescription[17] != null){
            
            description18 = document.createElement("p")
            description18.innerHTML = textDescription[17]
            statecontainer.appendChild(description18)
    
            description18.style.position = "absolute"
            description18.style.top = "1094px"
            description18.style.left = "0px"
            description18.style.fontSize = "17px"
            description18.style.width = "1000px"
            description18.style.textAlign = "justify"
            description18.style.fontFamily = "Arial, Helvetica, sans-serif"
            description18.style.fontWeight = "normal"
            description18.style.color = "floralwhite"

            if(description18.style.top == "1094px"){
    
                secondcontainer.style.height = "1189px"
                detailcontainer.style.height = "1321px"
                maindashboard.style.height = "1425px"
            }

        }

        if(companyLogoDetail != null){

            flag.style.top = "0px"
            //flag.style.left = "38px"
            flag.style.width = "100%"
            flag.style.height = "99.5%"
            flag.style.opacity = "1"
        }

        if(textApplyDescription[0] != null){

            
            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0]
            applycontainer.appendChild(applydescription1)

          
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "59px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "340px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            

            
            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[1].slice(9, 56)
            applycontainer.appendChild(applydescription2)

          
            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "77px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "340px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"



            applydescription3 = document.createElement("p")
            applydescription3.innerHTML = textApplyDescription[1].slice(56, 60)
            applycontainer.appendChild(applydescription3)

          
            applydescription3.style.position = "absolute"
            // add 15px
            applydescription3.style.top = "96px"
            applydescription3.style.left = "10px"
            applydescription3.style.fontSize = "15px"
            applydescription3.style.width = "340px"
            applydescription3.style.textAlign = "justify"
            applydescription3.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription3.style.fontWeight = "normal"
            applydescription3.style.color = "floralwhite"
            applydescription3.style.textDecoration = "underline"
            applydescription3.style.cursor = "pointer"



            applydescription2.addEventListener("click", openNewTab)
            applydescription3.addEventListener("click", openNewTab)
            
            
   
            function openNewTab() {
                window.open(textApplyDescription[1].slice(9, 60))
            }
      
            
        }
        
    }

    if(location.state.row4 == 17){

        if(textDescription[0] != null){

            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
           
        }

        if(textDescription[1] != null){

            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "50px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
           


            description22 = document.createElement("p")
            description22.innerHTML = findTag.slice(603, 739)
            statecontainer.appendChild(description22)
    
            description22.style.position = "absolute"
            description22.style.top = "148px"
            description22.style.left = "0px"
            description22.style.fontSize = "20px"
            description22.style.width = "1000px"
            description22.style.textAlign = "justify"
            description22.style.fontFamily = "Arial, Helvetica, sans-serif"
            description22.style.fontWeight = "normal"
            description22.style.color = "floralwhite"
           
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "203px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "980px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "244px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "980px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "284px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "980px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textDescription[2] != null){

            description3 = document.createElement("p")
            description3.innerHTML = textDescription[2]
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "338px"
            description3.style.left = "0px"
            description3.style.fontSize = "20px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
           
           
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "394px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "980px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "416px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "980px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "438px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "980px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }
       
        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "460px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "980px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "482px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "980px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "504px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "980px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "526px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "980px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "548px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "980px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "570px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "980px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }

        if(textDescription[3] != null){

            description4 = document.createElement("p")
            description4.innerHTML = textDescription[3]
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "602px"
            description4.style.left = "0px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
           
           
        }

        if(textDescription[4] != null){

            description5 = document.createElement("p")
            description5.innerHTML = textDescription[4]
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            description5.style.top = "665px"
            description5.style.left = "0px"
            description5.style.fontSize = "20px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
           
           
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "697px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "980px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }

        if(textList[13]!= null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "719px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "980px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textList[14]!= null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
            
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "741px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "980px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }

        if(textList[15]!= null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list16)
            
    
            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "763px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "980px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }

        if(textList[16]!= null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list17)
            
    
            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "785px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "980px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }

        if(textList[17]!= null){
    
            list18 = document.createElement("p")
            list18.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list18)
            
    
            list18.style.position = "absolute"
            // add 10px
            list18.style.top = "807px"
            list18.style.left = "20px"
            list18.style.fontSize = "15px"
            list18.style.width = "980px"
            list18.style.textAlign = "justify"
            list18.style.fontFamily = "Arial, Helvetica, sans-serif"
            list18.style.fontWeight = "normal"
            list18.style.color = "floralwhite"
            
        }

        if(textList[18]!= null){
    
            list19 = document.createElement("p")
            list19.innerHTML = "> " + textList[18]
            statecontainer.appendChild(list19)
            
    
            list19.style.position = "absolute"
            // add 10px
            list19.style.top = "829px"
            list19.style.left = "20px"
            list19.style.fontSize = "15px"
            list19.style.width = "980px"
            list19.style.textAlign = "justify"
            list19.style.fontFamily = "Arial, Helvetica, sans-serif"
            list19.style.fontWeight = "normal"
            list19.style.color = "floralwhite"
            
        }

        if(textList[19]!= null){
    
            list20 = document.createElement("p")
            list20.innerHTML = "> " + textList[19]
            statecontainer.appendChild(list20)
            
    
            list20.style.position = "absolute"
            // add 10px
            list20.style.top = "852px"
            list20.style.left = "20px"
            list20.style.fontSize = "15px"
            list20.style.width = "980px"
            list20.style.textAlign = "justify"
            list20.style.fontFamily = "Arial, Helvetica, sans-serif"
            list20.style.fontWeight = "normal"
            list20.style.color = "floralwhite"
            
        }

        if(textList[20]!= null){
    
            list21 = document.createElement("p")
            list21.innerHTML = "> " + textList[20]
            statecontainer.appendChild(list21)
            
    
            list21.style.position = "absolute"
            // add 10px
            list21.style.top = "874px"
            list21.style.left = "20px"
            list21.style.fontSize = "15px"
            list21.style.width = "980px"
            list21.style.textAlign = "justify"
            list21.style.fontFamily = "Arial, Helvetica, sans-serif"
            list21.style.fontWeight = "normal"
            list21.style.color = "floralwhite"
            
        }

        if(textList[21]!= null){
    
            list22 = document.createElement("p")
            list22.innerHTML = "> " + textList[21]
            statecontainer.appendChild(list22)
            
    
            list22.style.position = "absolute"
            // add 10px
            list22.style.top = "896px"
            list22.style.left = "20px"
            list22.style.fontSize = "15px"
            list22.style.width = "980px"
            list22.style.textAlign = "justify"
            list22.style.fontFamily = "Arial, Helvetica, sans-serif"
            list22.style.fontWeight = "normal"
            list22.style.color = "floralwhite"
            
        }

        if(textDescription[5] != null){

            description6 = document.createElement("p")
            description6.innerHTML = textDescription[5]
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            description6.style.top = "941px"
            description6.style.left = "0px"
            description6.style.fontSize = "20px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "normal"
            description6.style.color = "floralwhite"
           
           
            if(description6.style.top == "941px"){
    
                secondcontainer.style.height = "1020px"
                detailcontainer.style.height = "1152px"
                maindashboard.style.height = "1255px"
            }
        }

        if(companyLogoDetail != null){

            flag.style.top = "0px"
            //flag.style.left = "38px"
            flag.style.width = "100%"
            flag.style.height = "99.5%"
            flag.style.opacity = "1"
        }

        if(textApplyDescription[0] != null){

           
            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0].slice(9, 57)
            applycontainer.appendChild(applydescription1)

          
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "69px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "340px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            applydescription1.style.textDecoration = "underline"
            applydescription1.style.cursor = "pointer"

          
            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[0].slice(57, 80)
            applycontainer.appendChild(applydescription2)

          
            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "87px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "340px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"


            applydescription1.addEventListener("click", openNewTab)
            applydescription2.addEventListener("click", openNewTab)
            
            
   
            function openNewTab() {
                window.open(textApplyDescription[0].slice(9, 80))
            }
      
        }
        
    }


    if(location.state.row4 == 15){

       
        if(textDescription[0] != null){

            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
           
        }

        if(textDescription[1] != null){

            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "50px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
           
           
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "125px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "980px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "147px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "980px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "187px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "980px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "228px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "980px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textDescription[2] != null){

            description3 = document.createElement("p")
            description3.innerHTML = "---------------------------------------- " + textDescription[2] + " ----------------------------------------"
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "296px"
            description3.style.left = "0px"
            description3.style.fontSize = "17px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
           
           
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "321px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "980px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "343px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "980px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }

        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "383px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "980px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "406px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "980px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "428px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "980px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "450px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "980px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "472px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "980px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }

        if(textDescription[3] != null){

            description4 = document.createElement("p")
            description4.innerHTML = textDescription[3]
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "504px"
            description4.style.left = "0px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
           
           
        }

        if(textDescription[4] != null){

            description5 = document.createElement("p")
            description5.innerHTML = "------------------------------------------- " + textDescription[4] + " -------------------------------------------"
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            description5.style.top = "561px"
            description5.style.left = "0px"
            description5.style.fontSize = "17px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
           
           
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "587px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "980px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "609px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "980px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }

        if(textList[13] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "631px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "980px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textList[14] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
            
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "653px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "980px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }

        if(textList[15] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list16)
            
    
            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "675px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "980px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }

        if(textList[16] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list17)
            
    
            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "697px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "980px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }

        if(textList[17] != null){
    
            list18 = document.createElement("p")
            list18.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list18)
            
    
            list18.style.position = "absolute"
            // add 10px
            list18.style.top = "719px"
            list18.style.left = "20px"
            list18.style.fontSize = "15px"
            list18.style.width = "980px"
            list18.style.textAlign = "justify"
            list18.style.fontFamily = "Arial, Helvetica, sans-serif"
            list18.style.fontWeight = "normal"
            list18.style.color = "floralwhite"
            
        }

        if(textList[18] != null){
    
            list19 = document.createElement("p")
            list19.innerHTML = "> " + textList[18]
            statecontainer.appendChild(list19)
            
    
            list19.style.position = "absolute"
            // add 10px
            list19.style.top = "741px"
            list19.style.left = "20px"
            list19.style.fontSize = "15px"
            list19.style.width = "980px"
            list19.style.textAlign = "justify"
            list19.style.fontFamily = "Arial, Helvetica, sans-serif"
            list19.style.fontWeight = "normal"
            list19.style.color = "floralwhite"
            
        }

        if(textList[19] != null){
    
            list20 = document.createElement("p")
            list20.innerHTML = "> " + textList[19]
            statecontainer.appendChild(list20)
            
    
            list20.style.position = "absolute"
            // add 10px
            list20.style.top = "763px"
            list20.style.left = "20px"
            list20.style.fontSize = "15px"
            list20.style.width = "980px"
            list20.style.textAlign = "justify"
            list20.style.fontFamily = "Arial, Helvetica, sans-serif"
            list20.style.fontWeight = "normal"
            list20.style.color = "floralwhite"
            
        }

        if(textList[20] != null){
    
            list21 = document.createElement("p")
            list21.innerHTML = "> " + textList[20]
            statecontainer.appendChild(list21)
            
    
            list21.style.position = "absolute"
            // add 10px
            list21.style.top = "785px"
            list21.style.left = "20px"
            list21.style.fontSize = "15px"
            list21.style.width = "980px"
            list21.style.textAlign = "justify"
            list21.style.fontFamily = "Arial, Helvetica, sans-serif"
            list21.style.fontWeight = "normal"
            list21.style.color = "floralwhite"
            
        }

        if(textDescription[5] != null){

            description6 = document.createElement("p")
            description6.innerHTML = textDescription[5]
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            description6.style.top = "834px"
            description6.style.left = "0px"
            description6.style.fontSize = "17px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "normal"
            description6.style.color = "floralwhite"
           
           

            if(description6.style.top == "834px"){
    
                secondcontainer.style.height = "907px"
                detailcontainer.style.height = "1039px"
                maindashboard.style.height = "1142px"
            }
        }

        if(companyLogoDetail != null){

            flag.style.top = "0px"
            //flag.style.left = "38px"
            flag.style.width = "100%"
            flag.style.height = "99.5%"
            flag.style.opacity = "1"
        }

        if(textApplyDescription[0] != null){

           
            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0].slice(9, 58)
            applycontainer.appendChild(applydescription1)

          
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "69px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "340px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            applydescription1.style.textDecoration = "underline"
            applydescription1.style.cursor = "pointer"

          
            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[0].slice(58, 80)
            applycontainer.appendChild(applydescription2)

          
            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "87px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "340px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"


            applydescription1.addEventListener("click", openNewTab)
            applydescription2.addEventListener("click", openNewTab)
            
            
   
            function openNewTab() {
                window.open(textApplyDescription[0].slice(9, 80))
            }
      
        }
    }

    if(location.state.row4 == 16){

        if(textDescription[0] != null){

            description1 = document.createElement("p")
            description1.innerHTML = textDescription[0]
            statecontainer.appendChild(description1)
    
            description1.style.position = "absolute"
            description1.style.top = "-30px"
            description1.style.left = "0px"
            description1.style.fontSize = "25px"
            description1.style.width = "1000px"
            description1.style.textAlign = "justify"
            description1.style.fontFamily = "Arial, Helvetica, sans-serif"
            description1.style.fontWeight = "bolder"
            description1.style.color = "floralwhite"
           
        }

        if(textDescription[1] != null){

            description2 = document.createElement("p")
            description2.innerHTML = textDescription[1]
            statecontainer.appendChild(description2)
    
            description2.style.position = "absolute"
            description2.style.top = "22px"
            description2.style.left = "0px"
            description2.style.fontSize = "15px"
            description2.style.width = "1000px"
            description2.style.textAlign = "justify"
            description2.style.fontFamily = "Arial, Helvetica, sans-serif"
            description2.style.fontWeight = "normal"
            description2.style.color = "floralwhite"
           
           
        }

        if(textList[0] != null){
    
            list1 = document.createElement("p")
            list1.innerHTML = "> " + textList[0]
            statecontainer.appendChild(list1)
            
    
            list1.style.position = "absolute"
            // add 10px
            list1.style.top = "61px"
            list1.style.left = "20px"
            list1.style.fontSize = "15px"
            list1.style.width = "980px"
            list1.style.textAlign = "justify"
            list1.style.fontFamily = "Arial, Helvetica, sans-serif"
            list1.style.fontWeight = "normal"
            list1.style.color = "floralwhite"
            
        }

        if(textList[1] != null){
    
            list2 = document.createElement("p")
            list2.innerHTML = "> " + textList[1]
            statecontainer.appendChild(list2)
            
    
            list2.style.position = "absolute"
            // add 10px
            list2.style.top = "83px"
            list2.style.left = "20px"
            list2.style.fontSize = "15px"
            list2.style.width = "980px"
            list2.style.textAlign = "justify"
            list2.style.fontFamily = "Arial, Helvetica, sans-serif"
            list2.style.fontWeight = "normal"
            list2.style.color = "floralwhite"
            
        }

        if(textList[2] != null){
    
            list3 = document.createElement("p")
            list3.innerHTML = "> " + textList[2]
            statecontainer.appendChild(list3)
            
    
            list3.style.position = "absolute"
            // add 10px
            list3.style.top = "124px"
            list3.style.left = "20px"
            list3.style.fontSize = "15px"
            list3.style.width = "980px"
            list3.style.textAlign = "justify"
            list3.style.fontFamily = "Arial, Helvetica, sans-serif"
            list3.style.fontWeight = "normal"
            list3.style.color = "floralwhite"
            
        }

        if(textList[3] != null){
    
            list4 = document.createElement("p")
            list4.innerHTML = "> " + textList[3]
            statecontainer.appendChild(list4)
            
    
            list4.style.position = "absolute"
            // add 10px
            list4.style.top = "165px"
            list4.style.left = "20px"
            list4.style.fontSize = "15px"
            list4.style.width = "980px"
            list4.style.textAlign = "justify"
            list4.style.fontFamily = "Arial, Helvetica, sans-serif"
            list4.style.fontWeight = "normal"
            list4.style.color = "floralwhite"
            
        }

        if(textDescription[2] != null){

            description3 = document.createElement("p")
            description3.innerHTML = "---------------------------------------- " + textDescription[2] + " ----------------------------------------"
            statecontainer.appendChild(description3)
    
            description3.style.position = "absolute"
            description3.style.top = "222px"
            description3.style.left = "0px"
            description3.style.fontSize = "17px"
            description3.style.width = "1000px"
            description3.style.textAlign = "justify"
            description3.style.fontFamily = "Arial, Helvetica, sans-serif"
            description3.style.fontWeight = "normal"
            description3.style.color = "floralwhite"
           
           
        }

        if(textList[4] != null){
    
            list5 = document.createElement("p")
            list5.innerHTML = "> " + textList[4]
            statecontainer.appendChild(list5)
            
    
            list5.style.position = "absolute"
            // add 10px
            list5.style.top = "248px"
            list5.style.left = "20px"
            list5.style.fontSize = "15px"
            list5.style.width = "980px"
            list5.style.textAlign = "justify"
            list5.style.fontFamily = "Arial, Helvetica, sans-serif"
            list5.style.fontWeight = "normal"
            list5.style.color = "floralwhite"
            
        }

        if(textList[5] != null){
    
            list6 = document.createElement("p")
            list6.innerHTML = "> " + textList[5]
            statecontainer.appendChild(list6)
            
    
            list6.style.position = "absolute"
            // add 10px
            list6.style.top = "270px"
            list6.style.left = "20px"
            list6.style.fontSize = "15px"
            list6.style.width = "980px"
            list6.style.textAlign = "justify"
            list6.style.fontFamily = "Arial, Helvetica, sans-serif"
            list6.style.fontWeight = "normal"
            list6.style.color = "floralwhite"
            
        }

        if(textList[6] != null){
    
            list7 = document.createElement("p")
            list7.innerHTML = "> " + textList[6]
            statecontainer.appendChild(list7)
            
    
            list7.style.position = "absolute"
            // add 10px
            list7.style.top = "292px"
            list7.style.left = "20px"
            list7.style.fontSize = "15px"
            list7.style.width = "980px"
            list7.style.textAlign = "justify"
            list7.style.fontFamily = "Arial, Helvetica, sans-serif"
            list7.style.fontWeight = "normal"
            list7.style.color = "floralwhite"
            
        }

        if(textList[7] != null){
    
            list8 = document.createElement("p")
            list8.innerHTML = "> " + textList[7]
            statecontainer.appendChild(list8)
            
    
            list8.style.position = "absolute"
            // add 10px
            list8.style.top = "314px"
            list8.style.left = "20px"
            list8.style.fontSize = "15px"
            list8.style.width = "980px"
            list8.style.textAlign = "justify"
            list8.style.fontFamily = "Arial, Helvetica, sans-serif"
            list8.style.fontWeight = "normal"
            list8.style.color = "floralwhite"
            
        }

        if(textList[8] != null){
    
            list9 = document.createElement("p")
            list9.innerHTML = "> " + textList[8]
            statecontainer.appendChild(list9)
            
    
            list9.style.position = "absolute"
            // add 10px
            list9.style.top = "336px"
            list9.style.left = "20px"
            list9.style.fontSize = "15px"
            list9.style.width = "980px"
            list9.style.textAlign = "justify"
            list9.style.fontFamily = "Arial, Helvetica, sans-serif"
            list9.style.fontWeight = "normal"
            list9.style.color = "floralwhite"
            
        }

        if(textList[9] != null){
    
            list10 = document.createElement("p")
            list10.innerHTML = "> " + textList[9]
            statecontainer.appendChild(list10)
            
    
            list10.style.position = "absolute"
            // add 10px
            list10.style.top = "358px"
            list10.style.left = "20px"
            list10.style.fontSize = "15px"
            list10.style.width = "980px"
            list10.style.textAlign = "justify"
            list10.style.fontFamily = "Arial, Helvetica, sans-serif"
            list10.style.fontWeight = "normal"
            list10.style.color = "floralwhite"
            
        }

        if(textDescription[3] != null){

            description4 = document.createElement("p")
            description4.innerHTML = textDescription[3]
            statecontainer.appendChild(description4)
    
            description4.style.position = "absolute"
            description4.style.top = "390px"
            description4.style.left = "0px"
            description4.style.fontSize = "15px"
            description4.style.width = "1000px"
            description4.style.textAlign = "justify"
            description4.style.fontFamily = "Arial, Helvetica, sans-serif"
            description4.style.fontWeight = "normal"
            description4.style.color = "floralwhite"
           
           
        }

        if(textDescription[4] != null){

            description5 = document.createElement("p")
            description5.innerHTML = "------------------------------------------- " + textDescription[4] + " -------------------------------------------"
            statecontainer.appendChild(description5)
    
            description5.style.position = "absolute"
            description5.style.top = "464px"
            description5.style.left = "0px"
            description5.style.fontSize = "17px"
            description5.style.width = "1000px"
            description5.style.textAlign = "justify"
            description5.style.fontFamily = "Arial, Helvetica, sans-serif"
            description5.style.fontWeight = "normal"
            description5.style.color = "floralwhite"
           
           
        }

        if(textList[10] != null){
    
            list11 = document.createElement("p")
            list11.innerHTML = "> " + textList[10]
            statecontainer.appendChild(list11)
            
    
            list11.style.position = "absolute"
            // add 10px
            list11.style.top = "489px"
            list11.style.left = "20px"
            list11.style.fontSize = "15px"
            list11.style.width = "980px"
            list11.style.textAlign = "justify"
            list11.style.fontFamily = "Arial, Helvetica, sans-serif"
            list11.style.fontWeight = "normal"
            list11.style.color = "floralwhite"
            
        }

        if(textList[11] != null){
    
            list12 = document.createElement("p")
            list12.innerHTML = "> " + textList[11]
            statecontainer.appendChild(list12)
            
    
            list12.style.position = "absolute"
            // add 10px
            list12.style.top = "511px"
            list12.style.left = "20px"
            list12.style.fontSize = "15px"
            list12.style.width = "980px"
            list12.style.textAlign = "justify"
            list12.style.fontFamily = "Arial, Helvetica, sans-serif"
            list12.style.fontWeight = "normal"
            list12.style.color = "floralwhite"
            
        }

        if(textList[12] != null){
    
            list13 = document.createElement("p")
            list13.innerHTML = "> " + textList[12]
            statecontainer.appendChild(list13)
            
    
            list13.style.position = "absolute"
            // add 10px
            list13.style.top = "533px"
            list13.style.left = "20px"
            list13.style.fontSize = "15px"
            list13.style.width = "980px"
            list13.style.textAlign = "justify"
            list13.style.fontFamily = "Arial, Helvetica, sans-serif"
            list13.style.fontWeight = "normal"
            list13.style.color = "floralwhite"
            
        }

        if(textList[13] != null){
    
            list14 = document.createElement("p")
            list14.innerHTML = "> " + textList[13]
            statecontainer.appendChild(list14)
            
    
            list14.style.position = "absolute"
            // add 10px
            list14.style.top = "555px"
            list14.style.left = "20px"
            list14.style.fontSize = "15px"
            list14.style.width = "980px"
            list14.style.textAlign = "justify"
            list14.style.fontFamily = "Arial, Helvetica, sans-serif"
            list14.style.fontWeight = "normal"
            list14.style.color = "floralwhite"
            
        }

        if(textList[14] != null){
    
            list15 = document.createElement("p")
            list15.innerHTML = "> " + textList[14]
            statecontainer.appendChild(list15)
            
    
            list15.style.position = "absolute"
            // add 10px
            list15.style.top = "577px"
            list15.style.left = "20px"
            list15.style.fontSize = "15px"
            list15.style.width = "980px"
            list15.style.textAlign = "justify"
            list15.style.fontFamily = "Arial, Helvetica, sans-serif"
            list15.style.fontWeight = "normal"
            list15.style.color = "floralwhite"
            
        }

        if(textList[15] != null){
    
            list16 = document.createElement("p")
            list16.innerHTML = "> " + textList[15]
            statecontainer.appendChild(list16)
            
    
            list16.style.position = "absolute"
            // add 10px
            list16.style.top = "599px"
            list16.style.left = "20px"
            list16.style.fontSize = "15px"
            list16.style.width = "980px"
            list16.style.textAlign = "justify"
            list16.style.fontFamily = "Arial, Helvetica, sans-serif"
            list16.style.fontWeight = "normal"
            list16.style.color = "floralwhite"
            
        }

        if(textList[16] != null){
    
            list17 = document.createElement("p")
            list17.innerHTML = "> " + textList[16]
            statecontainer.appendChild(list17)
            
    
            list17.style.position = "absolute"
            // add 10px
            list17.style.top = "621px"
            list17.style.left = "20px"
            list17.style.fontSize = "15px"
            list17.style.width = "980px"
            list17.style.textAlign = "justify"
            list17.style.fontFamily = "Arial, Helvetica, sans-serif"
            list17.style.fontWeight = "normal"
            list17.style.color = "floralwhite"
            
        }

        if(textList[17] != null){
    
            list18 = document.createElement("p")
            list18.innerHTML = "> " + textList[17]
            statecontainer.appendChild(list18)
            
    
            list18.style.position = "absolute"
            // add 10px
            list18.style.top = "643px"
            list18.style.left = "20px"
            list18.style.fontSize = "15px"
            list18.style.width = "980px"
            list18.style.textAlign = "justify"
            list18.style.fontFamily = "Arial, Helvetica, sans-serif"
            list18.style.fontWeight = "normal"
            list18.style.color = "floralwhite"
            
        }

        if(textList[18] != null){
    
            list19 = document.createElement("p")
            list19.innerHTML = "> " + textList[18]
            statecontainer.appendChild(list19)
            
    
            list19.style.position = "absolute"
            // add 10px
            list19.style.top = "665px"
            list19.style.left = "20px"
            list19.style.fontSize = "15px"
            list19.style.width = "980px"
            list19.style.textAlign = "justify"
            list19.style.fontFamily = "Arial, Helvetica, sans-serif"
            list19.style.fontWeight = "normal"
            list19.style.color = "floralwhite"
            
        }

        if(textList[19] != null){
    
            list20 = document.createElement("p")
            list20.innerHTML = "> " + textList[19]
            statecontainer.appendChild(list20)
            
    
            list20.style.position = "absolute"
            // add 10px
            list20.style.top = "687px"
            list20.style.left = "20px"
            list20.style.fontSize = "15px"
            list20.style.width = "980px"
            list20.style.textAlign = "justify"
            list20.style.fontFamily = "Arial, Helvetica, sans-serif"
            list20.style.fontWeight = "normal"
            list20.style.color = "floralwhite"
            
        }

        if(textDescription[5] != null){

            description6 = document.createElement("p")
            description6.innerHTML = textDescription[5]
            statecontainer.appendChild(description6)
    
            description6.style.position = "absolute"
            description6.style.top = "737px"
            description6.style.left = "0px"
            description6.style.fontSize = "17px"
            description6.style.width = "1000px"
            description6.style.textAlign = "justify"
            description6.style.fontFamily = "Arial, Helvetica, sans-serif"
            description6.style.fontWeight = "normal"
            description6.style.color = "floralwhite"
           
        }

        if(textDescription[6] != null){

            description7 = document.createElement("p")
            description7.innerHTML = textDescription[6]
            statecontainer.appendChild(description7)
    
            description7.style.position = "absolute"
            description7.style.top = "770px"
            description7.style.left = "0px"
            description7.style.fontSize = "17px"
            description7.style.width = "1000px"
            description7.style.textAlign = "justify"
            description7.style.fontFamily = "Arial, Helvetica, sans-serif"
            description7.style.fontWeight = "normal"
            description7.style.color = "floralwhite"
           
           

            if(description7.style.top == "770px"){
    
                secondcontainer.style.height = "846px"
                detailcontainer.style.height = "978px"
                maindashboard.style.height = "1082px"
            }
        }
        
        if(companyLogoDetail != null){

            flag.style.top = "0px"
            //flag.style.left = "38px"
            flag.style.width = "100%"
            flag.style.height = "99.5%"
            flag.style.opacity = "1"
        }
        
        if(textApplyDescription[0] != null){

           
            applydescription1 = document.createElement("p")
            applydescription1.innerHTML = textApplyDescription[0].slice(9, 60)
            applycontainer.appendChild(applydescription1)

          
            applydescription1.style.position = "absolute"
            // add 15px
            applydescription1.style.top = "69px"
            applydescription1.style.left = "10px"
            applydescription1.style.fontSize = "15px"
            applydescription1.style.width = "340px"
            applydescription1.style.textAlign = "justify"
            applydescription1.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription1.style.fontWeight = "normal"
            applydescription1.style.color = "floralwhite"
            applydescription1.style.textDecoration = "underline"
            applydescription1.style.cursor = "pointer"

          
            applydescription2 = document.createElement("p")
            applydescription2.innerHTML = textApplyDescription[0].slice(60, 80)
            applycontainer.appendChild(applydescription2)

          
            applydescription2.style.position = "absolute"
            // add 15px
            applydescription2.style.top = "87px"
            applydescription2.style.left = "10px"
            applydescription2.style.fontSize = "15px"
            applydescription2.style.width = "340px"
            applydescription2.style.textAlign = "justify"
            applydescription2.style.fontFamily = "Arial, Helvetica, sans-serif"
            applydescription2.style.fontWeight = "normal"
            applydescription2.style.color = "floralwhite"
            applydescription2.style.textDecoration = "underline"
            applydescription2.style.cursor = "pointer"


            applydescription1.addEventListener("click", openNewTab)
            applydescription2.addEventListener("click", openNewTab)
            
            
   
            function openNewTab() {
                window.open(textApplyDescription[0].slice(9, 80))
            }
      
        }
    }
}

const logOut = () => {
    Axios.delete("http://localhost:3001/logout", {
            }).then((response) => {
              if(response.data.message){
                  console.log(response)
              } else {
                  console.log(response)
                  
                  navigate("/", {
                    state: 
                      { 
                        message: "Logout successfully, cookies has been deleted !"
                      },
                  })
            
              }
        })
}





    return(
        <div className="maindashboard2">

            <div className="headerdashboard2">
                    <h1 className='titledashboard3'>Gregoro</h1>
                    <h1 className='titledashboard4'>JOBS</h1>
                    <div className="subheader2">
                        <h1 className='fullname2'>Hello, {name}</h1>
                        <button className='logout2button' onClick={logOut}>Logout</button>
                    </div>
            </div>

            <div className="detailcontainer1">
                <div className='top1content'>
                    <div className='timestatusdetail1'>{timeStatusDetail} /<h1 className='locationdetail1'>{locationDetail}</h1></div>
                    <h1 className='jobdetail1'>{jobDetail}</h1>
                </div>
                <div className='second1content'>
                    <div className='flagcontainer1'>
                        <div className='flagcontainerline1'></div>
                        <div className='flagcontainerotherjob1'>
                            <div className='titleotherjob1'>{otherJobDetail} other job</div>
                        </div>
                        <p className='flagcontainercompanyname'>{companyNameDetail}</p>
                        <div className='flagcontainericon1'>      
                            <Link to={companyLogoDetail} target="_blank" rel="noopener noreferrer">
                                <img className='url1' src={companyLogoDetail}></img>
                            </Link>
                        </div>
                        <Link to={companyUrlDetail} target="_blank" rel="noopener noreferrer">
                            <p className='flagcontainerwebsitelink1'>{companyUrlDetail}</p>
                        </Link> 
                    </div>

                    <div className='applycontainer1'>
                        <div className='applycontainerline1'></div>
                        <p className='applycontainercompanyname'>How to Apply</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
