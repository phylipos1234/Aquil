import React from "react";
import IconListItem from "../../../components/IconListItem";
import binocular from "@/assets/icons/professionals/binocular.svg";
import commission from "@/assets/icons/professionals/commission.svg";
import money from "@/assets/icons/professionals/money.svg";

const listItems = [
  { icon: binocular, text: "clear pricing" },
  { icon: commission, text: "adaptable commission" },
  { icon: money, text: "from €2500" },
];

const Pricing = () => {
  return (
    <div className="flex flex-col gap-6 items-center text-center    py-14 ">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-[12px]  text-[#0A0024] leading-[19px] font-neutra  tracking-[1.56px] ">
          TAILORED EXPERIENCE
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <h1 className="text-[36px] text-[#0A0024] leading-[44px]   font-berlingske font-semibold">
          Transparent pricing,
        </h1>
        <h1 className="text-[36px] text-[#0A0024] leading-[44px]  font-berlingske font-semibold">
          Flexible commissions.
        </h1>
      </div>

      <p className="text-[20px] text-[#0A0024] leading-[24px]  font-berlingske  tracking-[0.5px]  w-[40%]">
        Pricing options tailored to Your needs.
      </p>

      <p className="text-[20px] text-[#0A0024] leading-[28px]  font-berlingske  tracking-[0.2px] w-full sm:w-[70%]  md:w-[40%]">
        At Aquila, we value transparency and flexibility. Our clear pricing
        structures and rewarding commissions empower you to confidently offer
        exceptional luxury travel assistance, ensuring mutually beneficial
        outcomes for your business and your clients.
      </p>

      <div className={`flex  gap-10 mt-8 `}>
        {listItems.map((item, index) => (
          <IconListItem
            key={index}
            icon={item.icon}
            text={item.text}
            direction="column"
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
