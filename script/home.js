const loadGithubIssues = () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayGithubIssues(data.data));
};

const displayGithubIssues = (issues) => {
  const issuesContainer = document.getElementById("issues-container");
  issuesContainer.innerHTML = "";

  issues.forEach((issue) => {
    const issueCard = document.createElement("div");
    issueCard.innerHTML = `
        <div class="card flex flex-col justify-between rounded-lg  max-w-[256px] min-h-[256px] p-[16px]  bg-[#FFFFFF] border-t-4 ${issue.status === "open" ? "border-green-500" : "border-purple-500"} shadow-md">
    <div class="flex justify-between items-center">
      <p>${issue.status == "open" ? `<img src="./assets/Open-Status.png" alt="">` : `<img src="./assets/Closed- Status .png" alt="">`}</p>
      <div class="w-[80px] h-[24px] py-[6px] px-[25px] rounded-full flex justify-center items-center ${issue.priority === "high" ? "bg-[#FEECEC] text-[#EF4444]" : issue.priority === "low" ? "bg-[#EEEFF2] text-[#9CA3AF]" : "bg-[#FFF6D1] text-[#F59E0B]"}"><p class=" text-[12px] font-medium">${issue.priority}</p></div>
    </div>
    <div class="my-2">
      <button class="cursor-pointer text-left " onclick="loadIssuesDetails(${issue.id})"><h2 class="text-[14px] font-semibold line-clamp-1 my-1">${issue.title}</h2></button>
      <p class="text-[12px] text-[#64748B] mb-3 line-clamp-2">${issue.description}</p>
      <div class="flex items-wrap gap-2">
        <div class="flex items-center justify-center gap-1 rounded-full w-[56px] h-[24px] bg-[#FEECEC] border border-[#FECACA]">
          
          <h2 class="text-[12px] font-medium text-[#EF4444]"><i class="fa-solid fa-bug w-[8px] h-[8px] "></i>BUG</h2>
        </div>
        
        <div class="flex items-center justify-center gap-1 rounded-full w-[120px] h-[24px] bg-[#FFF8DB] border border-[#FDE68A]">
          
          <h2 class="text-[12px] font-medium text-[#D97706]"><i class="fa-solid fa-hands-holding-circle"></i>HELP NEEDED</h2>
        </div>       
      </div>

      <div class="card-footer my-3 border-t border-gray-300 w-full ">
        <p class="text-[12px] text-[#64748B] mt-3 ">#1by john_doe</p>
        <p class="text-[12px] text-[#64748B] mt-2">1/15/2024</p>
      </div>
    </div>
  </div>
        `;
    issuesContainer.append(issueCard);
  });
};

loadGithubIssues();
const allBtn = document.getElementById("all-btn");
const openBtn = document.getElementById("open-btn");
const closedBtn = document.getElementById("closed-btn");

const allTabs = [allBtn, openBtn, closedBtn];

const allButtons = () => {
  allTabs.forEach((btn) => {
    btn.addEventListener("click", function () {
      allTabs.forEach((tab) => {
        tab.classList.add("remove");
        tab.classList.remove("active");
      });
      btn.classList.add("active");
      btn.classList.remove("remove");
    });
  });
};
allButtons();

const tabOpen = document.getElementById("tab-open");
const tabClosed = document.getElementById("tab-closed");

const cardFilters = [allBtn, openBtn, closedBtn];
const statuses = ["all", "open", "closed"];
const issuesCount = document.getElementById("issues-count");

cardFilters.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    manageSpinner(true);
    const selectedStatus = statuses[index];
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const cardsContainer = document.getElementById("issues-container");
        cardsContainer.innerHTML = "";

        data.data.forEach((issue) => {
          if (selectedStatus === "all" || issue.status === selectedStatus) {
            const newCard = document.createElement("div");

            newCard.innerHTML = `
            <div class="card max-w-[256px] h-[256px] p-[16px] bg-[#FFFFFF] border-t-4 ${issue.status === "open" ? "border-green-500" : "border-purple-500"}  shadow-md">
    <div class="flex justify-between items-center">
      <p>${issue.status == "open" ? `<img src="./assets/Open-Status.png" alt="">` : `<img src="./assets/Closed- Status .png" alt="">`}</p>
      <div class="w-[80px] min-h-[24px] py-[6px] px-[25px] rounded-full flex justify-center items-center ${issue.priority === "high" ? "bg-[#FEECEC] text-[#EF4444]" : issue.priority === "low" ? "bg-[#EEEFF2] text-[#9CA3AF]" : "bg-[#FFF6D1] text-[#F59E0B]"}"><p class="text-[12px] font-medium">${issue.priority}</p></div>
    </div>
    <div class="my-2">
      <button class="cursor-pointer text-justify" onclick="loadIssuesDetails(${issue.id})"><h2 class="text-[14px] line-clamp-1 font-semibold my-1">${issue.title}</h2></button>
      <p class="text-[12px] text-[#64748B] line-clamp-2 mb-3">${issue.description}</p>
      <div class="flex items-center gap-1">
        <div class="flex items-center justify-center gap-1 rounded-full w-[56px] h-[24px] bg-[#FEECEC] border border-[#FECACA]">
          
          <h2 class="text-[12px] font-medium text-[#EF4444]"><i class="fa-solid fa-bug w-[8px] h-[8px] "></i>BUG</h2>
        </div>
        
        <div class="flex items-center justify-center gap-1 rounded-full w-[120px] h-[24px] bg-[#FFF8DB] border border-[#FDE68A]">
          
          <h2 class="text-[12px] font-medium text-[#D97706]"><i class="fa-solid fa-hands-holding-circle"></i>HELP NEEDED</h2>
        </div>       
      </div>

      <div class="card-footer my-3 border-t border-gray-300 w-full">
        <p class="text-[12px] text-[#64748B] mt-3">#1by john_doe</p>
        <p class="text-[12px] text-[#64748B] mt-2">1/15/2024</p>
      </div>
    </div>
  </div>
        `;
            cardsContainer.append(newCard);
          }

          tabOpen.classList.add("hidden");
          tabClosed.classList.add("hidden");
          if (selectedStatus === "open") {
            tabOpen.classList.remove("hidden");
            tabClosed.classList.add("hidden");
          } else if (selectedStatus === "closed") {
            tabClosed.classList.remove("hidden");
            tabOpen.classList.add("hidden");
          } else {
            tabClosed.classList.remove("hidden");
            tabOpen.classList.remove("hidden");
          }
        });
        manageSpinner(false);
        issuesCount.innerText = cardsContainer.children.length;
      });
  });
});

const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("issues-container").classList.add("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("issues-container").classList.remove("hidden");
  }
};

const loadIssuesDetails = async (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayIssuesData(details.data);
};

const displayIssuesData = (issue) => {
  const detailsBox = document.getElementById("issue-details-container");
  detailsBox.innerHTML = `
      <div  id="issue-details-container">
        <h2 class="text-[24px] font-semibold mb-2">${issue.title}</h2>
        <div class="flex items-center gap-[10px]">
           <div class="flex items-center justify-center gap-1 rounded-full w-[56px] h-[24px] bg-[#00A96E]">
          <p class="text-[12px] font-medium text-[#FFFFFF]">${issue.status}</p>
        </div>
          <p class="text-[12px] text-[#64748B]">Opened by Fahim Ahmed</p>
          <p class="text-[12px] text-[#64748B]">22/02/2026</p>
        </div>
        <div class="flex items-center gap-1 my-6">
        <div class="flex items-center justify-center gap-1 rounded-full w-[56px] h-[24px] bg-[#FEECEC] border border-[#FECACA]">
          <span><i class="fa-solid fa-bug w-[8px] h-[8px] "></i></span>
          <p class="text-[12px] font-medium text-[#EF4444]">BUG</p>
        </div>
        <div class="flex items-center justify-center gap-1 rounded-full w-[120px] h-[24px] bg-[#FFF8DB] border border-[#FDE68A]">
          <span><i class="fa-solid fa-hands-holding-circle"></i></span>
          <p class="text-[12px] font-medium text-[#D97706]">HELP WANTED</p>
        </div>
      </div>
      <p class="text-[12px] text-[#64748B]">The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.</p>
      <div class="bg-[#F8FAFC] flex py-4 px-4 gap-20 mt-6">
          <div>
            <p class="text-[16px] text-[#64748B]">Assignee:</p>
            <h2 class="text-[16px] font-semibold">Fahim Ahmed</h2>
          </div>
          <div>
            <p class="text-[16px] text-[#64748B]">Priority:</p>
            <div class="w-[80px] h-[24px] bg-[#EF4444] mt-1 py-[6px] px-[25px] rounded-full flex justify-center items-center"><p class="text-[#FFFFFF] text-[12px] font-medium">${issue.priority}</p>
            </div>
          </div>
      </div>
    </div>  
  `;
  document.getElementById("issue_modal").showModal();
};

document.getElementById("btn-search").addEventListener("click", () => {
  manageSpinner(true);
  const input = document.getElementById("input-search");
  const searchValue = input.value.trim().toLowerCase();

  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      const allIssues = data.data;
      const filtersIssues = allIssues.filter((word) =>
        word.title.toLowerCase().includes(searchValue),
      );
      displayGithubIssues(filtersIssues);
      manageSpinner(false);
    });
});
