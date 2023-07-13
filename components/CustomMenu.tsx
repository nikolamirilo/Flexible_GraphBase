import React from "react";
import { Menu } from "@headlessui/react";

type Props = {
  title: string;
  state: string;
  setState: (value: string) => void;
  filters: Array<string>;
};

const CustomMenu = ({ title, state, setState, filters }: Props) => {
  return <div className="flexStart flex-col w-full gap-7 relative"></div>;
};

export default CustomMenu;
