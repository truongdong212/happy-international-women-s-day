idUrl = location.search.slice(location.search.search("id=") + 3, 9)
btnNo = document.querySelector(".btn-no")
btnYes = document.querySelector(".btn-yes")
page2 = document.querySelector(".page-2")
trollNumber = 0

btnNo.onclick = () => { clickNo() }
btnYes.onclick = () => { clickYes() }

if (idUrl == "") {
    alert("Ko tìm thấy dữ liệu, vui lòng nhập id của bạn!")
    idInput = prompt("ID của bạn là (Web DEMO - 00000):", "00000")
    location.href = `${location.href}?id=${idInput}`
} else {
    fetch("https://jsonblob.com/api/jsonBlob/1204779753050857472")
        .then((res) => { return res.json() })
        .then((dataAPI) => {
            if (!dataAPI[idUrl]) {
                alert("Ko tìm thấy dữ liệu, vui lòng nhập đúng id của bạn hoặc liên hệ Admin nếu id bị lỗi!")
            } else {
                if (idUrl == "00000") {
                    setTimeout(() => {
                        alert("Trang web này là bản DEMO!\n- Nghiêm cấm sử dụng web DEMO để đi gửi cho mọi người\n- Mọi chữ và ảnh trên web này đều có thể thay đổi được\n- Tôi sẽ thay đổi mọi yêu cầu và hỗ trợ host cho bạn\n- Khi hoàn thành, bạn chỉ cần nhận link riêng và đi xin lì xì thôi\n- Vui lòng liên hệ tôi qua Facebook: Dong Truong")
                    }, 1000)
                }

                console.log(dataAPI[idUrl])
                document.title = dataAPI[idUrl].title
                document.querySelector("#main").style.backgroundImage = `url(${dataAPI[idUrl].background})`
                document.querySelector("#main").style.backgroundSize = "cover"
                document.querySelector("#main").style.backgroundPosition = "center"
                document.querySelector(".notification").innerText = dataAPI[idUrl].notification
                document.querySelector(".image").src = dataAPI[idUrl].image
                btnNo.innerText = dataAPI[idUrl].button[0]
                btnYes.innerText = dataAPI[idUrl].button[1]
                document.querySelector(".image-receive").src = dataAPI[idUrl]["image-receive"]
                document.querySelector(".notification-receive-1").innerText = dataAPI[idUrl]["notification-receive-1"]
                document.querySelector(".notification-receive-2").innerText = dataAPI[idUrl]["notification-receive-2"]
            }
        })
}

function clickNo() {
    switch (trollNumber) {
        case 0:
            transformBtn(btnNo, "40%", "25%")
            transformBtn(btnYes, "60%", "50%")
            trollNumber += 1
            break;
        case 1:
            transformBtn(btnNo, "30%", "20%", "30px", "60px", "15px")
            transformBtn(btnYes, "62%", "48%", "60px", "160px", "25px")
            trollNumber += 1
            break;
        case 2:
            transformBtn(btnNo, "15%", "5%", "20px", "30px", "8px")
            transformBtn(btnYes, "63%", "48%", "70px", "180px", "30px")
            trollNumber += 1
            break;
        case 3:
            transformBtn(btnNo, "-10%", "-10%")
            if (screen.width <= 500) {
                transformBtn(btnYes, "50%", "20%", "100px", "250px", "35px")
            } else { transformBtn(btnYes, "63%", "46%", "100px", "250px", "35px") }
            break;
    }
}

function clickYes() {
    page2.classList.remove("hidden")
    btnNo.style.opacity = 0
    btnYes.style.opacity = 0
}

function transformBtn(ele, top, left, height, width, fontSize) {
    ele.style.top = top
    ele.style.left = left
    ele.style.height = height
    ele.style.width = width
    ele.style.fontSize = fontSize
}