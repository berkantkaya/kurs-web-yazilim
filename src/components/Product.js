import React, { Component } from 'react'
import {storeProducts,detailProduct} from '../Data'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default class Product extends Component {
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
            return {detailProduct:products}
          })
     }
    
    render() {
        const { name, title, img, info, price } = this.props.data;
        console.log(this.props);
        return (
            <div className="col-9 col-md-6 col-lg-4">
                <div className="card mb-3">
                    <Yen onClick={this.handleDetail} className="img-container">
                     <Link to="/detail">   <img src={img} onClick={this.handleDetail} className="card-img-top" /></Link>
        <h4 className="pl-3  bg-primary text-white ">{name}</h4>
        <div className="d-flex justify-content-center">
       <h3> <span className="mr-4"><del>1600</del>TL</span><strong>{price}TL</strong></h3>
                    </div>
                </Yen>
            </div>
            </div>
        )
    }
}

 const Yen=styled.div`
 img{transition:650ms;}
 :hover img{
     margin-bottom:10px;
     transform:scale(1.1);
     border-radius:30px
 }
 @media screen and (max-width:700px){
     h4{
         background-color:rgb(124, 60, 197) !important;
     }
 }
 `;