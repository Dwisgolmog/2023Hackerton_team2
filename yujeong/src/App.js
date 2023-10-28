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
        <Route path='/chat' element={<h1>반가워요</h1>} />
      </Routes>     
    </>
  );
}

export default App;
