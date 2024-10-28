document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from localStorage
    const roomType = localStorage.getItem('roomType');
    const facilities = localStorage.getItem('facilities');
    const checkInDate = localStorage.getItem('checkInDate');
    const checkOutDate = localStorage.getItem('checkOutDate');
    const roomPrice = localStorage.getItem('roomPrice');

    // Display data on the receipt page
    document.getElementById('receiptRoomType').textContent = roomType;
    document.getElementById('receiptFacilities').textContent = facilities;
    document.getElementById('receiptCheckInDate').textContent = checkInDate;
    document.getElementById('receiptCheckOutDate').textContent = checkOutDate;
    document.getElementById('receiptRoomPrice').textContent = roomPrice;
});
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