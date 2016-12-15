import axios from 'axios';

export const RECEIVE_CAMPERS = 'RECEIVE_CAMPERS';

export function receiveCampers(response) {
  return {type: RECEIVE_CAMPERS, response: response }
}

export const SORT_CAMPERS = 'SORT_CAMPERS'

export function sortCampers() {
  return {type: SORT_CAMPERS};
}

export function fetchPosts() {
    return function (dispatch) {
      return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
                  .then(response =>
                    dispatch(receiveCampers(response.data))
                  )
    }
}
