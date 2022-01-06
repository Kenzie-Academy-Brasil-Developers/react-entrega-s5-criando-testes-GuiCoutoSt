import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";

describe("Input component", () => {
  test("should render the Input component", async () => {
    render(<Search />);

    expect(screen.getByPlaceholderText("Insira o CEP")).toBeInTheDocument();
  });
});
