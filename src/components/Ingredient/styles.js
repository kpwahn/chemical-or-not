const styles = theme => {
  return {
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifySelf: 'center',
      maxWidth: 300,
      minWidth: 300,
      [theme.breakpoints.up('sm')]: {
        maxWidth: 270,
        minWidth: 270
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: 300,
        minWidth: 300
      }
    },
    cardActions: {
      marginTop: 'auto'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
  }
};

export default styles;
