import * as React from 'react'
import * as Layout from '../layout'
import * as Button from '../components/Button'
import MetaMaskIcon from '../assets/metamask-fox.svg'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

type Props = {
    onClickConnect: () => void
    supply: string
}

export const Component = (props: Props) => {
    return (
        <Layout.Main>
            <WhiteBox container direction="column" alignItems="center">
                <ContainerItems item>
                    <Title>LIMITED COLLECTION</Title>
                    <TitleBig>空</TitleBig>
                    <ButtonWrapper>
                        <Button.Component
                            onClick={props.onClickConnect}
                            text={'Connect MetaMask'}
                            icon={MetaMaskIcon}
                            color={'gradient'}
                        />
                    </ButtonWrapper>
                    <Sub2Title>An experimental project</Sub2Title>
                    <Sub2Title>Only 42 editions are available</Sub2Title>
                    <Sub2Title>
                        Only holder can request original artworks
                    </Sub2Title>
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

const WhiteBox = styled(Grid)`
    padding: 25px;
    background-color: white;
    border-radius: 30px;
    justify-content: center;
`

const ContainerItems = styled(Grid)``

const Title = styled('div')`
    font-weight: bold;
    font-size: 34px;
    line-height: 34px;
    margin-bottom: 142px;
    text-align: center;
    font-family: Libre Baskerville, serif;
    color: rgb(121, 121, 121);
`

const TitleBig = styled('div')`
    font-weight: bold;
    font-size: 72px;
    line-height: 34px;
    margin-bottom: 142px;
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

const ButtonWrapper = styled('div')`
    text-align: center;
    padding-top: 20px;
    margin-bottom: 200px;
`
