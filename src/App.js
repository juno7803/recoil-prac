import './App.css';
import {RecoilRoot, atom, useRecoilState} from "recoil"

const countState = atom({
  key: 'countState',
  default: 0,
});

const App =()=> {
  return (
    <div className="App">
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </div>
  );
}

export default App;

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  const addCount = () =>{
    setCount(count+1);
  }
  const subCount = () =>{
    setCount(count-1);
  }
  return (
    <div>
      <button onClick={addCount}>up</button>
      <button onClick={subCount}>sub</button>
      <p>{count}</p>
    </div>
  )
}