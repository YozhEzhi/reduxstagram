import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.postId = this.props.params.postId;
    this.removeComment = this.props.removeComment;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComment = this.renderComment.bind(this);
  }

  renderComment(comment, i) {
    return (
      <CSSTransitionGroup
        transitionName="comments"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}
        key={`comment-${i}`}
      >
        <div className="comment">
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button
              className="remove-comment"
              onClick={this.removeComment.bind(null, this.postId, i)}
            >
              &times;
            </button>
          </p>
        </div>
      </CSSTransitionGroup>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(this.postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {this.props.comments.map(this.renderComment)}

        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
