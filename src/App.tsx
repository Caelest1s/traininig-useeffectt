import { useEffect, useState } from "react";
import { findProduct } from "./data";

function App() {

  const [productId, setProductId] = useState(1);
  const [prod, setProd] = useState<any>();

  useEffect(
    () => { setProd(findProduct(productId)) }
    , [productId] //2º elemento responsável por monitorar o comportamento
  );

  function handleClick() {
    setProductId(2);
  }

  return (
    <>
      <h1>Use-Effect</h1>
      {/* ? é posto caso a função retorne undefined */}
      <h2>{prod?.nome}</h2>
      <p>{prod?.price}</p>
      <br />
      <button onClick={handleClick}>Mudar para produto 2</button>
    </>
  )
}

export default App