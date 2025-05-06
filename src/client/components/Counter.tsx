import { useState, type FC } from 'hono/jsx'


 const Counter: FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => {
                setCount(count + 1);
            }}>Count</button>
        </div>
    )
  }



  export default Counter