import React, { useEffect, useState } from "react"
export function Fade({ visible, children }) {
    const [showChildren, setShowChildren] = useState(visible);
    useEffect(() => {
        if (visible) {
            setShowChildren(true)
        } else {
            setShowChildren(false);
        }
    }, [visible])

    return (
        <>{showChildren && children}</>
    )
}