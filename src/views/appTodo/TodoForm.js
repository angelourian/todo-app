import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import isEmpty from '../../utils/isEmpty';
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
  const [showError, setShowError] = useState('');

  const handleFormChange = (name, value) => {
    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const resetForm = () => {
    setFormValue({
      todo: '',
      date: moment(new Date()).format("YYYY-MM-DD LT")
    })
    setShowError('');
  }

  const handleAdd = () => {
    if (isEmpty(formValue.todo)) {
      setShowError('title');
    } else if (isEmpty(formValue.date)) {
      setShowError('date');
    } else {
      actionAddTodo(formValue);
      resetForm();
    }
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
          error={showError === 'title'}
          fullWidth
          label="Title"
          id="title"
          placeholder="Enter Title"
          value={formValue.todo}
          onChange={(e) => handleFormChange('todo', e.target.value)}
          helperText={(showError === 'title') ? 'This field is required' : ''}
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
          defaultValue={String(moment(new Date()).format("YYYY-MM-DDThh:mm"))}
          sx={{ width: 250 }}
          onChange={(e) => handleFormChange('date', e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          error={showError === 'date'}
          helperText={(showError === 'date') ? 'This field is required' : ''}
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
  () => ({}),
  {
    actionAddTodo
  }
)(TodoForm);

