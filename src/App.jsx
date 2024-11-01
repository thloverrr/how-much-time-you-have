
import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

function App() {

const [TheDifrent,SetTheDifrnet] = useState("")
const[ First,SetFirst] = useState(0);
const [Secend,SetSecend] = useState(0);

const TimeCalc = () =>{
  // splite the time to hourse and min
  
  const FirstAry = First.toString().split(":")
  const SecendAry = Secend.toString().split(":")
  let ft;

 // clace 
  if(FirstAry.length===2 & SecendAry.length === 2){
    if(FirstAry[0]>=SecendAry[0]){
      const FirstInMin = Number(FirstAry[0]*60) + Number(FirstAry[1]);
      console.log(FirstInMin ,"min")
      const SecendInMin = Number(Number(SecendAry[0])+24)*60 + Number(SecendAry[1]);
      console.log(FirstInMin , SecendInMin);
      let resulte = SecendInMin - FirstInMin;
    
      let DeffrentInHoure = Math.trunc(resulte/60);
      console.log(DeffrentInHoure)
      let DeffrentInMin =  Number(resulte) - Number(DeffrentInHoure*60);
      console.log(DeffrentInMin , DeffrentInHoure,"hours and min");
      ft = `${DeffrentInHoure}:${DeffrentInMin}`
    }
    
    else{  
      const FirstInMin = Number(FirstAry[0]*60) + Number(FirstAry[1]);
      const SecendInMin = Number(SecendAry[0]*60) + Number(SecendAry[1]);
      console.log(FirstInMin , SecendInMin);
      let resulte = SecendInMin - FirstInMin;
    
      let DeffrentInHoure = Math.trunc(resulte/60);
      let DeffrentInMin =  resulte - DeffrentInHoure*60;
      console.log(DeffrentInHoure,"hours ",DeffrentInMin  ,"min");
      ft = `${DeffrentInHoure}:${DeffrentInMin}`
    
    }
  
    SetTheDifrnet(ft)
  }
}

useEffect(TimeCalc,[First,Secend])


const FirstSaver = (event) =>{
  SetFirst(event.target.value)
  console.log(event.target.value)
  console.log(First)
}
const SecendSaver = (event) =>{
  SetSecend(event.target.value)
  console.log(event.target.value)
  console.log(Secend)
}



return (
    <>
    <input type="time" placeholder='Start Time' value={First} onChange={FirstSaver} />
    <input type="time" placeholder='End Time' value={Secend} onChange={SecendSaver}/>
    <h5>{TheDifrent?  `You have ${TheDifrent} to work`: "Chose the start and end time"} </h5>
    </>
  )
}

export default App
