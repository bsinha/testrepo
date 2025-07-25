function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
      <nav>
        <ul>
          <li><a href="#home">{props.p1}</a></li>
          <li><a href="#about">{props.p2}</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;