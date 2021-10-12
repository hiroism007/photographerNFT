import * as React from 'react'
import { ethers } from 'ethers'
import * as reactRedux from 'react-redux'
import * as ToastActions from '~/store/ui/toast'
import * as Contract from '~/modules/contracts'

const ADDRESS = '0x1F1767E1bbFDf54e1443bD41FFabE41e0953aC6d'

declare global {
    interface Window {
        ethereum: any | undefined // metamask injects global ethereum
    }
}

type Provider = ethers.providers.Web3Provider
type Network = ethers.providers.Network
type Props = {
    children: React.ReactNode
}
type MetaMaskContextType = {
    connect: () => Promise<void>
    connected: boolean
    provider: Provider | null
    signer: ethers.Signer | null
    network: Network | null
    contract: Contract.LimitedPhotographies | null
    address: string | null
}

export const MetaMaskContext = React.createContext<MetaMaskContextType>({
    connect: async () => {},
    provider: null,
    signer: null,
    network: null,
    contract: null,
    address: null,
    connected: false
})

export const MetaMaskProvider = ({ children }: Props) => {
    const dispatch = reactRedux.useDispatch()

    const [connected, setConnected] = React.useState<boolean>(false)
    const [provider, setProvider] = React.useState<Provider | null>(null)
    const [signer, setSigner] = React.useState<ethers.Signer | null>(null)
    const [network, setNetwork] = React.useState<Network | null>(null)
    const [contract, setContract] =
        React.useState<Contract.LimitedPhotographies | null>(null)
    const [address, setAddress] = React.useState<string | null>(null)

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
        const contract = await Contract.LimitedPhotographies__factory.connect(
            ADDRESS,
            eSigner
        )
        // set states
        setAddress(address)
        setProvider(eProvider)
        setNetwork(eNetwork)
        setSigner(eSigner)
        setContract(contract)
        setConnected(true)
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
        if (!contract) return
        if (!address) return
        const filter = contract.filters.Redeemed(address, null)
        contract.on(filter, (from, tokenId) => {
            dispatch(
                ToastActions.append({
                    variant: 'success',
                    label: 'Redeemed!',
                    text: `transaction succeeded!\n 
                from:${from} \n
                tokenId: ${tokenId.toString()}
                `
                })
            )
        })
    })

    return (
        <MetaMaskContext.Provider
            value={{
                address,
                network,
                provider,
                signer,
                contract,
                connected,
                connect
            }}
        >
            {children}
        </MetaMaskContext.Provider>
    )
}
