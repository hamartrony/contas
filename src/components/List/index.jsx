import Card from "../Card"
// import { useState } from "react"
import './style_list.css'

function List({listTransactoins, setFiltrados, filtrados, setListTransactions}){
    
    
    // FUNCAO FILTROS
    function filtroType(text){
        setFiltrados( text === 'todos' ? listTransactoins : listTransactoins.filter(item => item.type === text))
    
    }

    // FUNCAO DELETAR
    function delItem(id){
        const deleta = listTransactoins.filter(item => item.id !== id)
        setFiltrados(deleta)
        setListTransactions(deleta)
       
   }
  

   
 

    return(
        
        <div className="lista">
            <div className="header">
                <p>Resumo Financeiro</p>
                <button onClick={() => filtroType('todos')} type='button' className="todos">Todos</button>
                <button onClick={() => filtroType('entrada')} type='button' className="class">Entradas</button>
                <button onClick={() => filtroType('saida')}   type='button' className="class class2">Despesas</button>
            </div>
            <div className="itens">
            {filtrados.length < 1 ? ( 
                <>
                    <p className="vazio_p">Você ainda não possui nenhum lançamento</p>
                    <div className="vazio"> 
                        <div></div>
                        <div></div>                    
                    </div>
                    <div className="vazio"> 
                        <div></div>
                        <div></div>                    
                    </div>
                    <div className="vazio"> 
                        <div></div>
                        <div></div>                    
                    </div>
                </>

            ):
            (
                filtrados.map((transaction, index) => 
                <Card transaction={transaction} name={transaction.id} key={index} delItem={delItem}></Card>)

            )}
            
            
            </div>

        </div>


    )
}

export default List