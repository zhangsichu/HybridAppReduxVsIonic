import React from 'react'
import { Block, Subheader } from '../../components'

function About () {
  return (
    <div>
      <Subheader
        title='About'
      />
      <Block
        title='Redux Hybrid App'
        text='A demo for Hybrid App starter for using Redux+React on Cordova platform.'
        link='https://github.com/zhangsichu/HybridAppReduxVsIonic.git'
      />
    </div>
  )
}

About.propTypes = {
}

export default About
