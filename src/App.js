import './Styles/index.css'
import Title from './Components/Title';
import AppHeader from './Components/AppHeader';
import AppContent from './Components/AppContent';

function App() {
  return (
    <div className='container'>
      <Title>Notes</Title>
      <div className='app__wrapper'>
        <AppHeader/>
        <AppContent/>
      </div>
    </div>
  );
}

export default App;
