// Write code under this line
const getNamesSortedByFriendsCount = (array) =>
  [...array]
    .sort((user1, user2) => user1["friends"].length - user2["friends"].length)
    .map(({ name }) => name);

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
