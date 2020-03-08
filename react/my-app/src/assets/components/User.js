/* jshint esversion: 6 */ 
import React from 'react';

function User(user) {

    return (
      <div >
        <p>{user.name}----{user.age}</p>
      </div>
    );
  }
  User.dafultProto={
    age:"18"
  }
  export default User;