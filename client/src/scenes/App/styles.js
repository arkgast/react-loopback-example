export default () => {
  return {
    '@global': {
      'html, body': {
        height: '100%',
        margin: 0
      },
      'body #app': {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      },
      a: {
        textDecoration: 'none'
      }
    },
    fullScreen: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    pageContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column'
    }
  }
}
