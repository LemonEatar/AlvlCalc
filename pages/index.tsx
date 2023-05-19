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
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">ALvL</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <a>
                Calc
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 absolute top-14 left-0">
                <li>
                  <button onClick={() => (window.location.href = "/calcbay")}>
                    <a>Bayern Calc</a>
                  </button>

                  <button onClick={() => (window.location.href = "/calcnrw")}>
                    <a>NRW Calc</a>
                  </button>

                  <button onClick={() => (window.location.href = "/calchess")}>
                    <a>Hessen Calc</a>
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Tools
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 absolute top-14 left-0">
                <li>
                  <button onClick={() => (window.location.href = "/timetable")}>
                    <a>Timetable</a>
                  </button>

                  <button onClick={() => (window.location.href = "/nchar")}>
                    <a>Notenchart</a>
                  </button>

                  <button onClick={() => (window.location.href = "/npred")}>
                    <a>Notenpredictor</a>
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <a>
                More
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 absolute top-14 left-0">
                <li>
                  <button onClick={() => (window.location.href = "/about")}>
                    <a>About</a>
                  </button>

                  <button onClick={() => (window.location.href = "/contact")}>
                    <a>Contact</a>
                  </button>

                  <button onClick={() => (window.location.href = "/cffe")}>
                    <a>Buy us a Coffee</a>
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <a>Login/Registrieren</a>
            </li>
          </ul>
        </div>
      </div>
      <Background />
      <style jsx global>{`
        body {
          background-image: url("bground.jpeg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          font-family: sans-serif;
        }
      `}</style>
    </>
  );
}

export default HomePage;
