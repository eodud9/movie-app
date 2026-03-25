import { createBrowserRouter, RouterProvider } from "react-router";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";
import DetailsPage from "./pages/DetailsPage";
import HomeLayout from "./components/layout/HomeLayout";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TvShowPage from "./pages/TvShowPage";

const client = new QueryClient();

//MoviePage, TvShowPage 구조 같은데 HomeLayout에서 한 번에 처리 할 수 있을까?

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
