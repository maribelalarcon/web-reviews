const NavBAr = () => {
  return (
    <div>
      <nav className="nav-container">
        <div className="nav-logo">Reviews</div>
        <div className="nav-links">
          <button
            className="nav-button"
            onClick={() => navigate("./AddReview")}
          >
            <IoAddCircleOutline style={{ backgroundColor: "transparent" }} />
          </button>
          <button className="nav-button">
            <IoPersonOutline />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBAr;
