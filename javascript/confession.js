async function loadConfessions() {
    const response = await fetch('/json/confession.json');
    const data = await response.json();

    const confessionsContainer = document.querySelector('.cfs-content');
    const keys = Object.keys(data.cfs_id).reverse();

    for (const id of keys) {
        const confessionData = data.cfs_id[id];
        const confessionContent = confessionData.cfs_content.replace(/\n/g, '<br>');
        const confessionReply = confessionData.cfs_reply;

        // Tạo thẻ div cho mỗi confession
        const divConfession = document.createElement('div');
        divConfession.classList.add('cfs');

        // Tạo phần tử cho cfs_id
        const pId = document.createElement('p');
        pId.textContent = `#Cfs${id}`;
        divConfession.appendChild(pId);

        // Thêm <hr> sau cfs_id
        const hr = document.createElement('hr');
        divConfession.appendChild(hr);

        // Tạo phần tử cho cfs_content
        const pContent = document.createElement('p');
        pContent.innerHTML = confessionContent;
        divConfession.appendChild(pContent);

        // Tạo phần tử cho cfs_reply (in nghiêng) nếu có
        if (confessionReply) {
            const pReply = document.createElement('p');
            pReply.innerHTML = `<em>${confessionReply.replace(/\n/g, '<br>')}</em>`;
            divConfession.appendChild(pReply);
        }

        // Thêm div confession vào confessionsContainer
        confessionsContainer.appendChild(divConfession);
    }
}

// Gọi hàm loadConfessions khi trang được tải
document.addEventListener("DOMContentLoaded", loadConfessions);
