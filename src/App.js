import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Home from './components/Home.page';
import Superheroes from './components/Superheroes.pages';
import RQSuperHeroes from './components/RQSuperHeroes.pages';
import RQAlteregos from './components/RQAlteregos';
import { RQSuperHero } from './components/RQSuperHero';
import ParalelQueries from './components/ParalelQueries.page';
import DynamicParallelPage from './components/DynamicParallelPage';
import DependentQueriesPage from './components/DependentQueriesPage';
import PaginatedQueriesPage from './components/PaginatedQueriesPage';
import InfiniteQueriesPage from './components/InfiniteQueriesPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-sh-alterego'> RQ Alter Egos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='rq-infinite' element={<InfiniteQueriesPage />} />
          <Route path='rq-paginated' element={<PaginatedQueriesPage />} />
          <Route
            path='rq-dependent'
            element={<DependentQueriesPage email='vishwas@example.com' />}
          />
          <Route
            path='/rq-dynamic-parallel'
            element={<DynamicParallelPage heroIds={[1, 3]} />}
          />
          <Route path='rq-parallel' element={<ParalelQueries />} />
          <Route path='rq-super-heroes/:heroId' element={<RQSuperHero />} />

          <Route path='/' element={<Home />} />
          <Route path='/super-heroes' element={<Superheroes />} />
          <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
          <Route path='/rq-sh-alterego' element={<RQAlteregos />} />

          <Route path='/*' element={<p> wrong route</p>} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </div>
  );
}

export default App;
