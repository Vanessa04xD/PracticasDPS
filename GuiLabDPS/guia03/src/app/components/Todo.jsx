import React from 'react';
import styles from '../page.module.css';

const Todo = ({ item, index, deleteItem }) => {
  return (
    <div className={styles.list}>
      <h3>{item.nombre} - {item.marca} - x{item.cantidad} - ${item.precio} = ${item.precioTotal.toFixed(2)}</h3>
      <button className={styles.btn_delete} onClick={() => deleteItem(index)}>x</button>
    </div>
  );
};

export default Todo;
