import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxx';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    let checkedPropsOpen = (window.innerWidth < 500) && (props.open);
    if (checkedPropsOpen) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={checkedPropsOpen} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo} >
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;