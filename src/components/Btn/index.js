import { Button } from "./styles";

export default function Btn({title, onClick}) {
  return (
    < Button onClick={onClick}>
      <strong>{title}</strong>
    </ Button>
  );
}