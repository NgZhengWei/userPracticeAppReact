import styles from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li className={styles['user-item']}>
      {props.userInfo.name + ` (${props.userInfo.age} years old)`}
    </li>
  );
};

export default UserItem;
