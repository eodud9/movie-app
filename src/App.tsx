import { createBrowserRouter, RouterProvider } from "react-router";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import HomeLayout from "./components/layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "movie/:id", element: <DetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
