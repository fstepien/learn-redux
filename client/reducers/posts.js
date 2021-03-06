function posts(state = [], action) {
  posts = { ...state.posts };
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log(state);
      const i = action.index;
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
}

export default posts;
