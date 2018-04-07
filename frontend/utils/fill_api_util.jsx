// export const fetchFills = () => (
//   $.ajax({
//     url: '/api/fills',
//     method: 'GET'
//   })
// );
//
// export const fetchFill = (id) => (
//   $.ajax({
//     url: `/api/fills/${id}`,
//     method: 'GET'
//   })
// );

export const createFill = (fill) => (
  $.ajax({
    url: `/api/fills`,
    method: 'POST',
    data: { fill } 
  })
);
