
import {Header , Footer} from './component'
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div  className="App dark:bg-dark">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
