import logo from '../../images/header.png'

import React from 'react'
import styles from './styles'

function Header () {
  return (
    <a className={styles.header} href='#/'>
      <img src={logo} alt='Header' />
    </a>
  )
}

export default Header
