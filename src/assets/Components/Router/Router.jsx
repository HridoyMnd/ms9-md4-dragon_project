import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout/";
import Home from "../MainLayout/Home/Home";
import About from "../MainLayout/Header/Navbar/About/About";
import Career from "../MainLayout/Header/Navbar/Career/Career";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    const response = await fetch("news.json");
                    const data = response.json();
                    return data;
                }
            },
            {
                path: "/about",
                element:<About></About>
            },
            {
                path: "career",
                element: <Career></Career>
            }
        ]
    }

])