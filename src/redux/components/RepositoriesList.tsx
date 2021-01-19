import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Search</button>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading....</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </form>
  );
};

export default RepositoriesList;
