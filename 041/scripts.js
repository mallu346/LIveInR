function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function openBookingModal(roomType, price) {
    document.getElementById("roomType").textContent = roomType;
    document.getElementById("roomPrice").textContent = `Price: $${price} per night`;
    document.getElementById("bookingModal").style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function showReceipt() {
    const roomType = document.getElementById("roomType").textContent;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const paymentDetails = document.getElementById("payment").value;

    const receiptContent = `
        Room Type: ${roomType}<br>
        Check-in Date: ${checkIn}<br>
        Check-out Date: ${checkOut}<br>
        Payment: Completed with card ending in ${paymentDetails.slice(-4)}
    `;

    document.getElementById("receiptDetails").innerHTML = receiptContent;
    closeModal("bookingModal");
    document.getElementById("receiptModal").style.display = "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
}
