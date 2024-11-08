import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex  justify-center items-center">
      <div className="flex flex-col mt-10 h-[650px] mb-2  px-5 w-[550px]  border border-blue-700 rounded-md  border-opacity-25">
        <div>
          <h2 className=" m-3 text-center text-gray-500 text-3xl">Form</h2>
        </div>

        <div>
          <div>
            <p className=" ml-3 text-xl text-gray-500">Personal</p>
            <div className="flex">
              <div className="border border-gray-500 border-opacity-30 bg-white  mt-2 bg-opacity-35 rounded-md  h-9 m-2 w-[80%]">
                <input
                  type="text"
                  className="bg-transparent px-5 focus:outline-none py-1 text-gray-600"
                  placeholder="First Name"
                />
              </div>
              <div className=" border border-gray-500 border-opacity-30 bg-white  mt-2  bg-opacity-35 rounded-md  h-9 m-2 w-[80%]">
                <input
                  type="text"
                  className="bg-transparent px-5 focus:outline-none py-1 text-gray-600 "
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex">
              <div className="border  border-gray-500 border-opacity-30 bg-white  mt-5  bg-opacity-35 rounded-md  text-gray-900 h-9 m-2 w-[80%] ">
                <input
                  type="phone"
                  className="bg-transparent focus:outline-none px-5 py-1 text-gray-600"
                  placeholder="Phone"
                />
              </div>
              <div className="  border border-gray-500 bg-white  mt-5 border-opacity-30  bg-opacity-35 rounded-md  text-gray-900 h-9 m-2 w-[80%] ">
                <input
                  type="email"
                  className="bg-transparent px-5 py-1 focus:outline-none text-gray-600"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className=" ml-3 mt-2 text-xl text-gray-500">Work Experience</p>
          <div className="flex">
            <div className="border border-gray-500 border-opacity-30 bg-white  mt-2 bg-opacity-35 rounded-md  h-9 m-2 w-[80%]">
              <input
                type="text"
                className="bg-transparent px-5 focus:outline-none py-1 text-gray-600"
                placeholder="Job Title"
              />
            </div>
            <div className=" border border-gray-500 border-opacity-30 bg-white  mt-2  bg-opacity-35 rounded-md  h-9 m-2 w-[80%]">
              <input
                type="text"
                className="bg-transparent px-5 focus:outline-none py-1 text-gray-600"
                placeholder="Employer"
              />
            </div>
          </div>

          <div className="flex">
            <div className="border  border-gray-500 border-opacity-30 bg-white  mt-2  bg-opacity-35 rounded-md  text-gray-900 h-16 m-2 w-full ">
              <input
                type="text"
                className="bg-transparent focus:outline-none px-5 py-1 text-gray-600"
                placeholder="Summary"
              />
            </div>
          </div>
        </div>

        <div>
          <p className=" ml-3 mt-2 text-xl text-gray-500">Skills </p>
          <div className="flex">
            <div className="border border-gray-500 border-opacity-30 bg-white   bg-opacity-35 rounded-md  h-16 m-2 w-full">
              <input
                type="text"
                className="bg-transparent px-5 focus:outline-none py-1 text-gray-600"
                placeholder=""
              />
            </div>
            {/* <div className=' border border-gray-500 border-opacity-30 bg-white  mt-2  bg-opacity-35 rounded-md  h-9 m-2 w-[80%]'><input type="text" className='bg-transparent px-5 focus:outline-none py-1' placeholder='Location' /></div> */}
          </div>
        </div>

        <div>
          <p className=" ml-3 mt-2 text-xl text-gray-500">Education </p>

          <div className="">
            <div className="border  border-gray-500 border-opacity-30 bg-white  mt-2  bg-opacity-35 rounded-md  text-gray-900 h-16 m-2 w-full ">
              <input
                type="text"
                className="bg-transparent focus:outline-none px-5 py-1 text-gray-600"
                placeholder=""
              />
            </div>
              <button className="w-full border bg-gray-500 bg-opacity-45 text-gray-700 h-9 rounded-full">Submit</button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Page;
