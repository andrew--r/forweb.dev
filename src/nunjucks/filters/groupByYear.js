function groupByYear(pages) {
  const pagesByYear = new Map();

  for (const page of pages) {
    const year = page.date.getFullYear();
    const sameYearPages = pagesByYear.get(year);

    pagesByYear.set(year, (sameYearPages || []).concat(page));
  }

  const sortedYears = Array.from(pagesByYear.entries()).sort(
    ([yearA], [yearB]) => yearB - yearA,
  );

  sortedYears.forEach(([, pages]) => {
    pages.sort((a, b) => b.date - a.date);
  });

  return sortedYears;
}

module.exports = { groupByYear };
