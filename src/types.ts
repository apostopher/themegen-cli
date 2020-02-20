export type KeyValue = {
  [key: string]: string
}

export interface Scale {
  base: number
  values: number[]
}

export interface GeneratorOptions {
  rem?: boolean
}
export interface Options extends GeneratorOptions {
  extends?: string
  typescript?: boolean
}

export interface ThemeConfig extends Options {
  name?: string
  colors?: KeyValue
  spaces?: Scale
  fontSizes?: Scale
}

export interface Presets {
  [key: string]: ThemeConfig
}

export interface Args {
  name: string
  config: string
}

export interface Flags {
  typescript?: boolean
  rem?: boolean
  extends?: boolean
}
