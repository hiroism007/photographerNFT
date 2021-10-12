import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as History from 'history'
import * as ConnectedRouter from 'connected-react-router'
import * as Main from '~/pages/Main'

type Props = {
    history: History.History
}

export const Route = (props: Props): React.ReactElement => (
    <ConnectedRouter.ConnectedRouter history={props.history}>
        <ReactRouter.Switch>
            <ReactRouter.Route exact path="/">
                <Main.Component />
            </ReactRouter.Route>
        </ReactRouter.Switch>
    </ConnectedRouter.ConnectedRouter>
)
export default Route
