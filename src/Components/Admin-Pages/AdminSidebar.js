import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { ADMIN_SIDEBAR_LINKS } from '../../constants/navigation';

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function AdminSidebar() {
  return (
    <>
      {' '}
      {/* Sidebar component */}{' '}
      <div className="bg-neutral-900 p-3 flex flex-col text-white fixed inset-y-0 transform md:relative transition-transform duration-200">
        <div className="flex items-center gap-2 px-1 py-3 w-80">
          <Link to="/" className="text-2xl font-semibold bg-neutral-100">
            <img src={logo} alt="Logo" className="w-24" />
          </Link>{' '}
          <span className="text-neutral-100 text-lg"> FoodieStream </span>{' '}
        </div>{' '}
        <div className="py-8 flex flex-1 flex-col gap-0.5">
          {' '}
          {ADMIN_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}{' '}
        </div>{' '}
        <div className="flex-1"> </div> <div> bottom - part </div>{' '}
      </div>{' '}
      <div className="fixed inset-0 bg-black opacity-50 md:hidden"> </div>{' '}
    </>
  );
}

function SidebarLink({ link, onClick }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      onClick={onClick}
      className={classNames(
        pathname === link.path
          ? 'bg-neutral-700 text-white'
          : 'text-neutral-400',
        linkClass
      )}>
      <span className="text-xl"> {link.icon} </span> {link.label}{' '}
    </Link>
  );
}
