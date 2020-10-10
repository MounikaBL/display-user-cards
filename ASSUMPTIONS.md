## Description of my solution

1. Initial API call will get the user based on the size of the window. 
2. In case first API call is failed to fetch the data then debounce is added to fetch the data for every 5 seconds until first set a users are fetched successfully, once the first set of user is stored in redux store then user will be propvided a load more button to get the users(disconnect the internet connection to test this scenario). 
3. Load more button will be shown until user count reaches 100.
4. After every API fetch, window scroll will be moved down to show the recently fetched user cards.
5. Card will be shown with user name and photo in the background.
6. Hover on the card to see the user details(email and phone).


## Things I would do next

API fetch function is called infinite number of times untill first set of data is fetched and stored successfully. So need to provide the limit as 5.

## Assumptions that I made

User count to fetch API is calculated based on the size of the window so that "Load More" button comes as last card of the every row.
Example:  
    if (width >= 1100) {
        usersCount = 4;
    } else if (width >= 820) {
        usersCount = 3;
    } else {
        usersCount = 2;
    }