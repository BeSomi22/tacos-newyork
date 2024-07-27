import delivery from "../assets/delivery.png";
import tele from "../assets/tele.png";
import phone from "../assets/phone.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import { motion } from "framer-motion";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const mapContainerStyle = {
//   height: "200px",
//   width: "70%",
// };

// const center = {
//   lat: 32.3369,
//   lng: -6.3451,
// };

const LocationCard = () => {
  return (
    <div style={{ border: "none", padding: "20px", margin: "10px" }}>
      <div>
        <h2>
          Tacos New York <span> (Hay el Houda) </span>
        </h2>
        <p className="address">
          N 391، bloc 16 avenue laayoune, Beni-Mellal 23020
        </p>
        <p className="hours" style={{ margin: "5px 0" }}>
          <span>Mon-Sun </span> 10:30am - 2:00am
        </p>
        <a href="tel:+212523489737" aria-label="Call us" className="whatsapp">
          <img
            src={phone}
            alt="phone"
            style={{ width: "35px", height: "35px" }}
          />
        </a>
        <a
          href="https://wa.me/+212670762406"
          aria-label="Chat with us on Whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="phone-n"
        >
          <img
            src={whatsapp}
            alt="whatsapp"
            style={{ width: "35px", height: "35px" }}
          />
        </a>
        <a href="https://web.facebook.com/tacosnewyork" target="_blank">
          <img
            src={facebook}
            alt="facebook"
            style={{ width: "35px", height: "35px", margin: "15px 10px" }}
          />
        </a>
        <a href="https://www.instagram.com/tacosnewyork/" target="_blank">
          <img
            src={instagram}
            alt="instagram"
            style={{ width: "35px", height: "35px", margin: "15px 10px" }}
          />
        </a>
      </div>
      <div>
        <h2>
          Tacos New York <span> (Al Moutanabi) </span>
        </h2>
        <p className="address">
        8JPQ+965, Bd Al Moutanabi, Béni Mellal
        </p>
        <p className="hours" style={{ margin: "5px 0" }}>
          <span>Mon-Sun </span> 10:30am - 2:00am
        </p>
        <a href="tel:+212523420845" aria-label="Call us" className="whatsapp">
          <img
            src={phone}
            alt="phone"
            style={{ width: "35px", height: "35px" }}
          />
        </a>
        <a
          href="https://wa.me/+212613592896"
          aria-label="Chat with us on Whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="phone-n"
        >
          <img
            src={whatsapp}
            alt="whatsapp"
            style={{ width: "35px", height: "35px" }}
          />
        </a>
        <a href="https://web.facebook.com/tacosnewyork" target="_blank">
          <img
            src={facebook}
            alt="facebook"
            style={{ width: "35px", height: "35px", margin: "15px 10px" }}
          />
        </a>
        <a href="https://www.instagram.com/tacosnewyork/" target="_blank">
          <img
            src={instagram}
            alt="instagram"
            style={{ width: "35px", height: "35px", margin: "15px 10px" }}
          />
        </a>
      </div>
    </div>
  );
};

const Locations = () => {
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <LocationCard />
      </div>
      {/* <div style={{ margin: "20px 0" }}>
        <LoadScript
          googleMapsApiKey="AIzaSyBVvX27nvVhBDX9IzAv0Yodraae86S3iL8"
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div> */}
    </div>
  );
};

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>VISIT ANY OF OUR LOCATIONS</h1>
      <div className="contact-container">
        <div className="address">
          <Locations />
        </div>
        <div className="delivery">
          <motion.img
            initial={{ scale: 1, y: 0 }}
            whileInView={{ scale: 1.1, y: "15%" }}
            transition={{ duration: 2 }}
            src={tele}
            alt="tele"
            className="tele"
          />
          <motion.img
            initial={{ x: 0, opacity: 1, visibility: "visible", scale: 1.1 }}
            whileInView={{
              x: ["0%", "90%", "0%"],
              opacity: [1, 0, 1],
              visibility: ["visible", "hidden", "hidden", "visible"],
            }}
            transition={{
              duration: 5,
            }}
            src={delivery}
            alt="delivery"
            className="delivery-man"
          />
        </div>
      </div>
    </div>
  );
}
