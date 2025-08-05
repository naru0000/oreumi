import { useState } from "react";

function About() {
  return <p>어바웃</p>;
}

function Profile() {
  return <p>프로필</p>;
}

function Contact() {
  return <p>컨택</p>;
}

function App() {
  const [page, setPage] = useState("About");
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => setPage("About")}>About</button>
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={() => setPage("Profile")}>Profile</button>
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={() => setPage("Contact")}>Contact</button>
        </li>
      </ul>
      {page === "About" && <About />}
      {page === "Profile" && <Profile />}
      {page === "Contact" && <Contact />}
    </nav>
  );
}

export default App;
