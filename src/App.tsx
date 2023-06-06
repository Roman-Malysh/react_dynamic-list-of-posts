import { useEffect, useState, useCallback } from 'react';
import 'bulma/bulma.sass';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import classNames from 'classnames';
import { User } from './types/User';
import { getUsers, getPosts } from './utils/utils';
import { PostsList } from './components/PostsList';
import { PostDetails } from './components/PostDetails';
import { UserSelector } from './components/UserSelector';
import { Loader } from './components/Loader';
import { Post } from './types/Post';
import { DarkModeToggle } from './components/DarkModeToggler/DarkModeToggle';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [newCommentField, setNewCommentField] = useState(false);
  const [darkModeIsOn, setDarkModeIsOn] = useState<boolean>(false);

  const PostAnulation = () => {
    setActivePost(null);
  };

  const errorNotification = () => {
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 3000);
  };

  useEffect(() => {
    const fetchData = async () => {
      const usersFromServer = await getUsers();

      try {
        setIsLoading(true);
        setUsers(usersFromServer);
      } catch {
        errorNotification();
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  async function loadPosts(userId: number) {
    setPosts([]);
    setIsLoading(true);
    try {
      const awaitLoadPosts = await getPosts(userId);

      setPosts(awaitLoadPosts);
    } finally {
      setIsLoading(false);
    }
  }

  const selectUser = useCallback((user: User) => {
    setSelectedUserId(user.id);
    loadPosts(user.id);
  }, []);

  return (
    <main className={classNames('section', { darkModeIsOn })}>
      <DarkModeToggle
        setDarkModeIsOn={setDarkModeIsOn}
        darkModeIsOn={darkModeIsOn}
      />
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box is-success">
              <div className="block">
                <UserSelector
                  users={users}
                  setSelectedUserId={setSelectedUserId}
                  selectUser={selectUser}
                  PostAnulation={PostAnulation}
                />
              </div>

              <div className="block" data-cy="MainContent">
                {!selectedUserId && (
                  <p data-cy="NoSelectedUser">
                    No user selected
                  </p>
                )}
                {isLoading && (
                  <Loader />
                )}
                {isError && (
                  <div
                    className="notification is-danger"
                    data-cy="PostsLoadingError"
                  >
                    Something went wrong!
                  </div>
                )}
                {selectedUserId && posts.length === 0 && !isLoading && (
                  <div className="notification is-warning" data-cy="NoPostsYet">
                    No posts yet
                  </div>
                )}
                {posts.length > 0 && (
                  <PostsList
                    posts={posts}
                    setActivePost={setActivePost}
                    setNewCommentField={setNewCommentField}
                    activePost={activePost}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            data-cy="Sidebar"
            className={classNames(
              'tile',
              'is-parent',
              'is-8-desktop',
              'Sidebar',
              { 'Sidebar--open': activePost },
            )}
          >
            {activePost && (
              <div className="tile is-child box is-success ">
                <PostDetails
                  activePost={activePost}
                  setNewCommentField={setNewCommentField}
                  newCommentField={newCommentField}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
