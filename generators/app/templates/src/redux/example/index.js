import 'whatwg-fetch'

export const types = {
  EXAMPLE_ACTION_REQUEST: 'EXAMPLE_ACTION_REQUEST',
  EXAMPLE_ACTION_SUCCESS: 'EXAMPLE_ACTION_SUCCESS',
  EXAMPLE_ACTION_FAILURE: 'EXAMPLE_ACTION_FAILURE'
}

export const exampleActionRequest = () => ({
  type: types.EXAMPLE_ACTION_REQUEST
})

export const exampleActionSuccess = (data) => ({
  type: types.EXAMPLE_ACTION_SUCCESS,
  data
})

export const exampleActionFailure = (error) => ({
  type: types.EXAMPLE_ACTION_FAILURE,
  data: error
})

export const exampleAction = () => (dispatch) => {
  dispatch(exampleActionRequest())
  // fetch(`${Config.API_URL}`)
  // .then(res => res.json())
  // .then((res) => {
  //   console.log('success!', res)
  //   dispatch(exampleActionSuccess(res))
  // })
  // .catch((e) => {
  //   console.log('something went wrong!', e)
  //   dispatch(exampleActionFailure(e.response))
  // })
}

export const initialState = {
  example_action_in_progress: false,
  example_action_error: null,
  result: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.EXAMPLE_ACTION_REQUEST:
      return {
        ...state,
        example_action_in_progress: true
      }
    case types.EXAMPLE_ACTION_SUCCESS:
      return {
        ...state,
        example_action_in_progress: false,
        result: action.data
      }
    case types.EXAMPLE_ACTION_FAILURE:
      return {
        ...state,
        example_action_in_progress: false,
        example_action_error: action.data
      }
    default:
      return state
  }
}
