import React from "react";
import calendar from "@/assets/icons/professionals/calendar.svg";
import lock from "@/assets/icons/professionals/lock.svg";
import trophy from "@/assets/icons/professionals/trophy.svg";
import IconListItem from "@/components/IconListItem";

const listItems = [
  { icon: calendar, text: "Monthly Webinars" },
  { icon: lock, text: "Exclusive Content" },
  { icon: trophy, text: "Industry Experts" },
];

const ExclusiveInsights = () => {
  return (
    <div className="flex flex-col gap-4  items-center text-center  bg-[#0A0024]  py-16 px-4 ">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* <img src={design} alt="design" className="" /> */}
        <h1 className="text-[12px]  text-[#F2F2F2] leading-[19px] font-neutra  tracking-[1.56px] uppercase ">
          Exclusive Insights
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <h1 className="text-[36px] text-[white] leading-[44px] font-berlingske font-semibold">
          Professional development
        </h1>
        <h1 className="text-[36px] text-[white] leading-[44px]  font-berlingske font-semibold">
          webinars.
        </h1>
      </div>

      <p className="text-[20px] text-[#fff] leading-[28px]  font-berlingske  tracking-[1%] w-full  md:w-[25%]">
        Participate in monthly webinars offering valuable insights, industry
        updates, and specialized training tailored specifically for travel
        professionals.
      </p>

      <div className={`flex flex-wrap gap-6 mt-8 `}>
        {listItems.map((item, index) => (
          <IconListItem
            key={index}
            icon={item.icon}
            text={item.text}
            textColor="text-[#fff]"
          />
        ))}
      </div>

      <div className="flex flex-col  w-full justify-center py-6 mt-6 gap-8">
        <h1 className="text-[15px]  text-[#EDF5FC91] leading-[19px] font-neutra  tracking-[1.56px] uppercase ">
          enter your email address here
        </h1>

        <h1 className="text-[15px]  text-[#FF7338] leading-[19px] font-neutra  tracking-[1.56px] uppercase ">
          Request webinar access
        </h1>
      </div>
    </div>
  );
};

export default ExclusiveInsights;
