// Zaroori imports: Rofex ka data aur libraries
import { IRofex } from "@/data/Rofex";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// RofexCard naam ka functional component banaya gaya hai
// Yeh component ek prop "CardData" leta hai jo IRofex type ka hota hai
const RofexCard = ({ CardData }: { CardData: IRofex }) => {
  return (
    // Link component ka istemal, jo card ko ek product page par navigate karta hai
    <Link
      href={"/product/1"}
      className="h-[270px] max-w-[350px] w-full text-center justify-center flex flex-col shadow-lg shadow-[#1A0B5B4D] bg-white gap-4 items-center px-4"
    >
      {/* Icon ko render karte hain */}
      <Image height={60} width={60} src={CardData.icon} alt="" />
      
      {/* Product ka title */}
      <h4 className="text-[#151875] text-xl jon font-semibold">{CardData.title}</h4>
      
      {/* Product ka description */}
      <p className="text-[#1A0B5B4D]">{CardData.description}</p>
    </Link>
  );
};

// Component ko export karte hain taake doosri files mein use kiya ja sake
export default RofexCard;
