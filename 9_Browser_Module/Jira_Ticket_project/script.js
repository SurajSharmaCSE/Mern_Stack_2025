let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");

let modelCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareacont = document.querySelector(".textarea-cont")
let allPriorityColors = document.querySelectorAll(".priority-color");

let color = ["lightpink","lightblue","lightgreen","black"];
let modalPriorityColor = color[color.length-1];

let addFlag = false;
let removeFlag = false;

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

// Listener for modal priority coloring
allPriorityColors.forEach((colorElem,idx)=>{
    colorElem.addEventListener("click",(e) => {
        allPriorityColors.forEach((priorityColorElem,idx)=>{
            priorityColorElem.classList.remove("border");
        })

        colorElem.classList.add("border");
        modalPriorityColor = colorElem.classList[0];
    })
})

addBtn.addEventListener("click",(e)=>{
    //display Modal
    //Generate Ticket

    //AddFlag, true -> Modal Display
    //AddFlag, False -> Modal non

    addFlag = !addFlag;
    if(addFlag)
    {
        modelCont.style.display = "flex";
    }
    else
    {
        modelCont.style.display = "none"
    }
})

removeBtn.addEventListener("click",(e)=>{
    removeFlag = !removeFlag
})

modelCont.addEventListener("keydown",(e)=>{
    let key = e.key;
    if(key=="Shift")
    {
        createTicket(modalPriorityColor,textareacont.value,shortid());
        modelCont.style.display = "none";
        addFlag = false
        textareacont.value = "";
    }
})

function createTicket(ticketColor,ticketTask,ticketID)
{
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-count");
    ticketCont.innerHTML = `
            <div class="ticket-cont">
                <div class="ticket-color ${ticketColor}"></div>
                <div class="ticket-id">#${ticketID}</div>
                <div class="task-area">${ticketTask}</div>   
                <div class="ticket-lock">
                    <i class="fas fa-lock"></i>
                </div>
            </div> 
    `
    mainCont.appendChild(ticketCont);
    handleRemoval(ticketCont)
    handleLock(ticketCont)
}

function handleRemoval(ticket)
{
   //removeFlag -> true -> remove

   if(removeFlag)
   {
    ticket.remove();
   }
}

function handleLock(ticket)
{
    let ticketLockElem = ticket.querySelector(".ticket-lock");
    let ticketlock = ticketLockElem.children[0];
    let tickettaskArea = ticket.querySelector(".task-area");
    ticketlock.addEventListener("click",(e)=>{
       if(ticketlock.classList.contains(lockClass))
       {
          ticketlock.classList.remove(lockClass);
          ticketlock.classList.add(unlockClass);
          tickettaskArea.setAttribute("contenteditable","true")
       }
       else
       {
         ticketlock.classList.remove(unlockClass);
         ticketlock.classList.add(lockClass);
        tickettaskArea.setAttribute("contenteditable","false")

       }
    })
}