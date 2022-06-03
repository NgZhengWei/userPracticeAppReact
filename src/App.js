import { useState } from 'react';
import UserList from './components/UserList/UserList';
import CreateUser from './components/CreateUser/CreateUser';
import Popup from './components/Popup/Popup';

import './App.css';

let errorContent = '';

function App() {
  const [users, setUsers] = useState([
    // { name: 'Bob', age: 32, key: 'u1' },
    // { name: 'Sally', age: 19, key: 'u2' },
  ]);

  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const addUser = (newUser) => {
    setUsers((prevState) => {
      return [newUser, ...prevState];
    });
  };

  const setErrorContent = (newErrorContent) => {
    errorContent = newErrorContent;
    setShowErrorPopup(true);
  };

  return (
    <div>
      {showErrorPopup && (
        <Popup
          setShowErrorPopup={setShowErrorPopup}
          errorContent={errorContent}
        />
      )}
      <CreateUser addUser={addUser} setErrorContent={setErrorContent} />
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}

export default App;
