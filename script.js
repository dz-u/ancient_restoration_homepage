let currentPage = 1;
const totalPages = 312;  // 実際のページ数に合わせて調整
const image1Element = document.getElementById('image1');
const image2Element = document.getElementById('image2');
const pageNumberElement = document.getElementById('page-number');

function updatePage() {
    image1Element.src = `turezuregusa/image${currentPage}.jpg`;
    image2Element.src = `turezuregusa_res_gamma0.8/image${currentPage}.png`;
    pageNumberElement.textContent = currentPage;
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
}

updatePage();  // 初期表示の更新
