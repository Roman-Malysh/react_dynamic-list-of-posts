import React, { useState } from 'react';
import classNames from 'classnames';
import { Post } from '../types/Post';
import { Comment } from '../types/Comment';

type Props = {
  activePost: Post,
  addComment: (comment: Comment) => void,
  isAdding: boolean,
};

export const NewCommentForm: React.FC<Props> = ({
  activePost,
  addComment,
  isAdding,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorTextArea, setisErrorTextArea] = useState(false);

  const emailPattern = email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const addCommentt = async (event: React.FormEvent) => {
    event.preventDefault();

    const overallPattern
      = name.trim().length && emailPattern && comment.trim().length;

    if (!name.length) {
      setIsErrorName(true);
    }

    if (!emailPattern) {
      setIsErrorEmail(true);
    }

    if (!comment.length) {
      setisErrorTextArea(true);
    }

    if (overallPattern) {
      const newComment: Comment = {
        id: 0,
        postId: activePost.id,
        name,
        email,
        body: comment,
      };

      addComment(newComment);
      setComment('');
    }
  };

  return (
    <form data-cy="NewCommentForm" onSubmit={addCommentt}>
      <div className="field" data-cy="NameField">
        <label className="label" htmlFor="comment-author-name">
          Author Name
        </label>
        <div className="control has-icons-left has-icons-right">
          <input
            type="text"
            name="name"
            id="comment-author-name"
            placeholder="Name Surname"
            className={classNames('input', { 'is-danger': isErrorName })}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setIsErrorName(false);
            }}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>
          {isErrorName && (
            <span
              className="icon is-small is-right has-text-danger"
              data-cy="ErrorIcon"
            >
              <i className="fas fa-exclamation-triangle" />
            </span>
          )}
        </div>
        {isErrorName && (
          <p className="help is-danger" data-cy="ErrorMessage">
            Name is required
          </p>
        )}
      </div>
      <div className="field" data-cy="EmailField">
        <label className="label" htmlFor="comment-author-email">
          Author Email
        </label>

        <div className="control has-icons-left has-icons-right">
          <input
            type="text"
            name="email"
            id="comment-author-email"
            placeholder="email@test.com"
            className={classNames('input', { 'is-danger': isErrorEmail })}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsErrorEmail(false);
            }}
          />

          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>

          {isErrorEmail && (
            <span
              className="icon is-small is-right has-text-danger"
              data-cy="ErrorIcon"
            >
              <i className="fas fa-exclamation-triangle" />
            </span>
          )}
        </div>

        {isErrorEmail && (
          <p className="help is-danger" data-cy="ErrorMessage">
            Email is required
          </p>
        )}
      </div>

      <div className="field" data-cy="BodyField">
        <label className="label" htmlFor="comment-body">
          Comment Text
        </label>

        <div className="control">
          <textarea
            id="comment-body"
            name="body"
            placeholder="Type comment here"
            className={classNames('textarea', { 'is-danger': isErrorTextArea })}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              setisErrorTextArea(false);
            }}
          />
        </div>
        {isErrorTextArea && (
          <p className="help is-danger" data-cy="ErrorMessage">
            Enter some text
          </p>
        )}
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            className={classNames('button is-link', { 'is-loading': isAdding })}
          >
            Add
          </button>
        </div>
        <div className="control">
          <button
            type="button"
            className="button is-link is-light"
            onClick={() => setComment('')}
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};
