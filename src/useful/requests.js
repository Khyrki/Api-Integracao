const axios = require('axios');

require('dotenv/config');

const blingInstance = axios.create({
  baseURL: 'https://bling.com.br/Api/v2/pedido/json/',
});

const pipedriveInstance = axios.create({
  baseURL: `https://test-linkapi.pipedrive.com/v1/deals/?api_token=${process.env.PIPEDRIVE_KEY}`,
});

const blingXML = (title, value) => (`&xml=
  <?xml version="1.0" encoding="utf-8"?>
  <pedido>
    <cliente>
        <nome>${title}</nome>
        <tipoPessoa>J</tipoPessoa>
        <endereco>Rua Visconde de São Gabriel</endereco>
        <cpf_cnpj>00000000000000</cpf_cnpj>
        <ie_rg>3067663000</ie_rg>
        <numero>392</numero>
        <complemento>Sala 54</complemento>
        <bairro>Cidade Alta</bairro>
        <cep>95.700-000</cep>
        <cidade>Bento Gonçalves</cidade>
        <uf>RS</uf>
        <fone>5481153376</fone>
        <email>teste@teste.com.br</email>
    </cliente>
    <transporte>
        <transportadora>Transportadora XYZ</transportadora>
        <tipo_frete>R</tipo_frete>
        <servico_correios>SEDEX - CONTRATO</servico_correios>
        <dados_etiqueta>
            <nome>Endereço de entrega</nome>
            <endereco>Rua Visconde de São Gabriel</endereco>
            <numero>392</numero>
            <complemento>Sala 59</complemento>
            <municipio>Bento Gonçalves</municipio>
            <uf>RS</uf>
            <cep>95.700-000</cep>
            <bairro>Cidade Alta</bairro>
        </dados_etiqueta>
        <volumes>
            <volume>
                <servico>SEDEX - CONTRATO</servico>
                <codigoRastreamento></codigoRastreamento>
            </volume>
        </volumes>
    </transporte>
    <itens>
        <item>
            <codigo>001</codigo>
            <descricao>Caneta 001 Teste</descricao>
            <un>Pç</un>
            <qtde>1</qtde>
            <vlr_unit>${value}</vlr_unit>
        </item>
    </itens>
    <vlr_frete>0</vlr_frete>
    <vlr_desconto>0</vlr_desconto>
    <obs>Testando o campo observações do pedido</obs>
    <obs_internas>Testando o campo observações internas do pedido</obs_internas>
  </pedido>`);

module.exports = {
  blingInstance,
  pipedriveInstance,
  blingXML,
};
