// Categories ka array banaya gaya hai jo footer ke liye data rakhta hai
const categories = [
  {
    title: "Categories", // Category ka title
    p1: "Laptops & Computers", // Category ki pehli item
    p2: "Cameras & Photography",
    p3: "Smart Phones & Tablets",
    p4: "Video Games & Consoles",
    p5: "Waterproof Headphones",
  },
  {
    title: "Customer Care",
    p1: "My Account",
    p2: "Discount",
    p3: "Returns",
    p4: "Orders History",
    p5: "Order Tracking",
  },
  {
    title: "Pages",
    p1: "Blog",
    p2: "Browse the Shop",
    p3: "Category",
    p4: "Pre-Built Pages",
    p5: "Visual Composer Elements",
    p6: "WooCommerce Pages", // Agar extra items hon to woh yahan add hongi
  },
];

// Footer ka component banaya gaya hai
const Footer = () => {
  return (
    <footer className="bg-slate-200 mt-20 pb-10">
      {/* Footer ko grid layout mein divide kiya gaya hai */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-self-start pt-20 gap-10 lg:gap-0 px-8">
        {/* Footer ka pehla section */}
        <div className="lg:w-full lg:ml-10">
          {/* Brand ka naam */}
          <h1 className="text-4xl jon font-bold text-indigo-950">Hekto</h1>
          
          {/* Email input aur signup button */}
          <div className="flex items-center my-8">
            <input
              type="text"
              placeholder="Enter Email Adress"
              className="w-full md:w-[270px] h-9 border-2 border-slate-200 outline-none px-3 text-sm"
            />
            <div className="bg-pink-500 flex justify-center items-center w-16 h-8 -ml-1">
              <p className="text-white text-center text-xs lg:text-base">
                Sign up
              </p>
            </div>
          </div>

          {/* Contact info display karte hain */}
          <p className="text-gray-400 text-xs md:text-sm">Contact Info</p>
          <p className="text-gray-400 text-xs md:text-sm mt-3">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories ka data yahan map kiya gaya hai */}
        {categories.map((item, index) => (
          <div className="flex flex-col lg:ml-24" key={index}>
            {/* Har category ka title */}
            <h1 className="jon text-3xl font-bold text-indigo-950">
              {item.title}
            </h1>
            {/* Har category ki items */}
            <div className="text-gray-500 space-y-3 mt-8 cursor-pointer w-full">
              <p>{item.p1}</p>
              <p>{item.p2}</p>
              <p>{item.p3}</p>
              <p>{item.p4}</p>
              <p>{item.p5}</p>
              <p>{item.p6}</p> {/* Yeh item tabhi show hogi agar available ho */}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

// Footer component ko export karte hain taake doosri files mein use kiya ja sake
export default Footer;
