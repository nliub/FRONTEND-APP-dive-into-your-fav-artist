# Demo instruction

Every new access token for Spotify API is only valid for an hr. Given this, we've added logic to demo the site using the default data (stored in local folder) WITHOUT any api calls (similar to cache). When the acess token works properly, the site will still work to show all the artists.

To demo the project

1. go to "/" endpoint and see default Drake profile
2. click on "future" in related artists to see future (notice URL change; refresh the page will still work)
3. type "coldplay" in searchbar to navigate to coldplay
4. click on "adele" in related artists
5. at any time, search "adele", "drake", "future" or "coldplay" in searchbar will work
