import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import {SSHdr, Ftrss} from './App';
import Products from './Products';

const sshdr = ReactDOM.createRoot(
  document.getElementById("Snew_hdr1") as HTMLElement
);

sshdr.render(
  <React.StrictMode>
    <SSHdr />
  </React.StrictMode>
);

const ssproducts = ReactDOM.createRoot(
  document.getElementById("SSProducts") as HTMLElement
);

ssproducts.render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>
);

const ssftr = ReactDOM.createRoot(
  document.getElementById("SSFooter") as HTMLElement
);

ssftr.render(
  <React.StrictMode>
    <Ftrss />
  </React.StrictMode>
);

