import React, { Component } from "react";

class BannerContent2 extends Component {
  render() {
    return (
      <div className={"flex justify-center md:justify-end pb-5"}>
        <div className="max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            className="grid grid-cols-3 gap-4 p-5 rounded-2xl text-white "
            style={{
              backgroundColor: "rgb(20 100 15 / 35%)",
              backdropFilter: "blur(5px)",
            }}
          >
            <div className={"col-span-2"}>
              <div className="font-bold mb-3">Blueberry Special</div>
              <div className="text-xs">
                <div>Calories: 20 Kcal</div>
                <div>Size: 10 0z</div>
              </div>
            </div>
            <div>
              <div className="flex w-10 h-10 mb-3 bg-green-800 text-white rounded-full items-center justify-center ">
                20%
              </div>
              <div>
                <h3 className="text-2xl">$12</h3>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-yellow-500 text-white "
            style={{
              backgroundColor: "rgb(255 255 0 / 53%)",
              backdropFilter: "blur(5px)",
            }}
          >
            <div className={"col-span-2"}>
              <div className="font-bold mb-3">Blueberry Special</div>
              <div className="text-xs">
                <div>Calories: 20 Kcal</div>
                <div>Size: 10 0z</div>
              </div>
            </div>
            <div>
              <div className="flex w-10 h-10 mb-3 bg-green-800 text-white rounded-full items-center justify-center ">
                20%
              </div>
              <div>
                <h3 className="text-2xl">$12</h3>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-3 gap-4 p-5  rounded-2xl  text-white  "
            style={{
              backgroundColor: "rgb(46 3 46 / 35%)",
              backdropFilter: "blur(5px)",
            }}
          >
            <div className={"col-span-2"}>
              <div className="font-bold mb-3">Blueberry Special</div>
              <div className="text-xs">
                <div>Calories: 20 Kcal</div>
                <div>Size: 10 0z</div>
              </div>
            </div>
            <div>
              <div className="flex w-10 h-10 mb-3 bg-green-800 text-white rounded-full items-center justify-center ">
                20%
              </div>
              <div>
                <h3 className="text-2xl">$12</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerContent2;
