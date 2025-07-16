"use client"
import React, { useState } from 'react';
import styles from '../page.module.css';
import Todo from './Todo';

const Form = () => {
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!item.nombre || !item.marca || !item.cantidad || !item.precio) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const precioTotal = parseFloat(item.cantidad) * parseFloat(item.precio);
    const nuevoItem = { ...item, precioTotal };
    setItems([...items, nuevoItem]);
    setTotal(total + precioTotal);
  };

  const deleteItem = index => {
    const precioEliminar = items[index].precioTotal;
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    setTotal(total - precioEliminar);
  };

  return (
    <>
      <h3>Agregar Producto</h3>
      <input className={styles.form_input} type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input className={styles.form_input} type="text" name="marca" placeholder="Marca" onChange={handleChange} />
      <input className={styles.form_input} type="number" name="cantidad" placeholder="Cantidad" onChange={handleChange} />
      <input className={styles.form_input} type="number" name="precio" placeholder="Precio" onChange={handleChange} />
      <button className={styles.form_button} onClick={handleClick}>Agregar</button>

      <h4>Lista de compras</h4>
      {
        items.map((value, index) => (
          <Todo
            key={index}
            index={index}
            item={value}
            deleteItem={deleteItem}
          />
        ))
      }

      <h3>Total: ${total.toFixed(2)}</h3>
    </>
  );
};

export default Form;
