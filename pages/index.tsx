import Link from "next/link";

function Background() {
  return (
    <div className="background">
      <h1>Try the Alvl-Calc</h1>
      <button>Go to store</button>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>abirechner</title>
      <header>
        <div className="logo">
          <img src="#" alt="ALvL" />
        </div>
        
      </header>
      <nav>
        <div className="navbar bg-base-100 dropdown-content menu menu-horizontal px-1">
<div className="login">
          <a href="/logan">Login/Anmeldung</a>
        </div>
          <li className="dropdown">
              <a href="#">Calc</a>
            <ul className="dropdown-menu centered">
              <li>
                <a href="#">Bayern Calc</a>
              </li>
              <li>
                <a href="#">NRW Calc</a>
              </li>
              <li>
                <a href="#">Baden-Württemberg Calc</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Tools</a>
            <ul className="dropdown-menu centered">
              <li>
                <a href="/calcbay">Noten-Predictor</a>
              </li>
              <li>
                <a href="/chart">Noten-Chart</a>
              </li>
              <li>
                <a href="/stundenplan">Stundenplan</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">About</a>
            <ul className="dropdown-menu centered">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/kontakt">Kontakt</a>
              </li>
              <li>
                <a href="/impressum">Impressum</a>
              </li>
            </ul>
          </li>
        </div>
      </nav>
      <main>{/* webseite*/}</main>
    </>
  );
}

export default HomePage;
