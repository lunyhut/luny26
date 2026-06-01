var wrappers = document.querySelectorAll('.product');
for (var i = 0; i < wrappers.length; i++) {
    wrappers[i].addEventListener('mouseenter', function () {
        var btn = this.querySelector('.addToCart');
        btn.classList.add('active');

    });
    wrappers[i].addEventListener('mouseleave', function () {
        var btn = this.querySelector('.addToCart');
        btn.classList.remove('active');
    });

    var btn = wrappers[i].querySelector('.addToCart');
    if(btn) {
        btn.addEventListener('click', function(event){
            this.innerHTML = 'Đã thêm!';
            this.style.backgroundColor = 'green';
            this.style.border = '1px solid green'
            var self = this
            setTimeout(
                function(){
                    self.classList.remove('active');
                },1000)
        });
    }

}
