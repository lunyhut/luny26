function scrollToBanner() {
    const banner = document.querySelector(".banner");
    if (banner) {
        banner.scrollIntoView({
            behavior: "auto",
            block: "start"
        });
    } else {
        console.error("Không tìm thấy phần tử .banner trong DOM.");
    }
}

function waitForHeaderLoad() {
    const header = document.getElementById("header");

    if (header) {
        const observer = new MutationObserver(() => {
            if (header.innerHTML.trim() !== "") {
                console.log("#header đã được tải vào DOM!");
                scrollToBanner();
                observer.disconnect();
            }
        });

        observer.observe(header, { childList: true, subtree: true });
    } else {
        console.error("Không tìm thấy phần tử #header trong DOM.");
    }
}

document.addEventListener("DOMContentLoaded", waitForHeaderLoad);