import React from 'react';

const ListaItem = ({ onChange, onDelete, value }) => {
  return (
    <div className="Item-lista">
      <input
        className="Item"
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default ListaItem;
