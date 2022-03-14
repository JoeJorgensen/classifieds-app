import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryShow from './Pages/CategoryShow';
import Home from './Pages/Home';
import About from './Pages/About';
import Catagories from './Pages/Catagories';
import Category from './Pages/Category';
import CategoryForm from './Pages/CategoryForm';
import Items from './Pages/Items';
import Item from './Pages/Item';
import Jobs from './Pages/Jobs';
import Job from './Pages/Job';
import JobShow from './Pages/JobShow';

ReactDOM.render(
  <BrowserRouter>
<Routes>
  <Route path="/" element={<App />}/>
  <Route index element={<Home />} />
  <Route path = 'about' element={<About />}/>
  <Route path = 'catagories' element={<Catagories />}/>
  <Route path = 'category' element={<Category />}/>
  <Route path = 'category/:id' element={<CategoryShow />}/>
  <Route path = 'category/new' element={<CategoryForm/>}/>
  <Route path = 'category/:id/edit' element={<CategoryForm/>}/>



  <Route path = 'items' element={<Items />}/>
  <Route path = 'item' element={<Item />}/>
  <Route path = 'jobs' element={<Jobs />}/>
  <Route path = 'job' element={<Job/>}/>
  <Route path = 'job/:id' element={<JobShow />}/>





</Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
