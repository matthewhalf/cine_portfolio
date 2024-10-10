import MovieQuotes from "./components/MovieQuotes";
import Header from "./components/Header";
import About from "./components/About";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center m-auto bg-orange-100 relative px-2">
    <div className="grain grain-light"></div>

    <Header />

    <MovieQuotes />

    <p className="text-primary my-20 text-center">
    hey im Matthew, a frontend developer with a passion for cinema  based in Italy
    </p>

    <div className="h-[5px] w-[90%] bg-primary rounded-lg mt-4"></div>

    <About />

    </div>
  );
}
