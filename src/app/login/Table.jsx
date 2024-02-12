import { useState } from 'react';
import Dropdowndata from '../../../json/page';

export default function Example() {
  const [optionVal, setOptionval] = useState();
  const [Material, Density] = Dropdowndata;
  const [selectedOption, setSelectedOption] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [thickness, setThickness] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const HandleOtherData = (i) => {
    console.log(i);
  };

  const handleonchangequantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleonchangelength = (e) => {
    setLength(e.target.value);
  };
  const handleonchangewidth = (e) => {
    setWidth(e.target.value);
  };
  const handleonchangethickness = (e) => {
    setThickness(e.target.value);
  };

  return (
    <form>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
          <ul className="space-y-2  font-medium">
            <div>
              <a
                href="#"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8"
                  alt="your Company"
                />
                <span className="self-center16 text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Digiklug
                </span>
              </a>
            </div>
            <br />
            <li>
              <a
                href="#"
                className="flex items-center p-2   text-gray-900 rounded-lg  md:hover:text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap ">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center  p-2 text-gray-900 rounded-lg md:hover:text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">About</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg  md:hover:text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Services</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg  md:hover:text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Pricing</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg  md:hover:text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
              </a>
            </li>
          </ul>
          <div className="flex flex-shrink-0 relative h-[55%] w-32  p-4">
            <a
              href="#"
              className="group block absolute inset-x-0 bottom-0  w-full flex-shrink-0 "
            >
              <div className="flex items-center ">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Tom Cook
                  </p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                    <a href="./Profile">view profile</a>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </aside>
      <nav className="bg-gray-100  border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between  p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          ></a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-2 border border-gray-100 rounded-lg   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent  md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <label
        htmlFor="Weight Calculator"
        className="md:flex-row
        py-2 px-2
        my-16 m-[40%] text-gray-600 "
      >
        <strong>Weight Calculator</strong>
      </label>
      <div className="space-y-12 sm:space-y-16 mx-80">
        <div className="mt-10 space-y-8 border-b  border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0 ">
          <div className="sm:grid sm:grid-cols-3  sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Material
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                {Dropdowndata.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.Density}
                      id={item.id}
                      onClick={() => HandleOtherData(i)}
                    >
                      {item.Material}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="Density"
              className="block  text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Density
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <label className=" p-2 text-center font-sans" htmlFor="Density">
                {selectedOption} kg/dm^3
              </label>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Quantity
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                id="quantity"
                name="quantity"
                onChange={handleonchangequantity}
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Length
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                id="length"
                name="length"
                onChange={handleonchangelength}
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Width
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                id="Width"
                name="width"
                onChange={handleonchangewidth}
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Thickness
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                id="thickness"
                name="thickness"
                onChange={handleonchangethickness}
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="region"
              className="block text-sm font-bold leading-6 text-gray-900 sm:pt-1.5"
            >
              Weight:
            </label>
            <div className="mt-2  sm:col-span-2 sm:mt-0 font-bold">
              <label
                className="mx-2 p-2 text-center font-sans"
                htmlFor="Weight-field"
              >
                {' '}
                {(selectedOption * quantity * length * width * thickness) /
                  1000000}{' '}
                Kg
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
