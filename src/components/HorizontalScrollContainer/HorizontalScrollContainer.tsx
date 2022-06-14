import React, {FC, ReactElement, useRef} from 'react';

import './HorizontalScrollContainer.sass'

interface HorizontalScrollContainerProps {
  children?: React.ReactNode;
  scrollStep: Number;
}

const HorizontalScrollContainer: FC<HorizontalScrollContainerProps> = ({
  children,
}): ReactElement => {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const onScroll: React.WheelEventHandler<HTMLDivElement> = (e) => {
    if (e.deltaX == 0 && e.deltaY != 0) {
      console.log(e);
      containerRef.current.scroll({
        top: 0,
        left: containerRef.current.scrollLeft + e.deltaY,
        behavior: 'smooth'
      });
    }
  }
  return (
    <div ref={containerRef} onWheel={onScroll} className='horizontal-scroll-container'>
      {children}
    </div>
  );
}

export default HorizontalScrollContainer;