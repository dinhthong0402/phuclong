const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var nuocuong = [
    {
        name: "Cà Phê Sen Vàng Hạnh Nhân Đá Xay",
        rate: 5,
        giatien: 75000,
        img: "./images/caphesenvang.png"
    },
    {
        name: "Cà Phê Phúc Bồn Tử Hạnh Nhân Đá Xay",
        rate: 4,
        giatien: 65000,
        img: "./images/espressoraspberryalmond.png"
    },
    {
        name: "Trà Xanh Đá Xay",
        rate: 5,
        giatien: 55000,
        img: "./images/trxanhxayphclong.png"
    },
    {
        name: "Trà Đào Đá Xay",
        rate: 4,
        giatien: 65000,
        img: "./images/troxayphclong.png"
    },
    {
        name: "Cà Phê Dừa Xay Và Thạch",
        rate: 4,
        giatien: 65000,
        img: "./images/cphdaxayvthchphclong.png"
    },
    {
        name: "Cà Phê Bạc Hà Đá Xay",
        rate: 5,
        giatien: 55000,
        img: "./images/cphbchxayphclong.png"
    },
    {
        name: "Cà Phê Bạc Hà Đá Xay",
        rate: 4,
        giatien: 55000,
        img: "./images/dup.png"
    },
    {
        name: "Bánh Oreo xay cùng cà phê Cappuccino",
        rate: 5,
        giatien: 55000,
        img: "./images/bnhoreoxaycngcph.png"
    },

    {
        name: "Caramel Đá Xay",
        rate: 4,
        giatien: 55000,
        img: "./images/caramelxayphclong.png"
    },
    {
        name: "Sinh Tố Chuối, Dâu",
        rate: 4,
        giatien: 45000,
        img: "./images/sinhtchuiduphclong.png"
    },
    {
        name: "Hồng Trà Chanh",
        rate: 5,
        giatien: 40000,
        img: "./images/lemonblacktea.png"
    },
    {
        name: "Cà Phê Latte",
        rate: 4,
        giatien: 40000,
        img: "./images/cphlatte.png"
    },
];

var best = {
    name: "Cà Phê Sen Vàng Hạnh Nhân Đá Xay",
    rate: 5,
    giatien: 75000,
    img: "./images/caphesenvang.png",
    noidung: "Cà-phê Sen Vàng Hạnh Nhân Đá Xay có hương vị đắng nhẹ đặc trưng của cà-phê đá xay hoà quyện với lớp kem tươi được tô điểm thêm bởi topping hạnh nhân và hạt sen thơm bùi."
}

function _rating(rate){
    var html = ""
    for (let i = 0; i < rate; i++) {
        html += '<i class="fa fa-star"></i>\n'
    }
    return html
}

function money(x){
    return x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

function render(){
    const htmlbest = `
        <div class="col-2">
            <img src="`+best.img+`" alt="">
        </div>
        <div class="col-2">
            <h1>`+best.name+ ` (` + money(best.giatien) +`) </h1>
            <small>
                `+best.noidung+`
            </small>
            <br>
            <br>
            <br>
            <div class="button">
                <a href="#" class="btn">Đặt Hàng &#10132;</a>
            </div>
        </div>
    `
    $('#row-best').innerHTML = htmlbest
    //===================================
    const html = nuocuong.map(item => `
        <div class="col-4">
            <img src="`+item.img+`" alt="">
            <h4>`+item.name+`</h4>
            <div class="rating">
                `+_rating(item.rate)+`
            </div>
            <h5>`+money(item.giatien)+`</h5>
            <div class="button">
                <button class="dathang">Đặt Hàng</button>
            </div>
        </div>
        `).join('');
    $('#row-nuocuong').innerHTML = html
}

render()