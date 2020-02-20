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

export interface Options {
  typescript?: boolean
  rem?: boolean
}

export interface Config extends Options {
  colors?: ColorTheme[]
  spaces?: Scale[]
  fontSizes?: Scale[]
}

export type Presets = {
  default: Config
}

export type PresetNames = keyof Presets
