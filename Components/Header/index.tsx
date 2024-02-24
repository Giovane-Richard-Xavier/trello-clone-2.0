"use client";

import Image from "next/image";
import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10">
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-96
            bg-gradient-to-br
            from-pink-400
            to-[#0055d1]
            filter
            blur-3xl
            opacity-50
            -z-50
          "
        />

        <Image
          src="/assets/trello_logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain md:mr-8 "
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <CiSearch className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button hidden>Search</button>
          </form>

          <Avatar name="Giovane Richard" round color="#0055d1" size="50" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-5">
        <p className="flex items-center text-sm font-light p-5 pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]">
          <FaUserCircle className="inline-block h-10 w-10 text-[#0055d1] mr-1" />
          GPT is summarising tasks for the day...
        </p>
      </div>
    </header>
  );
};
