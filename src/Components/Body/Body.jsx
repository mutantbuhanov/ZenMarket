import React from 'react'
import './body.css'
import Carrousel from './CarouselPage.jsx'
import bkg from './images/tweed.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faClipboardList, faCartShopping, faCreditCard,faClock } from '@fortawesome/free-solid-svg-icons'


const Body = () => {
  return (
    <div>
        <div className="bodyy">
<div className="carsl">
<Carrousel/>
</div>
<div className="info1">
  <div className="textrow1">
<div className="t1">
<p id='tt1'>WE HELP YOU</p>
<p id='tt2'>ONE SIMPLE FEE</p>
<p id='tt3'>¥500</p>
<p id='tt4'>PER ITEM.
<span>
  <br />
<a href="#" id='ahr'>WHATS INCLUDED?</a>
   </span>
</p>
</div>
  </div>
<div className="textrow2">
<p id='tb1'>BUY</p>

<p id='tb2'>CREDIT CARD
<br />
<span>DEBIT CARD
<br />
<span>PAYPAL, CRYPTOCURRENCY
  <br />
  <span>
    BANK TRANSFER
  </span>
</span>
</span>
</p>
</div>
<div className="textrow3">
<p id='tc1'>STUFF FROM JAPAN</p>

<p id='tc2'>RAKUTEN 
<br />
<span>
  <p>
AMAZON 
<br />
<span>
  <p>
    YAHOO 
    <br />
    <span>
  <p>
    ANY OTHER ONLINE MARKETPLACE
  </p>
</span>
  </p>
</span>
  </p>
</span>
</p>
</div>

<div className="textrow4">
  <p id='td1'>AND SEND IT</p>

  <p id='td2'>
    EMS 
    <br />
    <span>
      <p>
        AIRMAIL 
        <br />
    <span>
      <p>
        FEDEX 
        <br />
    <span>
      <p>
        DHL, UPS
        <br />
    <span>
      <p>
        ZENEXPRESS
      </p>
    </span>
      </p>
    </span>
      </p>
    </span>
      </p>
    </span>
  </p>
</div>
<div className="textrow5">
<p id='te1'>DIRECTLY TO YOU</p>

<p id='te2'>USA 
<br />
<span>
  <p>
    EUROPE 
    <br />
<span>
  <p>
    ASIA 
    <br />
<span>
  <p>
    ALL OTHER COUNTRIES 
  </p>
</span>
  </p>
</span>
  </p>
</span>
</p>

</div>
</div>

        </div>
        <div className="tabcont">
          <div className="tabpan">
            <div className="nmd">

          <div data-aos="zoom-in">
            <div className="conti1">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
            </div>
            <div data-aos="fade-right">
              
            <div className="crd1">
              <p id='cap'>Add items to the cart</p>
              <p id='ncp'>Add item URLs to your Cart from any online Japanese 
                <br />
                shop and place your order.</p>
            </div>
            </div>
            <div data-aos="zoom-in">
            <div className="conti2">
            <FontAwesomeIcon icon={faClipboardList} />
        </div>
            </div>
            <div data-aos="fade-left">
              
              <div className="crd2">
                <p id='cap'>Get a quote</p>
                <p id='ncp'>ZenMarket will confirm item prices and their availability.
                  </p>
              </div>
              </div>

              <div data-aos="zoom-in">
            <div className="conti3">
            <FontAwesomeIcon icon={faCreditCard} />
        </div>
            </div>
            <div data-aos="fade-right">
              
              <div className="crd3">
                <p id='cap'>Pay for items</p>
                <p id='ncp'>Once prices are confirmed you can pay for your items.
                  </p>
              </div>
              </div>

              <div data-aos="zoom-in">
            <div className="conti4">
            <FontAwesomeIcon icon={faClock} />
        </div>
            </div>
            <div data-aos="fade-left">
              
              <div className="crd4">
                <p id='cap'>Wait a couple of days</p>
                <p id='ncp'>ZenMarket will order your items from the shop you 
                <br />
                selected. Then we will wait for your items to be
                <br />
                delivered to our warehouse.
                  </p>
              </div>
              </div>




            </div>
          </div>

        </div>
    </div>
  )
}

export default Body