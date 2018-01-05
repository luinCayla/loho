import Vue from 'vue'

Vue.directive('scroll-show', {
    inserted(el, binding) {


        let scope = binding.arg || '200';
        document.body.addEventListener("scroll", function(e) {
            if (this.scrollTop > Number(scope)) {
                binding.value.value = true;
            } else {
                binding.value.value = false;
            }
        })

    }
})

Vue.directive('back-top', {
    inserted(el, binding) {
        let e = binding.arg || 'click'
        el.addEventListener(e, function() {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        })
    }
})