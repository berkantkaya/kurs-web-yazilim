import React, { Component } from 'react'
import styled from 'styled-components'
export default class Video extends Component {
    render() {
        return (
            <İfr>
            <h3>örnek videolar</h3>
                <iframe className="mr-4" width="560" height="315" src="https://www.youtube.com/embed/daK8cM_55aE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/p9u4ymj-yJw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </İfr>
        )
    }
}
const İfr=styled.div`
margin-top:60px;
 margin-left:380px;
 @media screen and (max-width:700px){
    margin-top:60px;
    margin-left:10px;
 }
`;