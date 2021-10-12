import * as React from 'react'
import { styled } from '@mui/material/styles'
import logo from '../assets/empty.svg'

type Props = {
    address?: string
}

export const Component = (props: Props) => {
    const [userIcon] = React.useMemo(() => {
        if (props?.address) {
            return [
                <Address>
                    {props.address.slice(0, 6)}...
                    {props.address.slice(-4)}
                </Address>
            ]
        } else {
            return [null]
        }
    }, [props?.address])
    return (
        <Wrap>
            <HeaderContents>
                <Logo src={logo} height="32px" />
            </HeaderContents>
            <HeaderContents>{userIcon}</HeaderContents>
        </Wrap>
    )
}

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------

const Wrap = styled('header')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 16px 24px;
`
const HeaderContents = styled('div')`
    display: flex;
`
const Logo = styled('img')``

const Address = styled('div')`
    background-color: white;
    border-radius: 10px;
    font-size: 16px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
    padding: 10px;
    color: ${props => props.theme.palette.text.secondary};
`
