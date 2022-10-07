import React from "react";
import { useMediaQuery } from "usehooks-ts";
import NavLargeDevices from "./NavLargeDevices/NavLargeDevices";
import NavSmallDevices from "./NavSmallDevices/NavSmallDevices";

const Navigation: React.FC = () => {
  const matches = useMediaQuery("(min-width: 1350px)");
  return <>{matches ? <NavLargeDevices /> : <NavSmallDevices />}</>;
};

export default Navigation;
