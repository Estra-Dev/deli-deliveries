"use client";

import { UserButton, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";

const Header = () => {
  const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/");
      const data = await res.json();
      console.log("users", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const navigation = [
    { name: "Track Order", href: "/track-order" },

    {
      name: "Become Part",
      dropDown: [
        { name: "Deli Rider", href: "/deli-rider" },
        { name: "Become Courier", href: "deli-courier" },
      ],
    },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Notification", href: "/notification" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropDownOpen, setMobileDropDownOpen] = useState<string | null>(
    null
  );

  return (
    <header className=" z-50 w-full shadow-sm shadow-gray-200/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 left-0">
      <div className=" container justify-between items-center flex py-3 px-3 md:px-[5%]">
        {/* logo */}
        <div className="overflow-hidden rounded-full">
          <Link href={"/"}>
            <Image
              src={"/deli.png"}
              alt="logo"
              width={40}
              height={40}
              className="  object-cover"
            />
          </Link>
        </div>

        <nav className=" hidden md:flex gap-3">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.dropDown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={"ghost"}
                      className="hover:text-gray-700 text-sm font-medium text-[coral] hover:bg-transparent cursor-pointer"
                    >
                      {item.name} <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.dropDown.map((dropItem, index) => (
                      <div key={index}>
                        <DropdownMenuItem asChild>
                          <Link
                            href={dropItem.href}
                            className=" cursor-pointer"
                          >
                            {dropItem.name}
                          </Link>
                        </DropdownMenuItem>
                        {index < item.dropDown.length - 1 && index === 1 && (
                          <DropdownMenuSeparator />
                        )}
                      </div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className=" text-[13px] hidden text-gray-900 font-semi-bold md:flex items-center p-2 ">
                  {/* menu */}
                  <Link
                    href={item.href}
                    className=" hover:text-[coral] transition-all ease-in-out duration-150"
                  >
                    <p>{item.name}</p>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className=" flex items-center gap-2">
          <SignedOut>
            <Link
              href={"/sign-in"}
              className=" bg-[coral] rounded-md py-1 px-2 text-xs text-white"
            >
              Sign In
            </Link>
          </SignedOut>
          <UserButton />

          {/* mobile view */}
          <Sheet
            open={isOpen}
            onOpenChange={(open) => {
              setIsOpen(open);
              if (!open) {
                setMobileDropDownOpen(null);
              }
            }}
          >
            <SheetTrigger asChild className=" md:hidden">
              <Button variant={"ghost"} size={"sm"}>
                <Menu className=" w-5 h-5" />
                <span className=" sr-only">Tooggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className=" w-[300px] sm:w-[400px]">
              <div className=" flex flex-col mt-4 space-y-4 items-start px-5">
                {navigation.map((item) => (
                  <div key={item.name} className=" w-full">
                    {item.dropDown ? (
                      <div className=" space-y-2 w-full ">
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setMobileDropDownOpen(
                              mobileDropDownOpen === item.name
                                ? null
                                : item.name
                            )
                          }
                          className=" w-full flex justify-between text-gray-800 text-sm font-medium py-2 h-auto"
                        >
                          {item.name}
                          <ChevronDown
                            className={` h-4 w-4 transition-transform ${
                              mobileDropDownOpen === item.name
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </Button>
                        {mobileDropDownOpen === item.name && (
                          <div className=" space-y-1 pl-4">
                            {item.dropDown.map((dropDownItem) => (
                              <Link
                                href={dropDownItem.href}
                                key={dropDownItem.name}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileDropDownOpen(null);
                                }}
                                className=" text-sm text-muted-foreground"
                              >
                                {dropDownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-primary py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
