import React from "react";
import Project from "./Project";
import Footer from "./Footer";

function About() {
  return (
    <>
      <section className="w-full flex justify-center items-center">
        <div className="aboutDiv w-full h-[60vh] flex justify-left items-center">
          <div>
            <h1 className="text-white text-6xl lg:text-[10rem] font-bold ml-8 md:ml-16 mt-40">
              Abo<span className="text-blue-500">ut</span>
            </h1>
          </div>
        </div>
      </section>
      <Project />
      <Footer />
    </>
  );
}

export default About;
