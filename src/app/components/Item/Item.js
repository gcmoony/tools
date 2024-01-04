import Image  from 'next/image'
import { useState } from "react";
import RegularButton from "../RegularButton/RegularButton";
import potato from "../../../../public/itemImages/potato.jpg";
import apple from "../../../../public/itemImages/apples.jpg";
import banana from "../../../../public/itemImages/bananas.jpg";
import yellow_onions from "../../../../public/itemImages/yellow_onions.jpg";
import spinach from "../../../../public/itemImages/spinach.jpg";

const sampleCards = [
  {
    itemTitle: "Apples",
    itemDesc: "A picture of apples",
    itemCount: 3,
    itemImg: apple,
  },
  {
    itemTitle: "Bananas",
    itemDesc: "A picture of bananas",
    itemCount: 5,
    itemImg: banana,
  },
  {
    itemTitle: "Potatoes",
    itemDesc: "A picture of potatoes",
    itemCount: 2,
    itemImg: potato,
  },
  {
    itemTitle: "Yellow Onions",
    itemDesc: "A picture of yellow onions",
    itemCount: 2,
    itemImg: yellow_onions,
  },
  {
    itemTitle: "Spinach (Bunch)",
    itemDesc: "A picture of spinach",
    itemCount: 1,
    itemImg: spinach,
  },
];



export default function Item({items}) {
  let itemList;
  items ? itemList = items : itemList = sampleCards;


  const renderList = itemList.map((itemObj, key) => {
    
    return <ItemCard 
      key={key} 
      itemTitle={itemObj.itemTitle}
      itemCount={itemObj.itemCount}
      itemDesc={itemObj.itemDesc}
      itemImg={itemObj.itemImg}
    />
  });
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center p-5 gap-5'>
      {renderList}
      <AddItemCard />
    </div>
  )

    
}

function AddItemCard() {
  return (
    <div className='bg-slate-300 h-full w-full shadow-2xl rounded-lg flex justify-center items-center text-3xl hover:cursor-pointer hover:shadow-slate-500'>
      ➕
    </div>
  )
}

function ItemCard({itemTitle, itemCount, itemDesc, itemImg}) {
  const [count, setCount] = useState(itemCount ? itemCount : 0);  

  function increaseCount() {
    setCount(c => c + 1);
  }

  function decreaseCount() {
    count > 0 ? setCount(c => c - 1) : setCount(0);
  }
  return (
    <div className="bg-white shadow-2xl border-gray-100 border-2 rounded-lg flex flex-col items-center p-4">
      <Image src={itemImg ? itemImg : potato}
       width={300}
       height={300}
       alt={itemDesc ? itemDesc : "Sample photo description"}
       className='outline w-60 h-48 object-contain'
      />
      <header className="text-xl">{itemTitle ? itemTitle : "Sample Item"}</header>
      <div className='flex justify-evenly items-center self-stretch'>
        <RegularButton buttonText="➖" onClick={decreaseCount} additionalStyles=" hover:bg-red-200  bg-transparent rounded-full"/>
        <p className='text-2xl'>{count}</p>
        <RegularButton buttonText="➕"  onClick={increaseCount} additionalStyles=" hover:bg-green-200 bg-transparent rounded-full"/>
      </div>
    </div>
  )
}