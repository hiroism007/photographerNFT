import * as React from 'react'
import Red from '~/assets/red-pill.jpg'
import Blue from '~/assets/blue-pill.jpg'
import * as Layout from '~/layout'
import { styled } from '@mui/material/styles'
import { Container, Box, Backdrop,IconButton,CircularProgress } from '@mui/material'

type Props = {
    address: string | undefined
    supply: string
    onClick: (type: 'RED' | 'BLUE') => () => void
    loading: boolean
}

export const Component = (props: Props) => {
    return (
        <Layout.Main address={props.address}>
            <WhiteBox maxWidth={'sm'}>
                <ContainerItems m={2}>
                    <StyledBackDrop open={props.loading}>
                        <CircularProgress color="inherit" />
                    </StyledBackDrop>
                    <Title>CHOOSE YOUR REALITY</Title>
                    <Box justifyContent={'center'} display="flex">
                        <Box m={4} onClick={props.onClick('RED')}>
                            <IconButton>
                                <Logo src={Red} height="200px" />
                            </IconButton>
                        </Box>
                        <Box m={4} onClick={props.onClick('BLUE')}>
                            <IconButton>
                                <Logo src={Blue} height="200px" />
                            </IconButton>
                        </Box>
                    </Box>
                    <SubTitle>{props.supply}/10000</SubTitle>

                    <Sub2Title>
                        Most of them are free mint. Some of them are not
                    </Sub2Title>
                    <Sub2Title>An experimental project</Sub2Title>
                    <Sub2Title>
                        <a
                            href="https://etherscan.io/address/0x1f1767e1bbfdf54e1443bd41ffabe41e0953ac6d"
                            target="_blank"
                        >
                            Contract
                        </a>
                    </Sub2Title>
                    <Sub2Title>
                        <a
                            href="https://opensea.io/collection/chooseyourreality"
                            target="_blank"
                        >
                            OpenSea
                        </a>
                    </Sub2Title>
                </ContainerItems>
            </WhiteBox>
        </Layout.Main>
    )
}

const WhiteBox = styled(Container)`
    padding: 25px;
    background-color: white;
    border-radius: 30px;
`

const ContainerItems = styled(Box)``

const StyledBackDrop = styled(Backdrop)`
    z-index: 1001;
    color: '#fff'; 
`

const Title = styled('div')`
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 20px;
    text-align: center;
    font-family: Libre Baskerville, serif;
    color: rgb(121, 121, 121);
`

const SubTitle = styled('div')`
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    margin-top: 20px;
    margin-bottom: 200px;
    text-align: center;
    font-family: Libre Baskerville, serif;
    color: rgb(121, 121, 121);
`

const Sub2Title = styled('div')`
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    margin-top: 14px;
    text-align: center;
    font-family: Libre Baskerville, serif;
    color: rgb(121, 121, 121);
`

const Logo = styled('img')``
