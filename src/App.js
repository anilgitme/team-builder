import React, { useState } from 'react';
import Divcard from './components/MembersDiv'
import MembershipForm from './components/MembershipForm'
import './App.css';

function App() {
const [members, setMembers] = useState([
  {
  name: 'Anil Ramcharran',
  email: 'anil.gitme@gmail.com',
  role: 'Full Stack dev'
},
{
  name: 'Cody Codes',
  email: 'cc@gmail.com',
  role: 'Data Science'
}
]);

const newMembers = (user) => {
  setMembers([...members, {...user}])
};

  return (
    <div className="App">
      <h1>Project Members</h1>
      <MembershipForm setMembers={newMembers} members={members} />
      <Divcard members={members} />
    </div>
  );
}

export default App;
