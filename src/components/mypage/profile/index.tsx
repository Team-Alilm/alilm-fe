'use client';

import { emailText, nameText, profile } from './index.css';

interface ProfileProps {
  userName?: string;
  email?: string;
}

const Profile = ({ userName, email }: ProfileProps) => {
  return (
    <div className={profile}>
      <div className={nameText}>{userName}</div>
      <div className={emailText}>{email}</div>
    </div>
  );
};

export default Profile;
