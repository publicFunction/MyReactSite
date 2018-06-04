const updateTitle = title => {
  if (title.indexOf('-') <= 0) {
    return title;
  }
  const pattern = /-/gi;
  return title.replace(pattern, ' ');
};

export default updateTitle;
