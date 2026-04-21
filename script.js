import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// SAVE DATA
const form = document.getElementById("ticketForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await addDoc(collection(db, "tickets"), {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    passport: document.getElementById("passport").value,
    match: document.getElementById("match").value,
    timestamp: new Date()
  });

  alert("Ticket saved to cloud!");
  form.reset();
});

// REAL-TIME READ (LIVE DASHBOARD)
const list = document.getElementById("dataList");

onSnapshot(collection(db, "tickets"), (snapshot) => {
  list.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();

    list.innerHTML += `
      <div class="card">
        <h3>${data.fullName}</h3>
        <p>${data.email}</p>
        <p>${data.passport}</p>
        <p>${data.match}</p>
      </div>
    `;
  });
});
