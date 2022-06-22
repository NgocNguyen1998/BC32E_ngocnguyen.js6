/**----------Bài tập 1---------- */
document.getElementById('tinhTong').onclick = function () {
    // input: 1+2+3+n >10000
    var sum = 0;
    // output: n number
    var soHang = 0
    // xử lý
    while (sum < 10000) {
        soHang++
        sum += soHang
    }
    document.getElementById('ketQua_b1').innerHTML = soHang;
}

/**----------Bài tập 2---------- */
document.getElementById('tinhTong_b2').onclick = function () {
    // input: số X và số N
    var nhapSoX = +document.getElementById('nhapSoX').value;
    var nhapSoN = +document.getElementById('nhapSoN').value;
    // Xử lý: dùng hàm
    var giaTri = tinhTongBinhPhuong(nhapSoN, nhapSoX);
    // output: tính tổng
    document.getElementById('ketQua_b2').innerHTML = 'Tổng: ' + giaTri.toLocaleString();
}

function tinhTongBinhPhuong(somu, soX) {
    var ketQua = 0;
    for (var iSo = 1; iSo <= somu; iSo++) {
        ketQua += Math.pow(soX, iSo);
    }
    return ketQua;
}
/**----------Bài tập 3---------- */

document.getElementById('tinhGiaiThua').onclick = function () {
    // input: number
    var nhapSo = +document.getElementById('nhapSo').value;
    // output: number
    var ketQua = 1;
    // Xử lý:
    for (var soHang = 1; soHang <= nhapSo; soHang++) {
        ketQua *= soHang
    }

    document.getElementById('ketQua_b3').innerHTML = 'Giai thừa: ' + ketQua.toLocaleString();
}

/**----------Bài tập 4---------- */
document.getElementById('taoTheDiv').onclick = function () {
    //    input: div chẵn và div lẻ
    var divChan = '<div style = "background-color:red; padding: 15px 0 15px 7px; font-size: 17px; color: white;"> Div chẵn </div>'
    var divLe = '<div style = "background-color:blue;padding: 15px 0 15px 7px; font-size: 17px; color: white;"> Div lẻ </div>'
    // output: string
    var ketQua = ''
    // Xử lý:
    for (var soHang = 1; soHang <= 10; soHang++) {
        if (soHang % 2 === 0) {
            ketQua += divChan
        } else {
            ketQua += divLe
        }
    }
    document.getElementById('ketQua_b4').innerHTML = ketQua;
}