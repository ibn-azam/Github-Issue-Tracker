const loadGithubIssues = () =>{
    const url ="https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayGithubIssues(data.data))
}

const displayGithubIssues = (issues) =>{
    const issuesContainer = document.getElementById("issues-container");
    issuesContainer.innerHTML ="";

    issues.forEach(issue =>{
        const issueCard = document.createElement("div");
        issueCard.innerHTML = `
        <div class="card max-w-[256px] min-h-[256px] p-[16px] bg-[#EFEFEF]">
    <div class="flex justify-between items-center">
      <p>${issue.status == "open" ? `<img src="./assets/Open-Status.png" alt="">` : `<img src="./assets/Closed- Status .png" alt="">`}</p>
      <div class="w-[80px] h-[24px] bg-[#FEECEC] py-[6px] px-[25px] rounded-full flex justify-center items-center"><p class="text-[#EF4444] text-[12px] font-medium">${issue.priority}</p></div>
    </div>
    <div class="py-[12px]">
      <h2 class="text-[14px] font-semibold mb-2">${issue.title}</h2>
      <p class="text-[12px] text-[#64748B] mb-3">${issue.description}</p>
      <div class="flex items-center gap-1">
        <div class="flex items-center justify-center gap-1 rounded-full w-[56px] h-[24px] bg-[#FEECEC] border border-[#FECACA]">
          
          <h2 class="text-[12px] font-medium text-[#EF4444]"><i class="fa-solid fa-bug w-[8px] h-[8px] "></i>BUG</h2>
        </div>
        
        <div class="flex items-center justify-center gap-1 rounded-full w-[120px] h-[24px] bg-[#FFF8DB] border border-[#FDE68A]">
          
          <h2 class="text-[12px] font-medium text-[#D97706]"><i class="fa-solid fa-hands-holding-circle"></i>HELP NEEDED</h2>
        </div>       
      </div>

      <div class="card-footer my-6">
        <p class="text-[12px] text-[#64748B]">#1by john_doe</p>
        <p class="text-[12px] text-[#64748B] mt-[6px]">1/15/2024</p>
      </div>
    </div>
  </div>
        `;
        issuesContainer.append(issueCard);

    })
} 
loadGithubIssues();
const allBtn = document.getElementById("all-btn");
const openBtn = document.getElementById("open-btn");
const closedBtn = document.getElementById("closed-btn");

const allTabs = [allBtn, openBtn, closedBtn ];

const allButtons = () =>{
    allTabs.forEach(btn =>{
        btn.addEventListener("click", function(){
            allTabs.forEach(tab =>{
                tab.classList.add("remove");
                tab.classList.remove("active");
            })
            btn.classList.add("active");
            btn.classList.remove("remove");
        })
    })
}
allButtons();




const cardFilters = [allBtn, openBtn, closedBtn];
const statuses = ["all", "open", "closed"];
const issuesCount = document.getElementById("issues-count");

cardFilters.forEach((btn, index) => {
  btn.addEventListener("click", () => {

    const selectedStatus = statuses[index];

    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {

        const cardsContainer = document.getElementById("issues-container");
        cardsContainer.innerHTML = "";

        data.data.forEach(issue => {

          if (selectedStatus === "all" || issue.status === selectedStatus) {

            const newCard = document.createElement("div");

            newCard.innerHTML = `
            <div class="card max-w-[256px] min-h-[256px] p-[16px] bg-[#EFEFEF]">
    <div class="flex justify-between items-center">
      <p>${issue.status == "open" ? `<img src="./assets/Open-Status.png" alt="">` : `<img src="./assets/Closed- Status .png" alt="">`}</p>
      <div class="w-[80px] h-[24px] bg-[#FEECEC] py-[6px] px-[25px] rounded-full flex justify-center items-center"><p class="text-[#EF4444] text-[12px] font-medium">${issue.priority}</p></div>
    </div>
    <div class="py-[12px]">
      <h2 class="text-[14px] font-semibold mb-2">${issue.title}</h2>
      <p class="text-[12px] text-[#64748B] mb-3">${issue.description}</p>
      <div class="flex items-center gap-1">
        <div class="flex items-center justify-center gap-1 rounded-full w-[56px] h-[24px] bg-[#FEECEC] border border-[#FECACA]">
          
          <h2 class="text-[12px] font-medium text-[#EF4444]"><i class="fa-solid fa-bug w-[8px] h-[8px] "></i>BUG</h2>
        </div>
        
        <div class="flex items-center justify-center gap-1 rounded-full w-[120px] h-[24px] bg-[#FFF8DB] border border-[#FDE68A]">
          
          <h2 class="text-[12px] font-medium text-[#D97706]"><i class="fa-solid fa-hands-holding-circle"></i>HELP NEEDED</h2>
        </div>       
      </div>

      <div class="card-footer my-6">
        <p class="text-[12px] text-[#64748B]">#1by john_doe</p>
        <p class="text-[12px] text-[#64748B] mt-[6px]">1/15/2024</p>
      </div>
    </div>
  </div>
        `;
            cardsContainer.append(newCard);
          }
        });
        issuesCount.innerText = cardsContainer.children.length ;
      });
  });
});
