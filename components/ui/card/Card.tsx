import React from "react";

export const Card = ({ children, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <section>
          <div className="bg-white rounded-xl shadow-xl m-3">
            <div className="w-full border-gray-200 rounded-lg p-6">
              <h2 className="bg-gray-300 animate-pulse h-4 w-full mb-2"></h2>
              <h2 className="bg-gray-300 animate-pulse h-4 w-full mb-2"></h2>
              <p className="leading-relaxed mb-3 w-1/3 h-4 animate-pulse bg-gray-300"></p>
              <div className="flex items-center flex-wrap ">
                <span className="bg-gray-300 w-1/3 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="bg-white rounded-xl shadow-xl p-6 m-3">{children}</div>
      )}
    </>
  );
};
