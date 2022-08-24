import "./Navbar.css";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
function Navbar(props) {
  const [visible ,setVisible] = useState(false)
    const handleChange = ()=>{
      visible?setVisible(false):setVisible(true)
    }
    const [inputText, setInputText] = useState('');
  useEffect(()=>{
    props.searchWords(inputText);
  })
  const handleVoiceSearch=()=>{
    props.searchWords(inputText);
  } 
  const handleSearch = (e) => {
    setInputText(e.target.value);
    handleVoiceSearch();
  }
  return (
    <div className="Nav">
      <div className="menu" onClick={(e)=>{handleChange();
      props.visible(visible)
      }}><MenuIcon/></div>
      <div className="icon"></div>
      <div className="search">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
          alt="Search"
        />
        <input type="text" id="searchIt" placeholder={props.getSearchLang=='en'?'Search News...':'समाचार खोजें...'} onChange={handleSearch} />
        <KeyboardVoiceIcon sx={{ fontSize: "20px" }} 
                style={{cursor:'pointer'}}
              >    
      </KeyboardVoiceIcon>
      </div>
    </div>
  );
    }
export default Navbar;
