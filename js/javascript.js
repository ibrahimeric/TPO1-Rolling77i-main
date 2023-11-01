document.addEventListener('DOMContentLoaded', function() {
    var sparkles = document.getElementById('sparkles');

    document.body.addEventListener('mousemove', function(e) {
        var sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = (e.clientX - 10) + 'px';
        sparkle.style.top = (e.clientY - 10) + 'px';
        sparkles.appendChild(sparkle);

        setTimeout(function() {
            sparkle.remove();
        }, 1000);
    });
});