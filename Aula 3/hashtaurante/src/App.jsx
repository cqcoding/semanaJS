import React from "react";
import './App.css'
import hashtauranteImg from "./assets/hashtaurante.webp";
import Navegacao from './navegacao';
import ItemCardapio from './itemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

function App() {
  const [paginaSelec, alterarPaginaSelec] = React.useState(2);

  const secoesMenu = [pratosPrincipais, sobremesas, bebidas];
  return (
    <>

  <img src={hashtauranteImg} className = "capa"/>
  <Navegacao alterarPaginaSelec = {alterarPaginaSelec}/>
  <h2>Pratos Principais</h2>
  <div className='menu'>
    {secoesMenu[paginaSelec].map((prato) =>(
      <ItemCardapio

      nome = {prato.nome}
      preco = {prato.preco}
      descricao = {prato.descricao}
      imagem = {prato.imagem}
      />
    ))}
  </div>
</>

  );
}

export default App
