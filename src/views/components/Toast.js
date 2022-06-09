import styled from '@emotion/styled';
import mq from '../../styles/mediaQueries';

const Toast = styled('div')(
  mq({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: [247, 247, 247],
    height: [52, 52, 52],
    borderRadius: 26,
    padding: ['17px 35px'],
    fontSize: [14],
    whiteSpace: 'wrap',
    boxSizing: 'border-box'
  }),
  ({ theme }) => ({
    backgroundColor: theme.toastBgColor,
    color: theme.toastColor
  })
);

export default Toast;
