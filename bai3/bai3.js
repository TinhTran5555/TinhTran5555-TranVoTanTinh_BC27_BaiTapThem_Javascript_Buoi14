function timCachDoc() {
    // B1: DOM tới các input và lấy giá trị
    var soNguyen = +document.getElementById("soNguyen").value;
    var soHangTram = Math.floor(soNguyen / 100);
    var soHangTruc = Math.floor((soNguyen / 10) % 10);
    var soDonVi = soNguyen % 10
    // B2 Lập ra các trường hợp băng if else 
    if (soHangTram == 1) {
        soHangTram = "Một trăm "
    } else if (soHangTram == 2) {
        soHangTram = "Hai trăm "
    }
    else if (soHangTram == 3) {
        soHangTram = "Ba trăm "
    }
    else if (soHangTram == 4) {
        soHangTram = "Bốn trăm "
    }
    else if (soHangTram == 5) {
        soHangTram = "Năm trăm "
    }
    else if (soHangTram == 6) {
        soHangTram = "Sáu trăm "
    }
    else if (soHangTram == 7) {
        soHangTram = "Bảy trăm "
    }
    else if (soHangTram == 8) {
        soHangTram = "Tám trăm "
    }
    else if (soHangTram == 9) {
        soHangTram = "Chín trăm "
    }


    if (soHangTruc == 1) {
        soHangTruc = "mười "

    } else if (soHangTruc == 2) {
        soHangTruc = "hai mươi "
    }
    else if (soHangTruc == 3) {
        soHangTruc = "ba mươi "
    }
    else if (soHangTruc == 4) {
        soHangTruc = "bốn mươi "
    }
    else if (soHangTruc == 5) {
        soHangTruc = "năm mươi "
    }
    else if (soHangTruc == 6) {
        soHangTruc = "sáu mươi "
    }
    else if (soHangTruc == 7) {
        soHangTruc = "bảy mươi "
    }
    else if (soHangTruc == 8) {
        soHangTruc = "tám mươi "
    }
    else if (soHangTruc == 9) {
        soHangTruc = "chín mươi "
    }
    else if (soHangTruc == 0) { 
        if (soDonVi!==0) {
            soHangTruc = "lẻ "
        } else {
            soHangTruc = ""
        }
    }


    if (soDonVi == 1) {
        soDonVi = "một"

    } else if (soDonVi == 2) {
        soDonVi = "hai"
    }
    else if (soDonVi == 3) {
        soDonVi = "ba"
    }
    else if (soDonVi == 4) {
        soDonVi = "bốn"
    }
    else if (soDonVi == 5) {
        soDonVi = "năm"
    }
    else if (soDonVi == 6) {
        soDonVi = "sáu"
    }
    else if (soDonVi == 7) {
        soDonVi = "bảy"
    }
    else if (soDonVi == 8) {
        soDonVi = "tám"
    }
    else if (soDonVi == 9) {
        soDonVi = "chín"
    }
    else if (soDonVi == 0) {
        soDonVi = ""
    }
    // B3 Xuất ra màn hình kết quả
    document.getElementById("ketQua").style.display = "block";
    document.getElementById("cachDoc").innerHTML = soHangTram + soHangTruc + soDonVi


}