import React from 'react'
import './Navbar.css'
import HRcard from './HRcard'
import icon from '../Medias/bars.png'

export default function Navbar() {
  return (
    <header>
      <nav className='navigation'>
          <div className="Brand">
          <img src={icon} alt="" />
          <span className='Logo'>Finance</span>
          </div>
          <a href='#' className='active'>Home</a>
          <a href='#'>About</a>
          <a href='#'>News</a>
          <div className='services'>
          <a href='#'>Services</a>
          <div className='dropdown-bar'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <span className='dropdown-header'>Investment</span>
                  <hr />
                  <HRcard iconSrc="https://picsum.photos/50" title="Card Title"/>
                  <HRcard iconSrc="https://picsum.photos/50" title="Card Title"/>
                  <HRcard iconSrc="https://picsum.photos/50" title="Card Title"/>
                  <HRcard iconSrc="https://picsum.photos/50" title="Card Title"/>
                </div>
                <div className='col-md-4'>
                  <span className='dropdown-header'>Investment</span>
                  <hr />
                  <HRcard iconSrc="https://picsum.photos/50" title="Card Title"/>
                  <HRcard iconSrc="https://picsum.photos/50" title="Card Title"/>
                </div>
                <div className='col-md-4'>
                  <span className='dropdown-header'>Investment</span>
                  <hr />
                  <HRcard iconSrc="https://picsum.photos/50" title="Card Title"/>
                  <HRcard iconSrc="https://picsum.photos/50" title="Card Title"/>
                  <HRcard iconSrc="https://picsum.photos/50" title="Card Title"/>
                </div>
              </div>
            </div>
          </div>
        </div>
          <a href='#'>Contact</a>
          <div className="card">
            <button className="login-btn">Login</button>
            <img src="https://via.placeholder.com/100" alt="User Profile Photo" className="profile-photo"/>
          </div>
      </nav>
    </header>
  )
}
