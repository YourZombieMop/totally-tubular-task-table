import React, { FC, ReactElement } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

const App: FC = (): ReactElement => {
  return (
    <>
      <Header title='Totally Tubular Task Table' />
      <main className='App'>
        <h2>Application - {process.env.NODE_ENV}</h2>
      </main>
      <Footer copyright='Matthew Boyea'/>
    </>
  );
}

export default App;