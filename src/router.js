import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RootLayout />,
        children: [
            {path: '', index: true, element: <Home />}
        ]
    }
]);

export default router;