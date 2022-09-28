import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticulos, getAllArticulos } from '../../redux/Actions/index';
import Createarticulo from '../Articulo/Articulo';
import Navbar from '../Navbar/Navbar';

import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './Home.css';
// import EditarArticulo from '../Edit/Edit';
// import { useState } from 'react';
// import Tabla from '../tabla/tabla';

export default function Home() {
  const dispatch = useDispatch();
  const articuloss = useSelector((state) => state.articulos); //me traigo el array lleno de reducer
  const changeArticles = useSelector((state) => state.changeArticles);

  // const [state, setInput] = useState;
  useEffect(() => {
    dispatch(getAllArticulos());
  }, [changeArticles]);

  function handleDelete(i) {
    console.log(i);
    dispatch(deleteArticulos(i));
  }

  return (
    <div classname='App'>
      <Navbar />
      <Createarticulo />

      <h3>Previous Articles</h3>
      <h4>Review and edit previous blog posts pusblished on to homepage</h4>

      <table className='content-table'>
        <thead>
          <tr>
            <td>AUTHOR NAME</td>
            <td>TITLE</td>
            <td>CONTENT</td>
            <td>DATE</td>
          </tr>
        </thead>
        <tbody>
          {articuloss.map((articles, id) => {
            return (
              <tr key={id}>
                <td>
                  <input type='text' value={articles.author} />
                </td>
                <td>
                  <input type='text' value={articles.title} />
                </td>
                <td>
                  <input type='text' value={articles.content} />
                </td>
                <td>
                  <input type='text' value={articles.createdAt} />
                </td>
                <td>{articles.updateAt}</td>

                <td>
                  <button onClick={() => handleDelete(articles.id)}>
                    Delete{' '}
                  </button>
                </td>
                <td>
                  {' '}
                  {/* <button onClick={() => setEditData(articles)}>editar </button> */}
                  <Link>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}
