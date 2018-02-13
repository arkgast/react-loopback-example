import Styles from 'Styles/base'

export default (theme) => {
  const styles = Styles(theme)
  return {
    page: { ...styles.page }
  }
}
