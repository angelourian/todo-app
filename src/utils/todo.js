// To sort all todo list by date
export const sortTodoList = (arrayObj) => {
   return arrayObj.sort(function(a, b) {
   var c = new Date(a.date);
   var d = new Date(b.date);
   return c-d;
   });
};