import React from 'react'
import './Convert.css'
import { useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material';
function Convert() {
const [news, setNews] = useState()
const [simnews, setSimNews] = useState()
const [simplinews, setSimpliNews] = useState()
    const handleSubmit = (e)=>{
        setNews(e.target.value)
    }
let textFromFile = " "
function loadFileAsText(e){
    var fileToLoad = document.getElementById("input-file").files[0]
    console.log(fileToLoad)
    e.preventDefault();
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        // console.log(fileLoadedEvent)
        console.log(textFromFileLoaded)
        // textFromFile =textFromFileLoaded ;
        // console.log("This is Textfile"+Object.values(textFromFile));
        // document.getElementById("output").value = textFromFileLoaded;
        // document.getElementById("inputting-file")
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
    
    setNews(textFromFile)
    handleSumarize()
  }
const handleSumarize = async()=>{
    let data = {'news':news, "simplify":"this"}
    let thisdata = data
    console.log(thisdata)
    let config = {
        method: 'POST',
        mode: 'cors',
        url: "http://127.0.0.1:5000/get",
        data:thisdata
    }
    await axios(config).then((e)=>{console.log(e)}).catch((e)=>{console.log(e)})
    const gotData = await axios.get("http://127.0.0.1:5000/get")
    console.log("Data"+gotData.data)
    console.log("News"+gotData.data.news)
    console.log("SImplify"+gotData.data.simplify)
    setSimNews(gotData.data.news)
    setSimpliNews(gotData.data.simplify)
}
    console.log(news)
  return (
        <div className='convertout'>
        <div className='convert'>
            <div className='uploadbtn'>
            <input type="file" id="input-file"></input>
            <Button variant="contained" onClick={loadFileAsText}  style={{maxWidth: '100px', maxHeight: '30px', minWidth: '100px', minHeight: '30px', fontSize:10}}>Upload .txt</Button> 
            <input id="output" value={textFromFile}></input>
            </div>
            <div className='uploadingbtn'>
                <h2>OR</h2>
                <h3>Enter custom text</h3> 
            </div>
            <div className='conversionform'>
            <form className='formconvert' onSubmit={(e)=>{e.preventDefault()}}>
                <textarea className="sendingArea" id="inputting-file" rows='20' cols='40' onChange={handleSubmit}></textarea>
                {/* <button onClick={handleSumarize}>Sumarize and Simplify</button> */}
                <Button variant="contained" onClick={handleSumarize} style={{margin: "10px"}}>Summarize and Simplify</Button>
                {/* <button>Simplify</button> */}
            </form>
            <div className='simplified'>
            <textarea className="textingArea" rows='20' cols='40' value={simnews}></textarea>
            <h3 className='newstext'>Summarized</h3>
            </div>
            <div className='simplified'>
            <textarea className="textingArea" rows='20' cols='40' value={simplinews}></textarea>
            <h3 className='newstext'>Simplified</h3>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Convert