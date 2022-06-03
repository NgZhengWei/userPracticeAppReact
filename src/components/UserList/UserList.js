import UserItem from './UserItem';
import styles from './UserList.module.css';

const UserList = (props) => {
  if (props.users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul className={styles['user-list']}>
      {props.users.map((userInfo) => (
        <UserItem userInfo={userInfo} key={userInfo.key} />
      ))}
    </ul>
  );
};

export default UserList;
