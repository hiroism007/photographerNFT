import * as React from 'react'
import { styled } from '@mui/material/styles'
import * as BaseLayout from './Base'
import * as Header from '../components/Header'

type Props = {
    title: JSX.Element
    titleHeight: string
    children: React.ReactNode
}

export const Component = (props: Props) => {
    return (
        <BaseLayout.Component>
            <Header.Component />
            <Title>{props.title}</Title>
            <Contents titleHeight={props.titleHeight}>
                {props.children}
            </Contents>
        </BaseLayout.Component>
    )
}

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------

const Title = styled('div')`
    margin: 0 auto;
    padding: 24px;
`

const Contents = styled('div')<{ titleHeight: string }>`
    margin: 0 auto;
    min-height: calc(100vh - 152px);
    min-height: ${props => `calc(100vh - 64px - ${props.titleHeight});`};
    padding: 24px;
`
