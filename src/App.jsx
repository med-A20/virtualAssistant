import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import Header from "../components/Header";
import NewsCadrs from "../components/NewsCadrs";

function App() {
  const [arts, setArts] = useState([{}]);
  const [activeArticle, setActiveArticle] = useState(0);
  useEffect(() => {
    alanBtn({
      key: "a1e2132717757891aec0dda60590683c2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles }) => {
        if(command == 'headLines'){
          setArts(articles)
          setActiveArticle(-1);
        }else if (command === 'activeArticle') {
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
  }, []);

  return (
    <div className="App max-w-[1400px] mx-auto pt-5">
      <Header />
      <NewsCadrs articles={arts} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
