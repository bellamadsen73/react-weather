import "./styles.css";

import Link from "./Link";
import Temperature from "./Temperature";


export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        
        <div className="row">
          <Temperature defaultCity ="London"/>
          
        </div>
      </div>
      <Link />
    </div>
  );
}
