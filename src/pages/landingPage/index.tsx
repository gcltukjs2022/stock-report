import StockDetails from "../../components/StockDetails";
import StocksSelection from "../../components/StocksSelection";
import { Container, Left, Main, Right, Section, Title } from "./styles";

const LandingPage = () => {
  return (
    <Section>
      <Container>
        <Title>Stocks Report</Title>
        <Main>
          <StocksSelection />
        </Main>
      </Container>
    </Section>
  );
};

export default LandingPage;
