import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../App";
import Search from "../../components/Search";
import Providers from "../../providers";

import api from "../../services";
import MockAdapter from "axios-mock-adapter";

const mockedApi = new MockAdapter(api);

describe("Search tool", () => {
  test("should enable button when text is typed on the input", async () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );

    const input = screen.getByPlaceholderText("Insira o CEP");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "01001000" } });

    expect(button).toBeEnabled();
  });

  test("should disable button when text is not typed on the input", async () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );

    const input = screen.getByPlaceholderText("Insira o CEP");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "" } });

    expect(button).toBeDisabled();
  });

  test("shoud return an address", async () => {
    mockedApi.onGet("/72001490").replyOnce(200, {
      bairro: "Setor Habitacional Vicente Pires - Trecho 3",
      cidade: "Bras\u00edlia",
      logradouro: "Ch\u00e1cara 51",
      estado_info: {
        area_km2: "5.779,999",
        codigo_ibge: "53",
        nome: "Distrito Federal",
      },
      cep: "72001490",
      cidade_info: { area_km2: "5779,999", codigo_ibge: "5300108" },
      estado: "DF",
    });

    render(
      <Providers>
        <App />
      </Providers>
    );

    const input = screen.getByPlaceholderText("Insira o CEP");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "72001490" } });

    fireEvent.click(button);

    const adress = await screen.findByTestId("adress-element");

    await waitFor(() => {
      expect(adress).toBeInTheDocument();
    });
  });
});
