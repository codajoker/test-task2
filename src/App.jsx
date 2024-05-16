import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Suspense, lazy } from 'react';
import CatalogPage from './pages/Catalog/Catalog';
import FavoritesPage from './pages/Favorites/Favorites';

const HomePage = lazy(() => import('./pages/Home/Home'));

function App() {
  return (
    <>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
