import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import NavLargeDevices from "./NavLargeDevices/NavLargeDevices";
import NavSmallDevices from "./NavSmallDevices/NavSmallDevices";

const Navigation: React.FC = () => {
  const [matchesQuery, setMatchesQuery] = useState<boolean>(
    null as unknown as boolean
  );
  const matches = useMediaQuery("(min-width: 768px)");
  //Avoids hydration error
  useEffect(() => {
    setMatchesQuery(matches);
  }, [matches]);

  return (
    <>
      {matchesQuery === true && <NavLargeDevices />}
      {matchesQuery === false && <NavSmallDevices />}
    </>
  );
};

export default Navigation;
