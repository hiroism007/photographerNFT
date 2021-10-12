import * as React from 'react'
import * as reactRedux from 'react-redux'
import * as MainTemplate from '~/templates/Main'
import * as SignInTemplate from '~/templates/SignIn'
import { MetaMaskContext } from '~/provider/MetaMask'

export const Component = () => {
    const dispatch = reactRedux.useDispatch()
    const { connected, contract, address, connect } =
        React.useContext(MetaMaskContext)

    const [loading, _setLoading] = React.useState<boolean>(false)
    const [supply, setSupply] = React.useState<string>('0')

    React.useEffect(() => {
        if (contract) {
            contract.totalSupply().then(r => {
                setSupply(r.toString())
            })
        }
    }, [contract])

    if (!connected) {
        return (
            <SignInTemplate.Component
                onClickConnect={connect}
                supply={supply}
            />
        )
    } else {
        return (
            <MainTemplate.Component
                address={address}
                supply={supply}
                loading={loading || false}
            />
        )
    }
}
