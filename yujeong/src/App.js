import {React} from 'react';
import { Route,Routes } from "react-router-dom";
import SplashScreen from './componets/splashScreen';
import Onboarding from './componets/onboarding';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SplashScreen></SplashScreen>} />
        <Route path='/onboarding' element={<Onboarding></Onboarding>} />
      </Routes>     
    </>
  );
}

export default App;
