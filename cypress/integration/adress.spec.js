context("Get Adress", () => {
  it("Tries to type and search for an address", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1440, 900);

    cy.get("button").should("be.disabled");

    cy.get("input[placeholder='Insira o CEP']")
      .type("72001490")
      .should("have.value", "72001490");

    cy.get("button").should("be.enabled");

    cy.get("button").click();

    cy.get("div[id=header-1]").should("have.text", "Logradouro");
    cy.get("input[id=input-1]").should("have.value", "Chácara 51");

    cy.get("div[id=header-2]").should("have.text", "Número");
    cy.get("input[id=input-2]").type("13");

    cy.get("div[id=header-3]").should("have.text", "Complemento");
    cy.get("input[id=input-3]").type("Casa");

    cy.get("div[id=header-4]").should("have.text", "Bairro");
    cy.get("input[id=input-4]").should(
      "have.value",
      "Setor Habitacional Vicente Pires - Trecho 3"
    );

    cy.get("div[id=header-5]").should("have.text", "Cidade");
    cy.get("input[id=input-5]").should("have.value", "Brasília");

    cy.get("div[id=header-6]").should("have.text", "Estado");
    cy.get("input[id=input-6]").should("have.value", "DF");
  });
});
