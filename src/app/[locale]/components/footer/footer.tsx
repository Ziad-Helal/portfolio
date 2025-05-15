import Container from "../container";

export default function Footer() {
  return (
    <footer className="py-2 border-t-2">
      <Container>
        <p className="text-center capitalize">&copy; {new Date().getFullYear()} all rights reserved</p>
      </Container>
    </footer>
  );
}
