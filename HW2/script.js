var current_fs, next_fs, previous_fs; 
var left, opacity, scale; 
var animating;

document.addEventListener('DOMContentLoaded', function() {
    var nextButtons = document.querySelectorAll('.next');
    var previousButtons = document.querySelectorAll('.previous');

    nextButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if(animating) return false;
            animating = true;
            
            current_fs = this.parentNode;
            next_fs = this.parentNode.nextElementSibling;
            
            var progressbarItems = document.querySelectorAll('#progressbar li');
            progressbarItems[Array.from(document.querySelectorAll('fieldset')).indexOf(next_fs)].classList.add('active');
            
            next_fs.style.display = 'block'; 
            var current_fs_opacity = 1;
            var next_fs_left = 50;
            var next_fs_opacity = 0;
            var animationInterval = setInterval(function() {
                scale = 1 - (1 - current_fs_opacity) * 0.2;
                left = (current_fs_opacity * 50) + '%';
                opacity = 1 - current_fs_opacity;
                current_fs.style.transform = 'scale(' + scale + ')';
                current_fs.style.position = 'absolute';
                next_fs.style.left = left;
                next_fs.style.opacity = opacity;
                current_fs_opacity -= 0.1;
                next_fs_left -= 5;
                next_fs_opacity += 0.1;
                if (current_fs_opacity <= 0) {
                    clearInterval(animationInterval);
                    current_fs.style.display = 'none';
                    animating = false;
                }
            }, 25);
        });
    });

    previousButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if(animating) return false;
            animating = true;
            
            current_fs = this.parentNode;
            previous_fs = this.parentNode.previousElementSibling;
            
            var progressbarItems = document.querySelectorAll('#progressbar li');
            progressbarItems[Array.from(document.querySelectorAll('fieldset')).indexOf(current_fs)].classList.remove('active');
            
            previous_fs.style.display = 'block'; 
            var current_fs_opacity = 1;
            var previous_fs_scale = 0.8;
            var previous_fs_opacity = 0;
            var animationInterval = setInterval(function() {
                scale = previous_fs_scale + (1 - current_fs_opacity) * 0.2;
                left = ((1 - current_fs_opacity) * 50) + '%';
                opacity = 1 - current_fs_opacity;
                current_fs.style.left = left;
                previous_fs.style.transform = 'scale(' + scale + ')';
                previous_fs.style.opacity = opacity;
                current_fs_opacity -= 0.1;
                previous_fs_scale += 0.1;
                previous_fs_opacity += 0.1;
                if (current_fs_opacity <= 0) {
                    clearInterval(animationInterval);
                    current_fs.style.display = 'none';
                    animating = false;
                }
            }, 25);
        });
    });
});
