import React from 'react'

const DestinationCard = ({ source, label }) => {
    return (
      <div className="flex flex-none flex-col items-start">
        <img src={source} alt="imag-1" className="h-[543px]" />
        { label && <h1 className="text-[15px] text-[#fff] leading-[19px] font-neutra tracking-[1.56px] mt-2">
          {label}
        </h1>}
      </div>
    );
  };
  

export default DestinationCard