// import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import '../../stylesheets/Header.css';

// type HeaderProps = {
//   links: typeof Link[]
// };

export default function Header() {
  return (
    <header id='site-header'>
      <section className='links'>
        <div className="link-wrapper">
          <Link to="/">Home</Link>
        </div>
        <div className="link-wrapper">
          <Link to="/account">Account</Link>
        </div>
      </section>
      
      <search>
        <input placeholder='Search Events'/>
      </search>
    </header>
  );
}


