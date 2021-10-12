import * as React from 'react'
import * as reactRedux from 'react-redux'
import { ethers } from 'ethers'
import axios from 'axios'
import * as MainTemplate from '~/templates/Main'
import * as SignInTemplate from '~/templates/SignIn'
import * as ToastActions from '~/store/ui/toast'
import {
    ChooseYourReality,
    ChooseYourReality__factory
} from '~/modules/contracts/'

declare global {
    interface Window {
        ethereum: any | undefined // metamask injects global ethereum
    }
}

type Provider = ethers.providers.Web3Provider
type Network = ethers.providers.Network
type State = {
    connected: boolean
    address?: string
    loading?: boolean
}

const ADDRESS = '0x1F1767E1bbFDf54e1443bD41FFabE41e0953aC6d'

export const Component = () => {
    const dispatch = reactRedux.useDispatch()
    const [pageState, setState] = React.useState<State>({
        connected: false,
        loading: false
    })
    const [_provider, setProvider] = React.useState<Provider | null>(null)
    const [_signer, setSigner] = React.useState<ethers.Signer | null>(null)
    const [_network, setNetwork] = React.useState<Network | null>(null)
    const [contract, setContract] = React.useState<ChooseYourReality | null>(
        null
    )
    const [supply, setSupply] = React.useState<string>('0')

    const connect = async () => {
        try {
            await attemptConnection()
            window.ethereum.on('accountsChanged', () => {
                return attemptConnection()
            })
        } catch (error) {
            console.error(error)
            alert((error as Error).message)
        }
    }

    const attemptConnection = async () => {
        if (window.ethereum === undefined) {
            throw Error('MetaMask not found, please visit https://metamask.io/')
        }
        // make sure page refreshes when network is changed
        // https://github.com/MetaMask/metamask-extension/issues/8226
        window.ethereum.on('chainIdChanged', () => window.location.reload())
        window.ethereum.on('chainChanged', () => window.location.reload())
        window.ethereum.on('accountsChanged', () => window.location.reload())

        // get provider, address, and network
        const eProvider = new ethers.providers.Web3Provider(window.ethereum)
        await eProvider.send('eth_requestAccounts', [])
        const eSigner = await eProvider.getSigner()
        const address = await eSigner.getAddress()
        const eNetwork = await eProvider.getNetwork()
        const contract = await ChooseYourReality__factory.connect(
            ADDRESS,
            eSigner
        )
        // set page states
        setProvider(eProvider)
        setNetwork(eNetwork)
        setSigner(eSigner)
        setState({
            connected: true,
            address: address
        })
        setContract(contract)
    }

    React.useEffect(() => {
        if (window.ethereum) {
            window.ethereum
                .request({
                    method: 'eth_accounts'
                })
                .then((r: Array<any>) => {
                    if (r.length > 0) return connect()
                    return
                })
        }
    }, [])

    React.useEffect(() => {
        if (contract) {
            contract.totalSupply().then(r => {
                setSupply(r.toString())
            })
        }
    }, [contract])

    const onClickConnect = async () => {
        try {
            await connect()
        } catch (e) {
            alert(e)
        }
    }

    const onClickPill = (type: 'RED' | 'BLUE') => async () => {
        if (!contract || !pageState.address) return
        setState({
            ...pageState,
            loading: true
        })
        try {
            const res = await axios.get(
                `https://us-central1-choose-your-reality.cloudfunctions.net/app/choose?address=${pageState.address}`
            )
            const tx = await contract.redeem(
                pageState.address,
                res.data,
                type,
                {
                    value: res.data.minPrice
                }
            )

            dispatch(
                ToastActions.append({
                    variant: 'success',
                    label: 'OK',
                    text: `https://etherscan.io/tx/${tx.hash}` // FIXME
                })
            )
        } catch (e) {
            dispatch(
                ToastActions.append({
                    variant: 'error',
                    label: 'Failed',
                    text:
                        e?.error?.message ||
                        e?.response?.data?.message ||
                        'unknown error'
                })
            )
        }
        setState({
            ...pageState,
            loading: false
        })
    }
    if (!pageState.connected) {
        return (
            <SignInTemplate.Component
                onClickConnect={onClickConnect}
                supply={supply}
            />
        )
    } else {
        return (
            <MainTemplate.Component
                address={pageState?.address}
                onClick={onClickPill}
                supply={supply}
                loading={pageState?.loading || false}
            />
        )
    }
}
