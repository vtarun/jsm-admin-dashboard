import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

import { 
    Ecommerce, 
    Orders, 
    Employees, 
    Customers,     
    Calendar,
    Kanban,
    Editor,
    ColorPicker,    
    Line, 
    Area, 
    Bar, 
    Pie, 
    Financial,
    ColorMapping, 
    Pyramid, 
    Stacked 
} from "./pages";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RootLayout />,
        children: [
            {path: '', index: true, element: <Ecommerce />},
            {path: '/ecommerce', element: <Ecommerce />},

            // Pages
            {path: '/orders', element: <Orders />},
            {path: '/employees', element: <Employees />},
            {path: '/customers', element: <Customers />},

            // Apps
            {path: '/calendar', element: <Calendar />},
            {path: '/kanban', element: <Kanban />},
            {path: '/editor', element: <Editor />},
            {path: '/color-picker', element: <ColorPicker />},

            // Charts
            {path: '/line', element: <Line />},
            {path: '/area', element: <Area />},
            {path: '/bar', element: <Bar />},
            {path: '/pie', element: <Pie />},
            {path: '/financial', element: <Financial />},
            {path: '/color-mapping', element: <ColorMapping />},
            {path: '/pyramid', element: <Pyramid />},
            {path: '/stacked', element: <Stacked />},
        ]
    }
]);

export default router;