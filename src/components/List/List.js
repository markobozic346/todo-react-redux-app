import React from 'react'
import { Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Title from './Title'
import Item from './Item'
import AddItem from '../Input/InputContainer'
const useStyle = makeStyles({
    list: {
        minWidth: '300px',
        width: '300px',
        backgroundColor: '#EBECF0',
        margin: '10px',
        paddingBottom: '10px',
        height: 'fit-content',
    },
})

const List = ({listTitle, listItems}) => {
    const classes = useStyle();
    return (
        
        <Paper elevation={3} className={classes.list}>
            
              <Title listTitle={listTitle}/>
              
              {listItems && listItems.map((item)=>(
                <Item key={item.itemID} itemText={item.itemText}/> 
              ))} 
            
            <AddItem type='item'/> 
        </Paper>
            
      
    )
}

export default List
