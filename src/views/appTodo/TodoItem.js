import React from 'react';
import moment from 'moment';

import { styled as styledMaterial } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const StyledButton = styledMaterial(Button)(() => ({
  backgroundColor: '#0b6bf2',
  color: '#fff',
  minWidth: 200,
  height: 50,
  fontSize: 15,
  borderRadius: 5,
  '&:hover': {
    backgroundColor: '#0243eb'
  },
  '&:disabled': {
    backgroundColor: '#dbe9fd',
    color: '#fff',
  }
}));

const StyledTableCell = styledMaterial(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styledMaterial(TableRow)(({ theme, disabled }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': {
    cursor: disabled ? 'auto' : 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  '& th': {
    opacity: disabled ? 0.5 : 1,
  },
  '& td:not(:last-child)': {
    opacity: disabled ? 0.5 : 1,
  }
}));

const TodoItem = ({ item, onItemClick }) => (
  <StyledTableRow key={item.name} disabled={item.status === 'DONE'} onClick={() => onItemClick(item)}>
    <StyledTableCell><Checkbox checked={item.status === 'DONE'} disabled={item.status === 'DONE'} /></StyledTableCell>
    <StyledTableCell  component="th" scope="row">{moment(item.date).format("YYYY-MM-DD LT")}</StyledTableCell>
    <StyledTableCell>{item.todo}</StyledTableCell>
    <StyledTableCell align="center">
      <StyledButton variant="contained" disabled={item.status === 'DONE'} onClick={() => onItemClick(item)}>
        {
          item.status
        }
      </StyledButton>
    </StyledTableCell>
  </StyledTableRow>
);

export default TodoItem;
