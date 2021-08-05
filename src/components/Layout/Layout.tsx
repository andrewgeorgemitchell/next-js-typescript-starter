import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
});

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>Layout</h3>
    </div>
  );
};

export default Layout;
