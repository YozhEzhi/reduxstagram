import React from 'react';

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
      <div className="comment" key={i}>
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
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(this.props.params.postId, author, comment);
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
