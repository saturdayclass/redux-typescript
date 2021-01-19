import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../index';
const RepositoriesList: React.FC = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(actionCreators.searchRespositories(term));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default RepositoriesList;
