import React from 'react'
import { Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Title from './Title'
import Item from './Item'
const useStyle = makeStyles({
    list: {
        width: '25%',
        backgroundColor: '#EBECF0',
        margin: '10px',
        paddingBottom: '10px'
    },
})



const List = () => {
    const classes = useStyle();
    return (
        <Paper elevation={3} className={classes.list}>
            <Title/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </Paper>
            
      
    )
}

export default List
