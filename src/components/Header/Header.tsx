import React, {FC, ReactElement} from 'react';
import './Header.sass';

interface HeaderProps {
  children?: React.ReactNode;
  title?: string;
}

const Header: FC<HeaderProps> = ({
  children,
  title = 'Header'
}) : ReactElement => {
  return (
    <header className='app'>
      <h1>{title}</h1>
      {children}
    </header>
  );
}

export default Header;