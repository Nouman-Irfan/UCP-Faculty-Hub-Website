import React, { useEffect, useState } from 'react'

const Counter = ({ value }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(0)

        const step = Math.max(1, Math.ceil(value / 40))

        const timer = setInterval(() => {
            setCount((current) => {
                if (current + step >= value) {
                    clearInterval(timer)
                    return value
                }

                return current + step
            })
        }, 30)

        return () => clearInterval(timer)
    }, [value])

    return count
}

export default Counter