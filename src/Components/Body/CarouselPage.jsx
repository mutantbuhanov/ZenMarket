import Carousel from 'react-bootstrap/Carousel';
import sl1 from './images/sl1.png';
import sl2 from './images/sl2.jpg';
import sl3 from './images/sl3.jpg';
import sl4 from './images/sl4.jpg';
import sl5 from './images/sl5.jpg';
import './carsl.css'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" id='carousell'>
             <Carousel.Item >
                <div className="dvv">
                    <div className="sltex">
                        <h1>Shop Exclusive Japanese Stores  </h1>
                    </div>
                    <div className="sltex2">
                        <h3>
                        Ready to discover millions of Japan-only products?
                        <span>
                            <p>Get products from Japan directly with no language barriers.</p>
                        </span>
                        </h3>

            <h3 className='sltex3'>Over 1 Million parcels shipped worldwide.</h3>

          </div>

          <img
            className="d-block w-100"
            id='sl1'
            src={sl1}
            alt="Third slide"
          />

        </div>

      </Carousel.Item>
      <Carousel.Item>
        <div className="contentsl">
          <h3 className='bla'>Easier than mail forwarding!</h3>
          <div className="texpp">

            <p>
              - We will buy everything for you!
              <span>
                <p>
                  - Easy sign up. No documents needed.
                  <span>
                    <p>
                      - Automatic translation.

                      <span>
                        <p>
                          - We'll help you find things you want.

                        </p>
                      </span>
                    </p>
                  </span>
                </p>
              </span>
            </p>
          </div>
        </div>


        <img
          className="d-block w-100"
          id='sl2'
          src={sl2}
          alt="First slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <div className="contentsl2">
          <h3 className='bla2'>Goods from Japan</h3>
          <div className="texpp2">

            <h2>
              Musical Instruments
              <span>
                <p>
                  Cheap musical instruments

                  <span>
                    <p>
                      from Japanese makers:
                      <span>
                        <p>
                          Yamaha, Roland, Akai, Korg, Komaki etc.

                        </p>
                      </span>

                    </p>
                  </span>
                </p>
              </span>
            </h2>
          </div>
        </div>






        <img
          className="d-block w-100"
          src={sl3}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>

        <div className="contentsl3">
          <h3 className='bla3'>Japanese goods</h3>
          <div className="texpp3">

            <h2>
              Cameras
              <span>
                <p>
                  Japanese Cameras <br />
                  Nikon, Canon, Sony, Olympus

                  {/* <span>
                    <p>
                      from Japanese makers:
                      <span>
                        <p>
                          Yamaha, Roland, Akai, Korg, Komaki etc.

                        </p>
                      </span>

                    </p>
                  </span> */}
                </p>
              </span>
            </h2>
          </div>
        </div>




        <img
          className="d-block w-100"
          src={sl4}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>


      <div className="contentsl4">
          <h3 className='bla4'>Products from Japan</h3>
          <div className="texpp4">

            <h2>
              Fishing
              <span>
                <p>
                Fishing rods, reels and accessories <br />
                from Shimano, Daiwa, etc.

              
                </p>
              </span>
            </h2>
          </div>
        </div>


        <img
          className="d-block w-100"
          src={sl5}
          alt="Fourth slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;