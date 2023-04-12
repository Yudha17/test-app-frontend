import './Dashboard.css';
import job from './images sources/job icon.png'
import joblocation from './images sources/job location.png'
import right1narrow1 from './images sources/right 1 narrow 1 white.png'
import right1narrow1full from './images sources/right 1 narrow 1 full white.png'
import right2narrow1 from './images sources/right 2 narrow 1 white.png'
import right2narrow1full from './images sources/right 2 narrow 1 full white.png'
import Axios from "axios"
import React, { useState, useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence} from "framer-motion"



function Dashboard (){

    const [arrayJson, setArrayJson] = useState([])
    const [arrayJsonFilter, setArrayJsonFilter] = useState([])
    const [name, setName] = useState('')
    const [company1, setCompany1] = useState([])
    const [company2, setCompany2] = useState([])
    const [company3, setCompany3] = useState([])
    const [company4, setCompany4] = useState([])
    const [company5, setCompany5] = useState([])

    let [recordData1, setRecordData1] = useState('1')
    let [recordData2, setRecordData2] = useState('2')
    let [recordData3, setRecordData3] = useState('3')
    let [recordData4, setRecordData4] = useState('4')
    let [recordData5, setRecordData5] = useState('5')

    let [pos1Table, setPos1Table] = useState('content') /* main dashboard, table, load more button, page container and data record */
    let [pos2Table, setPos2Table] = useState('content') /* main dashboard, table, load more button, page container and data record */
    let [pos3Table, setPos3Table] = useState('content') /* main dashboard, table, load more button, page container and data record */
    let [pos4Table, setPos4Table] = useState('content') /* main dashboard, table, load more button, page container and data record */
    let [pos5Table, setPos5Table] = useState('content') /* main dashboard, table, load more button, page container and data record */
    
    let [table1Content, setTable1Content] = useState('content')
    let [table2Content, setTable2Content] = useState('content')
    let [table3Content, setTable3Content] = useState('content')
    let [table4Content, setTable4Content] = useState('content')
    let [table5Content, setTable5Content] = useState('content')

     // background height state
    let maindashboardContent1Dynamic = `maindashboard-${pos1Table? 'content' : '1content'}`
    let maindashboardContent2Dynamic = `maindashboard-${pos2Table? 'content' : '2content'}`
    let maindashboardContent3Dynamic = `maindashboard-${pos3Table? 'content' : '3content'}`
    let maindashboardContent4Dynamic = `maindashboard-${pos4Table? 'content' : '4content'}`
    let maindashboardContent5Dynamic = `maindashboard-${pos5Table? 'content' : '5content'}`
    
     // table height state
    let jobtableContent1Dynamic = `jobtable-${pos1Table? 'content' : '1content'}`
    let jobtableContent2Dynamic = `jobtable-${pos2Table? 'content' : '2content'}`
    let jobtableContent3Dynamic = `jobtable-${pos3Table? 'content' : '3content'}`
    let jobtableContent4Dynamic = `jobtable-${pos4Table? 'content' : '4content'}`
    let jobtableContent5Dynamic = `jobtable-${pos5Table? 'content' : '5content'}`

     // element from JSON state
    let [jobNameRow1, setJobNameRow1] = useState('')
    let [companyNameRow1, setCompanyNameRow1] = useState('')
    let [locationRow1, setLocationRow1] = useState('')
    let [timeStatusRow1, setTimeStatusRow1] = useState('')
    let [dateAndTimeConvertRow1, setDateAndTimeConvertRow1] = useState('')

    let [jobNameRow2, setJobNameRow2] = useState('')
    let [companyNameRow2, setCompanyNameRow2] = useState('')
    let [locationRow2, setLocationRow2] = useState('')
    let [timeStatusRow2, setTimeStatusRow2] = useState('')
    let [dateAndTimeConvertRow2, setDateAndTimeConvertRow2] = useState('')

    let [jobNameRow3, setJobNameRow3] = useState('')
    let [companyNameRow3, setCompanyNameRow3] = useState('')
    let [locationRow3, setLocationRow3] = useState('')
    let [timeStatusRow3, setTimeStatusRow3] = useState('')
    let [dateAndTimeConvertRow3, setDateAndTimeConvertRow3] = useState('')

    let [jobNameRow4, setJobNameRow4] = useState('')
    let [companyNameRow4, setCompanyNameRow4] = useState('')
    let [locationRow4, setLocationRow4] = useState('')
    let [timeStatusRow4, setTimeStatusRow4] = useState('')
    let [dateAndTimeConvertRow4, setDateAndTimeConvertRow4] = useState('')

    let [jobNameRow5, setJobNameRow5] = useState('')
    let [companyNameRow5, setCompanyNameRow5] = useState('')
    let [locationRow5, setLocationRow5] = useState('')
    let [timeStatusRow5, setTimeStatusRow5] = useState('')
    let [dateAndTimeConvertRow5, setDateAndTimeConvertRow5] = useState('')

    let [jobNameRow6, setJobNameRow6] = useState('')
    let [companyNameRow6, setCompanyNameRow6] = useState('')
    let [locationRow6, setLocationRow6] = useState('')
    let [timeStatusRow6, setTimeStatusRow6] = useState('')
    let [dateAndTimeConvertRow6, setDateAndTimeConvertRow6] = useState('')


     // element appear state
    let jobtablename3Content1Dynamic = `jobtablename3-${table1Content? 'content' : 'none'}`
    let jobtablename4Content1Dynamic = `jobtablename4-${table1Content? 'content' : 'none'}`
    let jobtablelocation3Content1Dynamic = `jobtablelocation3-${table1Content? 'content' : 'none'}`
    let jobtablelocation4Content1Dynamic = `jobtablelocation4-${table1Content? 'content' : 'none'}`
    let jobtablecompanyname3Content1Dynamic = `jobtablecompanyname3-${table1Content? 'content' : 'none'}`
    let jobtablecompanyname4Content1Dynamic = `jobtablecompanyname4-${table1Content? 'content' : 'none'}`
    let jobtimestatus2Content1Dynamic = `jobtimestatus2-${table1Content? 'content' : 'none'}`
    let jobtablepostingtimecreated3Content1Dynamic = `jobtablepostingtimecreated3-${table1Content? 'content' : 'none'}`
    let jobtablepostingtimecreated4Content1Dynamic = `jobtablepostingtimecreated4-${table1Content? 'content' : 'none'}`
    let jobtableline9Content1Dynamic = `jobtableline9-${table1Content? 'content' : 'none'}`
    let jobtableline10Content1Dynamic = `jobtableline10-${table1Content? 'content' : 'none'}`
    let jobtableline11Content1Dynamic = `jobtableline11-${table1Content? 'content' : 'none'}`
    let jobtableline12Content1Dynamic = `jobtableline12-${table1Content? 'content' : 'none'}`

    // TEST 2 Row
    let jobtablename5Content1Dynamic = `jobtablename5-${table1Content? 'content' : 'none'}`
    let jobtablename5Content2Dynamic = `jobtablename5-${table2Content? 'content' : 'none'}`
    let jobtablename6Content1Dynamic = `jobtablename6-${table1Content? 'content' : 'none'}`
    let jobtablename6Content2Dynamic = `jobtablename6-${table2Content? 'content' : 'none'}`
    let jobtablelocation5Content1Dynamic = `jobtablelocation5-${table1Content? 'content' : 'none'}`
    let jobtablelocation5Content2Dynamic = `jobtablelocation5-${table2Content? 'content' : 'none'}`
    let jobtablelocation6Content1Dynamic = `jobtablelocation6-${table1Content? 'content' : 'none'}`
    let jobtablelocation6Content2Dynamic = `jobtablelocation6-${table2Content? 'content' : 'none'}`
    let jobtablecompanyname5Content1Dynamic = `jobtablecompanyname5-${table1Content? 'content' : 'none'}`
    let jobtablecompanyname5Content2Dynamic = `jobtablecompanyname5-${table2Content? 'content' : 'none'}`
    let jobtablecompanyname6Content1Dynamic = `jobtablecompanyname6-${table1Content? 'content' : 'none'}`
    let jobtablecompanyname6Content2Dynamic = `jobtablecompanyname6-${table2Content? 'content' : 'none'}`
    let jobtimestatus3Content1Dynamic = `jobtimestatus3-${table1Content? 'content' : 'none'}`
    let jobtimestatus3Content2Dynamic = `jobtimestatus3-${table2Content? 'content' : 'none'}`
    let jobtablepostingtimecreated5Content1Dynamic = `jobtablepostingtimecreated5-${table1Content? 'content' : 'none'}`
    let jobtablepostingtimecreated5Content2Dynamic = `jobtablepostingtimecreated5-${table2Content? 'content' : 'none'}`
    let jobtablepostingtimecreated6Content1Dynamic = `jobtablepostingtimecreated6-${table1Content? 'content' : 'none'}`
    let jobtablepostingtimecreated6Content2Dynamic = `jobtablepostingtimecreated6-${table2Content? 'content' : 'none'}`
    let jobtableline13Content1Dynamic = `jobtableline13-${table1Content? 'content' : 'none'}`
    let jobtableline13Content2Dynamic = `jobtableline13-${table2Content? 'content' : 'none'}`
    let jobtableline14Content1Dynamic = `jobtableline14-${table1Content? 'content' : 'none'}`
    let jobtableline14Content2Dynamic = `jobtableline14-${table2Content? 'content' : 'none'}`
    let jobtableline15Content1Dynamic = `jobtableline15-${table1Content? 'content' : 'none'}`
    let jobtableline15Content2Dynamic = `jobtableline15-${table2Content? 'content' : 'none'}`
    let jobtableline16Content1Dynamic = `jobtableline16-${table1Content? 'content' : 'none'}`
    let jobtableline16Content2Dynamic = `jobtableline16-${table2Content? 'content' : 'none'}`
    
    // TEST 3 Row
    let jobtablename7Content1Dynamic = `jobtablename7-${table1Content? 'content' : 'none'}`
    let jobtablename7Content2Dynamic = `jobtablename7-${table2Content? 'content' : 'none'}`
    let jobtablename7Content3Dynamic = `jobtablename7-${table3Content? 'content' : 'none'}`
    let jobtablename8Content1Dynamic = `jobtablename8-${table1Content? 'content' : 'none'}`
    let jobtablename8Content2Dynamic = `jobtablename8-${table2Content? 'content' : 'none'}`
    let jobtablename8Content3Dynamic = `jobtablename8-${table3Content? 'content' : 'none'}`
    let jobtablelocation7Content1Dynamic = `jobtablelocation7-${table1Content? 'content' : 'none'}`
    let jobtablelocation7Content2Dynamic = `jobtablelocation7-${table2Content? 'content' : 'none'}`
    let jobtablelocation7Content3Dynamic = `jobtablelocation7-${table3Content? 'content' : 'none'}`
    let jobtablelocation8Content1Dynamic = `jobtablelocation8-${table1Content? 'content' : 'none'}`
    let jobtablelocation8Content2Dynamic = `jobtablelocation8-${table2Content? 'content' : 'none'}`
    let jobtablelocation8Content3Dynamic = `jobtablelocation8-${table3Content? 'content' : 'none'}`
    let jobtablecompanyname7Content1Dynamic = `jobtablecompanyname7-${table1Content? 'content' : 'none'}`
    let jobtablecompanyname7Content2Dynamic = `jobtablecompanyname7-${table2Content? 'content' : 'none'}`
    let jobtablecompanyname7Content3Dynamic = `jobtablecompanyname7-${table3Content? 'content' : 'none'}`
    let jobtablecompanyname8Content1Dynamic = `jobtablecompanyname8-${table1Content? 'content' : 'none'}`
    let jobtablecompanyname8Content2Dynamic = `jobtablecompanyname8-${table2Content? 'content' : 'none'}`
    let jobtablecompanyname8Content3Dynamic = `jobtablecompanyname8-${table3Content? 'content' : 'none'}`
    let jobtimestatus4Content1Dynamic = `jobtimestatus4-${table1Content? 'content' : 'none'}`
    let jobtimestatus4Content2Dynamic = `jobtimestatus4-${table2Content? 'content' : 'none'}`
    let jobtimestatus4Content3Dynamic = `jobtimestatus4-${table3Content? 'content' : 'none'}`
    let jobtablepostingtimecreated7Content1Dynamic = `jobtablepostingtimecreated7-${table1Content? 'content' : 'none'}`
    let jobtablepostingtimecreated7Content2Dynamic = `jobtablepostingtimecreated7-${table2Content? 'content' : 'none'}`
    let jobtablepostingtimecreated7Content3Dynamic = `jobtablepostingtimecreated7-${table3Content? 'content' : 'none'}`
    let jobtablepostingtimecreated8Content1Dynamic = `jobtablepostingtimecreated8-${table1Content? 'content' : 'none'}`
    let jobtablepostingtimecreated8Content2Dynamic = `jobtablepostingtimecreated8-${table2Content? 'content' : 'none'}`
    let jobtablepostingtimecreated8Content3Dynamic = `jobtablepostingtimecreated8-${table3Content? 'content' : 'none'}`
    let jobtableline17Content1Dynamic = `jobtableline17-${table1Content? 'content' : 'none'}`
    let jobtableline17Content2Dynamic = `jobtableline17-${table2Content? 'content' : 'none'}`
    let jobtableline17Content3Dynamic = `jobtableline17-${table3Content? 'content' : 'none'}`
    let jobtableline18Content1Dynamic = `jobtableline18-${table1Content? 'content' : 'none'}`
    let jobtableline18Content2Dynamic = `jobtableline18-${table2Content? 'content' : 'none'}`
    let jobtableline18Content3Dynamic = `jobtableline18-${table3Content? 'content' : 'none'}`
    let jobtableline19Content1Dynamic = `jobtableline19-${table1Content? 'content' : 'none'}`
    let jobtableline19Content2Dynamic = `jobtableline19-${table2Content? 'content' : 'none'}`
    let jobtableline19Content3Dynamic = `jobtableline19-${table3Content? 'content' : 'none'}`
    let jobtableline20Content1Dynamic = `jobtableline20-${table1Content? 'content' : 'none'}`
    let jobtableline20Content2Dynamic = `jobtableline20-${table2Content? 'content' : 'none'}`
    let jobtableline20Content3Dynamic = `jobtableline20-${table3Content? 'content' : 'none'}`

    // TEST 4 Row
    let jobtablename9Content1Dynamic = `jobtablename9-${table1Content? 'content' : 'none'}`
    let jobtablename9Content2Dynamic = `jobtablename9-${table2Content? 'content' : 'none'}`
    let jobtablename9Content3Dynamic = `jobtablename9-${table3Content? 'content' : 'none'}`
    let jobtablename9Content4Dynamic = `jobtablename9-${table4Content? 'content' : 'none'}`
    let jobtablename10Content1Dynamic = `jobtablename10-${table1Content? 'content' : 'none'}`
    let jobtablename10Content2Dynamic = `jobtablename10-${table2Content? 'content' : 'none'}`
    let jobtablename10Content3Dynamic = `jobtablename10-${table3Content? 'content' : 'none'}`
    let jobtablename10Content4Dynamic = `jobtablename10-${table4Content? 'content' : 'none'}`
    let jobtablelocation9Content1Dynamic = `jobtablelocation9-${table1Content? 'content' : 'none'}`
    let jobtablelocation9Content2Dynamic = `jobtablelocation9-${table2Content? 'content' : 'none'}`
    let jobtablelocation9Content3Dynamic = `jobtablelocation9-${table3Content? 'content' : 'none'}`
    let jobtablelocation9Content4Dynamic = `jobtablelocation9-${table4Content? 'content' : 'none'}`
    let jobtablelocation10Content1Dynamic = `jobtablelocation10-${table1Content? 'content' : 'none'}`
    let jobtablelocation10Content2Dynamic = `jobtablelocation10-${table2Content? 'content' : 'none'}`
    let jobtablelocation10Content3Dynamic = `jobtablelocation10-${table3Content? 'content' : 'none'}`
    let jobtablelocation10Content4Dynamic = `jobtablelocation10-${table4Content? 'content' : 'none'}`
    let jobtablecompanyname9Content1Dynamic = `jobtablecompanyname9-${table1Content? 'content' : 'none'}`
    let jobtablecompanyname9Content2Dynamic = `jobtablecompanyname9-${table2Content? 'content' : 'none'}`
    let jobtablecompanyname9Content3Dynamic = `jobtablecompanyname9-${table3Content? 'content' : 'none'}`
    let jobtablecompanyname9Content4Dynamic = `jobtablecompanyname9-${table4Content? 'content' : 'none'}`
    let jobtablecompanyname10Content1Dynamic = `jobtablecompanyname10-${table1Content? 'content' : 'none'}`
    let jobtablecompanyname10Content2Dynamic = `jobtablecompanyname10-${table2Content? 'content' : 'none'}`
    let jobtablecompanyname10Content3Dynamic = `jobtablecompanyname10-${table3Content? 'content' : 'none'}`
    let jobtablecompanyname10Content4Dynamic = `jobtablecompanyname10-${table4Content? 'content' : 'none'}`
    let jobtimestatus5Content1Dynamic = `jobtimestatus5-${table1Content? 'content' : 'none'}`
    let jobtimestatus5Content2Dynamic = `jobtimestatus5-${table2Content? 'content' : 'none'}`
    let jobtimestatus5Content3Dynamic = `jobtimestatus5-${table3Content? 'content' : 'none'}`
    let jobtimestatus5Content4Dynamic = `jobtimestatus5-${table4Content? 'content' : 'none'}`
    let jobtablepostingtimecreated9Content1Dynamic = `jobtablepostingtimecreated9-${table1Content? 'content' : 'none'}`
    let jobtablepostingtimecreated9Content2Dynamic = `jobtablepostingtimecreated9-${table2Content? 'content' : 'none'}`
    let jobtablepostingtimecreated9Content3Dynamic = `jobtablepostingtimecreated9-${table3Content? 'content' : 'none'}`
    let jobtablepostingtimecreated9Content4Dynamic = `jobtablepostingtimecreated9-${table4Content? 'content' : 'none'}`
    let jobtablepostingtimecreated10Content1Dynamic = `jobtablepostingtimecreated10-${table1Content? 'content' : 'none'}`
    let jobtablepostingtimecreated10Content2Dynamic = `jobtablepostingtimecreated10-${table2Content? 'content' : 'none'}`
    let jobtablepostingtimecreated10Content3Dynamic = `jobtablepostingtimecreated10-${table3Content? 'content' : 'none'}`
    let jobtablepostingtimecreated10Content4Dynamic = `jobtablepostingtimecreated10-${table4Content? 'content' : 'none'}`
    let jobtableline21Content1Dynamic = `jobtableline21-${table1Content? 'content' : 'none'}`
    let jobtableline21Content2Dynamic = `jobtableline21-${table2Content? 'content' : 'none'}`
    let jobtableline21Content3Dynamic = `jobtableline21-${table3Content? 'content' : 'none'}`
    let jobtableline21Content4Dynamic = `jobtableline21-${table4Content? 'content' : 'none'}`
    let jobtableline22Content1Dynamic = `jobtableline22-${table1Content? 'content' : 'none'}`
    let jobtableline22Content2Dynamic = `jobtableline22-${table2Content? 'content' : 'none'}`
    let jobtableline22Content3Dynamic = `jobtableline22-${table3Content? 'content' : 'none'}`
    let jobtableline22Content4Dynamic = `jobtableline22-${table4Content? 'content' : 'none'}`
    let jobtableline23Content1Dynamic = `jobtableline23-${table1Content? 'content' : 'none'}`
    let jobtableline23Content2Dynamic = `jobtableline23-${table2Content? 'content' : 'none'}`
    let jobtableline23Content3Dynamic = `jobtableline23-${table3Content? 'content' : 'none'}`
    let jobtableline23Content4Dynamic = `jobtableline23-${table4Content? 'content' : 'none'}`
    let jobtableline24Content1Dynamic = `jobtableline24-${table1Content? 'content' : 'none'}`
    let jobtableline24Content2Dynamic = `jobtableline24-${table2Content? 'content' : 'none'}`
    let jobtableline24Content3Dynamic = `jobtableline24-${table3Content? 'content' : 'none'}`
    let jobtableline24Content4Dynamic = `jobtableline24-${table4Content? 'content' : 'none'}`

    // TEST 5 Row
    let listbetween1Content1Dynamic = `listbetween1-${table1Content? 'content' : 'none'}`
    let listbetween1Content2Dynamic = `listbetween1-${table2Content? 'content' : 'none'}`
    let listbetween1Content3Dynamic = `listbetween1-${table3Content? 'content' : 'none'}`
    let listbetween1Content4Dynamic = `listbetween1-${table4Content? 'content' : 'none'}`
    let listbetween1Content5Dynamic = `listbetween1-${table5Content? 'content' : 'none'}`
    
    let jobtableline25Content1Dynamic = `jobtableline25-${table1Content? 'content' : 'none'}`
    let jobtableline25Content2Dynamic = `jobtableline25-${table2Content? 'content' : 'none'}`
    let jobtableline25Content3Dynamic = `jobtableline25-${table3Content? 'content' : 'none'}`
    let jobtableline25Content4Dynamic = `jobtableline25-${table4Content? 'content' : 'none'}`
    let jobtableline25Content5Dynamic = `jobtableline25-${table5Content? 'content' : 'none'}`
    let jobtableline26Content1Dynamic = `jobtableline26-${table1Content? 'content' : 'none'}`
    let jobtableline26Content2Dynamic = `jobtableline26-${table2Content? 'content' : 'none'}`
    let jobtableline26Content3Dynamic = `jobtableline26-${table3Content? 'content' : 'none'}`
    let jobtableline26Content4Dynamic = `jobtableline26-${table4Content? 'content' : 'none'}`
    let jobtableline26Content5Dynamic = `jobtableline26-${table5Content? 'content' : 'none'}`
    let jobtableline27Content1Dynamic = `jobtableline27-${table1Content? 'content' : 'none'}`
    let jobtableline27Content2Dynamic = `jobtableline27-${table2Content? 'content' : 'none'}`
    let jobtableline27Content3Dynamic = `jobtableline27-${table3Content? 'content' : 'none'}`
    let jobtableline27Content4Dynamic = `jobtableline27-${table4Content? 'content' : 'none'}`
    let jobtableline27Content5Dynamic = `jobtableline27-${table5Content? 'content' : 'none'}`
    let jobtableline28Content1Dynamic = `jobtableline28-${table1Content? 'content' : 'none'}`
    let jobtableline28Content2Dynamic = `jobtableline28-${table2Content? 'content' : 'none'}`
    let jobtableline28Content3Dynamic = `jobtableline28-${table3Content? 'content' : 'none'}`
    let jobtableline28Content4Dynamic = `jobtableline28-${table4Content? 'content' : 'none'}`
    let jobtableline28Content5Dynamic = `jobtableline28-${table5Content? 'content' : 'none'}`

    let jobtablename11Content1Dynamic = `jobtablename11-${table1Content? 'content' : 'none'}`
    let jobtablename11Content2Dynamic = `jobtablename11-${table2Content? 'content' : 'none'}`
    let jobtablename11Content3Dynamic = `jobtablename11-${table3Content? 'content' : 'none'}`
    let jobtablename11Content4Dynamic = `jobtablename11-${table4Content? 'content' : 'none'}`
    let jobtablename11Content5Dynamic = `jobtablename11-${table5Content? 'content' : 'none'}`
    let jobtablename12Content1Dynamic = `jobtablename12-${table1Content? 'content' : 'none'}`
    let jobtablename12Content2Dynamic = `jobtablename12-${table2Content? 'content' : 'none'}`
    let jobtablename12Content3Dynamic = `jobtablename12-${table3Content? 'content' : 'none'}`
    let jobtablename12Content4Dynamic = `jobtablename12-${table4Content? 'content' : 'none'}`
    let jobtablename12Content5Dynamic = `jobtablename12-${table5Content? 'content' : 'none'}`
    let jobtablelocation11Content1Dynamic = `jobtablelocation11-${table1Content? 'content' : 'none'}`
    let jobtablelocation11Content2Dynamic = `jobtablelocation11-${table2Content? 'content' : 'none'}`
    let jobtablelocation11Content3Dynamic = `jobtablelocation11-${table3Content? 'content' : 'none'}`
    let jobtablelocation11Content4Dynamic = `jobtablelocation11-${table4Content? 'content' : 'none'}`
    let jobtablelocation11Content5Dynamic = `jobtablelocation11-${table5Content? 'content' : 'none'}`
    let jobtablelocation12Content1Dynamic = `jobtablelocation12-${table1Content? 'content' : 'none'}`
    let jobtablelocation12Content2Dynamic = `jobtablelocation12-${table2Content? 'content' : 'none'}`
    let jobtablelocation12Content3Dynamic = `jobtablelocation12-${table3Content? 'content' : 'none'}`
    let jobtablelocation12Content4Dynamic = `jobtablelocation12-${table4Content? 'content' : 'none'}`
    let jobtablelocation12Content5Dynamic = `jobtablelocation12-${table5Content? 'content' : 'none'}`
    let jobtablecompanyname11Content1Dynamic = `jobtablecompanyname11-${table1Content? 'content' : 'none'}`
    let jobtablecompanyname11Content2Dynamic = `jobtablecompanyname11-${table2Content? 'content' : 'none'}`
    let jobtablecompanyname11Content3Dynamic = `jobtablecompanyname11-${table3Content? 'content' : 'none'}`
    let jobtablecompanyname11Content4Dynamic = `jobtablecompanyname11-${table4Content? 'content' : 'none'}`
    let jobtablecompanyname11Content5Dynamic = `jobtablecompanyname11-${table5Content? 'content' : 'none'}`
    let jobtablecompanyname12Content1Dynamic = `jobtablecompanyname12-${table1Content? 'content' : 'none'}`
    let jobtablecompanyname12Content2Dynamic = `jobtablecompanyname12-${table2Content? 'content' : 'none'}`
    let jobtablecompanyname12Content3Dynamic = `jobtablecompanyname12-${table3Content? 'content' : 'none'}`
    let jobtablecompanyname12Content4Dynamic = `jobtablecompanyname12-${table4Content? 'content' : 'none'}`
    let jobtablecompanyname12Content5Dynamic = `jobtablecompanyname12-${table5Content? 'content' : 'none'}`
    let jobtimestatus6Content1Dynamic = `jobtimestatus6-${table1Content? 'content' : 'none'}`
    let jobtimestatus6Content2Dynamic = `jobtimestatus6-${table2Content? 'content' : 'none'}`
    let jobtimestatus6Content3Dynamic = `jobtimestatus6-${table3Content? 'content' : 'none'}`
    let jobtimestatus6Content4Dynamic = `jobtimestatus6-${table4Content? 'content' : 'none'}`
    let jobtimestatus6Content5Dynamic = `jobtimestatus6-${table5Content? 'content' : 'none'}`
    let jobtablepostingtimecreated11Content1Dynamic = `jobtablepostingtimecreated11-${table1Content? 'content' : 'none'}`
    let jobtablepostingtimecreated11Content2Dynamic = `jobtablepostingtimecreated11-${table2Content? 'content' : 'none'}`
    let jobtablepostingtimecreated11Content3Dynamic = `jobtablepostingtimecreated11-${table3Content? 'content' : 'none'}`
    let jobtablepostingtimecreated11Content4Dynamic = `jobtablepostingtimecreated11-${table4Content? 'content' : 'none'}`
    let jobtablepostingtimecreated11Content5Dynamic = `jobtablepostingtimecreated11-${table5Content? 'content' : 'none'}`
    let jobtablepostingtimecreated12Content1Dynamic = `jobtablepostingtimecreated12-${table1Content? 'content' : 'none'}`
    let jobtablepostingtimecreated12Content2Dynamic = `jobtablepostingtimecreated12-${table2Content? 'content' : 'none'}`
    let jobtablepostingtimecreated12Content3Dynamic = `jobtablepostingtimecreated12-${table3Content? 'content' : 'none'}`
    let jobtablepostingtimecreated12Content4Dynamic = `jobtablepostingtimecreated12-${table4Content? 'content' : 'none'}`
    let jobtablepostingtimecreated12Content5Dynamic = `jobtablepostingtimecreated12-${table5Content? 'content' : 'none'}`
    let jobtableline29Content1Dynamic = `jobtableline29-${table1Content? 'content' : 'none'}`
    let jobtableline29Content2Dynamic = `jobtableline29-${table2Content? 'content' : 'none'}`
    let jobtableline29Content3Dynamic = `jobtableline29-${table3Content? 'content' : 'none'}`
    let jobtableline29Content4Dynamic = `jobtableline29-${table4Content? 'content' : 'none'}`
    let jobtableline29Content5Dynamic = `jobtableline29-${table5Content? 'content' : 'none'}`
    let jobtableline30Content1Dynamic = `jobtableline30-${table1Content? 'content' : 'none'}`
    let jobtableline30Content2Dynamic = `jobtableline30-${table2Content? 'content' : 'none'}`
    let jobtableline30Content3Dynamic = `jobtableline30-${table3Content? 'content' : 'none'}`
    let jobtableline30Content4Dynamic = `jobtableline30-${table4Content? 'content' : 'none'}`
    let jobtableline30Content5Dynamic = `jobtableline30-${table5Content? 'content' : 'none'}`
    let jobtableline31Content1Dynamic = `jobtableline31-${table1Content? 'content' : 'none'}`
    let jobtableline31Content2Dynamic = `jobtableline31-${table2Content? 'content' : 'none'}`
    let jobtableline31Content3Dynamic = `jobtableline31-${table3Content? 'content' : 'none'}`
    let jobtableline31Content4Dynamic = `jobtableline31-${table4Content? 'content' : 'none'}`
    let jobtableline31Content5Dynamic = `jobtableline31-${table5Content? 'content' : 'none'}`
    let jobtableline32Content1Dynamic = `jobtableline32-${table1Content? 'content' : 'none'}`
    let jobtableline32Content2Dynamic = `jobtableline32-${table2Content? 'content' : 'none'}`
    let jobtableline32Content3Dynamic = `jobtableline32-${table3Content? 'content' : 'none'}`
    let jobtableline32Content4Dynamic = `jobtableline32-${table4Content? 'content' : 'none'}`
    let jobtableline32Content5Dynamic = `jobtableline32-${table5Content? 'content' : 'none'}`

    let loadmorebutton1Content1Dynamic = `loadmorebutton1-${pos1Table? 'content' : '1content'}`
    let loadmorebutton1Content2Dynamic = `loadmorebutton1-${pos2Table? 'content' : '2content'}`
    let loadmorebutton1Content3Dynamic = `loadmorebutton1-${pos3Table? 'content' : '3content'}`
    let loadmorebutton1Content4Dynamic = `loadmorebutton1-${pos4Table? 'content' : '4content'}`
    let loadmorebutton1Content5Dynamic = `loadmorebutton1-${pos5Table? 'content' : '5content'}`

    let pagecontainerContent1Dynamic = `pagecontainer-${pos1Table? 'content' : '1content'}`
    let pagecontainerContent2Dynamic = `pagecontainer-${pos2Table? 'content' : '2content'}`
    let pagecontainerContent3Dynamic = `pagecontainer-${pos3Table? 'content' : '3content'}`
    let pagecontainerContent4Dynamic = `pagecontainer-${pos4Table? 'content' : '4content'}`
    let pagecontainerContent5Dynamic = `pagecontainer-${pos5Table? 'content' : '5content'}`

    let pagecontainerindividualdatarecordContent1Dynamic = `pagecontainerindividualdatarecord-${pos1Table? 'content' : '1content'}`
    let pagecontainerindividualdatarecordContent2Dynamic = `pagecontainerindividualdatarecord-${pos2Table? 'content' : '2content'}`
    let pagecontainerindividualdatarecordContent3Dynamic = `pagecontainerindividualdatarecord-${pos3Table? 'content' : '3content'}`
    let pagecontainerindividualdatarecordContent4Dynamic = `pagecontainerindividualdatarecord-${pos4Table? 'content' : '4content'}`
    let pagecontainerindividualdatarecordContent5Dynamic = `pagecontainerindividualdatarecord-${pos5Table? 'content' : '5content'}`

    let totalRecordDataContent6Dynamic = `${recordData1? '1' : recordData2? '2' : recordData3? '3' : recordData4? '4' : recordData5? '5' : '6'}`

    // Container Narrow stuck state
    let [buttonPrevStuck, setButtonPrevStuck] = useState('')
    let doublePrevStuck = `pagecontainerindividualdoubleprev-${buttonPrevStuck? 'basic':'stuck'}`
    let oncePrevStuck = `pagecontainerindividualonceprev-${buttonPrevStuck? 'basic':'stuck'}`

    let [buttonNextStuck, setButtonNextStuck] = useState('')
    let doubleNextStuck = `pagecontainerindividualdoublenext-${buttonNextStuck? 'basic':'stuck'}`
    let onceNextStuck = `pagecontainerindividualoncenext-${buttonNextStuck? 'basic':'stuck'}`    

    // Container Individual Page selected state
    let [page1Status, setPage1Status] = useState('')
    let dynamicPage1 = `pagecontainerindividualpage1-${page1Status? 'basic':'selected'}`

    let [page2Status, setPage2Status] = useState('')
    let dynamicPage2 = `pagecontainerindividualpage2-${page2Status? 'basic':'selected'}`

    let [page3Status, setPage3Status] = useState('')
    let dynamicPage3 = `pagecontainerindividualpage3-${page3Status? 'basic':'selected'}`

    let [page4Status, setPage4Status] = useState('')
    let dynamicPage4 = `pagecontainerindividualpage4-${page4Status? 'basic':'selected'}`

    const [modal, setModal] = useState(false)
   

    const [searchState, setSearchState] = useState('')

    const [dataRecord, setDataRecord] = useState('')
    

    Axios.defaults.withCredentials = true

    let navigate = useNavigate()

    useEffect(() => {

        getRefreshToken()

            setTimeout(() => {
                //convertPage1Start()
                setButtonPrevStuck(buttonPrevStuck == 'stuck')
                setButtonNextStuck(buttonNextStuck = 'basic')
                setPage1Status(page1Status == 'selected')
                setPage2Status(page2Status = 'basic')
                setPage3Status(page3Status = 'basic')
                setPage4Status(page4Status = 'basic')
                setRecordData1(recordData1 == '9')
                setRecordData2(recordData2 == '9')
                setRecordData3(recordData3 == '9')
                setRecordData4(recordData4 == '9')
                setRecordData5(recordData5 == '9')
            }, 100)

            // prevent windows history to back navigate in this page
            
            window.addEventListener('popstate', function (event)
            {
              history.pushState(null, document.title, location.href);
            });
            
    }, [])


    let token1 
    let decoded
    let jsonLength
    let jsonExternalDownload
    
    

    const getRefreshToken = () => {

       
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
                token1 = response.data.refreshToken
                decoded = jwt_decode(response.data.refreshToken)
                setName(decoded.full_name)
                
                Axios.post('http://localhost:3001/listjob', {
                    headers: {
                    Authorization: `Bearer ${token1}`  //the token is a variable which holds the token
                    }
                }).then((response1) => {

                    //Remember that this response is one way. Can not use setArrayJson to set useState individually !
                    setArrayJson(response1.data)
                    
                    jsonExternalDownload = response1.data
                    

                    jsonLength = jsonExternalDownload.length
                    setDataRecord(jsonLength)
                    setJobNameRow1(response1.data[0].title)
                    setCompanyNameRow1(response1.data[0].company)
                    setLocationRow1(response1.data[0].location)
                    setTimeStatusRow1(response1.data[0].type)
                    
                    setJobNameRow2(response1.data[1].title)
                    setCompanyNameRow2(response1.data[1].company)
                    setLocationRow2(response1.data[1].location)
                    setTimeStatusRow2(response1.data[1].type)
                    
                    setJobNameRow3(response1.data[2].title)
                    setCompanyNameRow3(response1.data[2].company)
                    setLocationRow3(response1.data[2].location)
                    setTimeStatusRow3(response1.data[2].type)
              
                    setJobNameRow4(response1.data[3].title)
                    setCompanyNameRow4(response1.data[3].company)
                    setLocationRow4(response1.data[3].location)
                    setTimeStatusRow4(response1.data[3].type)
        
                    setJobNameRow5(response1.data[4].title)
                    setCompanyNameRow5(response1.data[4].company)
                    setLocationRow5(response1.data[4].location)
                    setTimeStatusRow5(response1.data[4].type)
          
                    setJobNameRow6(response1.data[7].title)
                    setCompanyNameRow6(response1.data[7].company)
                    setLocationRow6(response1.data[7].location)
                    setTimeStatusRow6(response1.data[7].type)

                    if(jsonExternalDownload != null)
                    {
                        convertPage1Start()  
                    }

                    //console.log(response1.data)
                    
                   
                })
            }
          
        
        }) 

    }

    let datelocal1
    let datelocal2
    let datelocal3
    let datelocal4
    let datelocal5
    let datelocal6
    const convertPage1Start = () => {

      
        
        if(jsonExternalDownload[0].created_at != null){
            
            datelocal1 = new Date(`${jsonExternalDownload[0].created_at}`)
            setDateAndTimeConvertRow1(`${datelocal1}`)
        
            
        }

        if(jsonExternalDownload[1].created_at != null){
            
            datelocal2 = new Date(`${jsonExternalDownload[1].created_at}`)
            setDateAndTimeConvertRow2(`${datelocal2}`)
            
        }

        if(jsonExternalDownload[2].created_at != null){
           
            datelocal3 = new Date(`${jsonExternalDownload[2].created_at}`)
            setDateAndTimeConvertRow3(`${datelocal3}`)
            
        }

        if(jsonExternalDownload[3].created_at != null){
            
            datelocal4 = new Date(`${jsonExternalDownload[3].created_at}`)
            setDateAndTimeConvertRow4(`${datelocal4}`)
            
        }

        if(jsonExternalDownload[4].created_at != null){
            
            datelocal5 = new Date(`${jsonExternalDownload[4].created_at}`)
            setDateAndTimeConvertRow5(`${datelocal5}`)
            
        }

        if(jsonExternalDownload[7].created_at != null){
            
            datelocal6 = new Date(`${jsonExternalDownload[7].created_at}`)
            setDateAndTimeConvertRow6(`${datelocal6}`)
            
        }
    
    }

    const convertPage1 = () => {
        if(arrayJson[0].created_at != null){
            datelocal1 = new Date(`${arrayJson[0].created_at}`)
            setDateAndTimeConvertRow1(`${datelocal1}`)
        }

        if(arrayJson[1].created_at != null){
            datelocal2 = new Date(`${arrayJson[1].created_at}`)
            setDateAndTimeConvertRow2(`${datelocal2}`)
            
        }

        if(arrayJson[2].created_at != null){
            datelocal3 = new Date(`${arrayJson[2].created_at}`)
            setDateAndTimeConvertRow3(`${datelocal3}`)
            
        }

        if(arrayJson[3].created_at != null){
            datelocal4 = new Date(`${arrayJson[3].created_at}`)
            setDateAndTimeConvertRow4(`${datelocal4}`)
            
        }

        if(arrayJson[4].created_at != null){
            datelocal5 = new Date(`${arrayJson[4].created_at}`)
            setDateAndTimeConvertRow5(`${datelocal5}`)
            
        }

        if(arrayJson[7].created_at != null){
            datelocal6 = new Date(`${arrayJson[7].created_at}`)
            setDateAndTimeConvertRow6(`${datelocal6}`)
            
        }

    
    }

    const convertPage2 = () => {
        if(arrayJson[5].created_at != null){
            datelocal1 = new Date(`${arrayJson[5].created_at}`)
            setDateAndTimeConvertRow1(`${datelocal1}`)
            
        }

        if(arrayJson[6].created_at != null){
            datelocal2 = new Date(`${arrayJson[6].created_at}`)
            setDateAndTimeConvertRow2(`${datelocal2}`)
            
        }

        if(arrayJson[7].created_at != null){
            datelocal3 = new Date(`${arrayJson[7].created_at}`)
            setDateAndTimeConvertRow3(`${datelocal3}`)
            
        }

        if(arrayJson[8].created_at != null){
            datelocal4 = new Date(`${arrayJson[8].created_at}`)
            setDateAndTimeConvertRow4(`${datelocal4}`)
            
        }

        if(arrayJson[9].created_at != null){
            datelocal5 = new Date(`${arrayJson[9].created_at}`)
            setDateAndTimeConvertRow5(`${datelocal5}`)
            
        }

        if(arrayJson[12].created_at != null){
            datelocal6 = new Date(`${arrayJson[12].created_at}`)
            setDateAndTimeConvertRow6(`${datelocal6}`)
            
        }
    
    }

    const convertPage3 = () => {
        if(arrayJson[10].created_at != null){
            datelocal1 = new Date(`${arrayJson[10].created_at}`)
            setDateAndTimeConvertRow1(`${datelocal1}`)
            
        }

        if(arrayJson[11].created_at != null){
            datelocal2 = new Date(`${arrayJson[11].created_at}`)
            setDateAndTimeConvertRow2(`${datelocal2}`)
            
        }

        if(arrayJson[12].created_at != null){
            datelocal3 = new Date(`${arrayJson[12].created_at}`)
            setDateAndTimeConvertRow3(`${datelocal3}`)
            
        }

        if(arrayJson[13].created_at != null){
            datelocal4 = new Date(`${arrayJson[13].created_at}`)
            setDateAndTimeConvertRow4(`${datelocal4}`)
            
        }

        if(arrayJson[14].created_at != null){
            datelocal5 = new Date(`${arrayJson[14].created_at}`)
            setDateAndTimeConvertRow5(`${datelocal5}`)
            
        }

        if(arrayJson[17].created_at != null){
            datelocal6 = new Date(`${arrayJson[17].created_at}`)
            setDateAndTimeConvertRow6(`${datelocal6}`)
            
        }
    
    }

    const convertPage4 = () => {
        if(arrayJson[15].created_at != null){
            datelocal1 = new Date(`${arrayJson[15].created_at}`)
            setDateAndTimeConvertRow1(`${datelocal1}`)
            
        }

        if(arrayJson[16].created_at != null){
            datelocal2 = new Date(`${arrayJson[16].created_at}`)
            setDateAndTimeConvertRow2(`${datelocal2}`)
            
        }

        if(arrayJson[17].created_at != null){
            datelocal3 = new Date(`${arrayJson[17].created_at}`)
            setDateAndTimeConvertRow3(`${datelocal3}`)
            
        }

        setDateAndTimeConvertRow4('')
        setDateAndTimeConvertRow5('')
        setDateAndTimeConvertRow6('')
    }

 
    
    const button1 = () => {
        //console.log(arrayJson)

        setRecordData1(recordData1 == '1')
        setRecordData2(recordData2 == '2')
        setRecordData3(recordData3 == '3')
        setRecordData4(recordData4 == '4')
        setRecordData5(recordData5 == '5')

        setPos1Table(pos1Table = 'content')
        setPos2Table(pos2Table = 'content')
        setPos3Table(pos3Table = 'content')
        setPos4Table(pos4Table = 'content')
        setPos5Table(pos5Table = 'content')

        setTable1Content(table1Content = 'content')
        setTable2Content(table2Content = 'content')
        setTable3Content(table3Content = 'content')
        setTable4Content(table4Content = 'content')
        setTable5Content(table5Content = 'content')
           
        setPage1Status(page1Status = 'selected')

        setPage2Status(page2Status = 'basic')

        setPage3Status(page3Status = 'basic')

        setPage4Status(page4Status = 'basic')


        setJobNameRow1(arrayJson[0].title)
        setCompanyNameRow1(arrayJson[0].company)
        setLocationRow1(arrayJson[0].location)
        setTimeStatusRow1(arrayJson[0].type)

        setJobNameRow2(arrayJson[1].title)
        setCompanyNameRow2(arrayJson[1].company)
        setLocationRow2(arrayJson[1].location)
        setTimeStatusRow2(arrayJson[1].type)

        setJobNameRow3(arrayJson[2].title)
        setCompanyNameRow3(arrayJson[2].company)
        setLocationRow3(arrayJson[2].location)
        setTimeStatusRow3(arrayJson[2].type)
        
        setJobNameRow4(arrayJson[3].title)
        setCompanyNameRow4(arrayJson[3].company)
        setLocationRow4(arrayJson[3].location)
        setTimeStatusRow4(arrayJson[3].type)
     
        setJobNameRow5(arrayJson[4].title)
        setCompanyNameRow5(arrayJson[4].company)
        setLocationRow5(arrayJson[4].location)
        setTimeStatusRow5(arrayJson[4].type)
     
        setJobNameRow6(arrayJson[7].title)
        setCompanyNameRow6(arrayJson[7].company)
        setLocationRow6(arrayJson[7].location)
        setTimeStatusRow6(arrayJson[7].type)

        convertPage1()

        //console.log(company5)
 
    }

    const button2 = () => {

        setRecordData1(recordData1 == '1')
        setRecordData2(recordData2 == '2')
        setRecordData3(recordData3 == '3')
        setRecordData4(recordData4 == '4')
        setRecordData5(recordData5 == '5')

        setPos1Table(pos1Table = 'content')
        setPos2Table(pos2Table = 'content')
        setPos3Table(pos3Table = 'content')
        setPos4Table(pos4Table = 'content')
        setPos5Table(pos5Table = 'content')

        setTable1Content(table1Content = 'content')
        setTable2Content(table2Content = 'content')
        setTable3Content(table3Content = 'content')
        setTable4Content(table4Content = 'content')
        setTable5Content(table5Content = 'content')
        
        
        setPage1Status(page1Status = 'basic')
        
        setPage2Status(page2Status == 'selected')

        setPage3Status(page3Status = 'basic')

        setPage4Status(page4Status = 'basic')

        

                      
        setJobNameRow1(arrayJson[5].title)
        setCompanyNameRow1(arrayJson[5].company)
        setLocationRow1(arrayJson[5].location)
        setTimeStatusRow1(arrayJson[5].type)

        setJobNameRow2(arrayJson[6].title)
        setCompanyNameRow2(arrayJson[6].company)
        setLocationRow2(arrayJson[6].location)
        setTimeStatusRow2(arrayJson[6].type)

        setJobNameRow3(arrayJson[7].title)
        setCompanyNameRow3(arrayJson[7].company)
        setLocationRow3(arrayJson[7].location)
        setTimeStatusRow3(arrayJson[7].type)
        
        setJobNameRow4(arrayJson[8].title)
        setCompanyNameRow4(arrayJson[8].company)
        setLocationRow4(arrayJson[8].location)
        setTimeStatusRow4(arrayJson[8].type)
     
        setJobNameRow5(arrayJson[9].title)
        setCompanyNameRow5(arrayJson[9].company)
        setLocationRow5(arrayJson[9].location)
        setTimeStatusRow5(arrayJson[9].type)
     
        setJobNameRow6(arrayJson[12].title)
        setCompanyNameRow6(arrayJson[12].company)
        setLocationRow6(arrayJson[12].location)
        setTimeStatusRow6(arrayJson[12].type)

        convertPage2()

        
        
  
    }

    const button3 = () => {

        setRecordData1(recordData1 == '1')
        setRecordData2(recordData2 == '2')
        setRecordData3(recordData3 == '3')
        setRecordData4(recordData4 == '4')
        setRecordData5(recordData5 == '5')

        setPos1Table(pos1Table = 'content')
        setPos2Table(pos2Table = 'content')
        setPos3Table(pos3Table = 'content')
        setPos4Table(pos4Table = 'content')
        setPos5Table(pos5Table = 'content')

        setTable1Content(table1Content = 'content')
        setTable2Content(table2Content = 'content')
        setTable3Content(table3Content = 'content')
        setTable4Content(table4Content = 'content')
        setTable5Content(table5Content = 'content')
        
        setPage1Status(page1Status = 'basic')
        
        setPage2Status(page2Status = 'basic')

        setPage3Status(page3Status == 'selected')

        setPage4Status(page4Status = 'basic')

        

        setJobNameRow1(arrayJson[10].title)
        setCompanyNameRow1(arrayJson[10].company)
        setLocationRow1(arrayJson[10].location)
        setTimeStatusRow1(arrayJson[10].type)

        setJobNameRow2(arrayJson[11].title)
        setCompanyNameRow2(arrayJson[11].company)
        setLocationRow2(arrayJson[11].location)
        setTimeStatusRow2(arrayJson[11].type)

        setJobNameRow3(arrayJson[12].title)
        setCompanyNameRow3(arrayJson[12].company)
        setLocationRow3(arrayJson[12].location)
        setTimeStatusRow3(arrayJson[12].type)
        
        setJobNameRow4(arrayJson[13].title)
        setCompanyNameRow4(arrayJson[13].company)
        setLocationRow4(arrayJson[13].location)
        setTimeStatusRow4(arrayJson[13].type)
     
        setJobNameRow5(arrayJson[14].title)
        setCompanyNameRow5(arrayJson[14].company)
        setLocationRow5(arrayJson[14].location)
        setTimeStatusRow5(arrayJson[14].type)
     
        setJobNameRow6(arrayJson[17].title)
        setCompanyNameRow6(arrayJson[17].company)
        setLocationRow6(arrayJson[17].location)
        setTimeStatusRow6(arrayJson[17].type)

        convertPage3()

    }

    const button4 = () => {

        setRecordData1(recordData1 == '1')
        setRecordData2(recordData2 == '2')
        setRecordData3(recordData3 = '3')
        setRecordData4(recordData4 == '4')
        setRecordData5(recordData5 == '5')

        
        setPos3Table(pos3Table == '3content')
       
        setTable3Content(table3Content == 'none')
        

        setPage1Status(page1Status = 'basic')
        
        setPage2Status(page2Status = 'basic')

        setPage3Status(page3Status = 'basic')

        setPage4Status(page4Status == 'selected')


        setJobNameRow1(arrayJson[15].title)
        setCompanyNameRow1(arrayJson[15].company)
        setLocationRow1(arrayJson[15].location)
        setTimeStatusRow1(arrayJson[15].type)

        setJobNameRow2(arrayJson[16].title)
        setCompanyNameRow2(arrayJson[16].company)
        setLocationRow2(arrayJson[16].location)
        setTimeStatusRow2(arrayJson[16].type)

        setJobNameRow3(arrayJson[17].title)
        setCompanyNameRow3(arrayJson[17].company)
        setLocationRow3(arrayJson[17].location)
        setTimeStatusRow3(arrayJson[17].type)

        setJobNameRow4('')
        setCompanyNameRow4('')
        setLocationRow4('')
        setTimeStatusRow4('')
     
        setJobNameRow5('')
        setCompanyNameRow5('')
        setLocationRow5('')
        setTimeStatusRow5('')
     
        setJobNameRow6('')
        setCompanyNameRow6('')
        setLocationRow6('')
        setTimeStatusRow6('')

        convertPage4()

    }
    
    const buttonNext = () => {

        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-basic')
        const buttonPage1b = document.querySelector('.pagecontainerindividualpage1-selected')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-basic')
        const buttonPage2b = document.querySelector('.pagecontainerindividualpage2-selected')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-basic')
        const buttonPage3b = document.querySelector('.pagecontainerindividualpage3-selected')
        const buttonPage5 = document.querySelector('.pagecontainerindividualonceprev-stuck')
        const buttonPage6 = document.querySelector('.pagecontainerindividualoncenext-basic')
        const buttonPage7 = document.querySelector('.pagecontainerindividualdoublenext-basic')
        const buttonPage8 = document.querySelector('.pagecontainerindividualdoubleprev-stuck')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')
        
       try {
        
            if(buttonPage1b && buttonPage2 && buttonPage3 && arrayJsonFilter != null){
                
                button2()
                buttonPage5.className = 'pagecontainerindividualonceprev-basic'
                buttonPage8.className = 'pagecontainerindividualdoubleprev-basic'
            }
            
                
            if(buttonPage2b && buttonPage1 && buttonPage3 && arrayJsonFilter != null){

                button3()
            }

            if(buttonPage3b && buttonPage1 && buttonPage2 && arrayJsonFilter != null){

                button4()
                buttonPage6.className = 'pagecontainerindividualoncenext-stuck'
                buttonPage7.className = 'pagecontainerindividualdoublenext-stuck'

            } 


       } catch (error) {
        
       }

       try {


                if(jobNameRow5 == arrayJsonFilter[4].title && companyNameRow5 == arrayJsonFilter[4].company){

                    console.log('masuk1')
                    showFilterJob1c()

                        if(buttonPage1 && buttonPage2 && buttonPage6 && buttonPage7 && !buttonPage5 && !buttonPage8){

                            console.log('masuk5')
                            buttonPage2.className = 'pagecontainerindividualpage2-selected'

                            buttonPage1.style.width = "30px"
                            buttonPage1.style.height = "30px"
                            buttonPage1.style.fontWeight = "normal"
                            buttonPage1.style.fontSize = "medium"
                            
                            buttonPage6.className = 'pagecontainerindividualoncenext-stuck'
                            buttonPage7.className = 'pagecontainerindividualdoublenext-stuck'

                            loadmorebutton.style.display = "none"
                            buttonPage6.style.visibility = "hidden"
                            buttonPage7.style.visibility = "hidden"
                            buttonPage5.style.visibility = "visibility"
                            buttonPage8.style.visibility = "visibility"

                            buttonPage5.className = 'pagecontainerindividualonceprev-basic'
                            buttonPage8.className = 'pagecontainerindividualdoubleprev-basic'

                        }

                        if(buttonPage1 && buttonPage2 && buttonPage6 && buttonPage7 && buttonPage5 && buttonPage8){

                            console.log('masuk4')
                            buttonPage2.className = 'pagecontainerindividualpage2-selected'

                            buttonPage1.style.width = "30px"
                            buttonPage1.style.height = "30px"
                            buttonPage1.style.fontWeight = "normal"
                            buttonPage1.style.fontSize = "medium"
                            
                            buttonPage6.className = 'pagecontainerindividualoncenext-stuck'
                            buttonPage7.className = 'pagecontainerindividualdoublenext-stuck'

                            loadmorebutton.style.display = "none"
                            buttonPage6.style.visibility = "hidden"
                            buttonPage7.style.visibility = "hidden"
                            buttonPage5.style.visibility = "visibility"
                            buttonPage8.style.visibility = "visibility"

                            buttonPage5.className = 'pagecontainerindividualonceprev-basic'
                            buttonPage8.className = 'pagecontainerindividualdoubleprev-basic'

                        }

                        //scenario 1a 
                        if(buttonPage1b && buttonPage2 && buttonPage6 && buttonPage7 && !buttonPage5 && !buttonPage8){

                            console.log('masuk2')
                            buttonPage2.className = 'pagecontainerindividualpage2-selected'
                            buttonPage1b.className = 'pagecontainerindividualpage1-basic'
                            buttonPage6.className = 'pagecontainerindividualoncenext-stuck'
                            buttonPage7.className = 'pagecontainerindividualdoublenext-stuck'

                            loadmorebutton.style.display = "none"
                            buttonPage6.style.visibility = "hidden"
                            buttonPage7.style.visibility = "hidden"
                            buttonPage5.style.visibility = "visibility"
                            buttonPage8.style.visibility = "visibility"

                            buttonPage5.className = 'pagecontainerindividualonceprev-basic'
                            buttonPage8.className = 'pagecontainerindividualdoubleprev-basic'

                        }

                        //scenario 1c
                        if(buttonPage1b && buttonPage2 && buttonPage5 && buttonPage8){

                            console.log('masuk3')
                            buttonPage2.className = 'pagecontainerindividualpage2-selected'
                            buttonPage1b.className = 'pagecontainerindividualpage1-basic'
                            buttonPage1b.style.width = "30px"
                            buttonPage1b.style.height = "30px"
                            buttonPage1b.style.fontWeight = "normal"
                            buttonPage1b.style.fontSize = "medium"


                            buttonPage6.className = 'pagecontainerindividualoncenext-stuck'
                            buttonPage7.className = 'pagecontainerindividualdoublenext-stuck'

                            loadmorebutton.style.display = "none"
                            buttonPage5.style.visibility = "visible"
                            buttonPage8.style.visibility = "visible"
                            buttonPage6.style.visibility = "hidden"
                            buttonPage7.style.visibility = "hidden"

                        

                            buttonPage5.className = 'pagecontainerindividualonceprev-basic'
                            buttonPage8.className = 'pagecontainerindividualdoubleprev-basic'

                            
                        }
                    
    
                }


       } catch (error) {
        
       }
            
 
    }
 
    const buttonPrevious = () => {

        const buttonPage4 = document.querySelector('.pagecontainerindividualpage4-basic')
        const buttonPage4b = document.querySelector('.pagecontainerindividualpage4-selected')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-basic')
        const buttonPage3b = document.querySelector('.pagecontainerindividualpage3-selected')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-basic')
        const buttonPage2b = document.querySelector('.pagecontainerindividualpage2-selected')
        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-basic')
        const buttonPage1b = document.querySelector('.pagecontainerindividualpage1-selected')
        const buttonPage5 = document.querySelector('.pagecontainerindividualoncenext-stuck')
        const buttonPage5b = document.querySelector('.pagecontainerindividualoncenext-basic')
        const buttonPage6 = document.querySelector('.pagecontainerindividualonceprev-basic')
        const buttonPage7 = document.querySelector('.pagecontainerindividualdoublenext-stuck')
        const buttonPage7b = document.querySelector('.pagecontainerindividualdoublenext-basic')
        const buttonPage8 = document.querySelector('.pagecontainerindividualdoubleprev-basic')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')


        if(buttonPage4b && buttonPage3 && buttonPage2 && buttonPage1){
            button3()
            buttonPage5.className = 'pagecontainerindividualoncenext-basic'
            buttonPage7.className = 'pagecontainerindividualdoublenext-basic'
            setRecordData3(recordData3 == '9')
        }

        if(buttonPage3b && buttonPage4 && buttonPage2 && buttonPage1){
            button2()
            
        }

        if(buttonPage2b && buttonPage4 && buttonPage3 && buttonPage1){
            button1()
            
            buttonPage6.className = 'pagecontainerindividualonceprev-stuck'
            buttonPage8.className = 'pagecontainerindividualdoubleprev-stuck'
            setPage1Status(page1Status == 'basic')
        }

        try {

            //fix this if the pagecontainerindividualoncenext-basic
            
            if(jobNameRow1 == arrayJsonFilter[5].title && companyNameRow1 == arrayJsonFilter[5].company){
            
                console.log('masukkkk1')
                showFilterJob6b()
                loadmorebutton.style.display = "block"
    
                //scenario 1b 
                if(buttonPage2b && buttonPage1 && buttonPage5 && buttonPage7){
                    console.log('masukkkk2')
                    buttonPage5.style.visibility = "visible"
                    buttonPage7.style.visibility = "visible"
                    
                    
                    buttonPage1.className = 'pagecontainerindividualpage1-selected'
                    buttonPage1.style.width = "40px"
                    buttonPage1.style.height = "40px"
                    buttonPage1.style.fontWeight = "bolder"
                    buttonPage1.style.fontSize = "large"


                    buttonPage2b.className = 'pagecontainerindividualpage2-basic'
                    buttonPage6.style.visibility = "hidden"
                    buttonPage8.style.visibility = "hidden"

               

                    buttonPage5.className = 'pagecontainerindividualoncenext-basic'
                    buttonPage7.className = 'pagecontainerindividualdoublenext-basic'
                    buttonPage6.className = 'pagecontainerindividualonceprev-stuck'
                    buttonPage8.className = 'pagecontainerindividualdoubleprev-stuck'
          
                }

            }

        } catch (error) {
            //console.log(error)
        }
    
        

        
    }

    const buttonDoubleNext = () => {

        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-basic')
        const buttonPage1b = document.querySelector('.pagecontainerindividualpage1-selected')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-basic')
        const buttonPage2b = document.querySelector('.pagecontainerindividualpage2-selected')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-basic')
        const buttonPage3b = document.querySelector('.pagecontainerindividualpage3-selected')
        const buttonPage5 = document.querySelector('.pagecontainerindividualonceprev-stuck')
        const buttonPage6 = document.querySelector('.pagecontainerindividualdoublenext-basic')
        const buttonPage6b = document.querySelector('.pagecontainerindividualdoublenext-stuck')
        const buttonPage7 = document.querySelector('.pagecontainerindividualoncenext-basic')
        const buttonPage7b = document.querySelector('.pagecontainerindividualoncenext-stuck')
        const buttonPage8 = document.querySelector('.pagecontainerindividualdoubleprev-stuck')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')

        try {

                if(buttonPage1b){
                    button4()
                    buttonPage7.className = 'pagecontainerindividualoncenext-stuck'
                    buttonPage6.className = 'pagecontainerindividualdoublenext-stuck'
                    buttonPage5.className = 'pagecontainerindividualonceprev-basic'
                    buttonPage8.className = 'pagecontainerindividualdoubleprev-basic'
                
                }
        
        
                if(buttonPage2b){
                    button4()
                    buttonPage6.className = 'pagecontainerindividualdoublenext-stuck'
                    buttonPage7.className = 'pagecontainerindividualoncenext-stuck'
                }
        
                if(buttonPage3b){
                    button4()
                    
                    buttonPage6.className = 'pagecontainerindividualdoublenext-stuck'
                    buttonPage7.className = 'pagecontainerindividualoncenext-stuck'
                }
        
            
        } catch (error) {
            
        }
        

        try {
            if(jobNameRow5 == arrayJsonFilter[4].title && companyNameRow5 == arrayJsonFilter[4].company){
                console.log('masuk1')
                showFilterJob1c()

                if(buttonPage1 && buttonPage2 && buttonPage6 && buttonPage7 && !buttonPage5 && !buttonPage8){

                    console.log('masuk5')
                    buttonPage2.className = 'pagecontainerindividualpage2-selected'

                    buttonPage1.style.width = "30px"
                    buttonPage1.style.height = "30px"
                    buttonPage1.style.fontWeight = "normal"
                    buttonPage1.style.fontSize = "medium"
                    
                    buttonPage6.className = 'pagecontainerindividualdoublenext-stuck'
                    buttonPage7.className = 'pagecontainerindividualoncenext-stuck'

                    loadmorebutton.style.display = "none"
                    buttonPage6.style.visibility = "hidden"
                    buttonPage7.style.visibility = "hidden"
                    buttonPage5.style.visibility = "visibility"
                    buttonPage8.style.visibility = "visibility"

                    buttonPage5.className = 'pagecontainerindividualonceprev-basic'
                    buttonPage8.className = 'pagecontainerindividualdoubleprev-basic'

                }

                if(buttonPage1 && buttonPage2 && buttonPage6 && buttonPage7 && buttonPage5 && buttonPage8){

                    console.log('masuk2')
                    buttonPage2.className = 'pagecontainerindividualpage2-selected'

                    buttonPage1.style.width = "30px"
                    buttonPage1.style.height = "30px"
                    buttonPage1.style.fontWeight = "normal"
                    buttonPage1.style.fontSize = "medium"
                    
                    buttonPage7.className = 'pagecontainerindividualoncenext-stuck'
                    buttonPage6.className = 'pagecontainerindividualdoublenext-stuck'

                    loadmorebutton.style.display = "none"
                    buttonPage6.style.visibility = "hidden"
                    buttonPage7.style.visibility = "hidden"
                    buttonPage5.style.visibility = "visibility"
                    buttonPage8.style.visibility = "visibility"

                    buttonPage5.className = 'pagecontainerindividualonceprev-basic'
                    buttonPage8.className = 'pagecontainerindividualdoubleprev-basic'

                }

                //scenario 1a 
                if(buttonPage1b && buttonPage2 && buttonPage6 && buttonPage7 && !buttonPage5 && !buttonPage8){

                    console.log('masuk2')
                    buttonPage2.className = 'pagecontainerindividualpage2-selected'
                    buttonPage1b.className = 'pagecontainerindividualpage1-basic'
                    buttonPage6.className = 'pagecontainerindividualdoublenext-stuck'
                    buttonPage7.className = 'pagecontainerindividualoncenext-stuck'

                    loadmorebutton.style.display = "none"
                    buttonPage6.style.visibility = "hidden"
                    buttonPage7.style.visibility = "hidden"
                    buttonPage5.style.visibility = "visibility"
                    buttonPage8.style.visibility = "visibility"

                    buttonPage5.className = 'pagecontainerindividualonceprev-basic'
                    buttonPage8.className = 'pagecontainerindividualdoubleprev-basic'

                }

                //scenario 1c
                if(buttonPage1b && buttonPage2 && buttonPage5 && buttonPage8){

                    console.log('masuk3')
                    buttonPage2.className = 'pagecontainerindividualpage2-selected'
                    buttonPage1b.className = 'pagecontainerindividualpage1-basic'
                    buttonPage1b.style.width = "30px"
                    buttonPage1b.style.height = "30px"
                    buttonPage1b.style.fontWeight = "normal"
                    buttonPage1b.style.fontSize = "medium"

                    buttonPage6.className = 'pagecontainerindividualdoublenext-stuck'
                    buttonPage7.className = 'pagecontainerindividualoncenext-stuck'

                    loadmorebutton.style.display = "none"
                    buttonPage5.style.visibility = "visible"
                    buttonPage8.style.visibility = "visible"
                    buttonPage6.style.visibility = "hidden"
                    buttonPage7.style.visibility = "hidden"

                   

                    buttonPage5.className = 'pagecontainerindividualonceprev-basic'
                    buttonPage8.className = 'pagecontainerindividualdoubleprev-basic'

                    
                }

            }
        } catch (error) {
            //console.log(error)
        }
        

        
    }

    const buttonDoublePrevious = () => {

        const buttonPage4 = document.querySelector('.pagecontainerindividualpage4-basic')
        const buttonPage4b = document.querySelector('.pagecontainerindividualpage4-selected')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-basic')
        const buttonPage3b = document.querySelector('.pagecontainerindividualpage3-selected')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-basic')
        const buttonPage2b = document.querySelector('.pagecontainerindividualpage2-selected')
        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-basic')
        const buttonPage1b = document.querySelector('.pagecontainerindividualpage1-selected')
        const buttonPage5 = document.querySelector('.pagecontainerindividualoncenext-stuck')
        const buttonPage5b = document.querySelector('.pagecontainerindividualoncenext-basic')
        const buttonPage6 = document.querySelector('.pagecontainerindividualdoublenext-stuck')
        const buttonPage6b = document.querySelector('.pagecontainerindividualdoublenext-basic')
        const buttonPage7 = document.querySelector('.pagecontainerindividualdoubleprev-basic')
        const buttonPage7b = document.querySelector('.pagecontainerindividualdoubleprev-stuck')
        const buttonPage8 = document.querySelector('.pagecontainerindividualonceprev-basic')
        const buttonPage8b = document.querySelector('.pagecontainerindividualonceprev-stuck')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')

        if(buttonPage4b && buttonPage3 && buttonPage2 && buttonPage1){
            button1()
            buttonPage5.className = 'pagecontainerindividualoncenext-basic'
            buttonPage6.className = 'pagecontainerindividualdoublenext-basic'
            buttonPage7.className = 'pagecontainerindividualdoubleprev-stuck'
            buttonPage8.className = 'pagecontainerindividualonceprev-stuck'
            setPage1Status(page1Status == 'basic')
            setRecordData3(recordData3 == '9')
        }

        if(buttonPage3b){
            button1()
            buttonPage7.className = 'pagecontainerindividualdoubleprev-stuck'
            buttonPage8.className = 'pagecontainerindividualonceprev-stuck'
            setPage1Status(page1Status == 'basic')
            setRecordData3(recordData3 == '9')
        }

        if(buttonPage2b){
            button1()
            
            buttonPage7.className = 'pagecontainerindividualdoubleprev-stuck'
            buttonPage8.className = 'pagecontainerindividualonceprev-stuck'
            setPage1Status(page1Status == 'basic')
            setRecordData3(recordData3 == '9')
        }

        try {
            if(jobNameRow1 == arrayJsonFilter[5].title && companyNameRow1 == arrayJsonFilter[5].company){
            //fix this
                console.log('masukkkk1')
                showFilterJob6b()
                loadmorebutton.style.display = "block"
    
                //scenario 1b 
                if(buttonPage2b && buttonPage1 && buttonPage5 && buttonPage6){
                    console.log('masukkkk2')
                    buttonPage5.style.visibility = "visible"
                    buttonPage6.style.visibility = "visible"
                    
                    
                    buttonPage1.className = 'pagecontainerindividualpage1-selected'
                    buttonPage1.style.width = "40px"
                    buttonPage1.style.height = "40px"
                    buttonPage1.style.fontWeight = "bolder"
                    buttonPage1.style.fontSize = "large"

                    buttonPage2b.className = 'pagecontainerindividualpage2-basic'
                    buttonPage7.style.visibility = "hidden"
                    buttonPage8.style.visibility = "hidden"

               

                    buttonPage5.className = 'pagecontainerindividualoncenext-basic'
                    buttonPage6.className = 'pagecontainerindividualdoublenext-basic'
                    buttonPage8.className = 'pagecontainerindividualonceprev-stuck'
                    buttonPage7.className = 'pagecontainerindividualdoubleprev-stuck'

                }
    
            }
            

        } catch (error) {
            //console.log(error)
        }
        

        
    }

    const searchFilterTitle = (e) => {

        // appear how many json title
        setSearchState(e.target.value)

        //console.log(arrayJson)

        let seeCriteria = arrayJson.filter((param) => {
           return searchState.toLowerCase() === '' ? param : param.title.toLowerCase().includes(searchState)
        })
        setArrayJsonFilter(seeCriteria)
        console.log(arrayJsonFilter)
        
    }

    const searchFilterLocation = (e) => {

        // appear how many json location
        setSearchState(e.target.value)

        //console.log(arrayJson)

        let seeCriteria = arrayJson.filter((param) => {
           return searchState.toLowerCase() === '' ? param : param.location.toLowerCase().includes(searchState)
        })
        setArrayJsonFilter(seeCriteria)
         console.log(arrayJsonFilter)
    }

    const searchFilter = () => {
        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-selected')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-selected')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-selected')
        const buttonPage4 = document.querySelector('.pagecontainerindividualpage4-selected')
        
        if(buttonPage1){

            console.log('Arraynya : ' + arrayJsonFilter.length)
            if (arrayJsonFilter.length == 1) {
                showFilterJob1()
                buttonNextFilter1()

            } 
            if (arrayJsonFilter.length == 2){
                showFilterJob2()
                buttonNextFilter1()
            } 
            if (arrayJsonFilter.length == 3) {
                showFilterJob3()
                buttonNextFilter1()
            }
            if (arrayJsonFilter.length == 4) {
                showFilterJob4()
                buttonNextFilter1()
            } 
            if (arrayJsonFilter.length == 6) {
                
                showFilterJob6b()
                buttonNextFilter6a()

                setPos1Table(pos1Table = '1content')
                setTable1Content(table1Content = 'none')
                setPos2Table(pos2Table = '2content')
                setTable2Content(table2Content = 'none')
                setPos3Table(pos3Table = '3content')
                setTable3Content(table3Content = 'none')

                console.log(pos2Table)
                console.log(table2Content)

                if(pos1Table == 'content' && table1Content == 'content'){

                    console.log('masuk buttonpage 1')
                    showFilterJob6b()
                    buttonNextFilter6a()
                }

                if(pos1Table == false && table1Content == false){

                    showFilterJob6b()
                    buttonNextFilter6a()
                }

                if(pos2Table == 'content' && table2Content == 'content'){
 
                    console.log('masuk buttonpage 1b')
                    showFilterJob6b()
                    buttonNextFilter6a()
                }

                if(pos2Table == false && table2Content == false){

                    showFilterJob6b()
                    buttonNextFilter6a()
                }
                
                if(pos3Table == 'content' && table3Content == 'content'){
 
                    console.log('masuk buttonpage 1c')
                    showFilterJob6b()
                    buttonNextFilter6a()
                }

                if(pos3Table == false && table3Content == false){

                    showFilterJob6b()
                    buttonNextFilter6a()
                }

                if(pos4Table == 'content' && table4Content == 'content'){
 
                    console.log('masuk buttonpage 1d')
                    showFilterJob6b()
                    buttonNextFilter6a()
                }
                

            }
            if (arrayJsonFilter.length > 6){

                console.log('masuk!!')
                toggleModal()
            }
           
        } 
        
        if(buttonPage2){
            
            if(arrayJsonFilter.length == 1) {
                showFilterJob1()
                buttonNextFilter2()

            } 
            
            if (arrayJsonFilter.length == 2){
                showFilterJob2()
                buttonNextFilter2()
                setPos1Table(pos1Table = 'content')
                setTable1Content(table1Content = 'content')
            } 
            
            if (arrayJsonFilter.length == 3) {
                showFilterJob3()
                buttonNextFilter2()
             
            } 
            
            if (arrayJsonFilter.length == 4) {
                showFilterJob4()
                buttonNextFilter2()
            } 
            
            if (arrayJsonFilter.length == 6) {
                showFilterJob6b()
                buttonNextFilter6b()

            } 

            if (arrayJsonFilter.length > 6){

                console.log('masuk!!')
                toggleModal()
            }
           
        }

        if(buttonPage3){
            
            if(arrayJsonFilter.length == 1) {
                showFilterJob1()
                buttonNextFilter3()
               
            } 
            
            if (arrayJsonFilter.length == 2){
                showFilterJob2()
                buttonNextFilter3()
            } 
            
            if (arrayJsonFilter.length == 3) {
                showFilterJob3()
                buttonNextFilter3()
            } 
            
            if (arrayJsonFilter.length == 4) {
                showFilterJob4()
                buttonNextFilter3()
            } 
            
            if (arrayJsonFilter.length == 6) {
                showFilterJob6b()
                buttonNextFilter6c()
            }

            if (arrayJsonFilter.length > 6){

                console.log('masuk!!')
                toggleModal()
            }
          
            
        }
 
        if(buttonPage4){
            
            if(arrayJsonFilter.length == 1) {
                setPos3Table(pos3Table = 'content')
                setTable3Content(table3Content = 'content')
                showFilterJob1()
                buttonNextFilter4()
                
            } 
            
            if (arrayJsonFilter.length == 2){
                showFilterJob2()
                buttonNextFilter4()
                
            } 
            
            if (arrayJsonFilter.length == 3) {
                showFilterJob3()
                buttonNextFilter4()
            } 
            
            if (arrayJsonFilter.length == 4) {
                showFilterJob4()
                buttonNextFilter4()
            } 
            
            if (arrayJsonFilter.length == 6) {
                showFilterJob6b()
                buttonNextFilter6d()
            
            }
           
            if (arrayJsonFilter.length > 6){

                console.log('masuk!!')
                toggleModal()
            }
        }

        
        

    }

    const showFilterJob1 = () => {

        setRecordData1(recordData1 = '1')

        setPos1Table(pos1Table == '1content')

        setTable1Content(table1Content == 'none')

        setPage1Status(page1Status = 'selected')
        
        setPage2Status(page2Status = 'basic')

        setPage3Status(page3Status = 'basic')

        setPage4Status(page4Status = 'basic')

        setJobNameRow1(arrayJsonFilter[0].title)
        setCompanyNameRow1(arrayJsonFilter[0].company)
        setLocationRow1(arrayJsonFilter[0].location)
        setTimeStatusRow1(arrayJsonFilter[0].type)

        setJobNameRow2('')
        setCompanyNameRow2('')
        setLocationRow2('')
        setTimeStatusRow2('')

        setJobNameRow3('')
        setCompanyNameRow3('')
        setLocationRow3('')
        setTimeStatusRow3('')
        
        setJobNameRow4('')
        setCompanyNameRow4('')
        setLocationRow4('')
        setTimeStatusRow4('')
     
        setJobNameRow5('')
        setCompanyNameRow5('')
        setLocationRow5('')
        setTimeStatusRow5('')
     
        setJobNameRow6('')
        setCompanyNameRow6('')
        setLocationRow6('')
        setTimeStatusRow6('')

        convertPageFilter1()
        
    }

    const showFilterJob1b = () => {

        setRecordData1(recordData1 = '1')

        setPos1Table(pos1Table == '1content')

        setTable1Content(table1Content == 'none')

        setPage1Status(page1Status = 'selected')
        
        setPage2Status(page2Status = 'basic')


        setJobNameRow1(arrayJsonFilter[5].title)
        setCompanyNameRow1(arrayJsonFilter[5].company)
        setLocationRow1(arrayJsonFilter[5].location)
        setTimeStatusRow1(arrayJsonFilter[5].type)

        setJobNameRow2('')
        setCompanyNameRow2('')
        setLocationRow2('')
        setTimeStatusRow2('')

        setJobNameRow3('')
        setCompanyNameRow3('')
        setLocationRow3('')
        setTimeStatusRow3('')
        
        setJobNameRow4('')
        setCompanyNameRow4('')
        setLocationRow4('')
        setTimeStatusRow4('')
     
        setJobNameRow5('')
        setCompanyNameRow5('')
        setLocationRow5('')
        setTimeStatusRow5('')
     
        setJobNameRow6('')
        setCompanyNameRow6('')
        setLocationRow6('')
        setTimeStatusRow6('')

        convertPageFilter1b()
        
    }

    const showFilterJob1c = () => {

        setRecordData1(recordData1 = '1')

        setPos2Table(pos2Table = 'content')
        setPos3Table(pos3Table = 'content')
        setPos4Table(pos4Table = 'content')
        setPos5Table(pos5Table = 'content')
        setPos1Table(pos1Table == '1content')

        setTable2Content(table2Content = 'content')
        setTable3Content(table3Content = 'content')
        setTable4Content(table4Content = 'content')
        setTable5Content(table5Content = 'content')
        setTable1Content(table1Content == 'none')

        setPage1Status(page1Status = 'selected')
        
        setPage2Status(page2Status = 'basic')


        setJobNameRow1(arrayJsonFilter[5].title)
        setCompanyNameRow1(arrayJsonFilter[5].company)
        setLocationRow1(arrayJsonFilter[5].location)
        setTimeStatusRow1(arrayJsonFilter[5].type)

        setJobNameRow2('')
        setCompanyNameRow2('')
        setLocationRow2('')
        setTimeStatusRow2('')

        setJobNameRow3('')
        setCompanyNameRow3('')
        setLocationRow3('')
        setTimeStatusRow3('')
        
        setJobNameRow4('')
        setCompanyNameRow4('')
        setLocationRow4('')
        setTimeStatusRow4('')
     
        setJobNameRow5('')
        setCompanyNameRow5('')
        setLocationRow5('')
        setTimeStatusRow5('')
     
        setJobNameRow6('')
        setCompanyNameRow6('')
        setLocationRow6('')
        setTimeStatusRow6('')

        convertPageFilter1b()
        
    }

    const showFilterJob2 = () => {

        setRecordData3(recordData3 == '9')
        setRecordData2(recordData2 = '2')

        setPos3Table(pos3Table = 'content')
        setPos2Table(pos2Table == '2content')

        setTable3Content(table3Content = 'content')
        setTable2Content(table2Content == 'none')

        setPage1Status(page1Status = 'selected')
        
        setPage2Status(page2Status = 'basic')

        setPage3Status(page3Status = 'basic')

        setPage4Status(page4Status = 'basic')

        setJobNameRow1(arrayJsonFilter[0].title)
        setCompanyNameRow1(arrayJsonFilter[0].company)
        setLocationRow1(arrayJsonFilter[0].location)
        setTimeStatusRow1(arrayJsonFilter[0].type)

        setJobNameRow2(arrayJsonFilter[1].title)
        setCompanyNameRow2(arrayJsonFilter[1].company)
        setLocationRow2(arrayJsonFilter[1].location)
        setTimeStatusRow2(arrayJsonFilter[1].type)

        setJobNameRow3('')
        setCompanyNameRow3('')
        setLocationRow3('')
        setTimeStatusRow3('')
        
        setJobNameRow4('')
        setCompanyNameRow4('')
        setLocationRow4('')
        setTimeStatusRow4('')
     
        setJobNameRow5('')
        setCompanyNameRow5('')
        setLocationRow5('')
        setTimeStatusRow5('')
     
        setJobNameRow6('')
        setCompanyNameRow6('')
        setLocationRow6('')
        setTimeStatusRow6('')

        convertPageFilter2()
        
    }

    const showFilterJob3 = () => {

        
        setRecordData3(recordData3 = '3')

        
        setPos3Table(pos3Table == '3content')

        
        setTable3Content(table3Content == 'none')

        setPage1Status(page1Status = 'selected')
        
        setPage2Status(page2Status = 'basic')

        setPage3Status(page3Status = 'basic')

        setPage4Status(page4Status = 'basic')

        setJobNameRow1(arrayJsonFilter[0].title)
        setCompanyNameRow1(arrayJsonFilter[0].company)
        setLocationRow1(arrayJsonFilter[0].location)
        setTimeStatusRow1(arrayJsonFilter[0].type)

        setJobNameRow2(arrayJsonFilter[1].title)
        setCompanyNameRow2(arrayJsonFilter[1].company)
        setLocationRow2(arrayJsonFilter[1].location)
        setTimeStatusRow2(arrayJsonFilter[1].type)

        setJobNameRow3(arrayJsonFilter[2].title)
        setCompanyNameRow3(arrayJsonFilter[2].company)
        setLocationRow3(arrayJsonFilter[2].location)
        setTimeStatusRow3(arrayJsonFilter[2].type)
        
        setJobNameRow4('')
        setCompanyNameRow4('')
        setLocationRow4('')
        setTimeStatusRow4('')
     
        setJobNameRow5('')
        setCompanyNameRow5('')
        setLocationRow5('')
        setTimeStatusRow5('')
     
        setJobNameRow6('')
        setCompanyNameRow6('')
        setLocationRow6('')
        setTimeStatusRow6('')

        convertPageFilter3()
        
    }

    const showFilterJob4 = () => {

        setRecordData3(recordData3 == '9')
        setRecordData4(recordData4 = '4')

        setPos3Table(pos3Table = 'content')
        setPos4Table(pos4Table == '4content')

        setTable3Content(table3Content = 'content')
        setTable4Content(table4Content == 'none')

        setPage1Status(page1Status = 'selected')
        
        setPage2Status(page2Status = 'basic')

        setPage3Status(page3Status = 'basic')

        setPage4Status(page4Status = 'basic')

        setJobNameRow1(arrayJsonFilter[0].title)
        setCompanyNameRow1(arrayJsonFilter[0].company)
        setLocationRow1(arrayJsonFilter[0].location)
        setTimeStatusRow1(arrayJsonFilter[0].type)

        setJobNameRow2(arrayJsonFilter[1].title)
        setCompanyNameRow2(arrayJsonFilter[1].company)
        setLocationRow2(arrayJsonFilter[1].location)
        setTimeStatusRow2(arrayJsonFilter[1].type)

        setJobNameRow3(arrayJsonFilter[2].title)
        setCompanyNameRow3(arrayJsonFilter[2].company)
        setLocationRow3(arrayJsonFilter[2].location)
        setTimeStatusRow3(arrayJsonFilter[2].type)
        
        setJobNameRow4(arrayJsonFilter[3].title)
        setCompanyNameRow4(arrayJsonFilter[3].company)
        setLocationRow4(arrayJsonFilter[3].location)
        setTimeStatusRow4(arrayJsonFilter[3].type)
     
        setJobNameRow5('')
        setCompanyNameRow5('')
        setLocationRow5('')
        setTimeStatusRow5('')
     
        setJobNameRow6('')
        setCompanyNameRow6('')
        setLocationRow6('')
        setTimeStatusRow6('')

        convertPageFilter4()
        
    }

    const showFilterJob6a = () => {

       //setRecordData3(recordData3 == '9')
        setRecordData5(recordData5 = '5')

        //setPos3Table(pos3Table = 'content')
        setPos5Table(pos5Table == '5content')

        //setTable3Content(table3Content = 'content')
        setTable5Content(table5Content == 'none')

        setPage1Status(page1Status = 'selected')
        
        setPage2Status(page2Status = 'basic')

        setPage3Status(page3Status = 'basic')

        setPage4Status(page4Status = 'basic')

        setJobNameRow1(arrayJsonFilter[0].title)
        setCompanyNameRow1(arrayJsonFilter[0].company)
        setLocationRow1(arrayJsonFilter[0].location)
        setTimeStatusRow1(arrayJsonFilter[0].type)

        setJobNameRow2(arrayJsonFilter[1].title)
        setCompanyNameRow2(arrayJsonFilter[1].company)
        setLocationRow2(arrayJsonFilter[1].location)
        setTimeStatusRow2(arrayJsonFilter[1].type)

        setJobNameRow3(arrayJsonFilter[2].title)
        setCompanyNameRow3(arrayJsonFilter[2].company)
        setLocationRow3(arrayJsonFilter[2].location)
        setTimeStatusRow3(arrayJsonFilter[2].type)
        
        setJobNameRow4(arrayJsonFilter[3].title)
        setCompanyNameRow4(arrayJsonFilter[3].company)
        setLocationRow4(arrayJsonFilter[3].location)
        setTimeStatusRow4(arrayJsonFilter[3].type)
     
        setJobNameRow5(arrayJsonFilter[4].title)
        setCompanyNameRow5(arrayJsonFilter[4].company)
        setLocationRow5(arrayJsonFilter[4].location)
        setTimeStatusRow5(arrayJsonFilter[4].type)
     
        setJobNameRow6('')
        setCompanyNameRow6('')
        setLocationRow6('')
        setTimeStatusRow6('')

        convertPageFilter5()
        
    }

    const showFilterJob6b = () => {

         setRecordData1(recordData1 == '9')
         setRecordData2(recordData2 == '9')
         setRecordData3(recordData3 == '9')
         setRecordData4(recordData4 == '9')
         setRecordData5(recordData5 = '5')
 
         setPos1Table(pos1Table = 'content')
         setPos2Table(pos2Table = 'content')
         setPos3Table(pos3Table = 'content')
         setPos4Table(pos4Table = 'content')
         setPos5Table(pos5Table == '5content')
 
         setTable1Content(table1Content = 'content')
         setTable2Content(table2Content = 'content')
         setTable3Content(table3Content = 'content')
         setTable4Content(table4Content = 'content')
         setTable5Content(table5Content == 'none')
 
         setPage1Status(page1Status = 'selected')
         
         setPage2Status(page2Status = 'basic')
 
 
         setJobNameRow1(arrayJsonFilter[0].title)
         setCompanyNameRow1(arrayJsonFilter[0].company)
         setLocationRow1(arrayJsonFilter[0].location)
         setTimeStatusRow1(arrayJsonFilter[0].type)
 
         setJobNameRow2(arrayJsonFilter[1].title)
         setCompanyNameRow2(arrayJsonFilter[1].company)
         setLocationRow2(arrayJsonFilter[1].location)
         setTimeStatusRow2(arrayJsonFilter[1].type)
 
         setJobNameRow3(arrayJsonFilter[2].title)
         setCompanyNameRow3(arrayJsonFilter[2].company)
         setLocationRow3(arrayJsonFilter[2].location)
         setTimeStatusRow3(arrayJsonFilter[2].type)
         
         setJobNameRow4(arrayJsonFilter[3].title)
         setCompanyNameRow4(arrayJsonFilter[3].company)
         setLocationRow4(arrayJsonFilter[3].location)
         setTimeStatusRow4(arrayJsonFilter[3].type)
      
         setJobNameRow5(arrayJsonFilter[4].title)
         setCompanyNameRow5(arrayJsonFilter[4].company)
         setLocationRow5(arrayJsonFilter[4].location)
         setTimeStatusRow5(arrayJsonFilter[4].type)
      
         setJobNameRow6('')
         setCompanyNameRow6('')
         setLocationRow6('')
         setTimeStatusRow6('')
 
         convertPageFilter5()
         
    }
    
    let dateLocalFilter1
    let dateLocalFilter2
    let dateLocalFilter3
    let dateLocalFilter4
    let dateLocalFilter5
    
    const convertPageFilter1 = () => {
        if(arrayJsonFilter[0].created_at != null){
            dateLocalFilter1 = new Date(`${arrayJsonFilter[0].created_at}`)
            setDateAndTimeConvertRow1(`${dateLocalFilter1}`)
        }
    
    }

    const convertPageFilter1b = () => {
        if(arrayJsonFilter[5].created_at != null){
            dateLocalFilter5 = new Date(`${arrayJsonFilter[5].created_at}`)
            setDateAndTimeConvertRow1(`${dateLocalFilter5}`)
        }
    
    }

    const convertPageFilter2 = () => {
        if(arrayJsonFilter[0].created_at != null){
            dateLocalFilter1 = new Date(`${arrayJsonFilter[0].created_at}`)
            setDateAndTimeConvertRow1(`${dateLocalFilter1}`)
        }

        if(arrayJsonFilter[1].created_at != null){
            dateLocalFilter2 = new Date(`${arrayJsonFilter[1].created_at}`)
            setDateAndTimeConvertRow2(`${dateLocalFilter2}`)
        }
    
    }

    const convertPageFilter3 = () => {
        if(arrayJsonFilter[0].created_at != null){
            dateLocalFilter1 = new Date(`${arrayJsonFilter[0].created_at}`)
            setDateAndTimeConvertRow1(`${dateLocalFilter1}`)
        }

        if(arrayJsonFilter[1].created_at != null){
            dateLocalFilter2 = new Date(`${arrayJsonFilter[1].created_at}`)
            setDateAndTimeConvertRow2(`${dateLocalFilter2}`)
        }

        if(arrayJsonFilter[2].created_at != null){
            dateLocalFilter3 = new Date(`${arrayJsonFilter[2].created_at}`)
            setDateAndTimeConvertRow3(`${dateLocalFilter3}`)
        }
    
    }

    const convertPageFilter4 = () => {
        if(arrayJsonFilter[0].created_at != null){
            dateLocalFilter1 = new Date(`${arrayJsonFilter[0].created_at}`)
            setDateAndTimeConvertRow1(`${dateLocalFilter1}`)
        }

        if(arrayJsonFilter[1].created_at != null){
            dateLocalFilter2 = new Date(`${arrayJsonFilter[1].created_at}`)
            setDateAndTimeConvertRow2(`${dateLocalFilter2}`)
        }

        if(arrayJsonFilter[2].created_at != null){
            dateLocalFilter3 = new Date(`${arrayJsonFilter[2].created_at}`)
            setDateAndTimeConvertRow3(`${dateLocalFilter3}`)
        }

        if(arrayJsonFilter[3].created_at != null){
            dateLocalFilter4 = new Date(`${arrayJsonFilter[3].created_at}`)
            setDateAndTimeConvertRow4(`${dateLocalFilter4}`)
        }
    
    }

    const convertPageFilter5 = () => {
        if(arrayJsonFilter[0].created_at != null){
            dateLocalFilter1 = new Date(`${arrayJsonFilter[0].created_at}`)
            setDateAndTimeConvertRow1(`${dateLocalFilter1}`)
        }

        if(arrayJsonFilter[1].created_at != null){
            dateLocalFilter2 = new Date(`${arrayJsonFilter[1].created_at}`)
            setDateAndTimeConvertRow2(`${dateLocalFilter2}`)
        }

        if(arrayJsonFilter[2].created_at != null){
            dateLocalFilter3 = new Date(`${arrayJsonFilter[2].created_at}`)
            setDateAndTimeConvertRow3(`${dateLocalFilter3}`)
        }

        if(arrayJsonFilter[3].created_at != null){
            dateLocalFilter4 = new Date(`${arrayJsonFilter[3].created_at}`)
            setDateAndTimeConvertRow4(`${dateLocalFilter4}`)
        }

        if(arrayJsonFilter[4].created_at != null){
            dateLocalFilter5 = new Date(`${arrayJsonFilter[4].created_at}`)
            setDateAndTimeConvertRow5(`${dateLocalFilter5}`)
        }
    
    }

    const buttonNextFilter1 = () => {
        

        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-selected')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-basic')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-basic')
        const buttonPage4 = document.querySelector('.pagecontainerindividualpage4-basic')
        const buttonPage5 = document.querySelector('.pagecontainerindividualonceprev-stuck')
        const buttonPage6 = document.querySelector('.pagecontainerindividualoncenext-basic')
        const buttonPage7 = document.querySelector('.pagecontainerindividualdoublenext-basic')
        const buttonPage8 = document.querySelector('.pagecontainerindividualdoubleprev-stuck')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')
        

        if(buttonPage1 && buttonPage2 && buttonPage3 && buttonPage4 && buttonPage5 && buttonPage6 && buttonPage7 && buttonPage8){
          

            setPage1Status(page1Status == 'basic')
            buttonPage6.className = 'pagecontainerindividualoncenext-stuck'
            buttonPage7.className = 'pagecontainerindividualdoublenext-stuck'
        

            if(buttonPage6.className == 'pagecontainerindividualoncenext-stuck'){

                setPage1Status(page1Status == 'basic')
                buttonPage2.style.display = 'none'
                buttonPage3.style.display = 'none'
                buttonPage4.style.display = 'none'
                buttonPage6.style.visibility = 'hidden'
                buttonPage7.style.visibility = 'hidden'
                buttonPage5.style.visibility = 'hidden'
                buttonPage8.style.visibility = 'hidden'
                loadmorebutton.style.visibility = 'hidden'
                
             
            }

            if(buttonPage2.style.display == 'none'){
                // windows back button
                window.onpopstate = () => {
                    navigate("/dashboard")
                }
            }
           
        }

        else {
            setPage1Status(page1Status == 'basic')
        }
        
    }

    const buttonNextFilter2 = () => {
        

        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-basic')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-selected')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-basic')
        const buttonPage4 = document.querySelector('.pagecontainerindividualpage4-basic')
        const buttonPage5 = document.querySelector('.pagecontainerindividualonceprev-basic')
        const buttonPage6 = document.querySelector('.pagecontainerindividualoncenext-basic')
        const buttonPage7 = document.querySelector('.pagecontainerindividualdoublenext-basic')
        const buttonPage8 = document.querySelector('.pagecontainerindividualdoubleprev-basic')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')

        if(buttonPage1 && buttonPage2 && buttonPage3 && buttonPage4){
            
            buttonPage6.className = 'pagecontainerindividualoncenext-stuck'
            buttonPage7.className = 'pagecontainerindividualdoublenext-stuck'
            
        }
        
        if(buttonPage6.className == 'pagecontainerindividualoncenext-stuck'){

            setPage1Status(page1Status == 'basic')
            buttonPage2.style.display = 'none'
            buttonPage3.style.display = 'none'
            buttonPage4.style.display = 'none'
            buttonPage6.style.visibility = 'hidden'
            buttonPage7.style.visibility = 'hidden'
            buttonPage5.style.visibility = 'hidden'
            buttonPage8.style.visibility = 'hidden'
            loadmorebutton.style.visibility = 'hidden'
         
        }


        if(buttonPage2.style.display == 'none'){
            // windows back button
            window.onpopstate = () => {
                navigate("/dashboard")
            };
             
        }
        
    }

    const buttonNextFilter3 = () => {
        

        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-basic')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-basic')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-selected')
        const buttonPage4 = document.querySelector('.pagecontainerindividualpage4-basic')
        const buttonPage5 = document.querySelector('.pagecontainerindividualonceprev-basic')
        const buttonPage6 = document.querySelector('.pagecontainerindividualoncenext-basic')
        const buttonPage7 = document.querySelector('.pagecontainerindividualdoublenext-basic')
        const buttonPage8 = document.querySelector('.pagecontainerindividualdoubleprev-basic')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')

        if(buttonPage1 && buttonPage2 && buttonPage3 && buttonPage4){
            
            buttonPage6.className = 'pagecontainerindividualoncenext-stuck'
            buttonPage7.className = 'pagecontainerindividualdoublenext-stuck'
            
        }
        
        if(buttonPage6.className == 'pagecontainerindividualoncenext-stuck'){

            setPage1Status(page1Status == 'basic')
            buttonPage2.style.display = 'none'
            buttonPage3.style.display = 'none'
            buttonPage4.style.display = 'none'
            buttonPage6.style.visibility = 'hidden'
            buttonPage7.style.visibility = 'hidden'
            buttonPage5.style.visibility = 'hidden'
            buttonPage8.style.visibility = 'hidden'
            loadmorebutton.style.visibility = 'hidden'
         
        }


        if(buttonPage2.style.display == 'none'){
            // windows back button
            window.onpopstate = () => {
                navigate("/dashboard")
            };
             
        }
        
    }

    const buttonNextFilter4 = () => {
        

        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-basic')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-basic')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-basic')
        const buttonPage4 = document.querySelector('.pagecontainerindividualpage4-selected')
        const buttonPage5 = document.querySelector('.pagecontainerindividualonceprev-basic')
        const buttonPage6 = document.querySelector('.pagecontainerindividualoncenext-stuck')
        const buttonPage7 = document.querySelector('.pagecontainerindividualdoublenext-stuck')
        const buttonPage8 = document.querySelector('.pagecontainerindividualdoubleprev-basic')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')

      
        
        if(buttonPage6.className == 'pagecontainerindividualoncenext-stuck'){

            setPage1Status(page1Status == 'basic')
            buttonPage2.style.display = 'none'
            buttonPage3.style.display = 'none'
            buttonPage4.style.display = 'none'
            buttonPage6.style.visibility = 'hidden'
            buttonPage7.style.visibility = 'hidden'
            buttonPage5.style.visibility = 'hidden'
            buttonPage8.style.visibility = 'hidden'
            loadmorebutton.style.visibility = 'hidden'
         
        }

        if(buttonPage1.className = 'pagecontainerindividualpage1-selected'){
            setPage1Status(page1Status = 'selected')        
        }


        if(buttonPage2.style.display == 'none'){
            // windows back button
            window.onpopstate = () => {
                navigate("/dashboard")
            };
             
        }
        
    }

    const buttonNextFilter6a = () => {
        
        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-selected')
        const buttonPage1b = document.querySelector('.pagecontainerindividualpage1-basic')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-basic')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-basic')
        const buttonPage4 = document.querySelector('.pagecontainerindividualpage4-basic')
        const buttonPage5 = document.querySelector('.pagecontainerindividualonceprev-stuck')
        const buttonPage5b = document.querySelector('.pagecontainerindividualonceprev-basic')
        const buttonPage6 = document.querySelector('.pagecontainerindividualoncenext-basic')
        const buttonPage6b = document.querySelector('.pagecontainerindividualoncenext-stuck')
        const buttonPage7 = document.querySelector('.pagecontainerindividualdoublenext-basic')
        const buttonPage7b = document.querySelector('.pagecontainerindividualdoublenext-stuck')
        const buttonPage8 = document.querySelector('.pagecontainerindividualdoubleprev-stuck')
        const buttonPage8b = document.querySelector('.pagecontainerindividualdoubleprev-basic')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')

    
        if(buttonPage2.style.display == "none" && buttonPage3.style.display == 'none' && buttonPage4.style.display == 'none'){

            console.log('masukkkkk 6a1')
            buttonPage2.style.display = "flex"
            buttonPage2.style.alignItems = "center"
            buttonPage2.style.justifyContent = "center"
            

            if(buttonPage1.className == 'pagecontainerindividualpage1-selected'){

                buttonPage1.style.width = "40px"
                buttonPage1.style.height = "40px"
                buttonPage1.style.fontWeight = "bolder"
                buttonPage1.style.fontSize = "large"
                

                if(buttonPage5){
                    buttonPage5.style.visibility = "visible"
                    buttonPage8.style.visibility = "visible"
                }

                if(buttonPage5b){
                    buttonPage5b.style.visibility = "visible"
                    buttonPage8b.style.visibility = "visible"
                    buttonPage5b.className = 'pagecontainerindividualonceprev-stuck'
                    buttonPage8b.className = 'pagecontainerindividualdoubleprev-stuck'
                }
                
                buttonPage6b.style.visibility = "visible"
                buttonPage7b.style.visibility = "visible"

                buttonPage6b.className = 'pagecontainerindividualoncenext-basic'
                buttonPage7b.className = 'pagecontainerindividualdoublenext-basic'
                
            }

           
        }
       
        
        if(buttonPage1 && buttonPage2 && buttonPage3 && buttonPage3.style.display == "flex" && buttonPage4 && buttonPage5 
        && buttonPage6 && buttonPage7 && buttonPage8){
          
            console.log('masukkkkk 6a2')

            setPage1Status(page1Status == 'basic')
            buttonPage6.className = 'pagecontainerindividualoncenext-stuck'
            buttonPage7.className = 'pagecontainerindividualdoublenext-stuck'
        

            if(buttonPage6.className == 'pagecontainerindividualoncenext-stuck'){

                buttonPage3.style.display = 'none'
                buttonPage4.style.display = 'none'
                buttonPage6.className = 'pagecontainerindividualoncenext-basic'
                buttonPage7.className = 'pagecontainerindividualdoublenext-basic'
                buttonPage7.style.cursor = "pointer"
                loadmorebutton.style.opacity = "100%"
                loadmorebutton.style.cursor = "pointer"
                
            }

            if(buttonPage3.style.display == 'none'){
                // windows back button
                window.onpopstate = () => {
                    navigate("/dashboard")
                }
            }
           
        }

        
    }

    const buttonNextFilter6b = () => {
        
        
        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-basic')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-selected')
        const buttonPage2b = document.querySelector('.pagecontainerindividualpage2-basic')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-basic')
        const buttonPage4 = document.querySelector('.pagecontainerindividualpage4-basic')
        const buttonPage5 = document.querySelector('.pagecontainerindividualonceprev-basic')
        const buttonPage6 = document.querySelector('.pagecontainerindividualoncenext-basic')
        const buttonPage6b = document.querySelector('.pagecontainerindividualoncenext-stuck')
        const buttonPage7 = document.querySelector('.pagecontainerindividualdoublenext-basic')
        const buttonPage7b = document.querySelector('.pagecontainerindividualdoublenext-stuck')
        const buttonPage8 = document.querySelector('.pagecontainerindividualdoubleprev-basic')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')
        
        // with first search filter continue with 6 length of search filter
        if(buttonPage2b.style.display == "none"){

            
            buttonPage2.style.display = "flex"
            buttonPage2.style.alignItems = "center"
            buttonPage2.style.justifyContent = "center"
            

            if(buttonPage1.className == 'pagecontainerindividualpage1-selected'){

                console.log('masukkkkk')
                buttonPage1.style.width = "40px"
                buttonPage1.style.height = "40px"
                buttonPage1.style.fontWeight = "bolder"
                buttonPage1.style.fontSize = "large"
                buttonPage5.style.visibility = "visible"
                buttonPage8.style.visibility = "visible"
                buttonPage6b.style.visibility = "visible"
                buttonPage7b.style.visibility = "visible"

                buttonPage5.className = 'pagecontainerindividualonceprev-stuck'
                buttonPage8.className = 'pagecontainerindividualdoubleprev-stuck'
                buttonPage6b.className = 'pagecontainerindividualoncenext-basic'
                buttonPage7b.className = 'pagecontainerindividualdoublenext-basic'
                
            }

           
        }

        if(buttonPage1 && buttonPage2 && buttonPage3 && buttonPage4 && buttonPage5 && buttonPage6 && buttonPage7 && buttonPage8){
          
            console.log('masukkkkk 6b2')
            loadmorebutton.style.opacity = "100%"
            loadmorebutton.style.cursor = "pointer"
            buttonPage5.className = 'pagecontainerindividualonceprev-stuck'
            buttonPage8.className = 'pagecontainerindividualdoubleprev-stuck'
            buttonPage1.className = 'pagecontainerindividualpage1-selected'

        

            if(buttonPage5.className == 'pagecontainerindividualonceprev-stuck'){

                buttonPage3.style.display = 'none'
                buttonPage4.style.display = 'none'
                buttonPage6.className = 'pagecontainerindividualoncenext-basic'
                buttonPage7.className = 'pagecontainerindividualdoublenext-basic'
                buttonPage7.style.cursor = "pointer"
                loadmorebutton.style.opacity = "100%"
                loadmorebutton.style.cursor = "pointer"
                
            }

            if(buttonPage3.style.display == 'none'){
                // windows back button
                window.onpopstate = () => {
                    navigate("/dashboard")
                }
            }
           
        }

        
    }

    const buttonNextFilter6c = () => {
        
    
        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-basic')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-basic')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-selected')
        const buttonPage4 = document.querySelector('.pagecontainerindividualpage4-basic')
        const buttonPage5 = document.querySelector('.pagecontainerindividualonceprev-basic')
        const buttonPage6 = document.querySelector('.pagecontainerindividualoncenext-basic')
        const buttonPage7 = document.querySelector('.pagecontainerindividualdoublenext-basic')
        const buttonPage8 = document.querySelector('.pagecontainerindividualdoubleprev-basic')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')
        

        if(buttonPage1 && buttonPage2 && buttonPage3 && buttonPage4  && buttonPage6 && buttonPage7 ){
          
            console.log('masukkkkk 6c1')
            if(buttonPage6.className == 'pagecontainerindividualoncenext-basic'){

                buttonPage1.className = 'pagecontainerindividualpage1-selected'
                buttonPage3.className = 'pagecontainerindividualpage2-basic'
                buttonPage5.className = 'pagecontainerindividualonceprev-stuck'
                buttonPage8.className = 'pagecontainerindividualdoubleprev-stuck'
                buttonPage3.style.display = 'none'
                buttonPage4.style.display = 'none'
                buttonPage7.style.cursor = "pointer"
                loadmorebutton.style.opacity = "100%"
                loadmorebutton.style.cursor = "pointer"
                
            }

            if(buttonPage3.style.display == 'none'){
                // windows back button
                window.onpopstate = () => {
                    navigate("/dashboard")
                }
            }
           
        }

    }

    const buttonNextFilter6d = () => {
        
    
        const buttonPage1 = document.querySelector('.pagecontainerindividualpage1-basic')
        const buttonPage2 = document.querySelector('.pagecontainerindividualpage2-basic')
        const buttonPage3 = document.querySelector('.pagecontainerindividualpage3-basic')
        const buttonPage4 = document.querySelector('.pagecontainerindividualpage4-selected')
        const buttonPage5 = document.querySelector('.pagecontainerindividualonceprev-basic')
        const buttonPage6 = document.querySelector('.pagecontainerindividualoncenext-stuck')
        const buttonPage7 = document.querySelector('.pagecontainerindividualdoublenext-stuck')
        const buttonPage8 = document.querySelector('.pagecontainerindividualdoubleprev-basic')
        const loadmorebutton = document.querySelector('.loadmorebutton1-content')
        

        if(buttonPage1 && buttonPage2 && buttonPage3 && buttonPage4 && buttonPage5 && buttonPage8){
      
            console.log('masukkkkk 6d1')
            if(buttonPage6.className == 'pagecontainerindividualoncenext-stuck'){


                buttonPage3.style.display = 'none'
                buttonPage4.style.display = 'none'
                buttonPage1.className = 'pagecontainerindividualpage1-selected'
                buttonPage6.className = 'pagecontainerindividualoncenext-basic'
                buttonPage7.className = 'pagecontainerindividualdoublenext-basic'
                buttonPage5.className = 'pagecontainerindividualonceprev-stuck'
                buttonPage8.className = 'pagecontainerindividualdoubleprev-stuck'
                buttonPage7.style.cursor = "pointer"
                loadmorebutton.style.opacity = "100%"
                loadmorebutton.style.cursor = "pointer"
                
            }

            if(buttonPage3.style.display == 'none'){
                // windows back button
                window.onpopstate = () => {
                    navigate("/dashboard")
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



    const row1EventListener = () => {

        if(jobNameRow1 != null && jobNameRow1 == arrayJson[0].title) {
            
            let seeCompany1 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[0].company)
            })

            console.log(seeCompany1)

            navigate("/dashboard/detail", {
                state: 
                    {
                    row1: arrayJson[0],
                    row2: name,
                    row3: seeCompany1.length - 1,
                    row4: 0,
                    },
            })
        }

        if(jobNameRow1 != null && jobNameRow1 == arrayJson[5].title) {
            
            let seeCompany1 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[5].company)
            })

            console.log(seeCompany1)

            navigate("/dashboard/detail", {
                state: 
                    {
                    row1: arrayJson[5],
                    row2: name,
                    row3: seeCompany1.length - 1,
                    row4: 5,
                    },
            })
        }

        if(jobNameRow1 != null && jobNameRow1 == arrayJson[10].title) {
            
            let seeCompany1 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[10].company)
            })

            console.log(seeCompany1)

            navigate("/dashboard/detail", {
                state: 
                    {
                    row1: arrayJson[10],
                    row2: name,
                    row3: seeCompany1.length - 1,
                    row4: 10,
                    },
            })
        }

        if(jobNameRow1 != null && jobNameRow1 == arrayJson[15].title) {
            
            let seeCompany1 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[15].company)
            })

            console.log(seeCompany1)

            navigate("/dashboard/detail", {
                state: 
                    {
                    row1: arrayJson[15],
                    row2: name,
                    row3: seeCompany1.length - 1,
                    row4: 15,
                    },
            })
        }
    }

    const row2EventListener = () => {

        if(jobNameRow2 != null && jobNameRow2 == arrayJson[1].title) {

            let seeCompany2 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[1].company)
            })

            console.log(seeCompany2)

            navigate("/dashboard/detail", {
                state: 
                    {
                    row1: arrayJson[1],
                    row2: name,
                    row3: seeCompany2.length - 1,
                    row4: 1,
                    },
            })
        }

        if(jobNameRow2 != null && jobNameRow2 == arrayJson[6].title) {

            let seeCompany2 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[6].company)
            })

            console.log(seeCompany2)

            navigate("/dashboard/detail", {
                state: 
                    {
                    row1: arrayJson[6],
                    row2: name,
                    row3: seeCompany2.length - 1,
                    row4: 6,
                    },
            })
        }

        if(jobNameRow2 != null && jobNameRow2 == arrayJson[11].title) {

            let seeCompany2 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[11].company)
            })

            console.log(seeCompany2)

            navigate("/dashboard/detail", {
                state: 
                    {
                    row1: arrayJson[11],
                    row2: name,
                    row3: seeCompany2.length - 1,
                    row4: 11,
                    },
            })
        }

        if(jobNameRow2 != null && jobNameRow2 == arrayJson[16].title) {

            let seeCompany2 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[16].company)
            })

            console.log(seeCompany2)

            navigate("/dashboard/detail", {
                state: 
                    {
                    row1: arrayJson[16],
                    row2: name,
                    row3: seeCompany2.length - 1,
                    row4: 16,
                    },
            })
        }
    }

    const row3EventListener = () => {

        if(jobNameRow3 != null && jobNameRow3 == arrayJson[2].title) {

            let seeCompany3 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[2].company)
            })

            console.log(seeCompany3)


            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[2],
                        row2: name,
                        row3: seeCompany3.length - 1,
                        row4: 2,
                    },
            })
        }

        if(jobNameRow3 != null && jobNameRow3 == arrayJson[7].title) {

            let seeCompany3 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[7].company)
            })

            console.log(seeCompany3)


            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[7],
                        row2: name,
                        row3: seeCompany3.length - 1,
                        row4: 7,
                    },
            })
        }

        if(jobNameRow3 != null && jobNameRow3 == arrayJson[12].title) {

            let seeCompany3 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[12].company)
            })

            console.log(seeCompany3)


            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[12],
                        row2: name,
                        row3: seeCompany3.length - 1,
                        row4: 12,
                    },
            })
        }

        if(jobNameRow3 != null && jobNameRow3 == arrayJson[17].title) {

            let seeCompany3 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[17].company)
            })

            console.log(seeCompany3)


            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[17],
                        row2: name,
                        row3: seeCompany3.length - 1,
                        row4: 17,
                    },
            })
        }
    }

    const row4EventListener = () => {

        if(jobNameRow4 != null && jobNameRow4 == arrayJson[3].title) {

            let seeCompany4 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[3].company)
            })

            console.log(seeCompany4)

            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[3],
                        row2: name,
                        row3: seeCompany4.length - 1,
                        row4: 3,
                    },
            })
        }

        if(jobNameRow4 != null && jobNameRow4 == arrayJson[8].title) {

            let seeCompany4 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[8].company)
            })

            console.log(seeCompany4)

            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[8],
                        row2: name,
                        row3: seeCompany4.length - 1,
                        row4: 8,
                    },
            })
        }

        if(jobNameRow4 != null && jobNameRow4 == arrayJson[13].title) {

            let seeCompany4 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[13].company)
            })

            console.log(seeCompany4)

            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[13],
                        row2: name,
                        row3: seeCompany4.length - 1,
                        row4: 13,
                    },
            })
        }
    }

    const row5EventListener = () => {

        if(jobNameRow5 != null && jobNameRow5 == arrayJson[4].title) {

            let seeCompany5 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[4].company)
            })

            console.log(seeCompany5)

            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[4],
                        row2: name,
                        row3: seeCompany5.length - 1,
                        row4: 4,
                    },
            })
        }

        if(jobNameRow5 != null && jobNameRow5 == arrayJson[9].title) {

            let seeCompany5 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[9].company)
            })

            console.log(seeCompany5)

            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[9],
                        row2: name,
                        row3: seeCompany5.length - 1,
                        row4: 9,
                    },
            })
        }

        if(jobNameRow5 != null && jobNameRow5 == arrayJson[14].title) {

            let seeCompany5 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[14].company)
            })

            console.log(seeCompany5)

            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[14],
                        row2: name,
                        row3: seeCompany5.length - 1,
                        row4: 14,
                    },
            })
        }
    }

    const row6EventListener = () => {

        if(jobNameRow6 != null && jobNameRow6 == arrayJson[7].title) {

            let seeCompany6 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[7].company)
            })

            console.log(seeCompany6)

            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[7],
                        row2: name,
                        row3: seeCompany6.length - 1,
                        row4: 7,
                    },
            })
        }

        if(jobNameRow6 != null && jobNameRow6 == arrayJson[12].title) {

            let seeCompany6 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[12].company)
            })

            console.log(seeCompany6)

            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[12],
                        row2: name,
                        row3: seeCompany6.length - 1,
                        row4: 12,
                    },
            })
        }

        if(jobNameRow6 != null && jobNameRow6 == arrayJson[17].title) {

            let seeCompany6 = arrayJson.filter((param) => {
                return  param.company.includes(arrayJson[17].company)
            })

            console.log(seeCompany6)

            navigate("/dashboard/detail", {
                state: 
                    {
                        row1: arrayJson[17],
                        row2: name,
                        row3: seeCompany6.length - 1,
                        row4: 17,
                    },
            })
        }
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    
    return(
      
            <div className={`${maindashboardContent5Dynamic} ${maindashboardContent4Dynamic} ${maindashboardContent3Dynamic} ${maindashboardContent2Dynamic} ${maindashboardContent1Dynamic}`}>

                <div className="headerdashboard">
                    <h1 className='titledashboard1'>Gregoro</h1>
                    <h1 className='titledashboard2'>JOBS</h1>
                    <div className="subheader1">
                        <h1 className='fullname1'>Hello, {name}</h1>
                        <button className='logoutbutton' onClick={logOut}>Logout</button>
                    </div>
                </div>
                
                <div className="filtercontainer">
                    <h1 className='jobdescription'>Jobs Description</h1>
                    <img src={job} alt="job" className="jobicon"/>
                    
                    <h1 className='location'>Location</h1>
                    <input className='locationinput' placeholder="Filter by city" onChange={searchFilterLocation} ></input>
                    <img src={joblocation} alt="location" className="locationicon"/>     
                    <input className='jobdinput' placeholder="Filter by title" onChange={searchFilterTitle}></input>
                </div>
                    <input className='checkbox1' type="checkbox"></input>
                    <h1 className='labelcheckbox1'>Full-time</h1>
                    <button className='searchfilterbutton' onClick={searchFilter}>Search</button>

                <AnimatePresence>
                    {modal && (<motion.div className='containerpopup'
                    initial = {{
                        opacity: 0,
                        left: 20,
                        scale: 0
                    }}
                    animate = {{
                        opacity: 1,
                        left: 540,
                        scale: 1
                    
                    }}
                    exit ={{
                        opacity: 0,
                        left: 1060,
                        scale: 0
                    }}>
                        <motion.h1 className='titlecontainerpopup'>ATTENTION</motion.h1>
                        <motion.div className='containerpopuptitleline'></motion.div>
                        <motion.p className='suggestioncontainerpopup'>Please use specific word for searching !</motion.p>
                        <motion.button className='okcontainerpopupbutton' onClick={toggleModal}>OK</motion.button>
                    </motion.div>)}
                </AnimatePresence>
                
                

                <div className='tablecontainer'>
                    <table className={`${jobtableContent5Dynamic} ${jobtableContent4Dynamic} ${jobtableContent3Dynamic} ${jobtableContent2Dynamic} ${jobtableContent1Dynamic}`}>
                        <thead>
                            <tr>
                                <th className='jobtableheader' >Job List</th>                                
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr> 
                                <td className='jobtableline1'></td>
                                <td className='jobtableline2'></td>
                                <td className='jobtableline3'></td>
                                <td className='jobtableline4'></td>
                            </tr>

                            <tr>
                                <td className='jobtablename1' onClick={row1EventListener}>{jobNameRow1}</td>
                                <td className='jobtablename2' onClick={row1EventListener}></td>
                                <td className='jobtablelocation1'onClick={row1EventListener}></td>
                                <td className='jobtablelocation2'onClick={row1EventListener}>{locationRow1}</td>
                            </tr>

                            <tr>
                                <td className='jobtablecompanyname1' onClick={row1EventListener}>{companyNameRow1} - <p className='jobtimestatus1' onClick={row1EventListener}>{timeStatusRow1}</p></td>
                                <td className='jobtablecompanyname2' onClick={row1EventListener}></td>
                                <td className='jobtablepostingtimecreated1' onClick={row1EventListener}></td>
                                <td className='jobtablepostingtimecreated2' onClick={row1EventListener}>{dateAndTimeConvertRow1}</td>
                            </tr>

                            <tr>
                                <td className='jobtableline5'></td>
                                <td className='jobtableline6'></td>
                                <td className='jobtableline7'></td>
                                <td className='jobtableline8'></td>
                            </tr>

                            <tr>
                                <td className={jobtablename3Content1Dynamic} onClick={row2EventListener}>{jobNameRow2}</td>
                                <td className={jobtablename4Content1Dynamic} onClick={row2EventListener}></td>
                                <td className={jobtablelocation3Content1Dynamic} onClick={row2EventListener}></td>
                                <td className={jobtablelocation4Content1Dynamic} onClick={row2EventListener}>{locationRow2}</td>
                            </tr>

                            <tr>
                                <td className={jobtablecompanyname3Content1Dynamic} onClick={row2EventListener}>{companyNameRow2} - <p className={jobtimestatus2Content1Dynamic} onClick={row2EventListener}>{timeStatusRow2}</p></td>
                                <td className={jobtablecompanyname4Content1Dynamic} onClick={row2EventListener}></td>
                                <td className={jobtablepostingtimecreated3Content1Dynamic} onClick={row2EventListener}></td>
                                <td className={jobtablepostingtimecreated4Content1Dynamic} onClick={row2EventListener}>{dateAndTimeConvertRow2}</td>
                            </tr>

                            <tr>
                                <td className={jobtableline9Content1Dynamic}></td>
                                <td className={jobtableline10Content1Dynamic}></td>
                                <td className={jobtableline11Content1Dynamic}></td>
                                <td className={jobtableline12Content1Dynamic}></td>
                            </tr>

                            <tr>
                                <td className={`${jobtablename5Content2Dynamic} ${jobtablename5Content1Dynamic}`} onClick={row3EventListener}>{jobNameRow3}</td>
                                <td className={`${jobtablename6Content2Dynamic} ${jobtablename6Content1Dynamic}`} onClick={row3EventListener}></td>
                                <td className={`${jobtablelocation5Content2Dynamic} ${jobtablelocation5Content1Dynamic}`} onClick={row3EventListener}></td>
                                <td className={`${jobtablelocation6Content2Dynamic} ${jobtablelocation6Content1Dynamic}`} onClick={row3EventListener}>{locationRow3}</td>
                            </tr>

                            <tr>
                                <td className={`${jobtablecompanyname5Content2Dynamic} ${jobtablecompanyname5Content1Dynamic}`} onClick={row3EventListener}>{companyNameRow3} - <p className={`${jobtimestatus3Content2Dynamic} ${jobtimestatus3Content1Dynamic}`} onClick={row3EventListener}>{timeStatusRow3}</p></td>
                                <td className={`${jobtablecompanyname6Content2Dynamic} ${jobtablecompanyname6Content1Dynamic}`} onClick={row3EventListener}></td>
                                <td className={`${jobtablepostingtimecreated5Content2Dynamic} ${jobtablepostingtimecreated5Content1Dynamic}`} onClick={row3EventListener}></td>
                                <td className={`${jobtablepostingtimecreated6Content2Dynamic} ${jobtablepostingtimecreated6Content1Dynamic}`} onClick={row3EventListener}>{dateAndTimeConvertRow3}</td>
                            </tr>

                            <tr>
                                <td className={`${jobtableline13Content2Dynamic} ${jobtableline13Content1Dynamic}`}></td>
                                <td className={`${jobtableline14Content2Dynamic} ${jobtableline14Content1Dynamic}`}></td>
                                <td className={`${jobtableline15Content2Dynamic} ${jobtableline15Content1Dynamic}`}></td>
                                <td className={`${jobtableline16Content2Dynamic} ${jobtableline16Content1Dynamic}`}></td>
                            </tr>

                            <tr>
                                <td className={`${jobtablename7Content3Dynamic} ${jobtablename7Content2Dynamic} ${jobtablename7Content1Dynamic}`} onClick={row4EventListener}>{jobNameRow4}</td>
                                <td className={`${jobtablename8Content3Dynamic} ${jobtablename8Content2Dynamic} ${jobtablename8Content1Dynamic}`} onClick={row4EventListener}></td>
                                <td className={`${jobtablelocation7Content3Dynamic} ${jobtablelocation7Content2Dynamic} ${jobtablelocation7Content1Dynamic}`} onClick={row4EventListener}></td>
                                <td className={`${jobtablelocation8Content3Dynamic} ${jobtablelocation8Content2Dynamic} ${jobtablelocation8Content1Dynamic}`} onClick={row4EventListener}>{locationRow4}</td>
                            </tr>

                            <tr>
                                <td className={`${jobtablecompanyname7Content3Dynamic} ${jobtablecompanyname7Content2Dynamic} ${jobtablecompanyname7Content1Dynamic}`} onClick={row4EventListener}>{companyNameRow4} - <p className={`${jobtimestatus4Content3Dynamic} ${jobtimestatus4Content2Dynamic} ${jobtimestatus4Content1Dynamic}`} onClick={row4EventListener}>{timeStatusRow4}</p></td>
                                <td className={`${jobtablecompanyname8Content3Dynamic} ${jobtablecompanyname8Content2Dynamic} ${jobtablecompanyname8Content1Dynamic}`} onClick={row4EventListener}></td>
                                <td className={`${jobtablepostingtimecreated7Content3Dynamic} ${jobtablepostingtimecreated7Content2Dynamic} ${jobtablepostingtimecreated7Content1Dynamic}`} onClick={row4EventListener}></td>
                                <td className={`${jobtablepostingtimecreated8Content3Dynamic} ${jobtablepostingtimecreated8Content2Dynamic} ${jobtablepostingtimecreated8Content1Dynamic}`} onClick={row4EventListener}>{dateAndTimeConvertRow4}</td>
                            </tr>

                            <tr>
                                <td className={`${jobtableline17Content3Dynamic} ${jobtableline17Content2Dynamic} ${jobtableline17Content1Dynamic}`}></td>
                                <td className={`${jobtableline18Content3Dynamic} ${jobtableline18Content2Dynamic} ${jobtableline18Content1Dynamic}`}></td>
                                <td className={`${jobtableline19Content3Dynamic} ${jobtableline19Content2Dynamic} ${jobtableline19Content1Dynamic}`}></td>
                                <td className={`${jobtableline20Content3Dynamic} ${jobtableline20Content2Dynamic} ${jobtableline20Content1Dynamic}`}></td>
                            </tr>

                            
                            <tr>
                                <td className={`${jobtablename9Content4Dynamic} ${jobtablename9Content3Dynamic} ${jobtablename9Content2Dynamic} ${jobtablename9Content1Dynamic}`} onClick={row5EventListener}>{jobNameRow5}</td>
                                <td className={`${jobtablename10Content4Dynamic} ${jobtablename10Content3Dynamic} ${jobtablename10Content2Dynamic} ${jobtablename10Content1Dynamic}`} onClick={row5EventListener}></td>
                                <td className={`${jobtablelocation9Content4Dynamic} ${jobtablelocation9Content3Dynamic} ${jobtablelocation9Content2Dynamic} ${jobtablelocation9Content1Dynamic}`} onClick={row5EventListener}></td>
                                <td className={`${jobtablelocation10Content4Dynamic} ${jobtablelocation10Content3Dynamic} ${jobtablelocation10Content2Dynamic} ${jobtablelocation10Content1Dynamic}`} onClick={row5EventListener}>{locationRow5}</td>
                            </tr>

                            <tr>
                                <td className={`${jobtablecompanyname9Content4Dynamic} ${jobtablecompanyname9Content3Dynamic} ${jobtablecompanyname9Content2Dynamic} ${jobtablecompanyname9Content1Dynamic}`} onClick={row5EventListener}>{companyNameRow5} - <p className={`${jobtimestatus5Content4Dynamic} ${jobtimestatus5Content3Dynamic} ${jobtimestatus5Content2Dynamic} ${jobtimestatus5Content1Dynamic}`} onClick={row5EventListener}>{timeStatusRow5}</p></td>
                                <td className={`${jobtablecompanyname10Content4Dynamic} ${jobtablecompanyname10Content3Dynamic} ${jobtablecompanyname10Content2Dynamic} ${jobtablecompanyname10Content1Dynamic}`} onClick={row5EventListener}></td>
                                <td className={`${jobtablepostingtimecreated9Content4Dynamic} ${jobtablepostingtimecreated9Content3Dynamic} ${jobtablepostingtimecreated9Content2Dynamic} ${jobtablepostingtimecreated9Content1Dynamic}`} onClick={row5EventListener}></td>
                                <td className={`${jobtablepostingtimecreated10Content4Dynamic} ${jobtablepostingtimecreated10Content3Dynamic} ${jobtablepostingtimecreated10Content2Dynamic} ${jobtablepostingtimecreated10Content1Dynamic}`} onClick={row5EventListener}>{dateAndTimeConvertRow5}</td>
                            </tr>

                            <tr>
                                <td className={`${jobtableline21Content4Dynamic} ${jobtableline21Content3Dynamic} ${jobtableline21Content2Dynamic} ${jobtableline21Content1Dynamic}`}></td>
                                <td className={`${jobtableline22Content4Dynamic} ${jobtableline22Content3Dynamic} ${jobtableline22Content2Dynamic} ${jobtableline22Content1Dynamic}`}></td>
                                <td className={`${jobtableline23Content4Dynamic} ${jobtableline23Content3Dynamic} ${jobtableline23Content2Dynamic} ${jobtableline23Content1Dynamic}`}></td>
                                <td className={`${jobtableline24Content4Dynamic} ${jobtableline24Content3Dynamic} ${jobtableline24Content2Dynamic} ${jobtableline24Content1Dynamic}`}></td> 
                            </tr>

                            <tr>
                                <td className={`${listbetween1Content5Dynamic} ${listbetween1Content4Dynamic} ${listbetween1Content3Dynamic} ${listbetween1Content2Dynamic} ${listbetween1Content1Dynamic}`} colSpan="4"> . . . </td>
                            </tr>

                            <tr>
                                <td className={`${jobtableline25Content5Dynamic} ${jobtableline25Content4Dynamic} ${jobtableline25Content3Dynamic} ${jobtableline25Content2Dynamic} ${jobtableline25Content1Dynamic}`}></td>
                                <td className={`${jobtableline26Content5Dynamic} ${jobtableline26Content4Dynamic} ${jobtableline26Content3Dynamic} ${jobtableline26Content2Dynamic} ${jobtableline26Content1Dynamic}`}></td>
                                <td className={`${jobtableline27Content5Dynamic} ${jobtableline27Content4Dynamic} ${jobtableline27Content3Dynamic} ${jobtableline27Content2Dynamic} ${jobtableline27Content1Dynamic}`}></td>
                                <td className={`${jobtableline28Content5Dynamic} ${jobtableline28Content4Dynamic} ${jobtableline28Content3Dynamic} ${jobtableline28Content2Dynamic} ${jobtableline28Content1Dynamic}`}></td>
                            </tr>

                            <tr>
                                <td className={`${jobtablename11Content5Dynamic} ${jobtablename11Content4Dynamic} ${jobtablename11Content3Dynamic} ${jobtablename11Content2Dynamic} ${jobtablename11Content1Dynamic}`} onClick={row6EventListener}>{jobNameRow6}</td>
                                <td className={`${jobtablename12Content5Dynamic} ${jobtablename12Content4Dynamic} ${jobtablename12Content3Dynamic} ${jobtablename12Content2Dynamic} ${jobtablename12Content1Dynamic}`} onClick={row6EventListener}></td>
                                <td className={`${jobtablelocation11Content5Dynamic} ${jobtablelocation11Content4Dynamic} ${jobtablelocation11Content3Dynamic} ${jobtablelocation11Content2Dynamic} ${jobtablelocation11Content1Dynamic}`} onClick={row6EventListener}></td>
                                <td className={`${jobtablelocation12Content5Dynamic} ${jobtablelocation12Content4Dynamic} ${jobtablelocation12Content3Dynamic} ${jobtablelocation12Content2Dynamic} ${jobtablelocation12Content1Dynamic}`} onClick={row6EventListener}>{locationRow6}</td>
                            </tr>

                            <tr>
                                <td className={`${jobtablecompanyname11Content5Dynamic} ${jobtablecompanyname11Content4Dynamic} ${jobtablecompanyname11Content3Dynamic} ${jobtablecompanyname11Content2Dynamic} ${jobtablecompanyname11Content1Dynamic}`} onClick={row6EventListener}>{companyNameRow6} - <p className={`${jobtimestatus6Content5Dynamic} ${jobtimestatus6Content4Dynamic} ${jobtimestatus6Content3Dynamic} ${jobtimestatus6Content2Dynamic} ${jobtimestatus6Content1Dynamic}`} onClick={row6EventListener}>{timeStatusRow6}</p></td>
                                <td className={`${jobtablecompanyname12Content5Dynamic} ${jobtablecompanyname12Content4Dynamic} ${jobtablecompanyname12Content3Dynamic} ${jobtablecompanyname12Content2Dynamic} ${jobtablecompanyname12Content1Dynamic}`} onClick={row6EventListener}></td>
                                <td className={`${jobtablepostingtimecreated11Content5Dynamic} ${jobtablepostingtimecreated11Content4Dynamic} ${jobtablepostingtimecreated11Content3Dynamic} ${jobtablepostingtimecreated11Content2Dynamic} ${jobtablepostingtimecreated11Content1Dynamic}`} onClick={row6EventListener}></td>
                                <td className={`${jobtablepostingtimecreated12Content5Dynamic} ${jobtablepostingtimecreated12Content4Dynamic} ${jobtablepostingtimecreated12Content3Dynamic} ${jobtablepostingtimecreated12Content2Dynamic} ${jobtablepostingtimecreated12Content1Dynamic}`} onClick={row6EventListener}>{dateAndTimeConvertRow6}</td>
                            </tr>

                            <tr>
                                <td className={`${jobtableline29Content5Dynamic} ${jobtableline29Content4Dynamic} ${jobtableline29Content3Dynamic} ${jobtableline29Content2Dynamic} ${jobtableline29Content1Dynamic}`}></td>
                                <td className={`${jobtableline30Content5Dynamic} ${jobtableline30Content4Dynamic} ${jobtableline30Content3Dynamic} ${jobtableline30Content2Dynamic} ${jobtableline30Content1Dynamic}`}></td>
                                <td className={`${jobtableline31Content5Dynamic} ${jobtableline31Content4Dynamic} ${jobtableline31Content3Dynamic} ${jobtableline31Content2Dynamic} ${jobtableline31Content1Dynamic}`}></td>
                                <td className={`${jobtableline32Content5Dynamic} ${jobtableline32Content4Dynamic} ${jobtableline32Content3Dynamic} ${jobtableline32Content2Dynamic} ${jobtableline32Content1Dynamic}`}></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className={`${loadmorebutton1Content5Dynamic} ${loadmorebutton1Content4Dynamic} ${loadmorebutton1Content3Dynamic} ${loadmorebutton1Content2Dynamic} ${loadmorebutton1Content1Dynamic}`} onClick={buttonNext}>Load More</button>

                <div className={`${pagecontainerContent5Dynamic} ${pagecontainerContent4Dynamic} ${pagecontainerContent3Dynamic} ${pagecontainerContent2Dynamic} ${pagecontainerContent1Dynamic}`}>
                    <div className={doublePrevStuck} onClick={buttonDoublePrevious}>
                        <img src={right2narrow1} alt="right2narrow1left" className="right2narrow1left"/>
                        <img src={right2narrow1full} alt="right2narrow1fullleft" className="right2narrow1fullleft"/>
                    </div>

                    <div className={oncePrevStuck} onClick={buttonPrevious}>
                        <img src={right1narrow1} alt="right1narrow1" className="right1narrow1left"/>
                        <img src={right1narrow1full} alt="right1narrow1full" className="right1narrow1fullleft"/>  
                    </div>

                    <div className={dynamicPage1} >1</div>
                    <div className={dynamicPage2} >2</div>
                    <div className={dynamicPage3} >3</div>
                    <div className={dynamicPage4} >4</div>

                    <div className={onceNextStuck} onClick={buttonNext}>
                        <img src={right1narrow1} alt="right2narrow1right" className="right1narrow1right"/>
                        <img src={right1narrow1full} alt="right2narrow1fullright" className="right1narrow1fullright"/>
                    </div>

                    <div className={doubleNextStuck} onClick={buttonDoubleNext}>
                        <img src={right2narrow1} alt="right2narrow1right" className="right2narrow1right"/>
                        <img src={right2narrow1full} alt="right2narrow1fullright" className="right2narrow1fullright"/>
                    </div>
                </div>

                <div className={`${pagecontainerindividualdatarecordContent5Dynamic} ${pagecontainerindividualdatarecordContent4Dynamic} ${pagecontainerindividualdatarecordContent3Dynamic} ${pagecontainerindividualdatarecordContent2Dynamic} ${pagecontainerindividualdatarecordContent1Dynamic}`} >Total {totalRecordDataContent6Dynamic} of {dataRecord}</div>

                
             </div>

             

       
        
    )
}

export default Dashboard