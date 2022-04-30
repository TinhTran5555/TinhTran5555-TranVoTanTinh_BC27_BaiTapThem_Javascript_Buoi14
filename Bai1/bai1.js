function timNgay() {
    // B1: DOM tới các input và lấy giá trị
    var ngay = +document.getElementById("ngay").value;
    var thang = +document.getElementById("thang").value;
    var nam = +document.getElementById("nam").value;
    var ngayToiDa;
    var thangToiDa;
    var namToiDa;
    var ngayXuat;
    var thangXuat;
    var namXuat
    /* B2: - Ta có hai trường hợp là năm nhuận thì tháng 2 có 29 ngày và năm không nhuận thì tháng 2 có 28 ngày
        - Các tháng 1,3,5,7,8,10 và 12 là các tháng có 31 ngày
        - Nếu tháng nhập vào không phải tháng 12 và số ngày bằng số ngày tối đa của tháng thì ta tăng tháng lên 1 và ngày = 1
        - Nếu tháng nhập vào là tháng 12 và số ngày bằng số ngày là 31 thì ta sẽ có ngày là 1 rồi tăng tháng, năm thêm 1 */
    if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        ngayToiDa = 31
    } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        ngayToiDa = 30
    }
    //  else if (thang==2) 
    // {
    //     if (nam % 4 == 0 || nam % 400 ==0) { 
    //         ngayToiDa = 29 
    //     } else {ngayToiDa=28}
    // }


    if (thang !== 12 && ngay == ngayToiDa) {
        ngayXuat = 1
        thangXuat = thang + 1
        namXuat = nam
    } else if (thang == 12 && ngay == ngayToiDa) {
        ngayXuat = 1
        thangXuat = 1
        namXuat = nam + 1
    } else if (thang == 2) {
        if (ngay == 29 && nam % 4 == 0 || nam % 400 == 0) {
            ngayXuat = 1
            thangXuat = 3
            namXuat = nam
        }
        else if (ngay == 28) {
            if (nam % 4 == 0 || nam % 400 == 0) {
                ngayXuat = ngay + 1
                thangXuat = thang
                namXuat = nam
            } else {
                ngayXuat = 1
                thangXuat = 3
                namXuat = nam
            }
        }
        else {
            ngayXuat = ngay + 1
            thangXuat = thang
            namXuat = nam
        }

    } else {
        ngayXuat = ngay + 1
        thangXuat = thang
        namXuat = nam
    }
    // B3 : Xuất kết quả ra màn hình 
    document.getElementById("ketQua").style.display = "block";
    document.getElementById("ngayTiepTheo").innerHTML = ngayXuat + "/" + thangXuat + "/" + namXuat;
}

