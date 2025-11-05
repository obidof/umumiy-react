import React, { useState } from 'react'

function App() {

  const [tabsBtns, setTabsButton] = useState([
    {
      id: 1,
      name: "Cars",
      images: [
        "https://wallpapers.com/images/high/car-in-mountain-landscape-jtxxiu9du04ltrax.webp",
        "https://wallpapers.com/images/high/boston-terrier-pictures-2560-x-1600-nybru28sq1ysof6j.webp",
      ],
    },
    {
      id: 2,
      name: "Animal",
      images: [
        "https://wallpapers.com/images/high/boston-terrier-pictures-2560-x-1600-nybru28sq1ysof6j.webp",
      ],
    },
    {
      id: 3,
      name: "Mountain",
      images: [
        "https://wallpapers.com/images/high/blue-mountain-sl03q8dz9cez4zff.webp",
      ],
    },
    {
      id: 4,
      name: "Ai",
      images: [
        "https://wallpapers.com/images/high/ai-1350-x-900-wallpaper-nuiqaa47vf0zt9z4.webp",
      ],
    },
  ]);

  const [activetabe, setActivetab] = useState([0])

  return (
    <div className='m-12'>
      <div className='flex gap-12 justify-center mt-6'>
        {tabsBtns.map((item) => {
          <button onClick={() => setActivetab(item)} key={item.id} className={`border-2 ${activetabe.name == item.name ? "bg-orange-400 text-white" : ""} border-orange-400 px-12 py-2 rounded-xl cursor-pointer`}>
            {item.name}
          </button>
        })}
      </div>

      <div className='m-6 p-6'>
        {activetabe.name == "Cars" && (
          <div>
            <h1 className='pb-3 text-2xl font-bold'>{activetabe.name}</h1>
            <div className='p-2 grid grid-cols-3 gap-4'>
              {activetabe.images.map((item, index) => (
                <img key={index} className='w-full' src={item} alt={item} />
              ))}
            </div>
          </div>
        )}

        {activetabe.name == "Animal" && (
          <div>
            <h1 className='pb-3 text-2xl font-bold'>{activetabe.name}</h1>
            <div className='p-2 grid grid-cols-3 gap-4'>
              {activetabe.images.map((item, index) => (
                <img key={index} className='w-full' src={item} alt={item} />
              ))}
            </div>
          </div>
        )}

        {activetabe.name == "Mountain" && (
          <div>
            <h1 className='pb-3 text-2xl font-bold'>{activetabe.name}</h1>
            <div className='p-2 grid grid-cols-3 gap-4'>
              {activetabe.images.map((item, index) => (
                <img key={index} className='w-full' src={item} alt={item} />
              ))}
            </div>
          </div>
        )}

        {activetabe.name == "Ai" && (
          <div>
            <h1 className='pb-3 text-2xl font-bold'>{activetabe.name}</h1>
            <div className='p-2 grid grid-cols-3 gap-4'>
              {activetabe.images.map((item, index) => (
                <img key={index} className='w-full' src={item} alt={item} />
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default App
