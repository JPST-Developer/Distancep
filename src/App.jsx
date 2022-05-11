import { useState } from 'react';
import api from './services/api';

import { Wrapper, InputCep, Button } from "./styles/styled"
 
function App() {

  const [ dataApi, setDataApi ] = useState()
  const [ cep, setCep ] = useState()

  function handleChange(event){
    setCep(event.target.value)
  }

 function handleClick(){

    api.get(cep + "/json").then((response) => setDataApi(response.data)).catch((err) => { 
      console.log("erro", err)
    })

  }

  return (
    <Wrapper className="App">
      <InputCep onChange={handleChange} type="text"  placeholder='Digite o CEP' />
      <Button onClick={handleClick} type="submit">Buscar CEP</Button>
      <pre>{ JSON.stringify(dataApi, null, 2) }</pre>

      <p>Cep: <input type="text" disabled value={dataApi?.cep} /> </p>
      <p>Rua: <input type="text" disabled value={dataApi?.logradouro} /> </p>
      <p>Bairro: <input type="text" disabled value={dataApi?.bairro} /> </p>
      <p>Cidade: <input type="text" disabled value={dataApi?.localidade} /> </p>
      <p>Estado: <input type="text" disabled value={dataApi?.uf} /> </p>
      <p>DDD: <input type="text" disabled value={dataApi?.ddd} /> </p>

    </Wrapper>
  );
}

export default App;
