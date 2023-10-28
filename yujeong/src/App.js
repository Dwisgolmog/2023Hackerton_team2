import {React} from 'react';
import { Route,Routes } from "react-router-dom";
import SplashScreen from './componets/splashScreen';
import Onboarding from './componets/onboarding';
import Chatting from './chat';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SplashScreen></SplashScreen>} />
        <Route path='/onboarding' element={<Onboarding></Onboarding>} />
        <Route path='/chat' element={<Chatting></Chatting>} />
      </Routes>     
    </>
  );
}

export default App;
