import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className=' max-w-screen-2xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
