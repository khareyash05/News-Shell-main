import React, { useEffect } from 'react'
import './Sidebar.css'
import LanguageIcon from '@mui/icons-material/Language';
import FlagIcon from '@mui/icons-material/Flag';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState } from 'react';
function Sidebar(props) {
  const [currLanguge, setCurrLanguage] = useState('en');
  const [view, setView] = useState('News');
  const {pathname} = useLocation();
  // var language = JSON.parse(localStorage.getItem("currentLanguage"))
  useEffect(()=>{
    var language = sessionStorage.getItem("currentLanguage")
    language?props.checkLang(language):props.checkLang('en')
  })
  
  var language = sessionStorage.getItem("currentLanguage")

  return (
    <div className='sideBar'>
      <div className="contNavigation">
      <NavLink exact to='/' isActive={()=>['/','/news/more'].includes(pathname)} activeClassName='chooseContent2' className='chooseCont'><div onClick={()=>{setView('News');props.checkView(view)}}>
        <div className='chooseContent'><LanguageIcon></LanguageIcon>{language=='en'||language==null?'News':
"समाचार"}</div></div></NavLink>
        <NavLink to='/policies' activeClassName='chooseContent2' className='chooseCont'><div onClick={()=>{setView('Policies');props.checkView(view);}}><div className='chooseContent'><FlagIcon></FlagIcon>{language=='en'||language==null?'Policies':
'नीतियाँ'}</div></div></NavLink>
      </div>
      <div className='lang'>
        <div className='langChoose'>
        <p>{language=='en'||language==null?'Choose Language':
'भाषा चुनें'}</p>
        <select className='selectLang' onChange={e=>{
        // localStorage.setItem("currentLanguage",JSON.stringify(e.target.value))
        sessionStorage.setItem("currentLanguage",e.target.value)
        setCurrLanguage(e.target.value)
        }}>
          <option value="en" selected>English(India)</option>
          <option value="hi">हिंदी(भारत)</option>
        </select>
        </div>
      </div>
      <div className='bui'>
        <Button variant="contained" href="/convert" >Enter Local Input</Button>
      </div>
    </div>
  )
}

export default Sidebar