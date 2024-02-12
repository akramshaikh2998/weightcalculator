import React from 'react';

const profilepage = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <button
        type="button"
        class="w-full flex items-center justify-center float-right px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-indigo-600 hover:text-white dark:text-gray-200 dark:border-gray-700"
      >
        <svg
          class="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <a href="./login">Go Back</a>
      </button>

      <section className=" flex font-medium items-center h-screen">
        <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-emerald-400 font-semibold">
              Employee Profile
            </span>
          </div>
          <div className="mt-6 w-fit mx-auto">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="rounded-full w-28 "
              alt="profile picture"
              srcset=""
            />
          </div>

          <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">
              Tom Cook
            </h2>
          </div>
          <p className="text-emerald-400 font-semibold mt-2.5">
            <span className="text-gray-400">Emp ID:</span>
            000000
          </p>
          <div>
            <p className="text-emerald-400 font-semibold mt-2.5">
              <span className="text-gray-400">Status:</span>
              Active
            </p>
          </div>

          <div className="mt-3 text-white text-sm">
            <span className="text-gray-400 font-semibold">Qualifications:</span>
            <span>Graduate</span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default profilepage;
