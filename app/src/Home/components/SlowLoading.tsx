import React, { useState, ChangeEvent } from 'react'
import useInterval from '../../lib/hooks/useInterval';
import './SlowLoading.css';

type Props = { showDelay?: number };

function SlowLoading({ showDelay = 10 }: Props) {
  const [delay, setDelay] = useState<number>(1000);
  const [count, setCount] = useState<number>(0);

  useInterval(
    () => {
      setCount(count + 1);
    },
    (count < showDelay) ? delay : null,
  )



  return (
    <>
      {(count >= showDelay) && 
        <div className="SlowLoading">
          Slow search can happen when scanning large amounts of files
        </div>
      }
    </>
  );
}

export default SlowLoading;

