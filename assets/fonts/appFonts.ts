import { Montserrat, Roboto } from '@next/font/google';

import localFont from '@next/font/local';

export const F_arialBlack = localFont({
  src: './ArialCEMTBlack.ttf',
  display: 'swap',
});

export const F_Montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });
