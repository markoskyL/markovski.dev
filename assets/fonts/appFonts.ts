import { Montserrat, Roboto } from '@next/font/google';

import localFont from '@next/font/local';

export const F_arialBlack = localFont({
  src: './ArialCEMTBlack.ttf',
});

export const F_Montserrat = Montserrat({ subsets: ['latin'] });
