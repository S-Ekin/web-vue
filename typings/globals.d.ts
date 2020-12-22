interface NodeModule {
    hot : {
        accept(path?: string, callback?: (filePath: string) => void): void;
        data: boolean;
    }
}

interface MouseEventEl<T extends HTMLElement> extends MouseEvent {
    target: T,
    currentTarget: T
}

type anyObj<T = Record<string, unknown>> = T & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [k:string]:any
}
