import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";

type Props = {
  title: string;
  state: string;
  setState: (value: string) => void;
  filters: Array<string>;
};

const CustomMenu = ({ title, state, setState, filters }: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-7 relative">
      <label htmlFor={title} className="w-full text-gray-100">
        {title}
      </label>
      <Menu as="div" className="self-start relative">
        <div className="flexCenter justify-around custom_menu-btn">
          <Menu.Button className="flex flex-row items-center gap-2">
            {state || "Select Category"}
            <Image
              src="/arrow-down.svg"
              width={10}
              height={5}
              alt="Arrow down"
            />
          </Menu.Button>
        </div>
        <Menu.Items className="flexStart custom_menu-items">
          {filters.map((tag) => (
            <Menu.Item key={tag}>
              <button
                type="button"
                value={tag}
                className="custom_menu-item"
                onClick={(e) => {
                  setState(e.currentTarget.value);
                }}
              >
                {tag}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default CustomMenu;
