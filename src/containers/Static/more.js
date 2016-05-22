import React from 'react'
import { Subheader } from '../../components'

import styles from './styles.scss'

function More () {
  return (
    <div>
      <Subheader
        title='More'
      />
      <ol className={styles.more}>
        <li>Add more unit test.</li>
        <li>Fix header and footer.</li>
      </ol>
    </div>
  )
}

export default More
