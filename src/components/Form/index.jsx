import { useState } from 'react'
import './form.css'

function Form ({setListTransactions,listTransactoins, setFiltrados, filtrados}){



    const [conta, setConta] = useState({description:'',type:'', value:'', id:0})
    const [cont, setCont] = useState(1)
    
    const change = e => {
        const {name, value} = e.target
        setConta(antes => ({...antes, [name]:value}))
        

    }


    function handleChange (e){
       
        setConta({...conta, type:e.target.value})
    }




    function addConta (conta){         
        setListTransactions ([...listTransactoins, conta])
        setFiltrados([...filtrados, conta])
        console.log(listTransactoins)
        
    }


    


    return(
        <form>
            <label for='descricao'>Descrição</label>
            <input className='input_desc' type='text' placeholder="Digite aqui sua descrição"
            value={conta.description} onChange={change} name='description'></input>
            <span>Ex: Compra de roupas</span>

            <div className='div_valor'>
                <label className='valor'>Valor</label>
                <input className='input_preco' type='number'   placeholder="R$"
                value={conta.value} onChange={change} name='value'></input>
                <label className='tipo'>Tipo de Valor</label>
                
            <select name="type" onClick={(e) => handleChange(e)}>
                <option >Selecione</option>
                <option value="entrada">Entrada</option>
                <option value="saida">Saida</option>
            </select>
            </div>
            <button onClick={() => {setConta({...conta, id:cont}); addConta(conta); setCont(cont + 1)}} type='button'>Inserir Valor</button>

        </form>



    )
}

export default Form