export const sortList = (list, sort) => {
  let sortedList = [...list];
  sortedList = sortedList.slice().sort((a, b) => {
    // Firstly, sort by points in selected order
    const asc = sort === 'ASC' ? 1 : -1;
    if (a.point < b.point) {
      return asc;
    }
    if (a.point > b.point) {
      return -asc;
    }
    // If votes are same, sort by updateDate
    if (a.updateDate > b.updateDate) {
      return -1;
    }
    if (a.updateDate < b.updateDate) {
      return 1;
    }

    return null;
  });

  return sortedList;
}

export const getCurrentDate = () => (new Date()).getTime().toString();