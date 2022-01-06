import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Search";

describe("Button component", () => {
  test("should render the Button component", async () => {
    render(<Search />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
