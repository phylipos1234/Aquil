import React from 'react';
import heroImage from '../../../../public/images/webinar/Rectangle 4803.png';
import Header from '../../../components/Header';

const WebinarMain = () => {
  return (
    <div className="w-full h-auto relative overflow-hidden">
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Webinar Hero"
        className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] object-cover"
      />
      
      {/* Header Section */}
      
    </div>
  );
};

export default WebinarMain;
