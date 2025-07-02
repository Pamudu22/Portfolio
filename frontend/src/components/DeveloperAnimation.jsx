import React from 'react';
import Lottie from 'lottie-react';
import developerAnimation from '../assets/developer_white_bg.json';

function DeveloperAnimation() {
  return (
    <div className="mt-4 w-64 h-64">
           <Lottie animationData={developerAnimation} loop autoplay />
        </div>
  );
}

export default DeveloperAnimation;
