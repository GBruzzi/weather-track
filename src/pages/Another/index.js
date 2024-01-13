// Componente Another
import Btn from "../../components/Btn";
import { InputContainer } from "./styles";
import { useState } from "react";
import Info from "../../components/Info";

export default function Another() {
  let apiKey = "738bf212000d2cc43f9f309f96a31707";

  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(null);
  const [umidity, setUmidity] = useState(null);
  const [wind, setWind] = useState(null);

  const search = async () => {
    const element = document.getElementsByClassName("inputContainer");

    if (element[0].value === "") {
      alert("Insira uma cidade válida !!");
      return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();

    const temperatureValue = Math.floor(data.main.temp);
    const cityValue = data.name;
    const windValue = Math.floor(data.wind.speed);
    const umidityValue = data.main.humidity;

    setTemperature(temperatureValue);
    setWind(windValue);
    setCity(cityValue);
    setUmidity(umidityValue);

    handleToggleGeo();

    return temperatureValue, windValue, cityValue, umidityValue;
  };

  const [geo, setGeo] = useState(false);

  function handleToggleGeo() {
    setGeo((prevState) => !prevState);
  }

  return (
    <>
      {geo ? (
        <>
          <Info temperature={temperature} city={city} wind={wind} umidity={umidity}/> 
          <Btn title="Voltar" onClick={handleToggleGeo} />
        </>
      ) : (
        <>
          <InputContainer>
            <input
              type="text"
              placeholder="Entre com o nome da cidade..."
              className="inputContainer"
            ></input>
          </InputContainer>
          <Btn
            title="Calcular clima"
            onClick={() => {
              search();
              
            }}
          ></Btn>
        </>
      )}
    </>
  );
}
