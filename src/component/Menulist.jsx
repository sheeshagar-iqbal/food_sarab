import React from "react";
import Menucard from "./Menucard";
import menu1 from '../image/menu1.jpg'
import menu2 from '../image/menu2.jpg'
import menu3 from '../image/menu3.jpg'
import menu4 from '../image/menu4.jpg'
import menu5 from '../image/menu5.jpg'
import menu6 from '../image/menu6.jpg'

const menuItems = [
  {
    id: 1,
    category: "Burgers",
    title: "Classic Smash Burger",
    description:
      "Double smashed patty, cheddar, caramelized onions, pickles & special sauce",
    image:menu1,
    price: 14.99,
    oldPrice: 18.99,
    rating: 128,
    badge: "Hot",
    favorite: false
  },
  {
    id: 2,
    category: "Pizza",
    title: "Margherita Royale",
    description:
      "San Marzano tomatoes, buffalo mozzarella, basil & truffle oil",
    image:menu2,
    price: 19.99,
    oldPrice: 23.99,
    rating: 95,
    badge: "New",
    favorite: false
  },
  {
    id: 3,
    category: "Chicken",
    title: "Nashville Hot Chicken",
    description:
      "Crispy fried chicken in fiery Nashville spice blend with honey drizzle",
    image:menu3,
    price: 12.99,
    oldPrice: 16.99,
    rating: 210,
    badge: "Best Seller",
    favorite: false
  },
  {
    id: 4,
    category: "Wraps",
    title: "Loaded Fajita Wrap",
    description:
      "Grilled chicken, peppers, sour cream & guacamole in a warm tortilla",
    image:menu4,
    price: 10.99,
    oldPrice: null,
    rating: 74,
    badge: "",
    favorite: false
  },
  {
    id: 5,
    category: "Desserts",
    title: "Nutella Lava Cake",
    description:
      "Molten chocolate cake with Nutella center, vanilla ice cream & caramel",
    image:menu5,
    price: 8.99,
    oldPrice: 11.99,
    rating: 56,
    badge: "New",
    favorite: false
  },
  {
    id: 6,
    category: "Pasta",
    title: "Truffle Mushroom Pasta",
    description:
      "Al dente tagliatelle, wild mushrooms, black truffle, parmesan & thyme",
    image:menu6,
    price: 16.99,
    oldPrice: null,
    rating: 88,
    badge: "Chef's Pick",
    favorite: false
  }
];

const Menulist = () => {
  return (
    <>
      <div className="menulist">
        <Menucard  item={menuItems}/>
        
      </div>
    </>
  );
};

export default Menulist;
