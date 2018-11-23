/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    return emails.reduce((acc, email) => {
        const [ first, second ] = email.split('@');
        const firstSan = first.split('+')[0].replace(/\./g, '');
        return acc.add(`${firstSan}@${second}`);
    }, new Set()).size;
};
