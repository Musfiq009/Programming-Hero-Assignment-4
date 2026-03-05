document.getElementById("all-job-tab").addEventListener("click", function () {
  if (this.classList.contains("active")) {
    return;
  } else {
    this.classList.add("active", "btn-primary");
    this.classList.remove("bg-white", "text-[#64748B]");
    document
      .getElementById("interview-job-tab")
      .classList.remove("active", "btn-primary");
    document
      .getElementById("interview-job-tab")
      .classList.add("bg-white", "text-[#64748B]");
    document
      .getElementById("rejected-job-tab")
      .classList.remove("active", "btn-primary");
    document
      .getElementById("rejected-job-tab")
      .classList.add("bg-white", "text-[#64748B]");
    let availableJobCountElement =
      document.getElementById("available-job-card");
    let availableJobCount = jobCount("job-card");
    availableJobCountElement.innerText = availableJobCount + " " + "jobs";
    if (availableJobCount == 0) {
      document.getElementById("unavailable-job").classList.remove("hidden");
    } else {
      document.getElementById("unavailable-job").classList.add("hidden");
    }

    const allJobCard = document.getElementsByClassName("job-card");
    for (let jobCard of allJobCard) {
      if (
        jobCard.classList.contains("hidden") &&
        jobCard.classList.contains("deleted")
      ) {
        continue;
      } else {
        jobCard.classList.remove("hidden");
      }
    }
  }
});

document
  .getElementById("interview-job-tab")
  .addEventListener("click", function () {
    if (this.classList.contains("active")) {
      return;
    } else {
      this.classList.add("active", "btn-primary");
      this.classList.remove("bg-white", "text-[#64748B]");
      document
        .getElementById("all-job-tab")
        .classList.remove("active", "btn-primary");
      document
        .getElementById("all-job-tab")
        .classList.add("bg-white", "text-[#64748B]");
      document
        .getElementById("rejected-job-tab")
        .classList.remove("active", "btn-primary");
      document
        .getElementById("rejected-job-tab")
        .classList.add("bg-white", "text-[#64748B]");
      let availableJobCountElement =
        document.getElementById("available-job-card");
      let availableJobCount = jobCount("interview");
      availableJobCountElement.innerText = availableJobCount + " " + "jobs";
      if (availableJobCount == 0) {
        document.getElementById("unavailable-job").classList.remove("hidden");
      } else {
        document.getElementById("unavailable-job").classList.add("hidden");
      }

      const allJobCard = document.getElementsByClassName("job-card");
      for (let jobCard of allJobCard) {
        if (
          jobCard.classList.contains("hidden") &&
          jobCard.classList.contains("deleted")
        ) {
          continue;
        } else {
          if (!jobCard.classList.contains("interview")) {
            jobCard.classList.add("hidden");
          } else {
            jobCard.classList.remove("hidden");
          }
        }
      }
    }
  });

document
  .getElementById("rejected-job-tab")
  .addEventListener("click", function () {
    if (this.classList.contains("active")) {
      return;
    } else {
      this.classList.add("active", "btn-primary");
      this.classList.remove("bg-white", "text-[#64748B]");
      document
        .getElementById("all-job-tab")
        .classList.remove("active", "btn-primary");
      document
        .getElementById("all-job-tab")
        .classList.add("bg-white", "text-[#64748B]");
      document
        .getElementById("interview-job-tab")
        .classList.remove("active", "btn-primary");
      document
        .getElementById("interview-job-tab")
        .classList.add("bg-white", "text-[#64748B]");
      let availableJobCountElement =
        document.getElementById("available-job-card");
      let availableJobCount = jobCount("rejected");
      availableJobCountElement.innerText = availableJobCount + " " + "jobs";
      if (availableJobCount == 0) {
        document.getElementById("unavailable-job").classList.remove("hidden");
      } else {
        document.getElementById("unavailable-job").classList.add("hidden");
      }

      const allJobCard = document.getElementsByClassName("job-card");
      for (let jobCard of allJobCard) {
        if (
          jobCard.classList.contains("hidden") &&
          jobCard.classList.contains("deleted")
        ) {
          continue;
        } else {
          if (!jobCard.classList.contains("rejected")) {
            jobCard.classList.add("hidden");
          } else {
            jobCard.classList.remove("hidden");
          }
        }
      }
    }
  });
