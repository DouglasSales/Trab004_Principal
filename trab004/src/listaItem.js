import React from 'react';

const ListaItem = ({ onChange, onDelete, value }) => {
  return (
    <div className="Item-lista">
      <input
        className={ value.includes("ler") || value.includes("estudar") ? "Item" : null}
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default ListaItem;
