function register() {
    console.log(`
    <div class="modal">
    <div class="modal__body">
        <div class="modal__header">
            <button class="modal__header-register btn">Đăng ký</button>
            <button class="modal__header-login btn">Đăng nhập</button>
        </div>
        <div class="modal__form">
            <input type="text" placeholder="Email của bạn">
            <input type="password" placeholder="Nhập mật khẩu">
            <input type="password" placeholder="Nhập lại mật khẩu">
        </div>
        <p class="modal__policy">Bằng việc đã đăng ký, bạn đã đồng ý với Nội Thất LDP về 
            <a href="#">Điều khoản dịch vụ</a>
            <span>& </span>
            <a href="#">Chính sách bảo mật</a>
        </p>
        <div class="modal__btn">
            <button class="btn-register btn-back">Trở lại</button>
            <button class="btn-register">Đăng ký</button>
        </div>
    </div>
</div>
    `)  
}

// register ()
