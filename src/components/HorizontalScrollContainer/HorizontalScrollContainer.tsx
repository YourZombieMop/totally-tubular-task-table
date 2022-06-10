import React, {FC, ReactElement} from 'react';

import './HorizontalScrollContainer.sass'

interface HorizontalScrollContainerProps {
  children?: React.ReactNode;
}

const HorizontalScrollContainer: FC<HorizontalScrollContainerProps> = ({
  children,
}): ReactElement => {
  return (
    <div className='horizontal-scroll-container'>
      {children}
    </div>
  );
}