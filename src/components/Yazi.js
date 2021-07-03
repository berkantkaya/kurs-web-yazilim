import React, { Component } from 'react'
import styled from 'styled-components';
import * as GiIcons from 'react-icons/gi';
export default class Yazi extends Component {
    render() {
        return (
            <Containn className="mx-auto">
                
               <marquee><span>%50 ye VARAN İNDİRİMLER İÇİN SON 10 GÜN BU FIRSATI KAÇIRMAYIN</span><span className="onem">____<GiIcons.GiPresent/></span> </marquee>
            </Containn>
        )
    }
}
 const Containn = styled.div`
color: dodgerblue;
 padding-top:10px;
 margin-top:18px;
 background-color:black;
    span{
        font-size:50px;
        font-weight:bold;
         z-index:0
    }
   
    @media screen and (max-width:700px){
        background-color:rgb(9, 233, 35);
        color: rgb(124, 60, 197);
        span{
            font-size:20px;
            font-weight:bold;
        }
    }
        
 `;