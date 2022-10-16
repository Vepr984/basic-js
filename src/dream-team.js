const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str = ''
  if (members === null || typeof members !== "object") {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
      if (typeof members[i] !== 'string') {
        continue;
    }
    str = str.concat(members[i][0])
  }  
  let arr_str = str.split('')
  let sort_arr = arr_str.sort();
  str = sort_arr.join('')
  return str.toUpperCase();
}

module.exports = {
  createDreamTeam
};
