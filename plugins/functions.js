import Vue from 'vue';

Vue.prototype.$utm = function(full = false, first = true) {

    let source = ''
    if (typeof this.$cookies.get('source') !== 'undefined') {
        if (full) {
            if (first) {
                source += '?'
            }
            source += 'source='
        }
        source += this.$cookies.get('source')
    }

    return source
    
}