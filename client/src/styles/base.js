export default (theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    width: `calc(100% - ${theme.spacing.unit * 4}px)`
  }
})
