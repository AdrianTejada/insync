import './Styles/index.css'
import Title from './Components/Title';
import Functions from './Components/Functions';
import AppContent from './Components/AppContent';
import NewTodoModal from './Components/NewTodoModal';
import { useState } from 'react';

function App() {
  const [todoModal, setTodoModal] = useState(false);
  // const [aboutModal, setAboutModal] = useState(false);

  return (
    <div>
      <NewTodoModal
        todoModal={todoModal}
        setTodoModal={setTodoModal}
      />
      <div className='app-base-light'>
        <div className='layout'>
          <Title>Todo List</Title>
          <div>
            <Functions
              onTodoClick={()=>setTodoModal(true)}
            />
            <AppContent/>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
