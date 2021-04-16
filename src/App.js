import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import News from './News/News';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [article,setArticle]= useState([]);
  // useEffect(()=>{
  //   fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-03-15&sortBy=publishedAt&apiKey=a757074d6a164334a170b27bb8a57562")
  //   .then(res=>res.json())
  //   .then(data=>setArticle(data.articles))
  // },[]);
  useEffect(()=>{
    axios("https://newsapi.org/v2/everything?q=tesla&from=2021-03-15&sortBy=publishedAt&apiKey=a757074d6a164334a170b27bb8a57562")
    .then((data)=>setArticle(data.data.articles))
  },[])
  return (
    <div>
      <h2>total News : {article.length}</h2>
    {
      article.map(artcle=><News artcle={artcle} ></News>)
    }
      
      
      

    </div>
  );
}

export default App;
