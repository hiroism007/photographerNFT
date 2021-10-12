import * as ReduxToolkit from '@reduxjs/toolkit'
import * as History from 'history'
import * as Reducer from './reducer'

export const createStore = (history: History.History) => {
    const { reducer } = Reducer.createReducer(history)
    return ReduxToolkit.configureStore({
        reducer
    })
}

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>

export type AsyncThunkConfig<RejectValue = unknown> = {
    state: RootState
    dispatch: ReturnType<typeof createStore>['dispatch']
    // extra: Middleware.ExtraArgument
    rejectValue: RejectValue
}
