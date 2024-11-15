import React, { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  UserIcon,
  ChevronDownIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import UserImage from "../assets/img/hmti-logo.png";
import { clearAuthData } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

const TopBar = ({ showNav, setShowNav }) => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(clearAuthData());
  } 

  return (
    <div
      className={`fixed w-full bg-white h-16 flex justify-between items-center transition-all shadow-sm duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700">
            <BellIcon className="h-6 w-6" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-lg rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 font-medium">Notifications</p>
                  <Link to="#" className="text-sm text-blue-500">
                    Mark all as read
                  </Link>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-blue-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-blue-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-blue-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-blue-200 h-8 w-8 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <img
                src={UserImage}
                className="full h-6 md:mr-4 "
                alt="profile_picture"
              />
              <span className="hidden md:block font-medium text-gray-700">
                HMTI
              </span>
              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    to="#"
                    className="flex hover:bg-blue-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <UserIcon className="h-4 w-4 mr-2" />
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <button
                  onClick={logOutHandler}
                    className="flex hover:bg-blue-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center w-full"
                  >
                    <ArrowLeftStartOnRectangleIcon className="h-4 w-4 mr-2" />
                    Log Out
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default TopBar;
