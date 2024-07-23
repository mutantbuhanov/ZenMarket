import React from 'react'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import ReactWOW from 'react-wow'

const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App