import React, { useState } from 'react';
import { Dropdown,DropdownToggle,DropdownItem,DropdownMenu  } from 'reactstrap';
import './assets/styles/style.css';
import './media.css';

function Comment() {
    const [isOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState)
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto" style={{marginLeft:1024}}>
                
                <li class="nav-item">
                    <a class="nav-link text-success ml-3" href="/About">Sing-up</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-success ml-3" href="/login">Sing-in</a>
                </li>
                
            </ul>
        </div>
        <div class="bt">
            <Dropdown isOpen={isOpen} toggle={toggle}>
            <DropdownToggle className="bg-success" caret>
                Menu
            </DropdownToggle>
            <DropdownMenu  className="bg-dark" style={{position:'absolute', zIndex:100}} right>
                <DropdownItem><a class="text-success" href="#">Sing-up</a></DropdownItem>
                <DropdownItem><a class="text-success" href="#">Sing-in</a></DropdownItem>
            
            </DropdownMenu>
            </Dropdown>
        
      </div>
        </nav>
    );
  }
export default Comment;