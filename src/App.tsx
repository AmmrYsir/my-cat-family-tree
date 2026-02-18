import type { Component } from 'solid-js';
import CatTree from './components/CatTree';

const App: Component = () => {
  return (
    <div class="page-root">
      {/* ── Header ── */}
      <header class="site-header">
        <span class="site-header__icon">🐾</span>
        <h1 class="site-header__title">Cat Family Tree</h1>
        <span class="site-header__tagline">— a purr-fect lineage</span>
      </header>

      {/* ── Tree ── */}
      <main>
        <CatTree />
      </main>
    </div>
  );
};

export default App;
