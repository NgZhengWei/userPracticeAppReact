import { useState } from 'react';

// import Card from '../UI/Card';
import styles from './CreateUser.module.css';

const CreateUser = (props) => {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === '' && userAge === '') {
      props.setErrorContent('Username and age cannot be empty.');
      return;
    } else if (username.trim() === '') {
      props.setErrorContent('Username cannot be empty.');
      return;
    } else if (userAge === '') {
      props.setErrorContent('Age cannot be empty.');
      return;
    } else if (+userAge < 0) {
      props.setErrorContent('Age cannot be negative.');
      return;
    }

    props.addUser({
      name: username,
      age: userAge,
      key: Math.random().toString(),
    });

    // set form input back to empty
    setUserAge('');
    setUsername('');
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles['form-control']}>
      <div className={styles['form-block']}>
        <label>Username</label>
        <input type='text' onChange={usernameHandler} value={username} />
      </div>
      <div className={styles['form-block']}>
        <label>Age (Years)</label>
        <input
          type='number'
          max='130'
          onChange={userAgeHandler}
          value={userAge}
        />
      </div>
      <button className={styles['form-block']} type='submit'>
        Add User
      </button>
    </form>
  );
};

export default CreateUser;
