import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_VETS = 'GET_VETS'

/**
 * INITIAL STATE
 */
const initialVets = []

/**
 * ACTION CREATORS
 */
const getVets = vets => ({type: GET_VETS, vets})

/**
 * THUNK CREATORS
 */
export const fetchVets = () => async dispatch => {
  try {
    const res = await axios.get('api/vets')
    dispatch(getVets(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialVets, action) {
  switch (action.type) {
    case GET_VETS:
      return [...action.vets]
    default:
      return state
  }
}
