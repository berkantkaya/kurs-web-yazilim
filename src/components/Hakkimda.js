import React, { Component } from 'react'
import styled from 'styled-components';
import * as GiIcons from 'react-icons/gi';
import * as FiIcons from 'react-icons/fi';

import {Link} from 'react-router-dom';
export default class Hakkimda extends Component {
    render() {
        return (
            
            <Duz>
              <img src="https://img-s1.onedio.com/id-558292c239dab1f43a6597ee/rev-0/w-900/h-675/f-jpg/s-e16e818bb089b41da8d76d47b2594963635143ca.jpg"/>
              <span>KİMİM BEN  <GiIcons.GiThink/> </span>
            
            <div className="bak">
               Ben deniz yeni nesil bilgisayar mühendisi ve yazılım uzmanı Berkant Kaya.Yazılım olayına aslen lisede basladım.Ankara'da Anadolu teknik bir lisede php java html vs. dersleri üzerine egitim aldım ve bunun neticesinde liseyi 1. olarak bitirdim.Üniversite olarak ise Ankara Üniversitesinde Matematik üzerine lisans dersleri aldım.Aynı zamanda yan dal olarak bilgisayar mühendisligi okudum.Ondan sonra yüksek lisansımı pandemininde etkisiyle Karabük Üniversitesinde yaptım.Bu sürecte phyton matlab ve C gibi diller hakkında daha keskin bilgiler aldım.Bunlar dısında Full stack developerım.Lakin front-end kısmı back-end e göre daha cok ilgimi cekmektedir.Bununla beraber 1 aylık bir zaman dilimi icinde front-end kursumu siz degerli takipcilerim icine yayına sunmayı düsünüyorum.
               <h3>Hakim Oldugum Diller</h3>
               <ol>
                <li>HTML-CSS</li>   
                <li>BOOTSTRAP</li>   
                <li>JAVASCRİPT</li>   
                <li>REACT JS</li>   
                <li>NODE JS</li>   
                <li>PHP</li>   
                <li>MYSQL</li>   
                <li>C++</li>   
                <li>C#</li>   
                </ol>  
                <img className="degis" src="https://i.pinimg.com/originals/63/a8/65/63a865b778fe62ad51cd9e73e9c4f489.jpg"/> 
            </div>
            <Link to="/"><button className="btn btn-primary ">Anasayfa <FiIcons.FiCornerDownLeft/></button></Link>
            </Duz>
        )
    }
}

const Duz=styled.div`
margin-top:60px;
font-size:20px;
img{
    width:150px;
    height:150px;
    border-radius:50%;
    border:4px solid dodgerblue;
    opacity:0.8;
    margin-left:710px;
    margin-top:0px;
    margin-bottom:40px;
}
span{
    font-size:40px;
    font-weight:bold;
    color:dodgerblue;

}
.bak{
    font-size:22px;
    text-align:left;
    margin-left:410px;
    margin-right:410px;
    font-weight:bold
}
h3{
    text-decoration:underline;
    margin-top:14px;
    text-transform:uppercase;
}
ol{
   font-weight:bold;
}
.degis{
    border:none;
    border-radius:0;
    position:absolute;
    top:180px;
    right:0;
    width:390px;
    height:750px;
    
}
button{
    border-radius:30px 30px 30px 0;
    margin-left:420px;
    font-size:20px;
}
@media screen and (max-width:700px){
    margin-top:60px;
     font-size:0px;
img{
    width:100px;
    height:100px;
    border-radius:50%;
    border:3px solid rgb(124, 60, 197);
    opacity:0.8;
    margin-left:110px;
    margin-top:0px;
    margin-bottom:20px;
}
span{
    font-size:30px;
    font-weight:bold;
    color:rgb(124, 60, 197);

}
.bak{
    font-size:17px;
    text-align:left;
    margin-left:120px;
    margin-right:100px;
    font-weight:bold
}
h3{
    text-decoration:underline;
    margin-top:14px;
    text-transform:uppercase;
}
ol{
   font-weight:bold;
}
.degis{
    border:none;
    border-radius:0;
    position:relative;
    top:8px;
    left:-170px;
    width:450px;
    height:450px;
    
}
button{
    border-radius:30px 30px 30px 0;
    margin-left:360px;
    font-size:20px;
    background-color:rgb(124, 60, 197)
}
}
`;

