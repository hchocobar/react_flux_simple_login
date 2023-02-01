import React from 'react';
import {createRoot} from 'react-dom/client'

//import your own components
import Layout from './layout.js';

const root = createRoot(document.querySelector("#app"))
root.render(<Layout/>)

