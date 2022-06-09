import React, { useState } from 'react';
import { connect } from 'react-redux';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {
  actionAddTodo
} from '../../redux/todo';

const Container = styled('div')({
  display: 'flex',
  margin: '30px 0',
  justifyContent: 'space-between'
});

const StyledButton = styled(Button)(() => ({
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

const TodoForm = ({
  actionAddTodo
}) => {
  const [formValue, setFormValue] = useState({
    todo: '',
    date: new Date()
  });

  const handleFormChange = (name, value) => {
    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const resetForm = () => {
    setFormValue({
      todo: '',
      date: new Date()
    })
  }

  const handleAdd = () => {
    actionAddTodo(formValue);
    resetForm();
  };

  return (
    <Container>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          label="Title"
          id="title"
          value={formValue.todo}
          onChange={(e) => handleFormChange('todo', e.target.value)}
        />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          id="datetime-local"
          label="Date"
          type="datetime-local"
          // defaultValue="2022-06-10T10:30"
          value={formValue.date}
          sx={{ width: 250 }}
          onChange={(e) => handleFormChange('date', e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <StyledButton
        onClick={handleAdd}
      >
        Add
      </StyledButton>
    </Container>
  );
};

export default connect(
  (state) => ({}),
  {
    actionAddTodo
  }
)(TodoForm);

