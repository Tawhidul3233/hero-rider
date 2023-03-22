import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import SingUpRider from './Components/SingUp/SingUpRider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingUpLearner from './Components/SingUp/SingUpLearner';
import ImageUploadForm from './Components/test';

function App() {
  return (
    <Router >
      <Navbar> </Navbar>
      <ImageUploadForm> </ImageUploadForm>
      <Routes>
        <Route path='/' element={<Banner> </Banner> }></Route>
        <Route path='/singup/herorider' element={<SingUpRider> </SingUpRider>}></Route>
        <Route path='/singup/herolearner' element={<SingUpLearner> </SingUpLearner>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
