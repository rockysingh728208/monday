
import React, { useState } from 'react';

function Input() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-black px-4'>
      <div className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-[600px]'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'> Tum apna item add kar sakte ho</h2>

        <div className='flex gap-2 mb-6'>
          <input
            className='flex-1 px-4 py-2 rounded-lg border border-gray-300 '
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Type something...'
          />
          <button
            onClick={handleAdd}
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg '
          >
            Add
          </button>
        </div>

        <ul className='space-y-3 max-h-64 overflow-auto'>
          {items.map((item, index) => (
            <li
              key={index}
              className='flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg '
            >
              <span className='text-gray-800'>{item}</span>
              <button
                onClick={() => handleDelete(index)}
                className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md '
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Input;

