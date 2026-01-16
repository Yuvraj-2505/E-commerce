import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Line } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

import "./style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2 nav-bar-container">
        <div className="container flex items-center justify-end gap-8 !bg-white">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full shop-by-categories-btn !bg-white"
              onClick={openCategoryPanel}
            >
              <RiMenu2Line className="text-[18px] font-bold font-[800]" />
              SHOP BY CATEGORIES
              <TfiAngleDown className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-4 justify-center nav">
              <li>
                <Link to="/" className="nav-link">
                  <Button className="nav-link-button">
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  <Button className="nav-link-button">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu fashion-dropdown">
                  <ul>
                    <li>
                      <Link to="/">
                        <Button className="dropdown-link-button">
                          Mens
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button className="dropdown-link-button">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button className="dropdown-link-button">
                          Girls
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  <Button className="nav-link-button">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  <Button className="nav-link-button">
                    Bags
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  <Button className="nav-link-button">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  <Button className="nav-link-button">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  <Button className="nav-link-button">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  <Button className="nav-link-button">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  <Button className="nav-link-button">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[20%] ml-6">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* category Panel component */}
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation



// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import { RiMenu2Line } from "react-icons/ri";
// import { TfiAngleDown } from "react-icons/tfi";
// import { Link } from "react-router-dom";
// import { GoRocket } from "react-icons/go";
// import CategoryPanel from "./CategoryPanel";

// import "./style.css";

// const Navigation = () => {
//   const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

//   const openCategoryPanel = () => {
//     setIsOpenCatPanel(true);
//   };

//   return (
//     <>
//       <nav className="py-2">
//         <div className="container flex items-center justify-end gap-8">
//           <div className="col_1 w-[20%]">
//             <Button
//               className="!text-black gap-2 w-full"
//               onClick={openCategoryPanel}
//             >
//               <RiMenu2Line className="text-[18px] font-bold font-[800]" />
//               Shop By Categories
//               <TfiAngleDown className="text-[13px] ml-auto font-bold" />
//             </Button>
//           </div>

//           <div className="col_2 w-[60%]">
//             <ul className="flex items-center gap-3 justify-center nav">
//               <li className="list-none">
//                 <Link to="/" className="link transition text-[14px] font-[500]">
//                   <Button
//                     className="link transiton !font-[500]
//                             !text-[#1d1c1c] hover:!text-[red]"
//                   >
//                     Home
//                   </Button>
//                 </Link>
//               </li>
//               <li className="list-none relative">
//                 <Link to="/" className="link transition text-[14px] font-[500]">
//                   <Button
//                     className="link transiton !font-[500]
//                             !text-[#1d1c1c] hover:!text-[red]"
//                   >
//                     Fashion
//                   </Button>
//                 </Link>

//                 <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
//                   <ul>
//                     <li className="list-none w-full ">
//                       <Link to="/" className="w-full">
//                         <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
//                           Men
//                         </Button>
//                         {/* <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
//                           <ul>
//                             <li className="list-none w-full">
//                               <Link to="/" className="w-full">
//                                 <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
//                                   Men
//                                 </Button>
//                               </Link>
//                             </li>
//                             <li className="list-none w-full">
//                               <Link to="/" className="w-full">
//                                 <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
//                                   Women
//                                 </Button>
//                               </Link>
//                             </li>
//                             <li className="list-none w-full">
//                               <Link to="/" className="w-full">
//                                 <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
//                                   Kids
//                                 </Button>
//                               </Link>
//                             </li>
//                             <li className="list-none w-full">
//                               <Link to="/" className="w-full">
//                                 <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
//                                   Girls
//                                 </Button>
//                               </Link>
//                             </li>
//                             <li className="list-none w-full">
//                               <Link to="/" className="w-full">
//                                 <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
//                                   Boys
//                                 </Button>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div> */}
//                       </Link>
//                     </li>
//                     <li className="list-none w-full">
//                       <Link to="/" className="w-full">
//                         <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
//                           Women
//                         </Button>
//                       </Link>
//                     </li>
//                     <li className="list-none w-full">
//                       <Link to="/" className="w-full">
//                         <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
//                           Kids
//                         </Button>
//                       </Link>
//                     </li>
//                     <li className="list-none w-full">
//                       <Link to="/" className="w-full">
//                         <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
//                           Girls
//                         </Button>
//                       </Link>
//                     </li>
//                     <li className="list-none w-full">
//                       <Link to="/" className="w-full">
//                         <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
//                           Boys
//                         </Button>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//               <li className="list-none">
//                 <Link to="/" className="link transition text-[14px] font-[500]">
//                   <Button
//                     className="link transiton !font-[500]
//                             !text-[#1d1c1c] hover:!text-[red]"
//                   >
//                     Electronics
//                   </Button>
//                 </Link>
//               </li>
//               <li className="list-none">
//                 <Link to="/" className="link transition text-[14px] font-[500]">
//                   <Button
//                     className="link transiton !font-[500]
//                             !text-[#1d1c1c] hover:!text-[red]"
//                   >
//                     Bags
//                   </Button>
//                 </Link>
//               </li>
//               <li className="list-none">
//                 <Link to="/" className="link transition text-[14px] font-[500]">
//                   <Button
//                     className="link transiton !font-[500]
//                             !text-[#1d1c1c] hover:!text-[red]"
//                   >
//                     Footwear
//                   </Button>
//                 </Link>
//               </li>
//               <li className="list-none">
//                 <Link to="/" className="link transition text-[14px] font-[500]">
//                   <Button
//                     className="link transiton !font-[500]
//                             !text-[#1d1c1c] hover:!text-[red]"
//                   >
//                     Groceries
//                   </Button>
//                 </Link>
//               </li>
//               <li className="list-none">
//                 <Link to="/" className="link transition text-[14px] font-[500]">
//                   <Button
//                     className="link transiton !font-[500]
//                             !text-[#1d1c1c] hover:!text-[red]"
//                   >
//                     Beauty
//                   </Button>
//                 </Link>
//               </li>
//               <li className="list-none">
//                 <Link to="/" className="link transition text-[14px] font-[500]">
//                   <Button
//                     className="link transiton !font-[500]
//                             !text-[#1d1c1c] hover:!text-[red]"
//                   >
//                     Wellness
//                   </Button>
//                 </Link>
//               </li>
//               <li className="list-none">
//                 <Link to="/" className="link transition text-[14px] font-[500]">
//                   <Button
//                     className="link transiton !font-[500]
//                             !text-[#1d1c1c] hover:!text-[red]"
//                   >
//                     Jewellery
//                   </Button>
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="col_3 w-[20%]">
//             <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
//               <GoRocket className="text-[18px]" />
//               Free International Delivery
//             </p>
//           </div>
//         </div>
//       </nav>

//       {/* category Panel component */}
//       <CategoryPanel
//         isOpenCatPanel={isOpenCatPanel}
//         setIsOpenCatPanel={setIsOpenCatPanel}
//       />
//     </>
//   );
// };

// export default Navigation;

