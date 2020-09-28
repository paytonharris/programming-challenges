const splitStringInFours = text => {
  console.log('text');
  let results = [];

  for (let i = 0; i < text.length; i = i + 4) {
    results.push(text.substring(i, i + 4));
  }

  return results;
}

const convertStringsToLowerCase = stringArray => {
  return stringArray.map(s => s.toLowerCase());
}

const generateSearchTerms = (name, username) => {
  let results = [convertStringsToLowerCase(name.split(' ')), convertStringsToLowerCase(splitStringInFours(username))]

  return results.flat();
}

console.log(generateSearchTerms('John Davis', 'THEBESTuseENMAE'))