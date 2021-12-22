import './App.css';
import { Alert, Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [chois, setChois]= useState({
    yes:false,
    no:false
  })
  const [count, setCount] = useState(0)
  
  function y(){
    setChois({
      yes:true,
      no:false
    })


  }

  function no(){
    setChois({
      yes:false,
      no:true
    })

  }

  function back(){
    setChois({
      yes:false,
      no:false
    })
    setCount(count+1)
    console.log(count);
  }



  return (
 <div className="App">
   {(count>10)?
   <>
    <div variant={"info"}>
    Да хватит, ты пидор </div>
    </>
      :
    <>
    {(!chois.yes && !chois.no)?
      <>
        <div variant={"info"}>
          Вы пидор? 
        </div>
        <div>
          <button onClick ={y}>Да</button>{' '}
          <button onClick={no}>Нет</button>
        </div>
      </>
     :
     <>
       {chois.yes?
         <>
           <div variant={"info"}>
             Вы пидор 
           </div>
            <button onClick ={back}>еще раз</button>
         </>
          :
         <>
            <div variant={"info"}>
             Пидора ответ 
            </div>
             <button onClick ={back} >еще раз</button>
         </>
        }
     </>
     }
    </>
    }
    </div>
  );
}

export default App;
