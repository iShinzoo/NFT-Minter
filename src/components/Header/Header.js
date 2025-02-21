import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = ({ setPubAddress }) => {
  const [account] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => setOpen(!open);

  useEffect(() => {
    if (account) {
      // console.log("Connected account:", account);
      setPubAddress(account);
    }
  }, [account]);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="m-0 text-5xl font-bold min-w-fit">NFT Minter</h1>
      <div
        onClick={() => handleOpenMenu()}
        className="text-4xl absolute top-4 right-3 md:hidden cursor-pointer"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>

      <div
        className={`${
          open ? "top-20 left-0" : "top-[-496px]"
        } flex flex-col md:flex-row md:justify-around items-center text-nowrap md:pb-0 py-3 absolute md:static bg-white md:bg-[transparent] gap-5 w-full md:w-auto pl-3 md:border-none border-2 border-blue-400 rounded-b-2xl transition-all duration-500 ease-in-out z-10`}
      >
        <div className="w-5/6 lg:text-xl">
          <ul className="flex gap-5 justify-around w-full md:w-1/2 ">
            <li
              key={1}
              className="cursor-pointer border-blue-400 hover:bg-blue-500 hover:text-white text-black md:text-white border rounded-lg p-2"
            >
              <Link to="/">NFT Library</Link>
            </li>
            <li
              key={2}
              className="cursor-pointer border-blue-400 hover:bg-blue-500 hover:text-white text-black md:text-white  border rounded-lg p-2 hover:text-blue-500"
            >
              <Link to="/create-nft">Create NFT</Link>
            </li>
            <li
              key={2}
              className="cursor-pointer border-blue-400 hover:bg-blue-500 hover:text-white text-black md:text-white  border rounded-lg p-2 hover:text-blue-500"
            >
              <Link to="https://github.com/Rise-In/NFT-Minter" target="_blank">
                GitHub
              </Link>
            </li>
          </ul>
        </div>
        <ConnectButton
          showBalance={true}
          accountStatus="address"
          chainStatus="icon"
          className="px-4 py-2 bg-blue-400 text-gray-900 rounded-lg cursor-pointer text-base"
        />
      </div>
    </header>
  );
};

export default Header;
