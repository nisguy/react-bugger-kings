import React from 'react';

import Aux from '../../hoc/Auxilliary';
import classes from './Layout.css';

const layout = (props) =>(
    <Aux>
        <div>Toolbar, Side-drawer, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;