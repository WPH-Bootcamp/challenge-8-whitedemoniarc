

import AdobeLogo from "../../assets/logos/adobe.png";
import UpworkLogo from "../../assets/logos/upwork.png";
import ZoomLogo from "../../assets/logos/zoom.png";
import PostmanLogo from "../../assets/logos/postman.png";
import DatabricksLogo from "../../assets/logos/databricks.png";
import AirbnbLogo from "../../assets/logos/airbnb.png";
import DropboxLogo from "../../assets/logos/dropbox.png";
import PaypalLogo from "../../assets/logos/paypal.png";
import NetflixLogo from "../../assets/logos/netflix.png";


const CompanyLogos = () => {
  return (
    <section
      className="   bg-white
    text-black
    py-16 overflow-hidden   
    dark:bg-black
    dark:text-white "
    >
      <p
        className="text-gray-600
    dark:text-gray-400 text-center mb-10"
      >
        Trusted by Global Innovators & Leading Brands
      </p>

      {/* LEFT SHADOW */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-60 bg-linear-to-r from-white
        dark:from-black  " />

        {/* RIGHT SHADOW */}
        <div className="absolute right-0 top-0 z-10 h-full w-60 bg-linear-to-l from-white to-transparent pointer-events-none  dark:from-black" />

        {/* LOGO WRAPPER */}
        <div className="flex items-center w-max animate-marquee gap-20">
          {/* <div c    lassName="flex items-center gap-16 animate-marquee whitespace-nowrap justify-center"> */}
          <img
            src={AdobeLogo}
            alt="Adobe"
            className="h-6 grayscale opacity-90  hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={UpworkLogo}
            alt="Upwork"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={ZoomLogo}
            alt="Zoom"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={PostmanLogo}
            alt="Postman"
            className="h-6 grayscale opacity-90  hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={DatabricksLogo}
            alt="Databricks"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={AirbnbLogo}
            alt="Airbnb"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={DropboxLogo}
            alt="Dropbox"
            className="h-6 grayscale opacity-90  hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={PaypalLogo}
            alt="Paypal"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={NetflixLogo}
            alt="Netflix"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          {/* duplicate biar looping smooth */}
          <img
            src={AdobeLogo}
            alt="Adobe"
            className="h-6 grayscale opacity-90  hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={UpworkLogo}
            alt="Upwork"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={ZoomLogo}
            alt="Zoom"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={PostmanLogo}
            alt="Postman"
            className="h-6 grayscale opacity-90  hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={DatabricksLogo}
            alt="Databricks"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={AirbnbLogo}
            alt="Airbnb"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={DropboxLogo}
            alt="Dropbox"
            className="h-6 grayscale opacity-90  hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={PaypalLogo}
            alt="Paypal"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          <img
            src={NetflixLogo}
            alt="Netflix"
            className="h-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />

          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;