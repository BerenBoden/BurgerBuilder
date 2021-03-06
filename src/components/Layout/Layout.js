import React from 'react';
import Hoc from '../../hoc/Hoc';
import classes from './Layout.css';

const Layout = props => {
    return (
        <Hoc>
            <div>Toolbar, sideDrawer, Backdrop</div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Hoc>
    )
}

export default Layout 