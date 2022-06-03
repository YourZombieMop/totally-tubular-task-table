import React, { FC, ReactElement } from 'react';

const App: FC = (): ReactElement => {
  return (
    <>
      <h1>Application - {process.env.NODE_ENV}</h1>
    </>
  );
}

export default App;