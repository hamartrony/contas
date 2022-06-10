import './reset.css'
import './App.css';
import { useState } from 'react';
import Nu_Kenzie from './images/Nu_Kenzie.png'
// import white from './images/Nu_Kenzie_white.png'
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import {CgBox} from 'react-icons/cg'



function App() {
 
  const [listTransactoins, setListTransactions] = useState([            // lista
 
  ])

  const [filtrados, setFiltrados] = useState(listTransactoins)          // filtros


  const [home, setHome] = useState(true)
  function iniciar(status){
    setHome(status)

  }




  return (
    
  
    <div className="App">
     
      {home === true ? (
          <div className='home'>
            <div className='home_text'>
                <img src={Nu_Kenzie} alt=''></img>
                <h1>Centralize o controle das suas finanças</h1>
                <p>de forma rapida e segura</p>
                <button onClick={() => iniciar(false)}>Inicar</button>
            </div>
            <div className='figura'>
              <div className='div1'>
                <div className='div2'>
                  <div className='div3'>
                    <div className='box1'>
                        <div className='botao1'></div>
                        <div className='botao2'></div>
                        <div className='botao3'></div>
                            <div className='card1'></div>
                            <div className='card2'></div>
                            <div className='card3'></div>
                            <div className='card4'></div>
                            <div className='card5'></div>
                            <div className='card6'></div>
                        <div className='box2'>
                            <div className='box_img'><CgBox/></div>
                            <div className='box_text1'></div>
                            <div className='box_text2'></div>

                            <div className='box3'>
                                <div className='box_img'><CgBox/></div>
                                <div className='box_text1'></div>
                                <div className='box_text2'></div>

                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
      ):(
        <>
          <header>
            <img src={Nu_Kenzie} alt=''></img>
            <button onClick={()=> iniciar(true)}>Inicio</button>
          </header>
           <Form listTransactoins={listTransactoins} setListTransactions={setListTransactions} setFiltrados={setFiltrados} filtrados={filtrados}></Form>
           <TotalMoney listTransactoins={listTransactoins}/>
           <List listTransactoins={listTransactoins} filtrados={filtrados} setFiltrados={setFiltrados} setListTransactions={setListTransactions}/>
        </>

      )}

     
    </div>
  );
}

export default App;
