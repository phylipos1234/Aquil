import React from 'react';
import sustainability from '../../../public/images/Parallax Image.png';

const Sustainability = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <img
        src={sustainability}
        alt="Sustainability"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Sustainability;
