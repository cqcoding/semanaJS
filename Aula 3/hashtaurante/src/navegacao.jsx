function Navegacao({alterarPaginaSelec}){
    return (
        <div className="navegacao">
            <button className="botao-navegacao"
            onClick={() => alterarPaginaSelec(0)}
            >
                 Pratos Principais
                 </button>
            <button className="botao-navegacao"
             onClick={() => alterarPaginaSelec(1)}
             >
                Sobremesas
             </button>
            <button className="botao-navegacao"
             onClick={() => alterarPaginaSelec(2)}
             >
                Bebidas
                </button>
        </div>
    );
}

export default Navegacao;