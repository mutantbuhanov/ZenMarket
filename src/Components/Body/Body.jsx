import React from 'react'
import './body.css'
import Carrousel from './CarouselPage.jsx'
import bkg from './images/tweed.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faClipboardList, faCartShopping, faCreditCard, faClock, faPlaneUp, faGift, faHandHoldingDollar, faGavel, faBagShopping, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons'


const Body = () => {
  return (
    <div>
      <div className="bodyy">
        <div className="carsl">
          <Carrousel />
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
        <div className="conttext">
          <ul className='navtabs'>
            <li class="active"><a href="#">

              <h2>How to buy from online marketplaces via
                <br />
                ZenMarket</h2>
            </a></li>
            <li><a href="#"></a></li>
          </ul>

        </div>
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

            <div data-aos="zoom-in">
              <div className="conti5">
                <FontAwesomeIcon icon={faPlaneUp} />
              </div>
            </div>

            <div data-aos="fade-right">

              <div className="crd5">
                <p id='cap'>Specify shipping details</p>
                <p id='ncp'>Once items arrive at the warehouse, specify the
                  <br />
                  shipping method and your address.
                </p>
              </div>
            </div>

            <div data-aos="zoom-in">
              <div className="conti6">
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
            </div>
            <div data-aos="fade-left">

              <div className="crd6">
                <p id='cap'>Pay for shipping</p>
                <p id='ncp'>Once the parcel has been weighed, you can pay for
                  <br />
                  international shipping.
                </p>
              </div>
            </div>


            <div data-aos="zoom-in">
              <div className="conti7">
                <FontAwesomeIcon icon={faGift} />
              </div>
            </div>

            <div data-aos="fade-right">

              <div className="crd7">
                <p id='cap'>Get your parcel delivered</p>
                <p id='ncp'>Wait 1-2 weeks for the parcel to get delivered to your
                  <br />
                  address.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Kamroni vazifasi boshlandi */}

      <div className="faxcont">
        <h2>Why choose ZenMarket?</h2>

        <div className="carddd1">
          <div className="icco1">
            <FontAwesomeIcon icon={faHandHoldingDollar} />
          </div>
          <h2 id='ptp'>TRANSPARENT FEE <br /> STRUCTURE</h2>
          <p id='pp'>We charge a flat fee of <br /> just 500 yen per unique <br /> item or lot.</p>
          <li className='mia'><a href="#">more info</a></li>
        </div>


        <div className="carddd2">
          <div className="icco2">
            <FontAwesomeIcon icon={faGavel} />
          </div>
          <h2 id='ptt'>LIVE JAPANESE<br />AUCTION<br />BIDDING</h2>
          <p id='ap'>Bid real-time on Yahoo! <br /> Auctions Japan from <br />anywhere in the world.</p>
        </div>


        <div className="carddd3">
          <div className="icco3">
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <h2 id='ttp'>ONE CART FOR<br />ALL YOUR<br />SHOPPING</h2>
          <p id='up'>Shop from multiple<br />Japanese stores and<br />manage your orders all <br /> from your ZenMarket <br /> account.</p>
        </div>


        <div className="carddd4">
          <div className="icco4">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h2 id='ppp'>LOYALTY<br />PROGRAM<br />REWARDS</h2>
          <p id='pl'>Earn benefits such as <br /> buying on credit & <br /> getting cashback on all <br /> shipped items.</p>
          <li id='mia'><a href="#">more info</a></li>
        </div>


        <div className="carddd5">
          <div className="icco5">
            <FontAwesomeIcon icon={faTruckFast} />
          </div>
          <h2 id='lp'>SAVE ON <br /> INTERNATIONAL <br /> SHIPPING</h2>
          <p id='llp'>Combine orders from <br /> multiple Japanese stores <br /> into one parcel for free <br /> to save on <br /> shipping fees.</p>
        </div>


      </div>


      <div className="colcont">

</div>


<div className="kampirkot">
  
</div>


    </div>

  )
}

export default Body