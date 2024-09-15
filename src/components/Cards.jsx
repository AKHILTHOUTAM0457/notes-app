import React, { useState } from "react";
import { RxCopy } from "react-icons/rx";
import { TbEditCircle } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Cards({ data, reference, index, editCard, deleteCard }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(data.desc);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    editCard(index, newDesc);
    setIsEditing(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data.desc).then(() => {
      alert("Copied to clipboard");
    });
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-6 py-8 overflow-hidden group"
    >
      <span className="flex justify-between items-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button title="copy" onClick={handleCopy} className="text-xl">
          <RxCopy />
        </button>
        <button
          title="close"
          onClick={() => deleteCard(index)}
          className="text-xl"
        >
          <IoClose />
        </button>
      </span>
      <div>
        {isEditing ? (
          <textarea
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            onBlur={handleSave}
            className="text-sm leading-tight mt-5 font-semibold p-4 bg-white text-black rounded-md w-full h-32 resize-none"
          />
        ) : (
          <p className="text-sm mt-5 p-4">{data.desc}</p>
        )}
      </div>
      <button
        title="Edit"
        onClick={isEditing ? handleSave : handleEdit}
        className="footer absolute bottom-10 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <TbEditCircle />
      </button>
    </motion.div>
  );
}

export default Cards;
