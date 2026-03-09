// Global authentication state
if (sessionStorage.getItem("isSignedIn") === null) {
    sessionStorage.setItem("isSignedIn", "false");
}

if (sessionStorage.getItem("currUser") === null) {
    sessionStorage.setItem("currUser", "null");
}

if (sessionStorage.getItem("leaderboardData") === null) {
    const mockLeaderboardData = [
    { username: 'alexchen', year: 'Senior', major: 'Computer Science', main_club: 'CodeBlack', num_events_attended: 45, email: 'alex_chen@terpmail.umd.edu', password: 'umdcs14' },
    { username: 'jamiewilson', year: 'Junior', major: 'Electrical Engineering', main_club: 'Black Engineer Society', num_events_attended: 38, email: 'jamie_wilson@terpmail.umd.edu', password: 'umdcs73' },
    { username: 'sarahjohnson', year: 'Senior', major: 'Computer Engineering', main_club: 'ColorStack', num_events_attended: 42, email: 'sarah_johnson@terpmail.umd.edu', password: 'umdcs58' },
    { username: 'mikedavis', year: 'Sophomore', major: 'Information Science', main_club: 'CodeBlack', num_events_attended: 22, email: 'mike_davis@terpmail.umd.edu', password: 'umdcs09' },
    { username: 'emilybrown', year: 'Freshman', major: 'Math', main_club: 'Black Engineer Society', num_events_attended: 15, email: 'emily_brown@terpmail.umd.edu', password: 'umdcs26' },
    { username: 'jameslee', year: 'Senior', major: 'Mechanical Engineering', main_club: 'CodeBlack', num_events_attended: 35, email: 'james_lee@terpmail.umd.edu', password: 'umdcs64' },
    { username: 'oliviagarcia', year: 'Junior', major: 'Computer Science', main_club: 'ColorStack', num_events_attended: 31, email: 'olivia_garcia@terpmail.umd.edu', password: 'umdcs42' },
    { username: 'davidmartinez', year: 'Sophomore', major: 'Civil Engineering', main_club: 'Black Engineer Society', num_events_attended: 18, email: 'david_martinez@terpmail.umd.edu', password: 'umdcs81' },
    { username: 'isabellarodriguez', year: 'Senior', major: 'Aerospace Engineering', main_club: 'CodeBlack', num_events_attended: 40, email: 'isabella_rodriguez@terpmail.umd.edu', password: 'umdcs37' },
    { username: 'chrissmith', year: 'Freshman', major: 'Computer Science', main_club: 'ColorStack', num_events_attended: 12, email: 'chris_smith@terpmail.umd.edu', password: 'umdcs55' },
    { username: 'amandawhite', year: 'Junior', major: 'Fire Protection Engineering', main_club: 'Black Engineer Society', num_events_attended: 28, email: 'amanda_white@terpmail.umd.edu', password: 'umdcs23' },
    { username: 'robertotaylor', year: 'Senior', major: 'Electrical Engineering', main_club: 'CodeBlack', num_events_attended: 37, email: 'roberto_taylor@terpmail.umd.edu', password: 'umdcs68' },
    { username: 'jenniferanderson', year: 'Sophomore', major: 'Information Science', main_club: 'ColorStack', num_events_attended: 20, email: 'jennifer_anderson@terpmail.umd.edu', password: 'umdcs90' },
    { username: 'marcusthomas', year: 'Junior', major: 'Computer Engineering', main_club: 'Black Engineer Society', num_events_attended: 33, email: 'marcus_thomas@terpmail.umd.edu', password: 'umdcs11' },
    { username: 'victoriajackson', year: 'Freshman', major: 'Math', main_club: 'CodeBlack', num_events_attended: 10, email: 'victoria_jackson@terpmail.umd.edu', password: 'umdcs74' },
    { username: 'kevinmiller', year: 'Senior', major: 'Mechanical Engineering', main_club: 'ColorStack', num_events_attended: 29, email: 'kevin_miller@terpmail.umd.edu', password: 'umdcs32' },
    { username: 'rashidawilliams', year: 'Sophomore', major: 'Computer Science', main_club: 'Black Engineer Society', num_events_attended: 25, email: 'rashida_williams@terpmail.umd.edu', password: 'umdcs60' },
    { username: 'tianahaarris', year: 'Junior', major: 'Electrical Engineering', main_club: 'CodeBlack', num_events_attended: 34, email: 'tiana_harris@terpmail.umd.edu', password: 'umdcs47' },
    ];

    sessionStorage.setItem(
        "leaderboardData",
        JSON.stringify(mockLeaderboardData)
    );
}

