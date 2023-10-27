import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
html{
  font-size: 62,5%;
}
`;
const Body = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #000000;
`;
const Titulo = styled.h1`
  color: #ffffff;
  font-size: 3rem;
`;
const BlocoCalculadora = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: 50vh;
  border: solid white 0.1rem;
  color: #ffffff;
  border-radius: 3rem;
  font-size: 2rem;

  @media (max-width: 1230px) {
    width: 40%;
  }

  @media (max-width: 750px) {
    width: 80%;
  }
`;
const InputNum = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 1rem;
  margin: 0.8rem;
  background-color: #505050;
  color: #ffffff;
  font-size: 1rem;
`;
const BtnLimpar = styled.button`
  background-color: #ff9500;
  width: 25%;
  padding: 0.5rem;
  margin: 0.8rem;
  border: none;
  border-radius: 1rem;
  &:hover {
    transform: scale(110%);
    cursor: pointer;
  }
`;
const Select = styled.select`
  padding: 0.5rem;
  border-radius: 0.6rem;
  margin: 0.8rem;
  width: 25%;
  font-size: 1rem;
  background-color: #505050;
  color: #ffffff;
`;
const Resultado = styled.h2`
  font-size: 2rem;
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();

  const [segundoValor, setSegundoValor] = useState();

  const [resultado, setResultado] = useState();

  const CapturarPrimeiroValor = (item) => {
    setPrimeiroValor(Number(item.target.value));
  };

  const CapturarSegundoValor = (item) => {
    setSegundoValor(Number(item.target.value));
  };

  const Calcular = (item) => {
    if (item.target.value === "somar") {
      setResultado(primeiroValor + segundoValor);
    } else if (item.target.value === "subtrair") {
      setResultado(primeiroValor - segundoValor);
    } else if (item.target.value === "multiplicar") {
      setResultado(primeiroValor * segundoValor);
    } else {
      setResultado(primeiroValor / segundoValor);  
    }
  };

  const Limpar = () => {
    setPrimeiroValor(0);
    setSegundoValor(0);
    setResultado(0);
  };

  return (
    <>
      <GlobalStyled />
      <Body>
        <Titulo>CALCULE</Titulo>
        <BlocoCalculadora>
          <label>Primeiro Valor</label>
          <InputNum type="number" value={primeiroValor} onChange={CapturarPrimeiroValor} />

          <label>Segundo Valor</label>
          <InputNum type="number" value={segundoValor} onChange={CapturarSegundoValor} />

          <Select onChange={Calcular}>
            <option value={"somar"}>Somar</option>
            <option value={"subtrair"}>Subtrair</option>
            <option value={"multiplicar"}>Multiplicar</option>
            <option value={"dividir"}>Dividir</option>
          </Select>

          <BtnLimpar onClick={Limpar} >Limpar</BtnLimpar>

          <Resultado >RESULTADO: {resultado}</Resultado>
        </BlocoCalculadora>
      </Body>
    </>
  );
}
