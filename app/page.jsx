import MovieQuotes from "./components/MovieQuotes";
import Header from "./components/Header";
import About from "./components/About";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center m-auto bg-orange-100 relative px-2">
    <div className="grain grain-light"></div>

    <Header />

    <MovieQuotes />

    <About />

    </div>
  );
}
