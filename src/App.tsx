import { createBrowserRouter, RouterProvider } from "react-router";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";
import DetailsPage from "./pages/DetailsPage";
import HomeLayout from "./components/layout/HomeLayout";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TvShowPage from "./pages/TvShowPage";
import FavoritePage from "./pages/favoritePage";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "movies",
        children: [
          { index: true, element: <MoviePage /> },
          { path: ":id", element: <DetailsPage /> },
        ],
      },
      {
        path: "tv-shows",
        children: [
          { index: true, element: <TvShowPage /> },
          { path: ":id", element: <DetailsPage /> },
        ],
      },
      { path: "search", element: <SearchPage /> },
      { path: "favorites", element: <FavoritePage /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
