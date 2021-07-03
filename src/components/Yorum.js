import React, { Component } from 'react'
import Title from './Title'
import styled from 'styled-components'
  export default class Yorum extends Component {
    state={
        items:[],
        item:'',
        id:0
    }
    onChange=(e)=>{
       this.setState({
       item:e.target.value
       })
    }
    onSubmit=(e)=>{
        e.preventDefault();
       const newitem={
           item:this.state.item
       }
        const update=[...this.state.items,newitem];
        this.setState({
            items:update,
            item:''
        }) }
    render() {
        console.log(this.state.items);
        return (
            
            <React.Fragment>
            <div className="bg-white container mt-5">
            
              <Tip className="ml-4">
             <textarea value={this.state.item} onChange={this.onChange} cols="60" rows="6" placeholder="Bize Mesaj Gönderin..."/>
             <button type="submit" onClick={this.onSubmit} className="btn btn-primary py-2 px-4 ">
            Gönder</button>
           
             {
                 this.state.items.map(pro=>{
                     return <Kam className={pro.item.length<5 ? "bg-success p-3 mt-3":"bg-primary mt-3 p-3"} key={pro.id} >
                        {pro.item}
                     </Kam>
                 })
             }
               
              
           
            </Tip>
            
            </div>
            </React.Fragment>
        )
    }

}

const Tip=styled.div`
padding-top:50px;
padding-left:90px;
textarea{
    background-color:#DEDDDB;
    border-radius:30px 30px  0 30px;
    outline:none;
    font-size:25px;
    padding:12px;
  ::placeholder{
      font-size:25px;
      padding-left:20px;
      padding-top:10px;
 
  }
   
}
button{
    border-radius:15px 15px 15px 0;
    margin-top:0px;
    margin-left:780px;
}
@media screen and (max-width:700px){
   
padding-top:50px;
padding-left:10px;
textarea{
    width:420px;
    background-color:#DEDDDB;
    border-radius:30px 30px  0 30px;
    outline:none;
    font-size:15px;
    padding:12px;
  ::placeholder{
      font-size:20px;
      padding-left:20px;
      padding-top:10px;
 
  }
   
}
button{
    border-radius:15px 15px 15px 0;
    margin-top:0px;
    margin-left:320px;
}
}

`
const Kam=styled.div`
width:90%;
border-radius:25px 25px 25px 0;
font-size:23px;
color:white;
text-transform:capitalize;
`;