function filterPeople(people, locale, id) {
  return people.filter((item) => item.filePathStem.endsWith(`${id}/${locale}`));
}

module.exports = { filterPeople };
