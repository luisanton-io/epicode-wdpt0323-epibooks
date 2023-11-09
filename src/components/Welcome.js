import { Alert, Container } from "react-bootstrap";

export default function Welcome() {
  return (
    <>
      <Alert variant={"info"} className="mb-0" data-testid="welcome">
        <Container>Welcome to EPICODE!</Container>
      </Alert>
      <Container fluid className="py-5 bg-info text-white">
        <Container>
          <h1 className="text-uppercase fw-bolder">EPIBOOKS</h1>
        </Container>
      </Container>
    </>
  );
}
