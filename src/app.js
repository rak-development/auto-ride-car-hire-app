// import './components-import'
// import './style-imports'
// import './script-imports'
// import './script-custom'

import React  from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

module.hot.accept()
