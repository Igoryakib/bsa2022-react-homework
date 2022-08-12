const getFilter = (state) => state.trips.filter;
const getLevel = (state) => state.trips.level;
const getDuration = (state) => state.trips.duration;
const getTrips = (state) => {
  const filter = getFilter(state);
  const level = getLevel(state);
  const duration = getDuration(state);
  if (filter) {
    return state.trips.tripsArray.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );
  }
  if (level) {
    return state.trips.tripsArray.filter((item) => item.level === level);
  }
  if (duration) {
    if (duration === "0_x_5") {
      return state.trips.tripsArray.filter((item) => item.duration < 5);
    }
    if (duration === "5_x_10") {
      return state.trips.tripsArray.filter((item) => item.duration < 10);
    }
    if (duration === "10_x") {
      return state.trips.tripsArray.filter((item) => item.duration >= 10);
    }
  }
  if (filter === "" || duration === "" || level === "") {
    return state.trips.tripsArray;
  }
};

export { getTrips, getFilter, getLevel, getDuration };
