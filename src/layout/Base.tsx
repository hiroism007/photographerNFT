import * as React from 'react'
import { styled, createStyles } from '@mui/material/styles'

type Props = {
    children: React.ReactNode
}

export const Component = ({ children, ...props }: Props) => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Wrap {...props}>
            {/*<GlobalStyles />*/}
            <Inner>{children}</Inner>
        </Wrap>
    )
}
//
// const GlobalStyles = createStyles`
//   body {
//     color: #333333;
//     background-color: white;
//     font-family: YakuHanJP, 'Noto Sans JP', sans-serif;
//     font-size: 14px;
//     line-height: 1.5;
//     -webkit-font-smoothing: antialiased;
//   }
//
//   button, input, optgroup, select, textarea {
//     font-family: inherit;
//     font-size: inherit;
//     margin: 0;
//   }
//
//   *, *::after, *::before {
//     box-sizing: border-box;
//   }
//
//   *:focus {
//     outline: none;
//   }`

const Wrap = styled('div')``

const Inner = styled('div')``
