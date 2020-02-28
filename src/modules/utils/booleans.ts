export const negate = <T>(f: (value: T) => any) => (value: T) => !f(value)