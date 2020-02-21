export type KeyValue = {
  [key: string]: string
}

export interface Scale {
  base: number
  scale: number[]
}

export interface ScaleConfig {
  base: number
  scale: number[] | string
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
  colors?: KeyValue | string
  spaces?: ScaleConfig
  fontSizes?: ScaleConfig
  sizes?: ScaleConfig
}

export interface ColorPreset {
  [key: string]: KeyValue
}

export interface ScalePreset {
  [key: string]: number[]
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
