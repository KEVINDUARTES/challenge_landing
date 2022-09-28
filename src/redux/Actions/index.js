import axios from 'axios';
export const GET_ARTICULOS = 'GET_ARTICULOS';
export const POST_ARTICULOS = 'POST_ARTICULOS';
export const DELETE_ARTICULOS = 'DELETE_ARTICULOS';
export const PATCH_ARTICULOS = ' PATCH_ARTICULOS';

//TRAER TODOS LOS ARTICULOS

export function getAllArticulos() {
  return async function (dispatch) {
    try {
      console.log('GEt all');
      var json = await axios.get(
        ' https://www.api.recruitment.matic.io/articles'
      );
      console.log(json.data);
      return dispatch({
        type: GET_ARTICULOS,
        payload: json.data.data,
      });
    } catch (err) {
      console.log('errr');
      console.log(err);
    }
  };
}

// //traer las actividades

// export function getArticulos() {
//   return async function (dispatch) {
//     try {
//       let json = await axios.get(
//         'https://www.api.recruitment.matic.io/articles'
//       );
//       return dispatch({
//         type: GET_ARTICULOSS,
//         payload: json.data,
//       });
//     } catch (error) {
//       alert('No hay articulos');
//       console.log(error);
//     }
//   };
// }

//ELIMINAR POR ID

export function deleteArticulos(id) {
  // console.log(id);
  return async function (dispatch) {
    try {
      var json = await axios.delete(
        ` https://www.api.recruitment.matic.io/articles/${id}`
      );

      return dispatch({
        type: DELETE_ARTICULOS,
        payload: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
// editar articulos
export function patchArticulos(id) {
  // console.log(id);
  return async function (dispatch) {
    try {
      var json = await axios.patch(
        ` https://www.api.recruitment.matic.io/articles/${id}`
      );

      return dispatch({
        type: PATCH_ARTICULOS,
        payload: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

//crear nuevas actividades

export function postArticulos(payload) {
  return async function (dispatch) {
    const json = await axios.post(
      ' https://www.api.recruitment.matic.io/articles',
      payload
    );
    return dispatch({
      type: POST_ARTICULOS,
      payload: true,
    });
    // return json;
  };
}
