const getBookings = (state) => {
  const sortedBookings = [...state.bookings];
  sortedBookings.sort(
    (a, b) => new Date(a.date).getMonth() - new Date(b.date).getMonth()
  );
  return sortedBookings;
};

export { getBookings };
