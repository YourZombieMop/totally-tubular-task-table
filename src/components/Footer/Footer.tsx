import React, {FC, ReactElement} from 'react';
import './Footer.sass';

interface FooterProps {
  children?: React.ReactNode;
  copyright: string;
}

const Footer: FC<FooterProps> = ({
  children,
  copyright
}) : ReactElement => {
  return (
    <footer className='app'>
      {children}
      <small>
        &copy; {copyright} {new Date().getFullYear()}
      </small>
    </footer>
  );
}

export default Footer;