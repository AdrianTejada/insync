import './Styles/index.css'
import Title from './Components/Title';
import Functions from './Components/Functions';
import AppContent from './Components/AppContent';
import TodoModal from './Components/TodoModal';
import AboutModal from './Components/AboutModal';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function App() {
  const [todoModal, setTodoModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const theme = useSelector((state)=>state.todo.todoTheme);

  return (
    <>
      <Toaster
       toastOptions={{
        style: {
          backgroundColor: theme === 'light' ? '#F3F3F3' : '#1B1B1B',
          color: theme === 'light' ? 'black' : 'white',
          borderRadius: '0px',
          width: '100%',
          boxShadow: `0px 2px 5px 2px ${theme === 'light' ? 'gray' : 'black'}`,
        },
      }}
      />
      <AboutModal
        openModal={aboutModal}
        setOpenModal={setAboutModal}
      />
      <TodoModal
        openModal={todoModal}
        setOpenModal={setTodoModal}
        type='new'
      />
      <div className={`app-base-${theme}`}>
        <div className='layout'>
          <Title>Todo List</Title>
          <div>
            <Functions
              onTodoClick={()=>setTodoModal(true)}
              onAboutClick={()=>setAboutModal(true)}
            />
            <AppContent/>
          </div>
        </div>
      </div>  
    </>
  );
}

export default App;
