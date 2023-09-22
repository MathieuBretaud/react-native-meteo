import { useRoute } from "@react-navigation/native";
import { Container } from "../../components/Container/Container";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./Forcast.style";
export function Forcast() {
  const { params } = useRoute();
  console.log(params);
  return (
    <Container>
      <Txt>Forcecast</Txt>
    </Container>
  );
}
