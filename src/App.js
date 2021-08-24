import { Container } from 'rsuite';

import DataDisplay from './component/dataDisplay';
import Header from './component/header';

const App = () => {
  return (
    <div className='App'>
      <div className='show-container'>
        <Container>
          <Header /> {/* Header component */}
          <DataDisplay /> {/* Inner body component */}
        </Container>
      </div>
    </div>
  );
};

export default App;
