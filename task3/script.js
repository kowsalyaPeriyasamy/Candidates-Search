// script.js

const searchForm = document.getElementById('search-form');
const candidatesList = document.getElementById('candidates-list');
const candidates = document.getElementById('candidates');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the search criteria
  const location = document.getElementById('location').value;
  const jobRole = document.getElementById('job-role').value;

  // Simulate fetching candidates from a database
  const fetchedCandidates = fetchCandidates(location, jobRole);

  // Display the fetched candidates
  displayCandidates(fetchedCandidates);
});

function fetchCandidates(location, jobRole) {
  // Simulate fetching candidates from a database
  // You can replace this with your own implementation

  // Dummy data for demonstration purposes
  const dummyCandidates = [
    {
      name: 'Mary',
      location: 'New York',
      jobRole: 'Software Developer',
      avatar: 'images/avatar1.jpg'
    },
    {
      name: 'Jane Smith',
      location: 'San Francisco',
      jobRole: 'Product Manager',
      avatar: 'images/avatar2.jpg'
    },
    {
      name: 'David Johnson',
      location: 'London',
      jobRole: 'UI/UX Designer',
      avatar: 'images/avatar3.jpg'
    },
    // Add more dummy candidates here...
  ];

  // Filter the candidates based on the search criteria
  const filteredCandidates = dummyCandidates.filter(candidate => {
    const isLocationMatch = location === '' || candidate.location.toLowerCase().includes(location.toLowerCase());
    const isJobRoleMatch = jobRole === '' || candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase());
    return isLocationMatch && isJobRoleMatch;
  });

  return filteredCandidates;
}

function displayCandidates(candidatesData) {
  // Clear the previous list of candidates
  candidates.innerHTML = '';

  // Create the list items for each candidate
  candidatesData.forEach(candidate => {
    const listItem = document.createElement('li');
    listItem.className = 'candidate-item';

    const avatar = document.createElement('img');
    avatar.className = 'candidate-avatar';
    avatar.src = candidate.avatar;
    avatar.alt = 'Candidate Avatar';

    const candidateInfo = document.createElement('div');
    candidateInfo.className = 'candidate-info';

    const name = document.createElement('h3');
    name.className = 'candidate-name';
    name.textContent = candidate.name;

    const location = document.createElement('p');
    location.className = 'candidate-location';
    location.textContent = `Location: ${candidate.location}`;

    const jobRole = document.createElement('p');
    jobRole.className = 'candidate-job-role';
    jobRole.textContent = `Job Role: ${candidate.jobRole}`;

    candidateInfo.appendChild(name);
    candidateInfo.appendChild(location);
    candidateInfo.appendChild(jobRole);

    listItem.appendChild(avatar);
    listItem.appendChild(candidateInfo);

    candidates.appendChild(listItem);
  });

  // Show the candidates list section
  candidatesList.classList.remove('hidden');
}
