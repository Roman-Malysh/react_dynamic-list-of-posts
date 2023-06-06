import React from 'react';
import { Post } from '../types/Post';

type Props = {
  posts: Post[];
  setActivePost: (post: Post | null) => void;
  setNewCommentField: (boolean: boolean) => void;
  activePost: Post | null;
};

export const PostsList: React.FC<Props> = ({
  posts,
  setActivePost,
  setNewCommentField,
  activePost,
}) => {
  const openDetails = (post: Post) => {
    if (activePost?.id === post.id) {
      setNewCommentField(false);
      setActivePost(null);
      setActivePost(null);
    } else {
      setActivePost(post);
      setActivePost(post);
      setNewCommentField(false);
    }
  };

  return (
    <div data-cy="PostsList">
      <p className="title">Posts:</p>

      <table className="table is-fullwidth is-striped is-hoverable is-narrow">
        <thead>
          <tr className="has-background-link-light">
            <th>#</th>
            <th>Title</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr data-cy="Post" key={post.id}>
              <td data-cy="PostId">{post.id}</td>

              <td data-cy="PostTitle">{post.title}</td>

              <td className="has-text-right is-vcentered">
                {activePost?.id === post.id ? (
                  <button
                    type="button"
                    data-cy="PostButton"
                    className="button is-link"
                    onClick={() => {
                      openDetails(post);
                    }}
                  >
                    Close
                  </button>
                ) : (
                  <button
                    type="button"
                    data-cy="PostButton"
                    className="button is-link is-light"
                    onClick={() => {
                      openDetails(post);
                    }}
                  >
                    Open
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
