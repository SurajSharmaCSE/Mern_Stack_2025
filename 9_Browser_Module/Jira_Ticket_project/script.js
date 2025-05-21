let addBtn = document.querySelector(".add-btn");
let modelCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareacont = document.querySelector(".task-area")

let addFlag = false;

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
modelCont.addEventListener("keydown",(e)=>{
    let key = e.key;
    if(key=="Shift")
    {
        createTicket();
        modelCont.style.display = "none";
        addFlag = false
        textareacont.value = "";
    }
})

function createTicket()
{
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-count");
    ticketCont.innerHTML = `
            <div class="ticket-cont">
                <div class="ticket-color"></div>
                <div class="ticket-id"></div>
                <div class="task-area">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, autem veritatis aliquid iste ut 
                    voluptates tenetur, magni fuga dolore numquam ea nemo cumque maiores, mollitia exercitationem? Nobis eaque 
                    excepturi omnis?
            </div> 
    `
    mainCont.appendChild(ticketCont);
}