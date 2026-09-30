const modal=document.getElementById("reservationModal");
function openReservation(){modal.classList.add("show");modal.setAttribute("aria-hidden","false")}
function closeReservation(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true")}
window.addEventListener("click",e=>{if(e.target===modal)closeReservation()});
document.getElementById("reservationForm").addEventListener("submit",async e=>{
  e.preventDefault();
  const msg=document.getElementById("reservationMessage");
  msg.textContent="Sending...";
  msg.className="message";
  try{
    const response=await fetch("/reserve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:document.getElementById("name").value})});
    const data=await response.json();
    msg.textContent=data.message;
    msg.className="message "+(data.ok?"success":"error");
    if(data.ok)e.target.reset();
  }catch(err){
    msg.textContent="Could not send the request. Please try again.";
    msg.className="message error";
  }
});
