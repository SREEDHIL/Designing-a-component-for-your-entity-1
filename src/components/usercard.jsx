import React from 'react';
import './UserCard.css';

const UserCard = () => {
  const profilePhoto = 'https://i.pinimg.com/originals/9f/74/67/9f746780a07690b1958a79b87baee7d0.gif';
  const name = 'John Doe';
  const email = 'johnDoe@gmail.com';
  const phoneNumber = '96457XXXXX';
  const address = '123 Main St, Springfield, USA';

  return (
    <div className="user-card">
      <img src={profilePhoto} alt={name} className="profile-photo" />
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Phone.No: {phoneNumber}</p>
      <p>Address: {address ? address : 'N/A'}</p>
    </div>
  );
};

export default UserCard;
