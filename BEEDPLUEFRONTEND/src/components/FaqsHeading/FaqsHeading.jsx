import React from 'react'
import "./FaqsHeading.scss"
import { Link } from 'react-router-dom'
function FaqsHeading() {
  return (
    <div className='heading'>
      <Link className='faqs' to="/faq">FAQS</Link>
      <button className='how-it-works-button'>
      <Link  className="how-it-works-link" to="/how-it-works">How it works </Link></button>
    </div>
  )
}

export default FaqsHeading;