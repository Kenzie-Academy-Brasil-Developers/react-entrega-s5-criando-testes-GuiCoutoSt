import { useLocateCep } from "../../providers/CepProvider";
import { Divider, Form, Input, Label, Header } from "semantic-ui-react";

const Address = () => {
  const { ceps } = useLocateCep();

  return (
    <>
      <Divider horizontal>Endereço buscado</Divider>

      {ceps.cep && (
        <div className="Address" data-testid="adress-element">
          <Form>
            <Form.Field inline>
              <Header size="small" id="header-1">
                Logradouro
              </Header>
              <Input fluid value={ceps.logradouro} id="input-1" />
            </Form.Field>
            <Form.Field inline>
              <Header size="small" id="header-2">
                Número
              </Header>
              <Input fluid id="input-2" />
              {ceps.complemento ? (
                <Label basic color="red" pointing>
                  {ceps.complemento}
                </Label>
              ) : (
                <Label basic color="red" pointing>
                  Toda a extensão
                </Label>
              )}
              <Form.Field inline>
                <Header size="small" id="header-3">
                  Complemento
                </Header>
                <Input
                  fluid
                  placeholder="Apartamento, bloco, ..."
                  id="input-3"
                />
              </Form.Field>
            </Form.Field>
            <Form.Field inline>
              <Header size="small" id="header-4">
                Bairro
              </Header>
              <Input fluid value={ceps.bairro} id="input-4" />
            </Form.Field>
            <Form.Field inline>
              <Header size="small" id="header-5">
                Cidade
              </Header>
              <Input fluid value={ceps.cidade} id="input-5" />
            </Form.Field>
            <Form.Field inline>
              <Header size="small" id="header-6">
                Estado
              </Header>
              <Input fluid value={ceps.estado} id="input-6" />
            </Form.Field>
          </Form>
        </div>
      )}
    </>
  );
};

export default Address;
