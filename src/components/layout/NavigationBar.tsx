import React from 'react';
import { useLocation } from 'react-router-dom';

import AuthButton from '~components/forms/AuthButton';
import RefLogo from '~assets/reffi-logo.svg';

interface AnchorProps {
  href: string;
  name: string;
}

function BottomBar() {
  return (
    <div className="flex lg:hidden fixed w-screen h-28  bg-white bottom-0 z-10 border-t shadow-md">
      <div className="flex flex-row justify-between w-full items-center px-4">
        <a href="/portfolio">
          <h2 className="font-inter">Portfolio</h2>
        </a>
        <a href="/">
          <h2>Swap</h2>
        </a>
        <a href="/liquidity">
          <h2>Provide Liquidity</h2>
        </a>
      </div>
    </div>
  );
}

function Anchor({ href, name }: AnchorProps) {
  const routes = ['swap', 'liquidity', ''];
  const location = useLocation();

  const selectedRoute = routes.find((route) =>
    location.pathname.includes(route)
  );

  const isSelected = href === `/${selectedRoute}`;
  return (
    <a href={href}>
      <h2 className={`hover:text-gray-600 ${isSelected ? 'font-bold' : ''}`}>
        {name}
      </h2>
    </a>
  );
}

function SideBar() {
  return (
    <nav>
      <RefLogo height="25" />
      <AuthButton />
      <Anchor href="/portfolio" name="Portfolio" />
      <Anchor href="/" name="Swap" />
      <Anchor href="/pools" name="Pools" />
    </nav>
  );
}

function NavigationBar() {
  return (
    <div>
      <SideBar />
      <BottomBar />
    </div>
  );
}
export default NavigationBar;
