const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
import './index.css'
import {Component} from 'react'
import CommentItem from '..CommentItem'

class Comments extends Component {
    state = {
        commentsList: initialContainerBackgroundClassNames,
        Your Name: '',
        Your Comment: ''


    }
    toggleIsLiked = (id) => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          //   eachContact.isFavorite = !eachContact.isFavorite
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

    onAddComment = event => {
    event.preventDefault()
    const {Your Name, Your Comment} = this.state
    const newComment = {
     Your Name,
     Your Comment
      
    }
     onChangeComment = event => {
    this.setState({Your Comment: event.target.value})
  }

    onChangeName = event => {
    this.setState({Your Name: event.target.value})
  }
render() {
    const {commentsList} = this.props
    const {Your Name, Your Comment, commentsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Comments</h1>
          <form className="contact-form-container" onSubmit={this.onAddComment}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Your Name"
            />
            <input
              className="input"
              value={YourComment}
              onChange={this.onChangeMobileNo}
              placeholder="Your Comment"
            />
            <button type="submit" className="button">
              Add Comment
            </button>
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments"
          </form>
          <ul className="comments-table">
            <li className="table-header">
              
              <br className="separator" />
              <p className="table-header-cell name-column">Comments</p>
              
            </li>
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
}
