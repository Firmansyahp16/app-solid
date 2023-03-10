// import styles from "./App.module.css";
import { A, Route, Routes } from "@solidjs/router";
import About from "./routes/About";
import Home from "./routes/Home";
import Feature from "./routes/Feature";
import Price from "./routes/Price";
import Navbar from "./components/Navbar";
import Task from "./routes/Task";

function App() {
  return (
    <div class="bg-blue-500 h-screen">
      <Navbar />
      <Routes>
        <Route path="/" component={Index} />
        <Route path="/Home" component={Home} />
        <Route path="/Feature" component={Feature} />
        <Route path="/About" component={About} />
        <Route path="/Price" component={Price} />
      </Routes>
    </div>
  );
}

export default App;

function Index() {
  return (
    <div class="container mx-auto grid h-auto w-full pt-0">
      <div class="py-10 text-center">
        <h1 class="text-8xl font-bold text-white">Welcome to WHATIDO</h1>
        <p class="text-3xl mt-1 font-bold" style="margin-top: ">
          Life is much Easier
        </p>
      </div>
      <div>
        <div class="container flex gap-5 mt-10 rounded-3xl border-2 border-black bg-yellow-200 px-20 py-2 h-full w-full">
          <div class="grid gap-10 py-10">
            <p class="font-bold text-5xl">
              A simple to-do list maker <br /> that meets your team's needs
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur ad atque exercitationem eum recusandae distinctio
              culpa voluptas nesciunt asperiores, dolore itaque fuga quisquam
              error repudiandae id at rem aperiam iusto.
            </p>
            <div class="bg-yellow-300 grid place-items-center w-fit py-1 px-4 rounded-full border-2 border-black">
              <a class="font-bold" href="/About">Learn About Us</a>
            </div>
          </div>
          <div class="grid place-items-center">
            <div class="bg-black h-72 w-72 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
