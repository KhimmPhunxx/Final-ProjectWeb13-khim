
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarWeb from './components/NavbarWeb';
import Homepage from './pages/Homepage';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<Homepage/>}/>

      </Route>
    </Routes>
  </>
  );
}
export default App;

function MainLayout(){
  return(
    <>
  <NavbarWeb />
   <Outlet />
  </>
  )
}


