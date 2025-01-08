import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RootLayout />,
        children: [
            {path: '', index: true, element: <ECommerce />},
            {path: '/ecommerce', element: <ECommerce />},

            // Pages
            {path: '/orders', element: <Orders />},
            {path: '/employees', element: <Employees />},
            {path: '/customers', element: <Customers />},

            // Apps
            {path: '/calender', element: <Calender />},
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
        ]
    }
]);

export default router;