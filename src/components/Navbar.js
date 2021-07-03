import React, { Component } from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'; 
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
export default class Navbar extends Component {
    state={
        sidebar:false
    }
    showSidebar=()=>{
        this.setState({
           sidebar:true
        })
    }
    render() {
        return (
            <>
              <div className="navbar">
                  <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={this.showSidebar}/> 
                  </Link> 
                  
                  <span className="berkant" >
                  <FaIcons.FaQuinscape/> 
                      berkantkaya.com
                  </span>
                  <span className="sepet">
                  <Link to="/cart">
          <FaIcons.FaCartPlus/> <span className="ml-1">sepetim</span>
                  
                        </Link></span>
              </div> 
              <nav className={this.state.sidebar ? 'nav-menu active':'nav-menu'}>
                  <ul className='nav-menu-items' onClick={this.state.sidebar} >
                     <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose onClick={this.state.sidebar}/>
                        </Link>
                     </li>
                     <li className='nav-text'>
                        <Link to="/">
                        <AiIcons.AiFillHome/> <span>Home</span> 
                        </Link>
                     </li>
                     <li className='nav-text'>
                        <Link to="/documation">
                        <IoIcons.IoIosPaper/><span>Dökümasyon</span>
                        </Link>
                     </li>
                     <li className='nav-text'>
                        <Link to="/demokomut">
                        <IoIcons.IoMdHelpCircleOutline/> <span>DemoKomut</span>
                        </Link>
                     </li>
                     <li className='nav-text'>
                        <Link to="/hakkimda">
                        <IoIcons.IoMdPeople/> <span>Hakkımda</span>
                        </Link>
                     </li>
                     <li className='nav-text'>
                        <Link to="/cart">
                        <FaIcons.FaCartPlus/> <span>Sepetim</span>
                        </Link>
                     </li>
                  </ul>
              </nav>
            </>
        )
    }
}
