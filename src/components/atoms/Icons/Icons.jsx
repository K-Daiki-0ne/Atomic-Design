import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';

export function Icon(props) {
  switch(props) {
    case 'delete':
      return ( 
        <DeleteIcon />
      );
      break;
    case 'send':
      return (
        <SendIcon />
      );
      break;
  }
}