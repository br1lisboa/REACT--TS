import { useState } from 'react';

export const useProduct = () => {

    const [counter, setCounter] = useState(0)

    const increaseBy = (value: number) => {
        setCounter(previus => Math.max(previus + value, 0))
    }

    return {
        counter,
        increaseBy
    }

}