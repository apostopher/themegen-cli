export function generateFlexboxStyles() {
  return {
    df: { display: 'flex' },
    flex: { flex: 1 },
    fdc: { flexDirection: 'column' },
    fdr: { flexDirection: 'row' },
    fww: { flexWrap: 'wrap' },
    fwnw: { flexWrap: 'nowrap' },
    fdcr: { flexDirection: 'column-reverse' },
    fdrr: { flexDirection: 'row-reverse' },
    aifs: { alignItems: 'flex-start' },
    aife: { alignItems: 'flex-end' },
    aic: { alignItems: 'center' },
    aib: { alignItems: 'baseline' },
    ais: { alignItems: 'stretch' },
    asfs: { alignSelf: 'flex-start' },
    asfe: { alignSelf: 'flex-end' },
    asc: { alignSelf: 'center' },
    asb: { alignSelf: 'baseline' },
    ass: { alignSelf: 'stretch' },
    jcfs: { justifyContent: 'flex-start' },
    jcfe: { justifyContent: 'flex-end' },
    jcc: { justifyContent: 'center' },
    jcsb: { justifyContent: 'space-between' },
    jcsa: { justifyContent: 'space-around' },
  }
}