// Define backend URL
const BACKEND_URL = 'https://creations-inventostarz.pages.dev/backend/';

// Example function to fetch data from the backend
async function fetchIssues() {
    try {
        const response = await fetch(`${BACKEND_URL}/issues`);
        const issues = await response.json();
        console.log('Issues data from backend:', issues);
    } catch (error) {
        console.error('Error fetching issues:', error);
    }
}
