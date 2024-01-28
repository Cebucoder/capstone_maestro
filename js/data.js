var project_capstone = [];
var currentIndex;

// Function to fetch JSON data
async function fetchData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        project_capstone = data;
        currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0; // Retrieve from local storage
        GenerateTitle(); // Call GenerateTitle after fetching data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function saveCurrentIndexToLocalStorage() {
    localStorage.setItem('currentIndex', currentIndex.toString());
}

function displayProject(index) {
    var project = project_capstone[index];
    document.getElementById('title').innerHTML = project.title || '';
    document.getElementById('description').innerHTML = project.description;
    document.getElementById('developer_name').innerHTML = project.developer_name;

    var researchKeys = Object.keys(project);
    researchKeys = researchKeys.filter(key => key !== 'title' && key !== 'description');
    researchKeys.forEach((key, i) => {
        document.getElementById(key).innerHTML = `${project[key]}`;
        project.Methodology = project.Methodology.replace(/\n/g, '<br>');
        project.Expected_Deliverables = project.Expected_Deliverables.replace(/\n/g, '<br>');
        project.Timeline_and_Milestones = project.Timeline_and_Milestones.replace(/\n/g, '<br>');
    });

    document.getElementById('currentIndexDisplay').innerHTML = currentIndex + 1;
    document.getElementById('list-count').innerHTML = project_capstone.length;

    saveCurrentIndexToLocalStorage(); // Save current index to local storage
}

function GenerateTitle() {
    if (currentIndex < project_capstone.length) {
        displayProject(currentIndex);
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first project
        displayProject(currentIndex);
        currentIndex++;
    }
}

// Call fetchData to initiate fetching data
fetchData();
