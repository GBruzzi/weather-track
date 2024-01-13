// Componente Info
import { Container, Card } from "./styles";
import tempIcon from "../../images/tempIcon.png";
import umidadeIcon from "../../images/umidadeIcon.png";
import windIcon from "../../images/windIcon.png";

export default function Info({ temperature, umidity, city, wind }) {
  return (
    <Container>
      <h1 className="city">Clima em : {city}</h1>
      <Card>
        <img src={tempIcon} alt="icon temperatura" />
        <div className="temp">{temperature}ºC</div>
      </Card>
      <Card>
        <img src={umidadeIcon} alt="icon temperatura" />
        <div className="humidity">{umidity}%</div>
      </Card>
      <Card>
        <img src={windIcon} alt="icon temperatura" />
        <div className="wind">{wind}km/h</div>
      </Card>
    </Container>
  );
}
