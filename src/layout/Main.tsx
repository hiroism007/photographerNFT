import * as React from 'react'
import { styled } from '@mui/material/styles'
import * as BaseLayout from './Base'
import * as Header from '../components/Header'
import { Grid } from '@mui/material'

type Props = {
    address?: string
    children: React.ReactNode
}

export const Component = (props: Props) => {
    return (
        <BaseLayout.Component>
            <Header.Component address={props?.address} />
            <Grid container justifyContent="center">
                <Contents item xs={8}>
                    {props.children}
                </Contents>
            </Grid>
        </BaseLayout.Component>
    )
}

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------

const Contents = styled(Grid)`
    padding-top: 200px;
`
