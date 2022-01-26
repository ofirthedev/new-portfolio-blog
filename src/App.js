import React from "react";
import "./App.css";

import { BrowserRouter , Routes, Route } from "react-router-dom";
import  BlogInterface   from '../src/Blog/BlogInterface';
import  BlogPost   from '../src/Blog/BlogPost';
import NotFound from './Blog/NotFound';
import LoadingScreen from "./components/LoadingScreen";
import HomePageView from "./components/HomePageView";
function App() {


  const [progress, setProgress] = React.useState(0);

  const [isDone, setIsDone] = React.useState(false);

  React.useEffect(() => {
    if (progress >= 100) {
      const timer = setInterval(() => {
        setIsDone(true);
      }, 300);

      return () => {
        clearInterval(timer);
      };
    }
  }, [progress]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
          prevProgress >= 100 ? 100 : prevProgress + 25
      );
    }, 250);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
      <div className="App">
        {!isDone && <LoadingScreen progress={progress} />}
        {isDone && (
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<HomePageView/>}/>
                <Route exact path="/blog" element={<BlogInterface/>} />
                <Route path="/blog/post/:id" element={<BlogPost/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </BrowserRouter>
        )}
      </div>
  );
}

export default App;
