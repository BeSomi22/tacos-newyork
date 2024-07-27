import logo from "/assets/logo.png";
import phone from "/assets/phone.png";
import cola from "/assets/cola.png";
import nuggets from "/assets/nuggets.png";
import burger from "/assets/burger.png";
import fries from "/assets/fries.png";
import tacos from "/assets/tacos.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero">
      <header>
        <div className="wrapper">
          <img src={logo} alt="logo" className="logo" />
          <ul className="links">
            <li>
              <a
                href="#home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#menu"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                OUR MENU
              </a>
            </li>
            <li>
              <a
                href="#contact"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                CONTACT US
              </a>
            </li>
          </ul>
          <a href="tel:+212523489737" aria-label="Call us">
            <img src={phone} alt="phone" className="phone" />
          </a>
        </div>
      </header>
      <div className="texture" id="home">
        <h1>TACOS NEW YORK</h1>
        <h2>FAST FOOD</h2>
      </div>
      <div className="images">
        <div className="back-img">
          <motion.img
            initial={{ opacity: 0.5, scale: 0.9, x: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: "3%" }}
            transition={{ duration: 3 }}
            src={nuggets}
            alt="nuggets"
            className="nuggets"
          />
          <motion.img
            initial={{ opacity: 0.5, y: 0 }}
            whileInView={{ opacity: 1, y: "-5%" }}
            transition={{ duration: 3 }}
            src={cola}
            alt="cola"
            className="cola"
          />
          <motion.img
            initial={{ opacity: 0.5, x: 10 }}
            whileInView={{ opacity: 1, x: "-4%" }}
            transition={{ duration: 2 }}
            src={burger}
            alt="burger"
            className="burger"
          />
        </div>
        <div className="front-img">
          <motion.img
            initial={{ opacity: 0.5, x: 0 }}
            whileInView={{ opacity: 1, x: "5%" }}
            transition={{ duration: 3 }}
            src={fries}
            alt="fries"
            className="fries"
          />
          <motion.img
            initial={{ opacity: 0.7, y: 0 }}
            whileInView={{ opacity: 1, y: "4%" }}
            transition={{ duration: 3 }}
            src={tacos}
            alt="tacos"
            className="tacos"
          />
        </div>
      </div>
    </div>
  );
}
