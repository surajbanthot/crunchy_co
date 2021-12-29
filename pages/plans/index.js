import React from "react";

const Plans = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex font-bold text-4xl pt-16 pb-16 text-center">
        Choose Your Plan
      </div>
      <div className="flex space-x-40 p-12 pb-12 text-center">
        <div>
          <img src="business.png" className="w-40 h-40" />
          <div>Corporate</div>
        </div>
        <div>
          <img src="home.png" className="w-40 h-40" />
          <div>Home</div>
        </div>
        <div>
          <img src="box.png" className="w-40 h-40" />
          <div>Individual</div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center columns-3">
        <div>
          <div className="">
            In nostrud voluptate in elit id nisi irure. Laboris excepteur amet
            in amet ut proident duis aliqua ipsum. Incididunt culpa anim duis
            elit amet occaecat excepteur enim excepteur nulla.
          </div>
          <button className="">Get the Box</button>
        </div>
        <div>
          <div className="">
            In nostrud voluptate in elit id nisi irure. Laboris excepteur amet
            in amet ut proident duis aliqua ipsum. Incididunt culpa anim duis
            elit amet occaecat excepteur enim excepteur nulla.
          </div>
          <button className="">Get the Box</button>
        </div>
        <div>
          <div className="">
            In nostrud voluptate in elit id nisi irure. Laboris excepteur amet
            in amet ut proident duis aliqua ipsum. Incididunt culpa anim duis
            elit amet occaecat excepteur enim excepteur nulla.
          </div>
          <button className="">Get the Box</button>
        </div>
      </div>
    </main>
  );
};

export default Plans;
