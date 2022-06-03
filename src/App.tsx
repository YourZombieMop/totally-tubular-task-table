import React, { FC, ReactElement } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskList from './components/TaskList/TaskList';

import './App.scss';

import taskData from './data/tasks.json';

const App: FC = (): ReactElement => {
  return (
    <>
      <Header title='Totally Tubular Task Table' />
      <main className='app'>
        <div>
          <TaskList tasks={taskData} />
        </div>
      </main>
      <Footer copyright='Matthew Boyea'/>
    </>
  );
}

export default App;