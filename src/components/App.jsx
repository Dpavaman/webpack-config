import "../styles/index.css";
import Recipes from "./Recipes";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi, From React</h1>
        </section>
      </main>

      <Recipes />
    </>
  );
};

export default App;
