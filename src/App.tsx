import { createBrowserRouter, RouterProvider } from "react-router";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "details", element: <DetailsPage /> },
    ],
  },
]);

// Get Popular Data from TMDB

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGYxMzEyMWJjNTlmMWI4ZjYwYTAzZjRkNWM1NzMwMCIsIm5iZiI6MTc0Mjg3OTIzOS44MzksInN1YiI6IjY3ZTIzYTA3ZDQwNTJmNDc5M2RjNjA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HViy1QPfchR5EJsNPg-VhSeQQl5lcYXRWDK8j127T08",
  },
};

const res = await fetch("https://api.themoviedb.org/3/movie/popular", options);
const data: { results: { original_title: string }[] } = await res.json();
data.results.map((r) => console.log(r.original_title));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
