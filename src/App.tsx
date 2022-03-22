import { Routes, Route } from 'react-router-dom'
import './App.scss';
import UsersListPage from './components/user-list-page/UsersListPage';
import Page404 from './components/Page404';

function App(): JSX.Element {
  return (
    <div>

      <Routes>
        <Route path='/' element={<UsersListPage />} />

        <Route path='*' element={<Page404 />} />
      </Routes>

    </div>
  );
}

export default App;
