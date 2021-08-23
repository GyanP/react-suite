import { Container } from 'rsuite';
import Header from './component/Header';

const App = () => {
  return (
    <div className='App'>
      <div className='show-container'>
        <Container>
          {/*
          -------------------- 
            Header component
          -------------------
          */}
          <Header />
          <Container></Container>
        </Container>
      </div>
    </div>
  );
};

export default App;
