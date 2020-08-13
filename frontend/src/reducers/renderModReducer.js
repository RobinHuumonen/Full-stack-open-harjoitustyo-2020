const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET':
      return action.data
    case 'UNSET':
      return false
    default: return state
  }
}

export const set = () => {
  return {
    type: 'SET',
    data: true
  }
}

export const unset = () => (
  { type: 'UNSET' }
)

export default reducer