import { useState} from "react";

function TestComp() {
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

}