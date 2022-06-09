import {
  TODO_PENDING,
  TODO_DONE
} from '../constants/status';

const toDoData = [
  { id: 0, todo: 'Meeting with General Manager', date: new Date(), status: TODO_PENDING},
  { id: 1, todo: 'Will take Technical Exam', date: new Date(), status: TODO_DONE},
  { id: 2, todo: 'Will submit CV', date: new Date('March 15, 2022 06:00 PM'), status: TODO_PENDING},
  { id: 3, todo: 'Clean the house', date: new Date(), status: TODO_PENDING},
  { id: 4, todo: 'Appointment with doctor', date: new Date(), status: TODO_PENDING},
  { id: 5, todo: 'Will watch Business Proposal', date: new Date(), status: TODO_PENDING}
];

export default toDoData;
