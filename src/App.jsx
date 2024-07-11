import "./App.scss";
import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/Home.page";
import { SuperheroesPage } from "./components/Superheroes.page";
import { RQSuperheroesPage } from "./components/RQSuperheroes.page";
import { LayoutPage } from "./components/Layout.page";
import { RQSuperHero } from "./components/RQSuperHero";
import { Layout } from "./app/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          

          {/* <Route index element={<HomePage />} />
          <Route path="/super-heroes" element={<SuperheroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperheroesPage />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
