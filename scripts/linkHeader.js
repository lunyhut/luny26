// Hàm tải nội dung header và chèn vào DOM
function loadHeader() {
    fetch("../views/templates/header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header").innerHTML = data;
            loadHeaderCSS();
            initializePopupEvents();
            initializeStickyHeader();
        })
        .catch((error) => console.error("Lỗi load header:", error));
}

// Hàm thêm file CSS cho header
function loadHeaderCSS() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../css/template/header.css";
    document.head.appendChild(link);
}

// Hàm gắn sự kiện cho popup
function initializePopupEvents() {
    const openButtonMobile = document.getElementById("open-modal-mobile");
    const openButton = document.getElementById("open-modal");
    const closeButton = document.getElementById("close-modal");
    const modal = document.getElementById("modal");

    if (openButton && closeButton && modal) {
        openButton.addEventListener("click", () => {
            modal.classList.add("open");
        });

        closeButton.addEventListener("click", () => {
            modal.classList.remove("open");
        });
    }

    if (openButtonMobile && closeButton && modal) {
        openButtonMobile.addEventListener("click", () => {
            modal.classList.add("open");
        });

        closeButton.addEventListener("click", () => {
            modal.classList.remove("open");
        });
    }
}

// Hàm xử lý logic sticky header
function initializeStickyHeader() {
    const comprehensive = document.querySelector('.comprehensive');
    const header = document.querySelector('.header');
    const placeholder = document.querySelector('.header-placeholder');

    window.addEventListener('scroll', function () {
        const comprehensiveHeight = comprehensive.offsetHeight;
        if (window.scrollY >= comprehensiveHeight) {
            header.classList.add('fixed');
            placeholder.style.height = header.offsetHeight + 'px';
            placeholder.style.display = 'block';
        } else {
            header.classList.remove('fixed');
            placeholder.style.display = 'none';
        }
    });
}

// Hàm toggle menu
function toggleMenu() {
    const rightHeader = document.querySelector('.right-header');
    rightHeader.classList.toggle('active');
}

// Gọi hàm khởi chạy
loadHeader();