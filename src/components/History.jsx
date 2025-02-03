import React from 'react'
import Footer from './Footer';
function History() {
  const timelineItems = [
    {
      id: 1,
      position: "right",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      color: "bgColor1",
      textColor: "text-gray-800",
      img : "/images/blog.jpg",
      date : 2002,
    },
    {
      id: 2,
      position: "left",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      color: "bg-red-400",
      textColor: "text-white",
      img : "/images/blog.jpg",
      date : 2002,
    },
    {
      id: 3,
      position: "right",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      color: "bgColor1",
      textColor: "text-gray-800",
      img : "/images/blog.jpg",
      date : 2002,
    },
    {
      id: 4,
      position: "left",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      color: "bg-red-400",
      textColor: "text-white",
      img : "/images/blog.jpg",
      date : 2002,
    },
    {
      id: 5,
      position: "right",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      color: "bgColor1",
      textColor: "text-gray-800",
      img : "/images/blog.jpg",
      date : 2002,
    
    }
  ];
  return (
    <>
       <section className="w-full flex justify-center items-center">
        <div className="aboutDiv w-full h-[60vh] flex justify-left items-center">
          <div>
            <h1 className="text-white text-6xl lg:text-[10rem] font-bold ml-8 md:ml-16 mt-40">
              HISTO<span className="text-blue-500">RY </span>
            </h1>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto p-6">
                    <h1 className="text-4xl font-bold text-gray-700 mb-6">History</h1>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni repellendus architecto numquam dolore ipsum omnis facere dolores! Repellendus dolorum sunt laudantium ipsum voluptas accusantium, corrupti voluptatem. Maxime, dolorem esse.
                    </p>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime modi at praesentium esse deleniti expedita, nemo ipsum quod. Consequuntur, dolor! Optio ipsam rem et non numquam illum, error necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cupiditate laudantium. Aut unde voluptates nesciunt corrupti neque aspernatur eaque! Rem aliquid voluptates facilis dicta temporibus dolor voluptatem magni officiis amet.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime modi at praesentium esse deleniti expedita, nemo ipsum quod. Consequuntur, dolor! Optio ipsam rem et non numquam illum, error necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cupiditate laudantium. Aut unde voluptates nesciunt corrupti neque aspernatur eaque! Rem aliquid voluptates facilis dicta temporibus dolor voluptatem magni officiis amet.
                    </p>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime modi at praesentium esse deleniti expedita, nemo ipsum quod. Consequuntur, dolor! Optio ipsam rem et non numquam illum, error necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cupiditate laudantium. Aut unde voluptates nesciunt corrupti neque aspernatur eaque! Rem aliquid voluptates facilis dicta temporibus dolor voluptatem magni officiis amet.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-700 mt-8">Key Dates in Our History</h2>
                </div>
        {/* <h1 className='py-4 text-center text-lg' ><strong>Key Dates in Our History</strong></h1> */}
      <div className="container mx-auto w-full h-full bg-gray-200">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div 
          className="border-2 absolute border-opacity-20 border-gray-700 h-full left-[9%] md:left-[50%]" 
          // style={{ left: "50%" }}
        ></div>
        
        {timelineItems.map((item) => (
          <div
            key={item.id}
            className={`gap-6 mb-8 flex flex-row justify-between items-center w-full ${item.position === "left" ? "md:flex-row-reverse" : ""}`}
          >
            <div className="order-1 w-full md:w-5/12 hidden md:block"></div>
            
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">
                {item.id}
              </h1>
            </div>
            
            <div
              className={`order-1 flex  ${item.color} rounded-lg relative shadow-xl w-full md:w-5/12 `}
            >
              <div className='px-6 py-4'>
              <h3 className={`mb-3 font-bold ${item.textColor} text-xl`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-snug tracking-wide ${item.textColor}`}>
                {item.description}
              </p>
              </div>
              <div className='w-[250px]'>
                <div className='absolute bg-orange-500 p-2'>
                  <h1 className='text-sm md:text-lg'>{item.date}</h1>
                </div>
                <img src={item.img} alt=""  className='rounded-lg ' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default History
