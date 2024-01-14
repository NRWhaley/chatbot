import React from 'react';
import { MainWindow } from './component/MainWindow';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<MainWindow />);