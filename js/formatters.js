// Utility functions for formatting data

function toDbFormat(str) {
    return str.toLowerCase().replace(/ /g, '-');
}

function getYearLabel(yearValue) {
    const yearMap = {
        freshman: 'Freshman',
        sophomore: 'Sophomore',
        junior: 'Junior',
        senior: 'Senior',
    };
    return yearMap[yearValue] || yearValue;
}

function getClubLabel(clubValue) {
    const clubMap = {
        codeblack: 'CodeBlack',
        colorstack: 'ColorStack',
        'black-engineers-society': 'Black Engineers Society',
    };
    return clubMap[clubValue] || clubValue;
}

function getMajorLabel(majorValue) {
    const majorMap = {
        'computer-science': 'Computer Science',
        'electrical-engineering': 'Electrical Engineering',
        'computer-engineering': 'Computer Engineering',
        'information-science': 'Information Science',
        'math': 'Math',
        'mechanical-engineering': 'Mechanical Engineering',
        'civil-engineering': 'Civil Engineering',
        'fire-protection-engineering': 'Fire Protection Engineering',
        'aerospace-engineering': 'Aerospace Engineering',
        'other': 'Other',
    };
    return majorMap[majorValue] || majorValue;
}
