
import './App.css';
import MainLayout from './companents/MainLayout';
import Home from './companents/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Detail from './companents/Detail';
import Favorite from './companents/Favorite';

const router = createBrowserRouter  ([
  {
    path:'/', 
    element:<MainLayout/>,
    children:
    [
      {
        path:'/', element:<Home/>
      },
      {
        path:"/detail/:id",element:<Detail/>


      },
      {
        path:"/favorite",element:<Favorite/>


      }
    
    
    ]
  }

]);


function App() {
  return (
    

      <RouterProvider router= {router}/>

  );
}

export default App;
