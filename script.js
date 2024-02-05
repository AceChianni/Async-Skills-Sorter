async function fetchData() {
  try {
    const response = await fetch('skills.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch data (HTTP ${response.status})`);
    }

    const data = await response.json();
    const sortedSkills = data.sort((a, b) => b.level - a.level);

    displaySkills(sortedSkills);
  } catch (error) {
    console.error('Error fetching or sorting data:', error.message);
  }
}

function displaySkills(skills) {
  const skillsContainer = document.getElementById('skills-container');

  skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.classList.add('skill-item');

    const skillName = document.createElement('div');
    skillName.classList.add('skill-name');
    skillName.textContent = `Skill: ${skill.skillName}`;

    const skillLevel = document.createElement('div');
    skillLevel.classList.add('skill-level');
    skillLevel.textContent = `Level: ${skill.level}`;

    skillItem.appendChild(skillName);
    skillItem.appendChild(skillLevel);

    skillsContainer.appendChild(skillItem);
  });
}

// Call the fetchData function on page load
fetchData();
