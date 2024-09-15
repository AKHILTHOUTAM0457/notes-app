import React, { useRef, useState } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);

  const [data, setData] = useState([
    {
      desc: "This is the background color of the card that will be displayed.",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ]);

  const [newDesc, setNewDesc] = useState("");

  const editCard = (index, newDesc) => {
    const updatedData = data.map((item, i) =>
      i === index ? { ...item, desc: newDesc } : item
    );
    setData(updatedData);
  };

  const deleteCard = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const addCard = () => {
    if (newDesc.trim() !== "") {
      setData([...data, { desc: newDesc }]);
      setNewDesc("");
    }
  };

  return (
    <div className="sticky top-0 left-0 z-[3] w-full h-full flex flex-col gap-10 p-5">
      <div className="flex justify-between items-center mb-5 ">
        <input
          type="text"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          placeholder="Enter your note "
          className="p-2 rounded-md  bg-zinc-700/50 w-1/3 border-zinc-900 outline-none focus:outline-black "
        />
        <button
          onClick={addCard}
          className="ml-2 p-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Add Note
        </button>
      </div>
      <div ref={ref} className="flex gap-10 flex-wrap">
        {data.map((item, index) => (
          <Cards
            key={index}
            data={item}
            reference={ref}
            setData={setData}
            index={index}
            editCard={editCard}
            deleteCard={deleteCard}
          />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
