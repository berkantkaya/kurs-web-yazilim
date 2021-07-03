import React, { Component } from 'react'
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
export default class Footer extends Component {
    render() {
        return (
            <Fot>
                <section>İLETİŞİM</section>
               <div className="row">
               <div className=" col-8 col-md-2">
               <span><FaIcons.FaPhoneSquareAlt/>  Telefon</span>
                  </div> 
                  <div className="col-md-2">
                  <span><FaIcons.FaInstagramSquare/>  İnstagram</span>
                  </div> 
                  <div className="col-md-2">
                   <span><FaIcons.FaWhatsappSquare/> Whatsapp</span>
                  </div> 
                  <div className="col-md-2">
                  <span> <FaIcons.FaTwitterSquare/> Twitter</span>
                  </div> 
                  <div className="col-md-2">
                   <span><FaIcons.FaGithub/> Github</span>
                  </div> 
                  <div className="col-md-2">
                 <span> <FaIcons.FaLinkedinIn/>  LinkedIn</span>
                  </div> 
                  </div> 
            </Fot>
        )
    }
}

const Fot=styled.div`
text-align:center;
background:dodgerblue;
font-size:25px;
color:white;
margin-top:40px;
height:310px;
padding-top:50px;
padding-right:10px;
section{
    font-weight:bold;
    margin-bottom:60px;
    margin-top:-15px;
    color:black;
    font-size:30px;
}
span{
    border:5px solid white;
    border-top:none;
    border-left:none;
    border-right:none;
    border-radius:2px;
    padding:7px;
    &:hover{
      
        cursor:pointer;
        border-bottom:10px solid black;
        color:black;
    }
}
@media screen and (max-width:700px){
    text-align:left;
    background:rgb(124, 60, 197);
    font-size:30px;
    color:white;
    margin-top:40px;
    height:510px;
    padding-top:50px;
    padding-right:10px;
    section{
        text-align:center;
        font-weight:bold;
        margin-bottom:60px;
        margin-top:-15px;
        color:black;
        font-size:40px;
        border-bottom:3px solid white;
    }
    span{
        border:none;
        padding-left:185px;
       
        &:hover{
            border-bottom:none;
        }
    }
}
`;

