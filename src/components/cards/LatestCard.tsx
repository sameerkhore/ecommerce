// Zaroori imports: Latest Product ka data aur libraries
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface LatestProduct {
  image: string;
  title: string;
  price: number;
  acutalPrice?: number;
}

// LatestCard naam ka functional component banaya gaya hai
// Yeh component do props leta hai: "CardData" aur "second"
const LatestCard = ({ CardData, second }: { CardData: LatestProduct; second: boolean }) => {
  return (
    // Link component ka use, jisme har card click hone par ek product page khulta hai
    <Link href={"/product/1"} className="h-[306px] jon max-w-[350px] w-full flex flex-col gap-2">
      {/* Card ka image section */}
      <div
        className={`h-[270px] flex items-center justify-center ${
          second ? "bg-white" : "bg-[#F7F7F7]"
        } p-1`} // Agar "second" true ho, to background white hoga, warna grey
      >
        {/* Product image ko render karte hain */}
        <Image src={CardData.image} alt="" width={245} height={245} />
      </div>

      {/* Card ka text aur pricing section */}
      <div className="text-[#151875] flex items-center justify-between w-full">
        {/* Product ka title */}
        <p>{CardData.title}</p>

        {/* Price aur actual price section */}
        <div className="flex items-center gap-2 px-2">
          <p className="text-[14px]">${CardData.price}</p>
          {/* Agar actualPrice maujood ho, to usay strike-through style mein dikhaya jata hai */}
          {CardData.acutalPrice && (
            <del className="text-[10px] text-[#FB2448]">${CardData.acutalPrice}</del>
          )}
        </div>
      </div>
    </Link>
  );
};

// Component ko export karte hain taake doosri files mein use kiya ja sake
export default LatestCard;
