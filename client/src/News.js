import React, { useEffect } from "react";
import "./News.css";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import img from "../src/newsDefault.png"
function News(props) {
  const [simplified, setSimplified] = useState(false)
  const [open, setOpen] = useState(false);
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };
  let news = props.content;
  let simplifiedNews = props.simplify
  return (
    <div className="newsContainer">
      <div className="mainContainer">
        <div className="newsDiv">
          <div className="newsMain">
            <h1>{props.title}</h1>
            <p className="date">{props.date}<br></br>{props.source}</p>
            <p className="newsContent">{props.description}
              </p>
              {simplified?<div className="ribbon">
              <p>Simplified News</p>
              <p className="ribbonIn"></p>
              </div>:''}
            <p className="newsContent">{simplified?simplifiedNews:news}
              </p>
          </div>
          <div className="actionDiv">
          </div>
          <div className="readMore">
            <p><a className="linkSrc" onClick={handleClickToOpen}>{props.getPageLang=='en'?'Get Full Context': 'पूरा संदर्भ प्राप्त करें'}</a></p>
            <Dialog fullScreen open={open} onClose={handleToClose}>
              <DialogActions>
                <Button onClick={handleToClose} 
                        color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
              <DialogContent>
                <DialogContentText>
                  <iframe class="iframe" src={props.additionalUrl}></iframe>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="newsImage">
          <img src={props.image?props.image:img} alt="newsImage"></img>
        </div>
      </div>
    </div>
  );
}

export default News;
