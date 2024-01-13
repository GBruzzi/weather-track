import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { BtnImage } from "./styles";
import { Container } from "./styles";


export default function Header({onToggleTheme, sunImage}) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="home" />
      </Link>
      <h1>weatherTrack</h1>
      <button onClick={onToggleTheme}>
        <BtnImage src={sunImage} alt="btn" />
      </button>
    </Container>
  );
}
