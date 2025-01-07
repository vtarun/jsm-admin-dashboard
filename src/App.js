import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
