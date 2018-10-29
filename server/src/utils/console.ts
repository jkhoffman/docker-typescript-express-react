// See: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

export const bright = (s: string): string => {
  return `\x1b[1m${s}\x1b[0m`
}

export const yellow = (s: string): string => {
  return `\x1b[33m${s}\x1b[0m`
}
