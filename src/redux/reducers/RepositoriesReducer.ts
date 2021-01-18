interface RepositoriesState {
  loading: boolean;
  data: string[];
  error: string | null;
}

interface SearchRepositories {
  type: 'search_repositories';
}

interface SearchRepositoriesSucess {
  type: 'search_repositories_success';
  payload: string[];
}

interface SearchRepositoriesError {
  type: 'search_repositories_error';
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action:
    | SearchRepositories
    | SearchRepositoriesSucess
    | SearchRepositoriesError
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
