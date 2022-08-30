import './Styles/index.css'
import Title from './Components/Title';
import AppHeader from './Components/AppHeader';
import AppContent from './Components/AppContent';

function App() {
  return (
    <div className='app-base-light'>
      <div className='layout'>
        <Title>Todo List</Title>
        <div>
          <AppHeader/>
          <AppContent/>
        </div>
      </div>
    </div>
  );
}

export default App;
