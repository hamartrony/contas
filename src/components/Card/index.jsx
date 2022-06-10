import './style_card.css'
import {FaTrash} from 'react-icons/fa'



function Card({transaction, name, listTransactoins, delItem}){

 



    return(
        <>
        {transaction.type === 'entrada' ? (
            < div className='card card_green'>
            <h2>{transaction.description}</h2>
            <span>R$ {transaction.value}</span>
            <button onClick={() => delItem(name)} ><FaTrash/></button>
            <p>{transaction.type}</p>
        </div>
        ):
        (
            <div  className='card card_gray'>
            <h2>{transaction.description}</h2>
            <span>R$ {transaction.value}</span>
            <button onClick={() => delItem(name)} ><FaTrash/></button>
            <p>{transaction.type}</p>
        </div>
        )}
        </>
    )


}

export default Card