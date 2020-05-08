const { ADMIN } = require('../../common/constants/user_roles');

const isTimetableEditable = ({ userRoles }) => {
  return userRoles.includes(ADMIN);
};

module.exports = {
  isTimetableEditable,
};
