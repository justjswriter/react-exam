import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to={"/"}>Главная</Link>
          <Link to={"/stock"}>Склад</Link>
          <Link to={"/operations"}>Операции</Link>
        </nav>
      </header>

      <Outlet />
      {/* <footer>
        <div>
            <p>Футер для сайта</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Root;
