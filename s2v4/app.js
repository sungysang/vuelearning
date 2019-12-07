const hello = new Vue({
    el: '#helloVue',
    data: {
        title: "Hellom world!",
        message: "first"
    }
});

const example = new Vue({
    el: '#example',
    data: {
        title: "hi!",
        message: 'meeee',
        name: "pretz",
        img: {
            src: 'https://placeimg.com/200/200/animals',
            alt: 'Pic'
        }
    }
});

const book = new Vue({
    el: '#book',
    data: {
        title: "BookName",
        author: "SS",
        summary: "hey",
        showDetail: false
    },
    methods: {
        toggleDetails: function() {
            this.showDetail = !this.showDetail;
        }
    }


});