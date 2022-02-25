const checkName = name => {
  if (name.length >= 1 && name.length <= 5) return true;
  return false;
};

const checkContents = content => {
  if (content.length >= 1 && content.length <= 200) return true;
  return false;
};

export { checkName, checkContents };
