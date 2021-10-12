declare module '*.svg' {
    const content: any
    export default content
}

declare module '*.jpg' {
    const content: any
    export default content
}

declare const process: {
    env: {
        V1_CONTRACT_ADDRESS: string
        V2_CONTRACT_ADDRESS: string
    }
}

declare module 'url' {
    interface Url {
        search: string | null | undefined
    }
}
