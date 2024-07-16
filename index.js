// array to store freelancer objects
const freelancers = [
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
    { name: 'Bob', occupation: 'Teacher', startingPrice: 50 }
];

const names = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'Mason', 'Isabella', 'James'];

const occupations = ['Designer', 'Developer', 'Writer', 'Artist', 'Consultant', 'Marketer', 'Photographer', 'Videographer', 'Translator', 'Tutor'];

// function to calculate the average starting price
// thanks to random starting price properties, average will vary as freelancers are pushed into the array
function calculateAveragePrice() {
    const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = totalPrice / freelancers.length;
    return averagePrice;
}

// function to render freelancers and average price
// DOM manipulation to grab the <div> by its id and then create content to display on the page: magic!
function renderFreelancers() {
    const freelancerList = document.getElementById('freelancers');
    freelancerList.innerHTML = '';

    freelancers.forEach(freelancer => {
        const freelancerElement = document.createElement('div');
        freelancerElement.textContent = `${freelancer.name}, ${freelancer.occupation} - Starting Price: $${freelancer.startingPrice}`;
        freelancerList.appendChild(freelancerElement);
    });

    const averagePriceElement = document.getElementById('averagePrice');
    averagePriceElement.textContent = `THE AVERAGE STARTING PRICE IS $${calculateAveragePrice().toFixed(2)}`;
}

// initial render
renderFreelancers();


// generate three random freelancers and update it every 3 seconds
let extraFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    startingPrice: Math.floor(Math.random() * 100) + 50
};
freelancers.push(extraFreelancer);
renderFreelancers();

// three new names will appear every 3 seconds
setInterval(() => {
    freelancers.length = 0; // sets the list to 0 every render so names don't pile up
    const newFreelancers = [];

    for (let i = 0; i < 3; i++) { 
        const extraFreelancer = {
            name: names[Math.floor(Math.random() * names.length)],
            occupation: occupations[Math.floor(Math.random() * occupations.length)],
            startingPrice: Math.floor(Math.random() * 100) + 50
        };
        newFreelancers.push(extraFreelancer);
    }
    freelancers.push(...newFreelancers); // push new freelancers into the array
    renderFreelancers();
}, 3000);