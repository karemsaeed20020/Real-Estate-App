import React from "react"
import Header from "../common/Header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import About from "../about/About"
import Footer from "../common/footer/Footer"
import Services from "../Services/Services";
import Blog from "../Blog/Blog"
import Pricing from "../home/price/Price";
import Contact from '../contact/Contact';


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages