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
function loadFileAsText(){
    console.log("rjkfjg");
    var fileToLoad = document.getElementById("inputfile").files[0]
    console.log(fileToLoad)
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        textFromFile =textFromFileLoaded ;
        console.log(textFromFile);
        // displayContents(textFromFileLoaded);
        // document.getElementById("output").innerHTML = textFromFileLoaded;
        setNews(textFromFile)
    };
  
    fileReader.readAsText(fileToLoad, "UTF-8");
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
        <div className='convert'>
            <div className='uploadbtn'>
            <input type="file" id="inputfile"></input>
            <Button variant="contained" onClick={loadFileAsText}>Upload .txt</Button> 
            {/* <h2 id="output"></h2> */}
            </div>
            <div className='uploadingbtn'>
                <h2>OR</h2>
                <h3>Enter custom text</h3> 
            </div>
            <div className='conversionform'>
            <form className='formconvert' onSubmit={(e)=>{e.preventDefault()}}>
                <textarea rows='20' cols='40' onChange={handleSubmit}></textarea>
                {/* <button onClick={handleSumarize}>Sumarize and Simplify</button> */}
                <Button variant="contained" onClick={handleSumarize} >Summarize and Simplify</Button>
                {/* <button>Simplify</button> */}
            </form>
            <textarea rows='20' cols='40' value={simnews}></textarea>
            <textarea rows='20' cols='40' value={simplinews}></textarea>
            {/* <input type="text" ></input> */}
            </div>
        </div>
  )
}

export default Convert