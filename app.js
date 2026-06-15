const jobs = [
  { title: "Web Developer", company: "Google", location: "Delhi" },
  { title: "Frontend Developer", company: "Amazon", location: "Noida" },
  { title: "Backend Developer", company: "Microsoft", location: "Gurgaon" },
  { title: "Full Stack Developer", company: "TCS", location: "Bangalore" }
];

function loadJobs(list = jobs) {
  document.getElementById("jobs").innerHTML = "";

  list.forEach(job => {
    document.getElementById("jobs").innerHTML += `
      <div class="job">
        <h3>${job.title}</h3>
        <p><b>${job.company}</b></p>
        <p>📍 ${job.location}</p>
        <button onclick="apply('${job.title}')">Apply Now</button>
      </div>
    `;
  });
}

function searchJobs() {
  let value = document.getElementById("search").value.toLowerCase();

  let filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(value) ||
    j.company.toLowerCase().includes(value)
  );

  loadJobs(filtered);
}

function apply(job) {
  alert("✅ Successfully applied for " + job);
}

loadJobs();