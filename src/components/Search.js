import React, { Component } from 'react';
import styled from 'styled-components';
import * as BsIcons from 'react-icons/bs';
import { storeProducts } from '../Data';
import { ProductConsumer } from '../Context';
import Product from './Product'
import { Link } from 'react-router-dom';
import './Search.css';
class Search extends Component {

  constructor() {
    super();

    this.state = {
      search: null
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword })
  }
     
  render() {
    const styleInfo = {
      paddingRight: '0px'
    }
    const elementStyle = {
      border: '1px solid',
      borderColor: 'rgb(124, 60, 197)',
      borderRadius: '10px',
      position: 'relative',
      left: '5vh',
      top: '-2vh',
      height: '3vh',
      width: '70%',
      marginTop: '5vh',
      marginBottom: '10vh'
    }
    const items = storeProducts.filter((data) => {
      if (this.state.search == null)
        return data
      else if (data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.title.toLowerCase().includes(this.state.search.toLowerCase())) {
        return data
      }
    }).map(data => {
      return (
        <Product data={data} key={data.id} />
      )
    })

    return (
      <New>
        <input className="container" type="text" placeholder="Arama Butonu...  " onChange={(e) => this.searchSpace(e)} ></input>
        <div className="container ">
          <div className="row iki">
            {items}

          </div>
        </div>
      </New>
    )
  }
}

export default Search;

const New = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
 margin-top:25px;
 
input{
    padding:15px;
    border:1px solid blue;
    border-radius:10px;
    width:100%;
    background-color:gray;
    margin-right:380px;
    cursor:pointer;
    height:45px;
    margin-bottom:30px;
  ::placeholder{
      font-size:27px;
      text-align:center;
      color:white;
      font-weight:light;
      
      
  } 
  
}
@media screen and (max-width:700px){
    input{
        padding:15px;
        border:1px solid mediumorchid;
        border-radius:10px;
        width:380px;
        background-color:rgb(124, 60, 197);
        margin-right:85px;
        cursor:pointer;
        height:20px;
        margin-bottom:30px;
      ::placeholder{
          font-size:20px;
          text-align:center;
          color:white;
          font-weight:light;
          
          
      } 
    }
    div{
      margin-left:6px;
      margin-right:9px;
      width:470px;
     }
     h4{
     text-align:center;
     font-size:30px
    }
}

@media screen and (max-width:520px){
    input{
        padding:15px;
        border:1px solid mediumorchid;
        border-radius:10px;
        width:330px;
        background-color:rgb(124, 60, 197);
        margin-right:70px;
        cursor:pointer;
        height:20px;
        margin-bottom:30px;
      ::placeholder{
          font-size:20px;
          text-align:center;
          color:white;
          font-weight:light;
          
          
      } 
      
    }
    div{
     margin-left:4.8px;
     margin-right:5px;
     width:355px;
     
    }
}
`;
