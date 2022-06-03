import React, {FC, ReactElement} from 'react';

interface FooterProps {
  copyright: string;
}

const Footer: FC<FooterProps> = ({copyright}) : ReactElement => {
  return (
    <footer>
      <small>
        &copy; {copyright} {new Date().getFullYear()}
      </small>
    </footer>
  );
}

export default Footer;