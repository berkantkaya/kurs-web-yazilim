import React from 'react'
import styled from 'styled-components'
import * as HiIcons from 'react-icons/hi';
export default function Title({ad}) {
    return (
        <Baslık className="container">
        <div className="row">
        <div className="col-9 mx-auto">
            <span><HiIcons.HiOutlineLightBulb />{ad}</span>
        </div>
        </div>
        </Baslık>
    )
}
const Baslık=styled.div`
margin-top:50px;
span
{
font-size:55px;
margin-left:175px;
font-weight:bold;
}
@media screen and (max-width:700px){
    span
    {
    font-size:30px;
    margin-left:50px;
    font-weight:bold;
    color:rgb(124, 60, 197)
    }  
}
`
