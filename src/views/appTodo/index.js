import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { styled as styledMaterial } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import styled from '@emotion/styled';

import LoadingIcon from '../../assets/gif/loading_icon.gif';
import {
  actionFetchTodo,
  actionUpdateTodo
} from '../../redux/todo';

const Container = styled('div')({
  backgroundColor: '#fff',
  width: '100%',
  height: 'calc(100vh - 10px)',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  flex: '1 auto'
});

const LoadingContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  background: '#fff',
  zIndex: 999
});

const StyledTableContainer = styled('div')({
  margin: '30px 10%'
});

const StyledTableCell = styledMaterial(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

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

const TodoPage = ({
  isFetching,
  todo,
  actionFetchTodo,
  actionUpdateTodo
}) => {
  
  useEffect(() => {
    actionFetchTodo();
  }, []);
  
  const updateStatus = (data) => {
    actionUpdateTodo({
      ...data,
      status: 'DONE'
    });
  };

  return (
    <Container>   
      {
        isFetching && (
          <LoadingContainer>
            <img
              src={LoadingIcon}
              alt="Loading Icon"
            />
          </LoadingContainer>
        )
      }
      <StyledTableContainer>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell><Checkbox checked disabled/></StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                !isFetching && todo && todo.length !== 0 && todo.map(data => (
                  <TodoItem
                    key={`todo${data.id}`}
                    item={data}
                    onItemClick={updateStatus}
                  />
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </StyledTableContainer>
    </Container>
  );
};

export default connect(
  (state) => ({
    todo: state.appTodo.todo,
    isFetching: state.appTodo.isFetching
  }),
  {
    actionFetchTodo,
    actionUpdateTodo
  }
)(TodoPage);
