import React from "react";

import {Link} from "react-router-dom"

const CustomerReviews = () => {
  return (
    <Link to="projectsSection">
    <div className=" bg-white rounded-md flex flex-row pb-10 justify-center items-center">
        <div  style={{
            backgroundImage: `url("images/image2.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        className="w-[90%] flex flex-row rounded-md">
           <div
            className="backdrop-blur-sm bg-black/65 w-[420px] flex flex-col justify-between h-[370px] p-6 rounded-lg ">
              <div>
              <h4 className="text-lg font-bold text-white">Proyectos</h4>
              <p className=" text-gray-300">Descubre cómo hemos contribuido al avance de diversos sectores mediante la precisión y eficiencia en nuestros procesos.</p>
              </div>
                <button type="button" class=" text-white hover:text-white border border-gray-300 hover:border-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Ver Proyectos</button>
            </div>
        </div>

    </div>
    </Link>
  );
};

export default CustomerReviews;
