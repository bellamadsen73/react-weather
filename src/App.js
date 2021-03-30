import "./styles.css";
import City from "./City";
import Search from "./Search";
import Link from "./Link";
import Temperature from "./Temperature";
import Weather from "./Weather";
import Icon from "./Icon";

export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="row">
          <City />
          <Icon />
          <Weather />
        </div>
        <div className="row">
          <Temperature />
          <Search />
        </div>
      </div>
      <Link />
    </div>
  );
}
