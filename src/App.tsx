import React, { FC, ReactElement } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskList from './components/TaskList/TaskList';
import HorizontalScrollContainer from './components/HorizontalScrollContainer/HorizontalScrollContainer';

import './App.sass';

import taskData from './data/tasks.json';

const App: FC = (): ReactElement => {
  return (
    <>
      <Header title='Totally Tubular Task Table' />
      <main className='app'>
        <HorizontalScrollContainer>
          <TaskList tasks={taskData} />
          <TaskList tasks={taskData} />
          <TaskList tasks={taskData} />
          <TaskList tasks={taskData} />
          <TaskList tasks={taskData} />
        </HorizontalScrollContainer>
      </main>
      <Footer copyright='Matthew Boyea'/>
    </>
  );
}

export default App;