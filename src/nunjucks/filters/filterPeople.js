function filterPeople(people, locale, ids) {
  const normalizedIds = [].concat(ids);

  return people.filter((item) =>
    normalizedIds.some((id) => item.filePathStem.endsWith(`${id}/${locale}`)),
  );
}

module.exports = { filterPeople };
