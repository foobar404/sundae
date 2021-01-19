import React from 'react'
import {useSlot} from "../util"

export function Layout({children}) {
    children = useSlot(children)

    return (
        <>
            {children.default}
        </>
    )
}
