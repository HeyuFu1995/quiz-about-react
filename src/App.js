import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import { QuizProvider, useQuiz } from "./context/QuizContext";



function App() {
  const { status } = useQuiz();
  return (
    <QuizProvider className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" &&
          <>
            <Progress />
            <Question />
            <footer>
              <Timer />
              <NextButton />
            </footer>
          </>
        }
        {status === "finished" && <FinishScreen />}
      </Main>
    </QuizProvider>
  );
}

export default App;
