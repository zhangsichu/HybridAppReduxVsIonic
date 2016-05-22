import React from 'react'
import { Subheader, Button } from '../../components'

import styles from './styles.scss'

class Home extends React.Component {
  render () {
    return (
      <div className={styles.home}>
        <Subheader
          title='Home'
        />
        <div className={styles.item}>
          <Button
            href='#/posts'
            label='Posts'
          />
        </div>
        <div className={styles.item}>
          <Button
            href='#/features'
            label='Features'
          />
        </div>
      </div>
    )
  }
}

export default (Home)
