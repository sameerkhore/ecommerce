// React aur zaroori components ko import karte hain
import React from "react";
import { Button } from "../ui/button";

// PinkButton naam ka ek functional component banaya gaya hai
// Is component ko "children" prop diya gaya hai, jo React ke andar ek node hoti hai
const PinkButton = ({ children }: { children: React.ReactNode }) => {
  return (
    // Button component ko customize karte huye pink background, rounded corners aur padding di gayi hai
    <Button className="bg-[#FB2E86] jon rounded-[2px] px-8 py-5">
      {/* Yahan children ko render kiya gaya hai, jo is button ke andar ka content hoga */}
      {children}
    </Button>
  );
};

// Component ko export karte hain taake isay doosri files mein use kiya ja sake
export default PinkButton;
