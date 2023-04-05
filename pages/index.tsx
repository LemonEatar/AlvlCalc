import Link from "next/link";

function HomePage() {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>abirechner</title>
      <link rel="stylesheet" href="styles.css" />
      <header>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="login">
          <a href="#">Login</a>
        </div>
      </header>
      <nav>
        <ul>
          <li className="dropdown">
            <a href="#">Calc</a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Rechner 1</a>
              </li>
              <li>
                <a href="#">Rechner 2</a>
              </li>
              <li>
                <a href="#">Rechner 3</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Tools</a>
            <ul className="dropdown-menu">
              <li>
                <a href="/calcbay">Tool 1</a>
              </li>
              <li>
                <a href="#">Tool 2</a>
              </li>
              <li>
                <a href="#">Tool 3</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">About</a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Über uns</a>
              </li>
              <li>
                <a href="#">Kontakt</a>
              </li>
              <li>
                <a href="#">Impressum</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <main>{/* webseite*/}</main>
    </>
  );
}
export default HomePage;
