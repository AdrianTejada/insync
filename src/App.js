import './Styles/index.css'
import Title from './Components/Title';
import Functions from './Components/Functions';
import AppContent from './Components/AppContent';
import ModalWrapper from './Components/ModalWrapper';
import ModalFunctions from './Components/ModalFunctions';

function App() {
  return (
    <div>
      <ModalWrapper title='New Todo' onClose={()=>console.log('close')}>
        <ModalFunctions
          button1Text='create todo'
          button2Text='cancel'
          onButton1Click={()=>console.log('hello')}
          onTitleChange={(text)=>console.log(text)}
        />
      </ModalWrapper>
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
