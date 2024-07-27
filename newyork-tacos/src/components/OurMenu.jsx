import { useState } from "react";

const menuItems = [
  {
    name: "Tacos",
    items: [
      {
        title: "Tacos Poulet",
        price: "25 DH",
        imgSrc: "/src/assets/menu-items/tacos.jpg",
      },
      {
        title: "Tacos Viande",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/tacos.jpg",
      },
      {
        title: "Tacos Mixte",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/tacos.jpg",
      },
      {
        title: "Tacos Nugget",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/tacos.jpg",
      },
      {
        title: "Tacos Tender",
        price: "35 DH",
        imgSrc: "/src/assets/menu-items/tacos.jpg",
      },
      {
        title: "Tacos Cordon Bleu",
        price: "35 DH",
        imgSrc: "/src/assets/menu-items/tacos.jpg",
      },
      {
        title: "Tacos New York",
        price: "35 DH",
        imgSrc: "/src/assets/menu-items/tacos.jpg",
      },
      {
        title: "Tacos Big Poulet",
        price: "40 DH",
        imgSrc: "/src/assets/menu-items/big-tacos.jpg",
      },
      {
        title: "Tacos Big Mixte",
        price: "40 DH",
        imgSrc: "/src/assets/menu-items/big-tacos.jpg",
      },
      {
        title: "Tacos Big Viande",
        price: "45 DH",
        imgSrc: "/src/assets/menu-items/big-tacos.jpg",
      },
      {
        title: "Tacos Big Nugget",
        price: "50 DH",
        imgSrc: "/src/assets/menu-items/big-tacos.jpg",
      },
      {
        title: "Tacos Big Tender",
        price: "55 DH",
        imgSrc: "/src/assets/menu-items/big-tacos.jpg",
      },
    ],
  },
  {
    name: "Burgers",
    items: [
      {
        title: "Cheese Burger",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/cheese-burger.png",
      },
      {
        title: "Chicken Burger",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/chicken-burger.png",
      },
      {
        title: "Zinger Burger",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/zinger-burger.png",
      },
      {
        title: "Double chicken Burger",
        price: "35 DH",
        imgSrc: "/src/assets/menu-items/double-chicken-burger.png",
      },
      {
        title: "Double Cheese Burger",
        price: "35 DH",
        imgSrc: "/src/assets/menu-items/double-cheese-burger.png",
      },
    ],
  },
  {
    name: "Gratiness",
    items: [
      {
        title: "Gratinee Viande Fumee",
        price: "+10 DH",
        imgSrc: "/src/assets/menu-items/gratiness-dinde-fumee.jpg",
      },
      {
        title: "Gratinee Pizza",
        price: "+10 DH",
        imgSrc: "/src/assets/menu-items/gratiness-pizza.jpg",
      },
      {
        title: "Gratinee Mozzarella",
        price: "+10 DH",
        imgSrc: "/src/assets/menu-items/gratiness-modzarila.jpg",
      },
    ],
  },
  {
    name: "Pasticcios",
    items: [
      {
        title: "Pasticcio Dinde",
        price: "25 DH",
        imgSrc: "/src/assets/menu-items/pasticcio.jpg",
      },
      {
        title: "Pasticcio Viande H",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/pasticcio.jpg",
      },
      {
        title: "Pasticcio Mixte",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/pasticcio.jpg",
      },
      {
        title: "Pasticcio Charcuterie",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/pasticcio.jpg",
      },
    ],
  },
  {
    name: "Nuggets",
    items: [
      {
        title: "6 Pieces Nugget",
        price: "20 DH",
        imgSrc: "/src/assets/menu-items/pieces-nuggets.jpg",
      },
      {
        title: "4 Pieces Tender",
        price: "20 DH",
        imgSrc: "/src/assets/menu-items/pieces-tender.jpg",
      },
      {
        title: "Plat Tender Crispy",
        price: "35 DH",
        imgSrc: "/src/assets/menu-items/plat-tender.jpg",
      },
    ],
  },
  {
    name: "Sandwiches",
    items: [
      {
        title: "Chicken Zinger",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/chicken-zinger.png",
      },
      {
        title: "Cordon Bleu Sandwich",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/cordon-bleu.png",
      },
      {
        title: "Escalope Sandwich",
        price: "30 DH",
        imgSrc: "/src/assets/menu-items/escalope.png",
      },
      {
        title: "Sandwich Supreme",
        price: "35 DH",
        imgSrc: "src/assets/menu-items/chicken-supreme.png",
      },
    ],
  },
  {
    name: "Soda",
    items: [
      {
        title: "CocaCola",
        price: "8 DH",
        imgSrc: "/src/assets/menu-items/cocacola.png",
      },
      {
        title: "Sprite",
        price: "8 DH",
        imgSrc: "/src/assets/menu-items/sprite.png",
      },
      {
        title: "Fanta",
        price: "7 DH",
        imgSrc: "/src/assets/menu-items/fanta.png",
      },
      {
        title: "Pepsi",
        price: "7 DH",
        imgSrc: "/src/assets/menu-items/pepsi.png",
      },
    ],
  },
];
export default function OurMenu() {
  const [activeItem, setActiveItem] = useState("Tacos");

  const activeMenuItems = menuItems.find(
    (item) => item.name === activeItem
  )?.items || [];

  const handleItemClick =(itemName)=>{
    setActiveItem(itemName);
  }

  return (
    <div className="our-menu" id="menu">
      <div className="menu-texture">
        <h3>Fresh from Tacos New York</h3>
        <h1>OUR SEPECIAL MENU</h1>
      </div>
      <div className="menu">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`menu-item ${activeItem === item.name ? "active" : ""}`}
            onClick={()=> handleItemClick(item.name)}
            aria-label={`View ${item.name} menu`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="menu-content">
        {activeMenuItems.map((item, index) => (
          <div key={`${activeItem}-${index}`} className="menu-item-detail">
            <img src={item.imgSrc} alt={item.title} className="item-image" />
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
