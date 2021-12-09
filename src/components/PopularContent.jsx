import React, { Component } from "react";

const data = [
  {
    img: "/assets/img/content1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mi.",
  },
  {
    img: "/assets/img/content2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mi.",
  },
  {
    img: "/assets/img/content3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mi.",
  },
  {
    img: "/assets/img/content4.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mi.",
  },
  {
    img: "/assets/img/content1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mi.",
  },
  {
    img: "/assets/img/content2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mi.",
  },
  {
    img: "/assets/img/content3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mi.",
  },
  {
    img: "/assets/img/content4.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit mi.",
  },
];

class PopularContent extends Component {
  render() {
    return (
      <div className={"container mx-auto px-5"}>
        <div className="text-purple-800 font-bold text-2xl pb-5">Popular Drinks</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((e, i) => {
            return (
              <div key={i} className="h-full bg-white rounded-2xl shadow-2xl">
                <div>
                  <img src={e.img} alt="" className="rounded-2xl w-full" />
                </div>
                <div className="p-5">
                  <div className="text-sm text-gray-300">
                    <p>{e.description}</p>
                  </div>
                  <div className="flex justify-between pt-6 ">
                    <div className="text-purple-800 text-2xl ">$15.00 us</div>
                    <div className="h-10 w-10 bg-purple-800 rounded-full ml-3"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PopularContent;

// width: 389px;
// height: 357.21px
