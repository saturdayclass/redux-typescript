import axios from 'axios';
import { ActionType } from '../action-types';

const SearchRespositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });
    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search`,
        {
          params: { text: term },
        }
      );

      const names = data.objects.map((result) => {
        return result.pacakge.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
