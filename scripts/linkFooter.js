// Hàm tải nội dung footer và chèn vào DOM
function loadFooter() {
    fetch("../views/templates/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer").innerHTML = data;
            loadFooterCSS();
        })
        .catch((error) => console.error("Lỗi load footer:", error));
}

// Hàm thêm file CSS cho footer
function loadFooterCSS() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../css/template/footer.css";
    document.head.appendChild(link);
}

// Gọi hàm loadfooter để khởi chạy
loadFooter();