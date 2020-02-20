export const flexbox = {
  df: {
    display: 'flex',
  },
  flex: {
    flex: 1,
  },
  fdc: {
    flexDirection: 'column',
  },
  fdr: {
    flexDirection: 'row',
  },
  fww: {
    flexWrap: 'wrap',
  },
  fwnw: {
    flexWrap: 'nowrap',
  },
  fdcr: {
    flexDirection: 'column-reverse',
  },
  fdrr: {
    flexDirection: 'row-reverse',
  },
  aifs: {
    alignItems: 'flex-start',
  },
  aife: {
    alignItems: 'flex-end',
  },
  aic: {
    alignItems: 'center',
  },
  aib: {
    alignItems: 'baseline',
  },
  ais: {
    alignItems: 'stretch',
  },
  asfs: {
    alignSelf: 'flex-start',
  },
  asfe: {
    alignSelf: 'flex-end',
  },
  asc: {
    alignSelf: 'center',
  },
  asb: {
    alignSelf: 'baseline',
  },
  ass: {
    alignSelf: 'stretch',
  },
  jcfs: {
    justifyContent: 'flex-start',
  },
  jcfe: {
    justifyContent: 'flex-end',
  },
  jcc: {
    justifyContent: 'center',
  },
  jcsb: {
    justifyContent: 'space-between',
  },
  jcsa: {
    justifyContent: 'space-around',
  },
}

export const themeSizes = {
  wp0: {
    width: '0%',
  },
  wp10: {
    width: '10%',
  },
  wp20: {
    width: '20%',
  },
  wp30: {
    width: '30%',
  },
  wp40: {
    width: '40%',
  },
  wp50: {
    width: '50%',
  },
  wp60: {
    width: '60%',
  },
  wp70: {
    width: '70%',
  },
  wp80: {
    width: '80%',
  },
  wp90: {
    width: '90%',
  },
  wp100: {
    width: '100%',
  },
  hp0: {
    height: '0%',
  },
  hp10: {
    height: '10%',
  },
  hp20: {
    height: '20%',
  },
  hp30: {
    height: '30%',
  },
  hp40: {
    height: '40%',
  },
  hp50: {
    height: '50%',
  },
  hp60: {
    height: '60%',
  },
  hp70: {
    height: '70%',
  },
  hp80: {
    height: '80%',
  },
  hp90: {
    height: '90%',
  },
  hp100: {
    height: '100%',
  },
}

export const theme = { ...flexbox, ...themeSizes }
