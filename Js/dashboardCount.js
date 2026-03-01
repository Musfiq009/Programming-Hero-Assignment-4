function jobCount(jobCardCatagory) {
  const jobCardElement = document.getElementsByClassName(jobCardCatagory);
  let totalCount = 0;
  if (jobCardCatagory === "job-card") {
    for (let jobCard of jobCardElement) {
      if (jobCard.classList.contains("hidden")) {
        continue;
      } else {
        totalCount++;
      }
    }
    return String(totalCount);
  } else if (jobCardCatagory === "interview") {
    for (let jobCard of jobCardElement) {
      if (jobCard.classList.contains("hidden")) {
        continue;
      } else {
        totalCount++;
      }
    }
    return String(totalCount);
  } else if (jobCardCatagory === "rejected") {
    for (let jobCard of jobCardElement) {
      if (jobCard.classList.contains("hidden")) {
        continue;
      } else {
        totalCount++;
      }
    }
    return String(totalCount);
  } else {
    return;
  }
}
function updateDashboard() {
  let totalJobCount = jobCount("job-card");
  const totalJobCountElement = document.getElementById("total-job-count");
  totalJobCountElement.innerText = totalJobCount;
  totalJobCount = jobCount("interview");
  const totalInterviewCountElement = document.getElementById(
    "total-interview-count",
  );
  totalInterviewCountElement.innerText = totalJobCount;
  totalJobCount = jobCount("rejected");
  const totalRejectedCountElement = document.getElementById(
    "total-rejected-count",
  );
  totalRejectedCountElement.innerText = totalJobCount;
}
updateDashboard();
