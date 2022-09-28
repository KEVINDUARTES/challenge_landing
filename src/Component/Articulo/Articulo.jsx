import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postArticulos } from '../../redux/Actions';
import './Articulo.css';

export default function Createarticulo() {
  const dispatch = useDispatch();
  const articulosReducer = useSelector((state) => state.getAllArticulos);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    author: '',
    title: '',
    content: '',
  });

  function handleChange(e) {
    setInput({
      // voy llenando mi input de arriba
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  function handleSelect(e) {
    setInput({
      ...input,
      actividades: [...input.actividades, e.target.value],
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (input.author === '' || input.title === '' || input.content === '')
      return alert('Debe llenar los campos');
    console.log('Submit actividad', input);
    dispatch(postArticulos(input));
    alert('Articulo Creada');

    setInput({
      //para refrescar la pagina
      author: '',
      title: '',
      content: '',
    });
  }

  return (
    <div>
      <p class='red-pink'>
        <h2>Add New Blog Article</h2>
        <h5>Publish a new blog article to feature in the Easybanck homepage</h5>
      </p>
      <form
        action='#'
        target=''
        method='get'
        className='formDatosPersonales'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <label for='author'>Author:</label>
          <input
            type='text'
            value={input.author}
            name='author'
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p className='form-error'>{errors.author}</p>}
        </div>
        <div>
          <label>Blog Title:</label>
          <input
            type='text'
            name='title'
            value={input.title}
            onChange={(e) => handleChange(e)}
          />
          {errors.difficulty && <p className='form-error'>{errors.title}</p>}
        </div>
        <div>
          <label>Blog Content:</label>
          <input
            type='texto'
            value={input.content}
            name='content'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <input className='btn btn-success mx-1' type='submit' value='Send' />
      </form>
    </div>
  );
}
