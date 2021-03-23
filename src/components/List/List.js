import React from 'react'
import { Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Title from './Title'
const useStyle = makeStyles({
    list: {
        width: '25%',
        backgroundColor: '#f5f5f5',
        margin: '10px'
    },
})



const List = () => {
    const classes = useStyle();
    return (
        <Paper elevation={3} className={classes.list}>
           <Title/>
        </Paper>
            
      
    )
}

export default List
