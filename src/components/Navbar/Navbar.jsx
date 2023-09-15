import React from 'react'
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`navbar navbar-light fixed-top py-2 ${styles.navbar}`}>
  <div className="container">
    <a className="navbar-brand"> <i className="fa-solid fa-circle-stop fa-2xl"></i> <i class="fa-solid fa-circle-play fa-spin fa-2xl"></i> <i className="fa-solid fa-circle-pause fa-2xl"></i></a>
  </div>
  
</nav>

  )
}
