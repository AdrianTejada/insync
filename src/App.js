import './Styles/index.css'
import Title from './Components/Title';
import Functions from './Components/Functions';
import AppContent from './Components/AppContent';
import TodoModal from './Components/TodoModal';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const theme = useSelector((state)=>state.theme.todoTheme);
  // const [aboutModal, setAboutModal] = useState(false);

  return (
    <>
      <Toaster/>
      <TodoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        type='new'
      />
      <div className={`app-base-${theme}`}>
        <div className='layout'>
          <Title>Todo List</Title>
          <div>
            <Functions
              onTodoClick={()=>setOpenModal(true)}
            />
            <AppContent/>
          </div>
        </div>
      </div>  
    </>
  );
}

export default App;
