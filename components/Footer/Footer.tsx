import { BsGithub, BsLinkedin } from 'react-icons/bs';

import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.Footer}>
      <p>&copy; 2023 | Designed and coded by Leonardo Markovski</p>
      <div className={styles.contactIcons}>
        <Link
          href={'https://www.linkedin.com/in/leonardo-markovski-97293a162/'}
          target={'_blank'}
        >
          <BsLinkedin />
        </Link>
        <Link href={'https://github.com/markoskyL'} target={'_blank'}>
          <BsGithub />
        </Link>
        <Link href={'mailto: markovski.dev@gmail.com'}>
          <MdEmail />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
