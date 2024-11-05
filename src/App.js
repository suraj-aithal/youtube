import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/appstore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincomponent from './components/Maincomponent';
import Watch from './components/Watch';

function App() {
  const approut = createBrowserRouter([
    {
      path:"/",
      element:<Body />,
      children:[
        {
          path:'/',
          element:<Maincomponent />
        },{
          path:'/watch',
          element:<Watch />
          
        }
      ]
    }
  ])
  return (
   <Provider store={store} >
     <div className='bg-black text-white'>
      <Header />
      <RouterProvider router={approut} />
    </div>
   </Provider>
  );
}

export default App;
