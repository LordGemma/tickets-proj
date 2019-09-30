import React from 'react';

import Filters from './Filters';
import './SideBar.css';

const SideBar = () => {
  return (
    <aside className='sidebar'>
      <header className='sidebar-header'>
        <h4>Количество пересадок</h4>
      </header>
      <main>
        <Filters />
      </main>
    </aside>
  );
};

export default SideBar;