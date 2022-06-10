import "./style_total.css"


function TotalMoney({listTransactoins}){

     const entr  = listTransactoins.filter(item => item.type === "entrada") 
     const saida = listTransactoins.filter(item => item.type === "saida") 
     
        


    const totalEntradas = entr.reduce((acum, atual) => acum + Number(atual.value), 0)
    const totalSaidas   = saida.reduce((acum, atual) => acum + Number(atual.value), 0)
    const total = totalEntradas - totalSaidas 


    return(
        <div className="total">
            <p>Valor Total:</p>
            <p className="preco">R$ {total}</p>
            <span>O valor se refere as entradas</span>
        </div>
    )
}


export default TotalMoney