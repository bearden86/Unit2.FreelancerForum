// Array to store freelancer objects
const freelancers = [
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
    { name: 'Bob', occupation: 'Teacher', startingPrice: 50 }
];

const names = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'Mason', 'Isabella', 'James'];

const occupations = ['Designer', 'Developer', 'Writer', 'Artist', 'Consultant', 'Marketer', 'Photographer', 'Videographer', 'Translator', 'Tutor'];

// Function to calculate the average starting price
function calculateAveragePrice() {
    const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = totalPrice / freelancers.length;
    return averagePrice;
}

// Function to render freelancers and average price
function renderFreelancers() {
    const freelancerList = document.getElementById('freelancers');
    freelancerList.innerHTML = '';

    freelancers.forEach(freelancer => {
        const freelancerElement = document.createElement('div');
        freelancerElement.textContent = `${freelancer.name}, ${freelancer.occupation} - Starting Price: $${freelancer.startingPrice}`;
        freelancerList.appendChild(freelancerElement);
    });

    const averagePriceElement = document.getElementById('averagePrice');
    averagePriceElement.textContent = `Average Starting Price: $${calculateAveragePrice().toFixed(2)}`;
}

// Initial render
renderFreelancers();

// Simulate new freelancer every 3 seconds
// setInterval(() => {
//     const newFreelancer = {
//         name: `Freelancer ${freelancers.length + 1}`,
//         occupation: 'Programmer',
//         startingPrice: Math.floor(Math.random() * 100) + 50
//     };
//     freelancers.push(newFreelancer);
//     renderFreelancers();
// }, 3000);

// setInterval(() => {
//     const randomName = names[Math.floor(Math.random() * names.length)];
//     const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
//     const newFreelancer = {
//         name: randomName,
//         occupation: randomOccupation,
//         startingPrice: Math.floor(Math.random() * 100) + 50
//     };
//     freelancers.push(newFreelancer);
//     renderFreelancers();
// }, 3000);

// Add one extra freelancer and update it every 3 seconds
let extraFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    startingPrice: Math.floor(Math.random() * 100) + 50
};
freelancers.push(extraFreelancer);
renderFreelancers();

setInterval(() => {
    extraFreelancer = {
        name: names[Math.floor(Math.random() * names.length)],
        occupation: occupations[Math.floor(Math.random() * occupations.length)],
        startingPrice: Math.floor(Math.random() * 100) + 50
    };
    freelancers[freelancers.length - 1] = extraFreelancer;
    renderFreelancers();
}, 3000);