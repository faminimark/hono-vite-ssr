import { type FC } from 'hono/jsx'
import Counter from './components/Counter'
import { BrowserRouter, Route, Routes } from "react-router";

const App: FC = () => {
  return (
    <Counter />
  );
};

export default App;
