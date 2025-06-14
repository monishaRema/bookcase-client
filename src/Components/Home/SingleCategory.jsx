import { motion, useAnimation } from "framer-motion";

import { MdOutlineScience } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { GiEmbrassedEnergy, GiLovers, GiSpellBook  } from "react-icons/gi";
import { FaFantasyFlightGames } from "react-icons/fa";

const SingleCategory = ({ category }) => {
const controls = useAnimation();


let icon;

switch (category.book_category.toLowerCase()) {
  case 'fiction':
    icon = <GiSpellBook />;
    break;
  case 'motivation':
    icon = <GiEmbrassedEnergy />;
    break;
  case 'history':
    icon = <GoHistory />;
    break;
  case 'romance':
    icon = <GiLovers />;
    break;
  case 'fantasy':
    icon = <FaFantasyFlightGames />;
    break;
  case 'sci-fi':
    icon = <MdOutlineScience />;
    break;
  default:
    icon = null; 
}


return (
<div className="cat-card">
      <div className="relative rounded-2xl  z-10 flex flex-col justify-center items-center gap-5 px-5 py-10 text-center">
        <div className="bg-gradient-to-t to-accent from-primary rounded-xl size-20 flex justify-center items-center text-white text-3xl">
            {icon}
        </div>
        <h3 className="text-3xl text-white capitalize">{category.book_category}</h3>
        <p className="text-gray-400">{category.count} Books</p>
      </div>
  </div>
  );
}

export default SingleCategory;
