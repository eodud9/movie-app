import { createBrowserRouter, RouterProvider } from "react-router";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";
import DetailsPage from "./pages/DetailsPage";
import HomeLayout from "./components/layout/HomeLayout";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <MoviePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "movie/:id", element: <DetailsPage /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={client}>
      {" "}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
