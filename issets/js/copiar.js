
document.getElementById('button-copy').addEventListener('click', function() {
    var emailLink = document.getElementById('emailLink');

    var tempInput = document.createElement('input');
    tempInput.value = emailLink.textContent;

    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');

    document.body.removeChild(tempInput);


    var tooltip = document.getElementById('tooltip-email');
    tooltip.style.opacity = '1';
    setTimeout(function() {
        tooltip.style.opacity = '0';
    }, 2000); 
});
