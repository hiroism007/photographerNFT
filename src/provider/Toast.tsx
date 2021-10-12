import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as store from '~/store'
import * as ToastList from '~/components/ToastList'
import * as toastActions from '~/store/ui/toast'

type Props = {
    children: React.ReactNode
}

export const Provider = ({ children }: Props) => {
    const toasts = ReactRedux.useSelector(
        (state: store.RootState) => state.ui.toast.list
    )
    const dispatch = ReactRedux.useDispatch()
    const onClickClose = React.useCallback(
        (id: string) => {
            dispatch(toastActions.remove(id))
        },
        [dispatch]
    )
    return (
        <>
            <ToastList.Component toasts={toasts} onClickClose={onClickClose} />
            {children}
        </>
    )
}
