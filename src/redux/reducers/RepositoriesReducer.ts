interface RepositoriesState {
  loading: boolean;
  data: string[];
  error: string | null;
}

interface Action {
  type: string;
  payload: any;
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
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
