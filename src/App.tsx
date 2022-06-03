import React, { FC, ReactElement } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskList from './components/TaskList/TaskList';

import './App.scss';

const App: FC = (): ReactElement => {
  return (
    <>
      <Header title='Totally Tubular Task Table' />
      <main className='App'>
        <TaskList tasks={[]} />
      </main>
      <Footer copyright='Matthew Boyea'/>
    </>
  );
}

export default App;