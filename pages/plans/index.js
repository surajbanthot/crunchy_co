import React from "react";
import Link from 'next/link';
const Plans = () => {
  return (
    <>
      <main className="flex flex-col justify-center text-center ">
        <div className="font-bold text-4xl pt-16 pb-16">Choose Your Plan</div>
        <div className="flex justify-between items-center">
          <div className="m-8">
            <img src="business.png" className="w-40 h-40 pb-8 ml-12" />
            <div className="font-bold text-3xl">Corporate</div>
            <div className="text-justify pb-8">
              In nostrud voluptate in elit id nisi irure. Laboris excepteur amet
              in amet ut proident duis aliqua ipsum. Incididunt culpa anim duis
              elit amet occaecat excepteur enim excepteur nulla.
            </div>
            <Link href="/Questionnaire">
              <button className="bg-green-300 border-1 p-4 rounded-xl shadow-lg">
                Get the Box
              </button>
            </Link>
          </div>
          <div className="m-8">
            <img src="home.png" className="w-40 h-40 pb-8 ml-12" />
            <div className="font-bold text-3xl">Home</div>
            <div className="text-justify pb-8">
              In nostrud voluptate in elit id nisi irure. Laboris excepteur amet
              in amet ut proident duis aliqua ipsum. Incididunt culpa anim duis
              elit amet occaecat excepteur enim excepteur nulla.
            </div>
            <button className="bg-gray-300 border-1 p-4 rounded-xl shadow-lg">
              Get the Box
            </button>
          </div>
          <div className="m-8">
            <img src="box.png" className="w-40 h-40 pb-8 ml-12" />
            <div className="font-bold text-3xl">Individual</div>
            <div>
              <div className="text-justify pb-8">
                In nostrud voluptate in elit id nisi irure. Laboris excepteur
                amet in amet ut proident duis aliqua ipsum. Incididunt culpa
                anim duis elit amet occaecat excepteur enim excepteur nulla.
              </div>
              <button className="bg-gray-300 border-1 p-4 rounded-xl shadow-lg">
                Get the Box
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Plans;
