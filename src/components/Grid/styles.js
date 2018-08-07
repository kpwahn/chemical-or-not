const styles = theme => {
  return {
    Grid: {
      display: 'grid',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      gridTemplateColumns: '1fr',
      [theme.breakpoints.up('sm')]: {
          gridTemplateColumns: '1fr 1fr'
      },
      [theme.breakpoints.up('md')]: {
          gridTemplateColumns: '1fr 1fr 1fr'
      },
      [theme.breakpoints.up('xl')]: {
          gridTemplateColumns: '1fr 1fr 1fr 1fr'
      },
      padding: '15px'
    }
  }
};

export default styles;
