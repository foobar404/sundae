import React from 'react'
import {useSlot} from "../util"
import {Nav} from "./"


export function Layout({children}) {
    children = useSlot(children)

    return (
        <>
            <Nav/>
            {children.default}
        </>
    )
}
