import * as React from 'react'
import { styled } from '@mui/material/styles'
import * as Transition from 'react-transition-group'
import { AlertTitle, Alert, Snackbar } from '@mui/material'
import * as entity from '~/entity'
type Props = {
    toasts: entity.Toast[]
    onClickClose: (id: string) => void
}

export const Component = (props: Props) => {
    return (
        <Wrap>
            {props.toasts.map(toast => (
                <Transition.CSSTransition
                    timeout={3000}
                    key={toast.id}
                    classNames={'toast'}
                >
                    <Snackbar
                        open
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <Alert
                            severity={toast.variant}
                            color={toast.variant}
                            onClose={() => {
                                props.onClickClose(toast.id)
                            }}
                        >
                            <AlertTitle>{toast.label}</AlertTitle>
                            {toast.text}
                        </Alert>
                    </Snackbar>
                </Transition.CSSTransition>
            ))}
        </Wrap>
    )
}

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------

const Wrap = styled(Transition.TransitionGroup)`
    flex-direction: column-reverse;
    align-items: flex-start;
    position: fixed;
    top: 24px;
    right: 24px;
    background-color: transparent;
    z-index: 1000;

    & {
        .toast-enter {
            opacity: 0;
        }
        .toast-enter-active {
            opacity: 1;
            transition: opacity 0.3s;
        }
        .toast-exit {
            opacity: 1;
        }
        .toast-exit-active {
            opacity: 0;
            transition: opacity 0.3s;
        }
    }

    & > div + div {
        margin-bottom: 12px;
    }
`
