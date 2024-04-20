import React from 'react';

interface AvatarProps {
  // Optional props for customization can be added here
} // Empty interface for now

const Avatar: React.FC<AvatarProps> = () => {
  return (
    <div>
      <img
        className="w-10 h-10 rounded-full"
        src="/docs/images/people/profile-picture-5.jpg"
        alt="Rounded avatar"
      />
      <img
        className="w-10 h-10 rounded"
        src="/docs/images/people/profile-picture-5.jpg"
        alt="Default avatar"
      />
    </div>
  );
};

export default Avatar;
