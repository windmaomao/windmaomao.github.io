import { SortAnim } from './components';

function App() {
  return (
    <div>
      <h1>Selection Sort</h1>
      <p>
        Find the smallest element in the array and swap it
        with one in the first position, then find the next
        smallest element and swap it with the one in the
        second position, and continue until the array is
        sorted.
      </p>
      <SortAnim />
    </div>
  );
}

export default App;
