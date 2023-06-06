import React, { useState, useEffect } from 'react';
import { getComments, deleteComment, postComment } from '../utils/utils';
import { Comment } from '../types/Comment';
import { Post } from '../types/Post';
import { Loader } from './Loader';
import { NewCommentForm } from './NewCommentForm';

type Props = {
  activePost: Post;
  newCommentField: boolean;
  setNewCommentField: (boolean: boolean) => void;
};

export const PostDetails: React.FC<Props> = ({
  activePost,
  newCommentField,
  setNewCommentField,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAdding, setisAdding] = useState(false);

  const addComment = async (comment: Comment) => {
    setisAdding(true);
    await postComment(comment);
    setComments((prev) => [...prev, comment]);
    setisAdding(false);
  };

  const handleDeleteComment = async (commentId: number) => {
    await deleteComment(commentId);

    const filteredComments = comments.filter(
      (comment) => comment.id !== commentId,
    );

    setComments(filteredComments);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const commentsFromServer = await getComments(activePost.id);

      try {
        setComments(commentsFromServer);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activePost]);

  return (
    <div className="content" data-cy="PostDetails">
      <div className="content" data-cy="PostDetails">
        <div className="block">
          <h2 data-cy="PostTitle">
            {`#${activePost.id}: ${activePost.title}`}
          </h2>

          <p data-cy="PostBody">{activePost.body}</p>
        </div>

        <div className="block">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {isError && (
                <div className="notification is-danger" data-cy="CommentsError">
                  Something went wrong
                </div>
              )}

              {comments.length > 0 ? (
                <p className="title is-4" data-cy="NoCommentsMessage">
                  Comments:
                </p>
              ) : (
                <p className="title is-4">No comments yet</p>
              )}

              {comments.map((comment) => (
                <article className="message is-small" data-cy="Comment">
                  <div className="message-header">
                    <a href="mailto:misha@mate.academy" data-cy="CommentAuthor">
                      {comment.name}
                    </a>
                    <button
                      data-cy="CommentDelete"
                      type="button"
                      className="delete is-small"
                      aria-label="delete"
                      onClick={() => handleDeleteComment(comment.id)}
                    >
                      delete button
                    </button>
                  </div>

                  <div className="message-body" data-cy="CommentBody">
                    {comment.body}
                  </div>
                </article>
              ))}
              {!newCommentField ? (
                <button
                  data-cy="WriteCommentButton"
                  type="button"
                  className="button is-link"
                  onClick={() => setNewCommentField(true)}
                >
                  Write a comment
                </button>
              ) : (
                <NewCommentForm
                  activePost={activePost}
                  addComment={addComment}
                  isAdding={isAdding}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
