document.getElementById("all-job-tab").addEventListener("click", function () {
  if (this.classList.contains("active")) {
    return;
  } else {
    this.classList.add("active", "btn-primary");
    this.classList.remove("bg-white", "text-[#64748B]");
    document.getElementById("interview-job-tab").classList.remove("active", "btn-primary");
    document.getElementById("interview-job-tab").classList.add("bg-white", "text-[#64748B]");
    document.getElementById("rejected-job-tab").classList.remove("active", "btn-primary");
    document.getElementById("rejected-job-tab").classList.add("bg-white", "text-[#64748B]");    

    const allJobCard = document.getElementsByClassName("job-card");
    for(let jobCard of allJobCard){
        if(jobCard.classList.contains("hidden") && jobCard.classList.contains("deleted")){
            continue;
        }else{
            jobCard.classList.remove("hidden");
        }
    }

  }
});
