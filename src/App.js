import React, { Component } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import Footer from './Footer';


const App = () => ( 
  <div className="App">
    <BlogForm />
    <BlogList />
    <Footer />
  </div>
);

export default App;
