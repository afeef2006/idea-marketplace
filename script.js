const ideas = [
  {
    id: 1,
    title: "Smart Waste Management",
    summary: "IoT-based system to monitor garbage levels",
    price: 50
  },
  {
    id: 2,
    title: "AI Study Planner",
    summary: "AI that creates personalized study schedules",
    price: 30
  },
  {
    id: 3,
    title: "Health Monitoring App",
    summary: "App to track health vitals in real time",
    price: 40
  },
  {
    id: 4,
    title: "Traffic Management",
    summary: "App to Manage the Traffic",
    price: 50
  },
  {
    id: 5,
    title: "Real vs Fake",
    summary: "News is Real or Fake",
    price: 45
  },
  {
    id: 6,
    title: "Scanner Maker",
    summary: "Make a Scanner simply",
    price: 35
  },
  {
    id: 7,
    title: "Smart Student Attendance System",
    summary: "Records student attendance using simple inputs",
    price: 30
  },
  {
    id: 8,
    title: "Movie Recommendation System",
    summary: "Recommends movies based on user preferences.",
    price: 50
  },
  {
    id: 9,
    title: "Password Manager",
    summary: "Stores and retrieves passwords securely.",
    price: 40
  }
];

const container = document.getElementById("ideaContainer");

ideas.forEach(idea => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${idea.title}</h3>
    <p>${idea.summary}</p>
    <p class="price">$${idea.price}</p>
    <button onclick="buyIdea(${idea.id})">Buy Idea</button>
  `;

  container.appendChild(card);
});

function buyIdea(id) {
  let purchased = JSON.parse(localStorage.getItem("purchasedIdeas")) || [];
  purchased.push(id);
  localStorage.setItem("purchasedIdeas", JSON.stringify(purchased));
  alert("Idea purchased successfully!");
}
