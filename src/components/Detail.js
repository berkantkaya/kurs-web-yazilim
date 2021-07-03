import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {storeProducts,detailProduct} from '../Data';
export default class Detail extends Component {
    state={
        products:storeProducts,
        detailProduct:detailProduct
    }
    getItem=(id)=>{
      const product=this.state.products.find(item=>{
         return item.id===id;
        });
        return product;
       
    }

     handleDetail=(id)=>{
         const products=this.getItem(id);
          this.setState(()=>{
            return {detailProducts:products}
          })
     }
    render() {
        console.log(detailProduct);
        return (
           
            <Yam className="container-xl">
                {detailProduct.title}
                              
                
                          
                <div className="mal" dangerouslySetInnerHTML={{ __html: detailProduct.info }} />
                <iframe width="660" height="395" src="https://www.youtube.com/embed/ly3m6mv5qvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="fiyat">Kurs Ücreti:{detailProduct.price} TL</div>
                <div className="sarma">
                <Link to="/"><button className="btn btn-outline-primary mr-2 tek">Anasayfa</button></Link>
                <Link to="#"><button className="btn btn-outline-primary mr-2">Sepete Ekle</button></Link>
                <Link to="/card"><button className="btn btn-outline-primary mr-2">Sepetime Git</button></Link></div>
            
            </Yam>
        )
    }
}
const Yam=styled.div`
background-image:url('https://cdn.pixabay.com/photo/2019/07/04/23/29/wood-4317573_960_720.jpg');
font-size:30px;
height:auto;
color:white;
box-sizing:border-box;
margin-top:35px;
text-align:center;
button{
    font-size:25px;
    margin-top:25px;
    margin-bottom:20px;
    background:dodgerblue;
    color:white;

    border-radius:20px;
    font-weight:bold;
    }
    .sarma{
        margin-left:-5px
    }
    .mal{
        font-size:23px;
        padding-left:30px;
        padding-right:30px;
        line-height:35px;
    }
    iframe{
        margin-top:20px;
        border-radius:30px;
    }
    .fiyat{
        font-weight:bold;
        font-size:35px;
    }
`;