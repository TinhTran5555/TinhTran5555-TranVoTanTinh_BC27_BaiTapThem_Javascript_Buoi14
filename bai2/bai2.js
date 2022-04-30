function timSoNgay() {
    // B1: DOM tới các input và lấy giá trị
    var thang = +document.getElementById("thang").value;
    var nam = +document.getElementById("nam").value;
    var soNgayCuaThang;
/*    B2: - Các tháng 1,3,5,7,8,10 và 12 là các tháng có 31 ngày
        - Các tháng 4,6,9 và 11 sẽ có 10 ngày
        - Tháng 2 năm nhuận sẽ có 29 ngày ngược lại năm không nhuận sẽ có 28 ngày */
    if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        soNgayCuaThang = 31
    } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        soNgayCuaThang = 30
    } else if (thang == 2) {
        if (nam % 4 == 0 || nam % 400 == 0) {
            soNgayCuaThang = 29
        } else {
            soNgayCuaThang = 28
        }
    }
    // B3 Xuất ra màn hình kết quả
    document.getElementById("ketQua").style.display = "block";
    document.getElementById("soNgay").innerHTML = soNgayCuaThang
}