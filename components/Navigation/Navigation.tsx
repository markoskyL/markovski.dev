import React, { useEffect, useState } from 'react';

import { F_arialBlack } from '../../assets/fonts/appFonts';
import NavLargeDevices from './NavLargeDevices/NavLargeDevices';
import NavSmallDevices from './NavSmallDevices/NavSmallDevices';
import { useMediaQuery } from 'usehooks-ts';

const Navigation: React.FC = () => {
  const [matchesQuery, setMatchesQuery] = useState<boolean>(
    null as unknown as boolean
  );
  const matches = useMediaQuery('(min-width: 768px)');
  //Avoids hydration error
  useEffect(() => {
    setMatchesQuery(matches);
  }, [matches]);

  return (
    <div className={F_arialBlack.className}>
      {matchesQuery === true && <NavLargeDevices />}
      {matchesQuery === false && <NavSmallDevices />}
    </div>
  );
};

export default Navigation;
