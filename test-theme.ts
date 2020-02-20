export const flexbox = {
  "df": {
    "display": "flex"
  },
  "flex": {
    "flex": 1
  },
  "fdc": {
    "flexDirection": "column"
  },
  "fdr": {
    "flexDirection": "row"
  },
  "fww": {
    "flexWrap": "wrap"
  },
  "fwnw": {
    "flexWrap": "nowrap"
  },
  "fdcr": {
    "flexDirection": "column-reverse"
  },
  "fdrr": {
    "flexDirection": "row-reverse"
  },
  "aifs": {
    "alignItems": "flex-start"
  },
  "aife": {
    "alignItems": "flex-end"
  },
  "aic": {
    "alignItems": "center"
  },
  "aib": {
    "alignItems": "baseline"
  },
  "ais": {
    "alignItems": "stretch"
  },
  "asfs": {
    "alignSelf": "flex-start"
  },
  "asfe": {
    "alignSelf": "flex-end"
  },
  "asc": {
    "alignSelf": "center"
  },
  "asb": {
    "alignSelf": "baseline"
  },
  "ass": {
    "alignSelf": "stretch"
  },
  "jcfs": {
    "justifyContent": "flex-start"
  },
  "jcfe": {
    "justifyContent": "flex-end"
  },
  "jcc": {
    "justifyContent": "center"
  },
  "jcsb": {
    "justifyContent": "space-between"
  },
  "jcsa": {
    "justifyContent": "space-around"
  }
} as const
export type Flexbox = typeof flexbox

export const themeColors = {
  "primary": "#2F80ED",
  "primaryText": {
    "color": "#2F80ED"
  },
  "primaryFill": {
    "backgroundColor": "#2F80ED"
  },
  "primaryStroke": {
    "borderColor": "#2F80ED"
  }
} as const
export type ThemeColors = typeof themeColors

export const themeSpaces = {
  "pa0": {
    "paddingLeft": "1rem",
    "paddingTop": "1rem",
    "paddingRight": "1rem",
    "paddingBottom": "1rem"
  },
  "ph0": {
    "paddingLeft": "1rem",
    "paddingRight": "1rem"
  },
  "pv0": {
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
  },
  "pl0": {
    "paddingLeft": "1rem"
  },
  "pt0": {
    "paddingTop": "1rem"
  },
  "pr0": {
    "paddingRight": "1rem"
  },
  "pb0": {
    "paddingBottom": "1rem"
  },
  "ma0": {
    "marginLeft": "1rem",
    "marginTop": "1rem",
    "marginRight": "1rem",
    "marginBottom": "1rem"
  },
  "mh0": {
    "marginLeft": "1rem",
    "marginRight": "1rem"
  },
  "mv0": {
    "marginTop": "1rem",
    "marginBottom": "1rem"
  },
  "ml0": {
    "marginLeft": "1rem"
  },
  "mt0": {
    "marginTop": "1rem"
  },
  "mr0": {
    "marginRight": "1rem"
  },
  "mb0": {
    "marginBottom": "1rem"
  }
} as const
export type ThemeSpaces = typeof themeSpaces

export const themeFontSizes = {
  "f0": "1rem",
  "fs0": {
    "fontSize": "1rem"
  }
} as const
export type ThemeFontSizes = typeof themeFontSizes

export const testTheme = {...flexbox, ...themeColors, ...themeSpaces, ...themeFontSizes} as const
export type TestTheme = typeof testTheme