import { useState } from "react";


export function UseToggle(initialValue=false) {
    const [on, setOn] = useState(initialValue);
    function onToggle() {
        setOn(!on);
    }
    return [on, {onToggle}]
}