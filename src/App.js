import './Styles/index.css'
import Title from './Components/Title';
import Functions from './Components/Functions';
import AppContent from './Components/AppContent';
import TodoModal from './Components/TodoModal';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  const [openModal, setOpenModal] = useState(false);
  // const [aboutModal, setAboutModal] = useState(false);

  return (
    <>
      <Toaster/>
      <TodoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        type='new'
      />
      <div className='app-base-light'>
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
