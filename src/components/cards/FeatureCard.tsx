// FeaturedProduct data aur zaroori libraries ko import karte hain
import { FeaturedProduct } from "@/data/featurCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// FeatureCard naam ka functional component banaya gaya hai
// Yeh component ek prop "cardData" leta hai jo FeaturedProduct type ka hota hai
const FeatureCard = ({ cardData }: { cardData: FeaturedProduct }) => {
  return (
    // Link component ko use karke product page ka link diya gaya hai
    <Link href={"/product/1"} className="h-[360px] jon shadow-md w-full max-w-[300px] flex-col gap-2">
      {/* Card ka image section */}
      <div className="bg-[#F6F7FB] flex items-center justify-center h-[236px]">
        {/* Product image ko render karte hain */}
        <Image
          src={cardData.image} // Product ka image URL
          width={180} // Image ki width
          height={180} // Image ki height
          alt={cardData.name} // Image ka alt text
        />
      </div>

      {/* Card ka text aur button section */}
      <div className="flex flex-col gap-2 items-center ">
        {/* Product ka naam */}
        <p className="text-[#FB2E86] text-[18px] font-bold">{cardData.name}</p>

        {/* Color indicator buttons */}
        <div className="flex gap-2 items-center">
          <button className="w-[14px] h-[4px] rounded-[10px] bg-[#05E6B7]"></button>
          <button className="w-[14px] h-[4px] rounded-[10px] bg-[#F701A8]"></button>
          <button className="w-[14px] h-[4px] rounded-[10px] bg-[#00009D]"></button>
        </div>

        {/* Product code */}
        <p className="text-[#151875] text-[14px]">Code . {cardData.code}</p>

        {/* Product ki price */}
        <p className="text-[#151875] text-[14px]">${cardData.price}</p>
      </div>
    </Link>
  );
};

// Component ko export karte hain taake doosri files mein use kiya ja sake
export default FeatureCard; 