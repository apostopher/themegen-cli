export type KeyValue = {
  [key: string]: string
}

export interface ColorTheme {
  name: string
  colors: KeyValue
}

export interface Scale {
  name: string
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

export interface Config extends Options {
  colors?: ColorTheme[]
  spaces?: Scale[]
  fontSizes?: Scale[]
}

export type Presets = {
  [key: string]: Config
}
