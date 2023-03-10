// Write your code here
import './index.css'
import {Component} from 'react'

class CommentItem extends Component {
    const {initialContainerBackgroundClassNames} = this.props
    renderComments = () => {
    const {initialContainerBackgroundClassNames} = this.props
    
    return commentsList.map(eachItem => {
      const {initialContainerBackgroundClassNames} = eachItem
     
render() {
    return (
      <div className="comments-container">
      <img src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
        <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete"
        
        <ul className="comments-list-container">{this.renderComments()}</ul>
      </div>
    )
  }
}

export default CommentItem

}