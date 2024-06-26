import { Outlet } from "react-router-dom";
import "./Navigation.scss";
const Navigation = () => {
  return (
    <div>
      <header className="navheader">
        <div className="navheader--description">阳光分班程序</div>
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
