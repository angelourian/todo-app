import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { styled as styledMaterial } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import styled from '@emotion/styled';

import LoadingIcon from '../../assets/gif/loading_icon.gif';
import {
  actionFetchTodo,
  actionUpdateTodo
} from '../../redux/todo';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

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

const TodoPage = ({
  isFetching,
  todo,
  actionFetchTodo,
  actionUpdateTodo
}) => {
  
  useEffect(() => {
    actionFetchTodo();
  }, [actionFetchTodo]);
  
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
        <h2>Todo List</h2>
        <TodoForm />
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
