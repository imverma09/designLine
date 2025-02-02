import React from "react";
import { serviceData } from "./data/main";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();
  return (
    <section className="w-full h-auto md:h-[60vh] flex flex-col justify-center items-center">
      <div className="w-full h-1/3 flex justify-center items-center">
        <h1 className="text-3xl my-4 sm:my-0 md:text-5xl font-bold">
          Our Services
        </h1>
      </div>
      <div className="w-full h-2/3 p-2 sm:p-0 overflow-hidden">
        <div className="w-full h-2/3 p-2 sm:p-0 flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
          {serviceData?.map((item) => {
            return (
              <div class="max-w-sm p-6 border-2 border-gray-800 rounded-lg shadow bg-transparent">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">
                    {item.heading}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 line-clamp-4">
                  {item.description}
                </p>
                <button
                  onClick={() => {
                    window.scrollTo(0, 0); 
                    navigate("/project"); 
                  }}
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Service;
