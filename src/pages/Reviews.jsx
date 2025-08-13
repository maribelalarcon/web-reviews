const Reviews = () => {
  return (
    <div>
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
    </div>
  );
};

export default Reviews;
