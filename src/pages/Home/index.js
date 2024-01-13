import Btn from "../../components/Btn";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import Info from "../../components/Info";
import { useState } from "react";

export default function Home() {
  const [geo, setGeo] = useState(false);

  function handleToggleGeo() {
    setGeo((prevState) => !prevState);
  }


  return (
    <>
      {geo ? (
        <>
          <Info />
          <Btn title="Voltar" onClick={handleToggleGeo}/>
        </>
      ) : (
        <>
          <Container>
            <h3>
              Esse aplicativo de clima usa a localização para te mostrar o
              clima exato de onde você quer. Com isso, você pode se preparar para o dia, escolher
              roupas adequadas ou planejar viagens, tudo de maneira simples e
              rápida, tendo as informações do clima na palma da sua mão.
            </h3>
          </Container>
        </>
      )}

      <Link to="/another">
        <Btn title="Calcular clima" />
      </Link>
    </>
  );
}
