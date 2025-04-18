import React from "react";

function Cards({ item }) {
  
  const handleGet = (item) => {
    const fileUrl = `http://localhost:4001${item.link}`;
    window.open(fileUrl, '_blank');
  };
  
  
  return (
    <>
      <div className="mt-4 my-3 p-3">
      <div className="card w-92 h-[500px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img src={item.image} alt="Shoes" />
  </figure>
  <div className="card-body min-h-[200px]">
    <h2 className="card-title">
      {item.name}
      <div className="bg-pink-600 text-white text-sm px-3 py-1 rounded-full shadow-sm">
      {item.category}
       </div> 

    </h2>
    <p className="line-clamp-2">{item.title}</p>
    <div className="card-actions justify-between mt-auto">
      <div className="badge badge-outline">${item.price}</div>
      <a
       
        onClick={() => handleGet(item)}
        
        className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
      >GET</a>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

export default Cards;