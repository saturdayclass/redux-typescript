interface RepositoriesState {
  loading: boolean;
  data: string[];
  error: string | null;
}

interface SearchRepositories {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSucess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type Action =
  | SearchRepositories
  | SearchRepositoriesSucess
  | SearchRepositoriesError;

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, data: [], error: null };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
