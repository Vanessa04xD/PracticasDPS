"use client";
import { useState } from "react";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const[numero,setNumero]=useState(0);
  const[resultado,setResultado]=useState(numero);


  const incrementar=()=>{
    const resultado=parseFloat(numero)+1;
    setResultado(`Conteo: ${resultado}`);
  };

  const decrementar=()=>{
    const resultado=parseFloat(numero)-1;
    setResultado(`Conteo: ${resultado}`);

  };

  return (
  
  <main className={styles.main}>
    <div className={styles.calculadora}>
      <div className={styles.numeros}>

        <div>
          <button className={styles.button} onClick={incrementar}>Incrementar</button>
          <button className={styles.button} onClick={decrementar}>Decrementar</button>

        </div>

        //mostrar resultado
        {resultado&&
          <div className={styles.resultado}>
            {resultado}
          </div>
        }

      </div>
    </div>
  </main>
  );
  }
