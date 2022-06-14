import React, {FC, ReactElement, useRef, useState} from 'react';

import './HorizontalScrollContainer.sass'

interface HorizontalScrollContainerProps {
  children?: React.ReactNode;
}
const HorizontalScrollContainer: FC<HorizontalScrollContainerProps> = ({
  children,
}): ReactElement => {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const onScroll: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
    if (hoveredElement == containerRef.current) {
      console.log(e);
      // if user is scrolling vertically & not horizontally
      if (e.deltaY != 0 && !(e.shiftKey || e.deltaX != 0)) {
        // scroll horizontally
        containerRef.current.scroll({
          top: 0,
          left: containerRef.current.scrollLeft + e.deltaY,
          behavior: 'auto'
        });
      }
    }
  }
  return (
    <div ref={containerRef} onWheel={onScroll} className='horizontal-scroll-container'>
      {children}
    </div>
  );
}

export default HorizontalScrollContainer;