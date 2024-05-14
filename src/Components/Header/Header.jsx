import React from 'react'
import './header.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import vec1 from './Images/vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlass, faPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="prenav">
                <ul>
                <DropdownButton id="dropdown-basic-button" title="English" className='cap'>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
<div className="bord"></div>
    <DropdownButton id="dropdown-basic-button" title="US Dollar (USD)" >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <div className="bord"></div>

    <p id='tex1'>Japan Shopping Service</p>

    <li className='cap1' ><a href="#">Funds: 0.00$</a></li>
    <div className="bord"></div>
    <li><a href="#">Add Funds</a></li>
    <div className="bord"></div>
    <li><a href="#">Watchlist</a></li>
    <div className="bord"></div>
    <li><a href="#">About us</a></li>
    <div className="bord"></div>
    <li><a href="#">Blog</a></li>
    <div className="bord"></div>
    <li><a href="#">Help</a></li>
                </ul>
            </div>
<div className="navbar">
<img src={vec1} alt=""  className='vec1'/>

<div className="panel">
<Dropdown>
      <Dropdown.Toggle variant="succes" id="dropdown-basic">
        Amazon
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle variant="succes" id="dropdown-basic">
        All
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <input type="search" className='inpt' placeholder='Please type product name or URL'/>
    <span>
        <button className='b1'><FontAwesomeIcon icon={faMagnifyingGlass} className='ico'/></button>
    </span>
</div>
<div className="panel2">
    <button className='b2'><FontAwesomeIcon icon={faPlus} id='icc'/></button>
    <Dropdown as={ButtonGroup}>
      <Button variant="succes" id='butt1'> <FontAwesomeIcon icon={faCartShopping} id='ico2'/> My Account</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu id='menuu'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  
</div>
</div>

<div className="catalog">
<div className="st1">
<ul>
    <li><a href="#">AMAZON</a></li>
    <li><a href="#">RAKUTEN</a></li>
    <li><a href="#" id='aa1'>ZENPLUS <span><div className="bann">NO FEES</div></span></a></li>
    <li><a href="#">Y! SHOPPING</a></li>
    <li><a href="#">Y! AUCTIONS</a></li>
    <li><a href="#">MERCARI</a></li>
    <li><a href="#">Rakuten Rakuma</a></li>
    <li><a href="#">OTHER SHOPS</a></li>
    <li><a href="#">FIND IT FOR ME</a></li>
</ul>
</div>
<div className="st2">
    <p className='tx3'>15% CASHBACK ON AMAZON ITEMS MAY 7TH 16:00 - MAY 13TH 16:00 JST</p>
    <button className='b3'>SHOP NOW</button>
    </div>
    <div className="st3">
<p className='tx4'>GET UP TO 5,000YEN OFF SHIPPING CODE: MAY24</p>
<button className='b4'>SEE DETAILS</button>

    </div>


</div>
        </div>
    </div>
  )
}

export default Header