import React, { Component } from "react";

class FilterNav extends Component {
  render() {
    return (
      <div className="flex container justify-between  md:flex-row container mx-auto pb-20 flex-wrap  ">
          <div className='md:flex md:block mx-auto justify-between items-center space-x-4 md:content md:flex-row text-purple-800 hidden ' >
            <div>
                All
            </div>
            <div className="flex items-center justify-center text-white font-bold  bg-purple-700 w-40 h-10">
                Popular Drinks
            </div>
            <div>
                Natural Smoothie
            </div>
            <div>
                Juices
            </div>
            <div>
                Yogurt
            </div>
          </div>

        
          <div className=' flex justify-center items-center text-left ml-3 '>
              <button className='py-1 px-3 bg-purple-800 rounded-2xl text-white '>
                  Filter
              </button>
          </div>
          <div className='flex items-center'>
          <div className='md:hidden mr-3'>
                <div className='h-0.5 w-4 bg-purple-800 mb-0.5'></div>
                <div className='h-0.5 w-4 bg-purple-800 mb-0.5'></div>
                <div className='h-0.5 w-4 mb-1 bg-purple-800'></div>
            </div>
            </div>
      </div>
    );
  }
}
// style={{ display: 'none' }}

export default FilterNav;
