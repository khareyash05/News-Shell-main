import React from 'react'
import './Convert.css'
import { useState } from 'react'
import axios from 'axios'
function Convert() {
const [news, setNews] = useState()
const [simnews, setSimNews] = useState()
const [simplinews, setSimpliNews] = useState()
    const handleSubmit = (e)=>{
        setNews(e.target.value)
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
  return (<div className='convert'>
    <form className='formconvert' onSubmit={(e)=>{e.preventDefault()}}>
        <textarea rows='20' cols='40' onChange={handleSubmit}></textarea>
        <button onClick={handleSumarize}>Sumarize and Simplify</button>
        {/* <button>Simplify</button> */}
        </form>
        <textarea rows='20' cols='40' value={simnews}></textarea>
        <textarea rows='20' cols='40' value={simplinews}></textarea>
        {/* <input type="text" ></input> */}
        </div>
  )
}

export default Convert