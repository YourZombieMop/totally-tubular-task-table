import React, {FC, ReactElement} from 'react';
import './Footer.scss';

interface FooterProps {
  children?: React.ReactNode;
  copyright: string;
}

const Footer: FC<FooterProps> = ({
  children,
  copyright
}) : ReactElement => {
  return (
    <footer>
      {children}
      <small>
        &copy; {copyright} {new Date().getFullYear()}
      </small>
    </footer>
  );
}

export default Footer;