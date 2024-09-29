// Bài Tập 1

let soNgayLamViec = prompt("Nhập số ngày làm việc:", "0");
let tienLuongNgay = 100000;

let tongTienLuong = tienLuongNgay * parseInt(soNgayLamViec);
alert(`Lương của bạn là ${tongTienLuong}`);

// Bài Tập 2

let number1 = parseFloat(prompt("Nhập số thực thứ 1:"));
let number2 = parseFloat(prompt("Nhập số thực thứ 2:"));
let number3 = parseFloat(prompt("Nhập số thực thứ 3:"));
let number4 = parseFloat(prompt("Nhập số thực thứ 4:"));
let number5 = parseFloat(prompt("Nhập số thực thứ 5:"));

let averageNumber = (number1 + number2 + number3 + number4 + number5) / 5;
alert(`Trung Bình của 5 số là ${averageNumber}`);

// Bài Tập 3

let giaUsd = parseFloat(prompt("Nhập vào giá USD:"));
let soUsdCanQuyDoi = parseFloat(prompt("Nhập vào số tiền quy đổi:"));

let soTienVNDNhanDuoc = giaUsd * soUsdCanQuyDoi;

alert(`Số tiền VND nhận được là: ${soTienVNDNhanDuoc}VNĐ`);

// Bài Tập 4

let chieuDai = parseFloat(prompt("Nhập vào chiều dài hình chữ nhật:"));
let chieuRong = parseFloat(prompt("Nhập vào chiều rộng hình chữ nhật:"));

let chuVi = (chieuDai + chieuRong) * 2;
let dienTich = chieuDai * chieuRong;

alert(`Chu vi hình chữ nhật là ${chuVi}`);
alert(`Chu vi hình chữ nhật là ${dienTich}`);
