const skills = [
  { id: 1, skill: 'HTML', type: 'Tech' },
  { id: 2, skill: 'CSS', type: 'Tech' },
  { id: 3, skill: ' PHP', type: 'Language' },
  { id: 4, skill: 'JavaScript', type: 'Language' },
  { id: 5, skill: 'Java', type: 'Language' },
  { id: 6, skill: 'MySQL', type: 'Database' },
  { id: 7, skill: 'Express', type: 'Framework' },
  { id: 8, skill: 'Node', type: 'Tech' },
];

module.exports = {
  getAll,
  getOne,
  create
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = skills.length + 1;
  skills.push(skill);
}