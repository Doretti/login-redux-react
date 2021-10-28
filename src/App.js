import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path={'/'} component={Main} />
        <Route exact path={'/profile'} component={Profile} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
