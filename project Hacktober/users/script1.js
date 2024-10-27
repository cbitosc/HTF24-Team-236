const responses = {
    "what is a hackathon": "A hackathon is an event where programmers, designers, and others collaborate intensively on software projects.",
    "how do i register for the hackathon": "You can register by clicking the 'Register' button on our website and filling out the form.",
    "what are the prizes for the hackathon": "Prizes include cash rewards, trophies, and mentorship opportunities.",
    "when does the hackathon start": "The hackathon starts on January 15, 2024, and runs for 48 hours.",
    "what are the themes for the hackathon": "Themes will be announced a week before the event. Stay tuned on our website for updates.",
    "can i participate in a team": "Yes, teams can consist of up to 4 members. Make sure to register together!"
};

// Custom fallback responses
const customFallbackResponses = {
    "hackathon": "A hackathon is an event focused on collaboration and innovation.",
    "register": "You can register online on our official website.",
    "prizes": "We offer various prizes, including cash and mentorship.",
    "start": "The event starts on January 15, 2024.",
    "themes": "Stay tuned for themes announced one week before the event.",
    "team": "Teams can have up to 4 members."
};

// Function to normalize the query
function normalizeQuery(query) {
    return query
        .toLowerCase() // Convert to lowercase
        .replace(/[?.,!]/g, ''); // Remove punctuation
}

document.getElementById('queryForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById('name').value;
    const query = document.getElementById('query').value;

    // Clear previous queries
    document.getElementById('queryList').innerHTML = '';

    // Normalize the query
    const normalizedQuery = normalizeQuery(query);

    // Create new list item for the user's query
    const userLi = document.createElement('li');
    userLi.textContent = `${name}: ${query}`;
    userLi.style.fontWeight = "bold"; // Highlight user's query
    document.getElementById('queryList').appendChild(userLi);

    // Determine the AI response
    let aiResponse = responses[normalizedQuery];

    // If no exact match, check for keywords in the query
    if (!aiResponse) {
        for (const keyword in customFallbackResponses) {
            if (normalizedQuery.includes(keyword)) {
                aiResponse = customFallbackResponses[keyword];
                break; // Exit the loop once a match is found
            }
        }
    }

    // If still no response, use a default message
    if (!aiResponse) {
        aiResponse = "Sorry, I can only answer questions related to the hackathon competition. Please ask me about the event!";
    }

    // Create new list item for the AI response
    const aiLi = document.createElement('li');
    aiLi.textContent = `AI: ${aiResponse}`;
    aiLi.style.color = "blue"; // Different color for AI responses
    document.getElementById('queryList').appendChild(aiLi);

    // Clear the form
    document.getElementById('queryForm').reset();
});
