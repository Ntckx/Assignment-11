import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const { id } = useParams();
  
    return (
      <div>
        <h1>This Student Id of user is {id}</h1>
      </div>
    );
  }

export default Profile;
