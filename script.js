let name = '';
let age = 0;

// Mencegah pengguna keluar dari halaman
window.addEventListener("beforeunload", function (event) {
    event.returnValue = "belum juga selesai jawab masa udah mau pergi :( .";
});

function nextPage(page) {
    if (page === 1) {
        name = document.getElementById("nameInput").value;
        if (!name) {
            alert("tulis nama kamu disiniii!!.");
            return;
        }
        document.getElementById("page1").classList.add('hidden');
        document.getElementById("page2").classList.remove('hidden');
    } else if (page === 2) {
        age = document.getElementById("ageInput").value;
        if (!age) {
            alert("berapakah umur kamuu?.");
            return;
        }
        document.getElementById("page2").classList.add('hidden');
        document.getElementById("page3").classList.remove('hidden');
    } else if (page === 4) {
        document.getElementById("page4").classList.add('hidden');
        document.getElementById("page5").classList.remove('hidden');

        // Setel teks tombol keluar dengan nama pengguna
        const exitButton = document.getElementById("exitButton");
        exitButton.textContent = "I love you, " + name;
    }
}

function verifyName(isCorrect) {
    if (isCorrect) {
        document.getElementById("page3").classList.add('hidden');
        document.getElementById("page4").classList.remove('hidden');
    } else {
        document.getElementById("page3").classList.add('hidden');
        document.getElementById("page1").classList.remove('hidden');
    }
}

function moveNo() {
    const noButton = document.getElementById("noButton");
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * 80 + '%';
    noButton.style.top = Math.random() * 80 + '%';
}

function exit() {
    // Menghapus listener "beforeunload" karena pengguna telah menyelesaikan proses
    window.removeEventListener("beforeunload", function (event) {
        event.returnValue = "belum juga selesai jawab masa udah mau pergi :( .";
    });
    alert("makasih udah mau cobain hehe XD");
    window.close(); // Tidak semua browser akan menutup tab ini karena alasan keamanan
}