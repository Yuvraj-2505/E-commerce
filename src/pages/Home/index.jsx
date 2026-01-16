import React from "react";
import HomeSlider from "../../components/Homeslider/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider/HomeCatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[300]">
                Do not miss the current offers untils the end of March.
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>


          {/* //products card */}
          <ProductsSlider items={6}/>



        </div>
      </section>

      {/* Ads Banner         */}
      <section className="bg-white py-4 pt-2">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto p-4 py-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[400]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>

            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>

      
      {/* Latest Products secrion */}
      <section className="py-5 pt-0 bg-white">
        <div className="container">
            <h2 className="text-[20px] font-[600]">Latest Products</h2>
            <ProductsSlider items={6}/>
            <AdsBannerSlider items={3} />
        </div>
      </section>


      {/* Featured Products secrion */}
      <section className="py-5 pt-0 bg-white">
        <div className="container">
            <h2 className="text-[20px] font-[600]">Featured Products</h2>
            <ProductsSlider items={6}/>
            <AdsBannerSlider items={3} />
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
