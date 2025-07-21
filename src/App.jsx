import { useState } from "react";

function App() {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">Reviews</div>
        <div className="nav-links">
          <button className="nav-button">
            <img src="/src/assets/anadir.png" alt="login" />
          </button>
          <button className="nav-button">
            <img src="/src/assets/usuario.png" alt="login" />
          </button>
        </div>
      </nav>

      <header>
        <h1>Negocios Argentinos en España</h1>
        <h2>Encuentra los mejores lugares y servicios con sabor argentino.</h2>

        <div className="buttons-container">
          <button>Todos</button>
          <button>Parrilla</button>
          <button>Pizzeria</button>
          <button>Empanadas</button>
          <button>Helados</button>
          <button>Doctoras</button>
        </div>

        <div>
          <div className="cards">
            <h4>Parrilla Argentina</h4>
            <description>Lorem ipsum dolor sit amet</description>
          </div>
          <div className="cards">
            <h4>Parrilla Argentina</h4>
            <description>Lorem ipsum dolor sit amet</description>
          </div>
          <div className="cards">
            <h4>Parrilla Argentina</h4>
            <description>Lorem ipsum dolor sit amet</description>
          </div>
          <div className="cards">
            <h4>Parrilla Argentina</h4>
            <description>Lorem ipsum dolor sit amet</description>
          </div>
          <div className="cards">
            <h4>Parrilla Argentina</h4>
            <description>Lorem ipsum dolor sit amet</description>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
