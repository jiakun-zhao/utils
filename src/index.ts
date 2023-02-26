export * from './io'

export function repeat<T>(count: number, fn?: (idx: number) => T) {
    const _fn = fn ?? ((i: number) => i)
    return new Array(count).fill(0).map((_, idx) => _fn(idx))
}
