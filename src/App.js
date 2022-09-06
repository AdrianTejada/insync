import './Styles/index.css'
import Title from './Components/Title';
import Functions from './Components/Functions';
import AppContent from './Components/AppContent';
import Modal from './Components/Modal';

function App() {
  return (
    <div>
      <Modal title='New Todo'>
      
      </Modal>
      <div className='app-base-light'>
        <div className='layout'>
          <Title>Todo List</Title>
          <div>
            <Functions/>
            <AppContent/>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
