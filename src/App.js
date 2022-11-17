import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Route/route';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
