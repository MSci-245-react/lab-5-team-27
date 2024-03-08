import RestaurantScreen from "./components/RestaurantScreen";
import Counter from './features/counter/Counter.js';
import IncrementByAmount from "./features/counter/IncrementByAmount";


export default function App() {
  return (
    <div>
      <Counter ></Counter>
      <IncrementByAmount />
    </div>
  )
}