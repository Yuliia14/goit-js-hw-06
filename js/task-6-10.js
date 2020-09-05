// Write code under this line
const getSortedUniqueSkills = (array) => array.reduce((acc, {skills}) => [...acc, ...skills], [])
.filter((skills, index, array) => array.indexOf(skills) === index).sort();

// console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */