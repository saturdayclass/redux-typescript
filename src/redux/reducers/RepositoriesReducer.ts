interface RepositoriesState {
  loading: boolean;
  data: string[];
  error: string | null;
}

const reducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    case 'search_repositories':
      return { loading: true, data: [], error: null };
    case 'search_repositories_success':
      return { loading: false, data: action.payload, error: null };
    case 'search_repositories_error':
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
