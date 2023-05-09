import './App.css';
import InputCounter from './components/InputCounter/InputCounter';
import Todo from './components/TodoApp/Todo';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';
import FoodOrder from './components/Food-order/FoodOrder'
// import GithubUsers from './components/Github-users/GithubUsers';
import TicTacToe from './components/TicTacToe/TicTacToe';

function App() {
  return (
    <div className="App">
      {/* <InputCounter /> */}
      {/* <Todo/> */}
      {/* <InfiniteScroll/> */}
      <FoodOrder/>
      {/* <GithubUsers/> */}
      {/* <TicTacToe/> */}
    </div>
  );
}

export default App;
