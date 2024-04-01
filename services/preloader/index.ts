const app = document.getElementById('app');
const preloader = document.getElementById('preloader');

export const loader = async function (Variable: any) {
    Variable.$el = {
        app,
        body: document.querySelector('body')
    }
}

export const progress = async function ({ load, total }) {

    let count = Math.round((load / total) * 100)
    
    if (count == 100) {
        
        setTimeout(() => {
            if (preloader) {
                preloader.style.display = "none"
            }
        }, 50);
    }
}