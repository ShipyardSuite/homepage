export const copyrightYear = (startingYear = 2020, currentYear = 2020) =>
{
    return startingYear === currentYear ? currentYear.toString() : `${startingYear} - ${currentYear}`;
};
