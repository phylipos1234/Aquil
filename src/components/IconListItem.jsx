import React from 'react';

const IconListItem = ({ 
  icon, 
  text, 
  className = "", 
  direction = "row", 
  gap = "4", 
  iconClassName = "", 
  textClassName = "", 
  textColor="text-[#0A0024]"
}) => {
  const flexDirection = direction === "column" ? "flex-col" : "flex-row";
  
  return (
    <div className={`flex ${flexDirection} gap-${gap} items-center ${className}`}>
      <img src={icon} alt={text} className={iconClassName} />
      <p className={`  ${textColor} text-[15px] leading-[19px] font-neutra tracking-[1.56px] uppercase ${textClassName}`}>
        {text}
      </p>
    </div>
  );
};

export default IconListItem;