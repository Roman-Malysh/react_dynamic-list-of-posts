import { useState } from 'react';
import classNames from 'classnames';
import { User } from '../types/User';
import { Post } from '../types/Post';

type Props = {
  users: User[];
  setSelectedUserId: (userId: number) => void;
  selectUser: (user: User) => void;
  PostAnulation: (post: Post | null) => void;
};

export const UserSelector: React.FC<Props> = ({
  users,
  setSelectedUserId,
  selectUser,
  PostAnulation,
}) => {
  const [isSelectorActive, setSelector] = useState(false);
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [userName, setUserName] = useState('Choose a user');

  const selectHandle = (user: User) => {
    setActiveUser(user);
    PostAnulation(null);
    setUserName(user.name);
    setSelector(false);
    setSelectedUserId(user.id);
    selectUser(user);
  };

  return (
    <div data-cy="UserSelector" className="dropdown is-active">
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setSelector(true)}
          onBlur={() => setSelector(false)}
        >
          <span>{userName}</span>

          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>

      {isSelectorActive && (
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {users.map((user) => (
              <a
                href={`#user-${user.id}`}
                className={classNames('dropdown-item', {
                  'is-active': activeUser?.id === user.id,
                })}
                key={user.id}
                onMouseDown={() => {
                  selectHandle(user);
                }}
              >
                {user.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
