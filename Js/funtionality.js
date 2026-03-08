let currentTab = "all";

const tabActive = ["btn-primary"];
const tabInactive = ["bg-white", "text-[#64748B]"];

const allJobContainer = document.getElementById("all-job-container");
const interviewJobContainer = document.getElementById(
  "interview-job-container",
);
const rejectedJobContainer = document.getElementById("rejected-job-container");
const jobUnavailable = document.getElementById("unavailable-job");
const availableJob = document.getElementById("available-job");

const tabContainer = [
  allJobContainer,
  interviewJobContainer,
  rejectedJobContainer,
];

function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  currentTab = tab;
  for (let t of tabs) {
    const tabName = document.getElementById(t + "-job-tab");
    if (t === tab) {
      tabName.classList.add(...tabActive);
      tabName.classList.remove(...tabInactive);
    } else {
      tabName.classList.add(...tabInactive);
      tabName.classList.remove(...tabActive);
    }
  }
  for (let container of tabContainer) {
    container.classList.add("hidden");
  }
  jobUnavailable.classList.add("hidden");
  if (tab === "all") {
    allJobContainer.classList.remove("hidden");
    if (allJobContainer.children.length == 0) {
      jobUnavailable.classList.remove("hidden");
    }
  } else if (tab === "interview") {
    interviewJobContainer.classList.remove("hidden");
    if (interviewJobContainer.children.length == 0) {
      jobUnavailable.classList.remove("hidden");
    }
  } else {
    rejectedJobContainer.classList.remove("hidden");
    if (rejectedJobContainer.children.length == 0) {
      jobUnavailable.classList.remove("hidden");
    }
  }
  updateDashboard();
}

const jobCountElement = document.getElementById("total-job-count");
const interviewCountElement = document.getElementById("total-interview-count");
const rejectedCountElement = document.getElementById("total-rejected-count");

switchTab(currentTab);

document
  .getElementById("job-container")
  .addEventListener("click", function (e) {
    let clickedElement = e.target;
    let card = clickedElement.closest(".job-card");
    let parentOfCard = card.parentNode;
    let status = card.querySelector(".card-status");

    if (clickedElement.classList.contains("btn-success")) {
      status.innerText = "Interview";
      status.style.backgroundColor="#10B981";
      status.style.color="white";
      interviewJobContainer.appendChild(card);
      updateDashboard();
    }
    if (clickedElement.classList.contains("btn-error")) {
      status.innerText = "Rejected";
      status.style.backgroundColor="#EF4444";
      status.style.color="white";
      rejectedJobContainer.appendChild(card);
      updateDashboard();
    }
    if (clickedElement.classList.contains("dlt-btn")) {
      parentOfCard.removeChild(card);
      updateDashboard();
    }
  });

function updateDashboard() {
  const counts = {
    all: allJobContainer.children.length,
    interview: interviewJobContainer.children.length,
    rejected: rejectedJobContainer.children.length,
  };

  jobCountElement.innerText = counts["all"];
  interviewCountElement.innerText = counts["interview"];
  rejectedCountElement.innerText = counts["rejected"];

  availableJob.innerText = counts[currentTab]+" jobs";

  if (counts[currentTab] == 0) {
    jobUnavailable.classList.remove("hidden");
  } else {
    jobUnavailable.classList.add("hidden");
  }
}

updateDashboard();
