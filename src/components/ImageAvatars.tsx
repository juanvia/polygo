import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(
    createStyles({
        avatar: {
            margin: 10,
        },
        bigAvatar: {
            margin: 10,
            width: 120,
            height: 120,
        },
    }),
);

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src="images/lista.jpeg" className={classes.bigAvatar} />
        </Grid>
    );
}