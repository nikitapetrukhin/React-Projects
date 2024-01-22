import { createRoot } from "react-dom/client";
import { Button } from "./button";
import { Container } from "./container";
import "./styles.css";
import { Input } from "./input";
import { Link } from "./link";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Container>
    <Input placeholder="Инпут" />
    <Button label="Button" />
    <Link href="https://ru.reactjs.org/" label="Документация React" />
  </Container>
);
