
"use client";
import {useState} from "react"; 
import styles from "./page.module.css";


export default function Home(){
  const[numero1,setNumero1]=useState('');
  const[numero2,setNumero2]=useState('');
  const[resultado,setResultado]=useState(null);

  const validarEntradas=()=>
  {
    return numero1!==''&& numero2!=='';
  }
    const sumar=()=>{

      if(!validarEntradas())
      {
        setResultado('Ingrese valores para numero1 y numero2:');
        return;
      }
    const resultadoSuma=parseFloat(numero1)+parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };

  const restar=()=>{

     if(!validarEntradas())
      {
        setResultado('Ingrese valores para numero1 y numero2:');
        return;
      }
    const resultadoResta=parseFloat(numero1)-parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };

  const multiplicar=()=>{

     if(!validarEntradas())
      {
        setResultado('Ingrese valores para numero1 y numero2:');
        return;
      }
    const resultadoMultiplicar=parseFloat(numero1)*parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMultiplicar}`);
  }

  const dividir=()=>{

     if(!validarEntradas())
      {
        setResultado('Ingrese valores para numero1 y numero2:');
        return;
      }
    if(parseFloat(numero2)!==0)
    {
      const resultadoDividir=parseFloat(numero1)/parseFloat(numero2);
      setResultado(`Resultado de la división: ${resultadoDividir}`);

    }
    else{
       setResultado(`Ingrese como divisor un numero distinto de cero`);
    }
  }
  
  const potencia=()=>{

     if(!validarEntradas())
      {
        setResultado('Ingrese valores para numero1 y numero2:');
        return;
      }
    const resultadoPotencia=Math.pow(numero1,numero2);
    setResultado(`Resultado de la potenciación de ${numero1} a la ${numero2}: ${resultadoPotencia}`);
  }

  const raiz=()=>{

     if(!validarEntradas())
      {
        setResultado('Ingrese valores para numero1 y numero2:');
        return;
      }
    const resultadoRaiz=Math.pow(numero1,(1/numero2)).toFixed(2);
    setResultado(`Resultado de la raiz ${numero2} de ${numero1}: ${resultadoRaiz}`);
  }

  const clear=()=>{
    setNumero1('');
    setNumero2('');
    setResultado('');
  }


  return (<main className={styles.main}>
    <div className={styles.calculadora}>

      <div className={styles.numeros}>
        <label className={styles.text}>Numero 1:</label>
        <input className={styles.inputnum} type="number" value={numero1} onChange={(e)=>setNumero1(e.target.value)}/>
      </div>

      <div className={styles.numeros}>
        <label className={styles.text}>Numero 2:</label>
        <input className={styles.inputnum} type="number" value={numero2} onChange={(e)=>setNumero2(e.target.value)}/>
      </div>

      <div>
        <button className={styles.button} onClick={sumar}>Sumar</button>
        <button className={styles.button} onClick={restar}>Restar</button>
        <button className={styles.button} onClick={multiplicar}>multiplicar</button>
        <button className={styles.button} onClick={dividir}>Dividir</button>
        <button className={styles.button} onClick={potencia}>Potencia</button>
        <button className={styles.button} onClick={raiz}>Sqrt</button>
     
        <button className={styles.buttons} onClick={clear}>Limpiar</button>
      </div>

      {resultado && <div className={styles.resultado}>
        {resultado}
        </div>}

    </div>
  </main>);
}
