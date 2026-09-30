const modal = document.getElementById("reservationModal");
const reserveBtn = document.getElementById("reserveBtn");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("reservationForm");
const message = document.getElementById("reservationMessage");

if (reserveBtn) {
    reserveBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            date: formData.get("date"),
            time: formData.get("time"),
            guests: formData.get("guests")
        };

        try {
            const response = await fetch("/reserve", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            message.textContent = result.message;

            if (result.ok) {
                form.reset();
            }

        } catch (error) {
            message.textContent = "Something went wrong. Please try again.";
        }
    });
}
