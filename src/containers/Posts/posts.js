import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { loadPosts, loadPost } from '../../actions/posts'

import List from './list'
import Details from './details'
import styles from './styles.scss'

const IN_DETAIL = 'IN_DETAIL'

class Posts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      [IN_DETAIL]: false
    }
  }

  onShowDetails (id) {
    this.setState({
      [IN_DETAIL]: true
    })

    const { dispatch } = this.props
    dispatch(loadPost(id))
  }

  onShowResult () {
    this.setState({
      [IN_DETAIL]: false
    })
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(loadPosts())
  }

  render () {
    return (
      <div className={styles.results}>
        {!this.state[IN_DETAIL] &&
          <List
            onShowDetails={this.onShowDetails.bind(this)}
            posts={this.props.result.posts}
          />
        }
        {this.state[IN_DETAIL] &&
          <Details
            post={this.props.result.currentPost}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    result: state.posts
  }
)

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  result: PropTypes.object
}

export default connect(mapStateToProps)(Posts)
