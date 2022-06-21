import React, { FC, ReactElement } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskForm from './components/TaskForm/TaskForm';
import HorizontalScrollContainer from './components/HorizontalScrollContainer/HorizontalScrollContainer';

import './App.sass';

import taskData from './data/tasks.json';

const App: FC = (): ReactElement => {
  return (
    <>
      <Header title='Totally Tubular Task Table' />
      <main className='app'>
        <HorizontalScrollContainer>
          <TaskForm title='Title Goes Here' tasks={taskData} />
          <TaskForm title='Title' />
          <TaskForm title='Todo Title' tasks={taskData} />
          <TaskForm title='Title' tasks={taskData} />
          <TaskForm title='Title' tasks={taskData} />
          <TaskForm title='Title' tasks={taskData} />
        </HorizontalScrollContainer>
      </main>
      <Footer copyright='Matthew Boyea'/>
    </>
  );
}

export default App;