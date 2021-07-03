import React, { Component } from 'react'
import Yazi from '../components/Yazi'
import Search from '../components/Search'
import Slider from '../components/Slider'
import Video from '../components/Video'
import Yorum from '../components/Yorum'
import styled from 'styled-components';
export default class Main extends Component {
    render() {
        return (
            <Renk >
                <Yazi/>
                <Search/>
                <Slider/>
                <Video/>
                <Yorum/>
            </Renk>
        )
    }
}
const Renk=styled.div`
background-color:#DEDDDB
`;