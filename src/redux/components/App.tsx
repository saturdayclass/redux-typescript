import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import RepositoriesList from './RepositoriesList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search Pacakage</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
