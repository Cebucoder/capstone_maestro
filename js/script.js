//show share container
let ShareCont = document.getElementById('toggle-share-cont');
let CloseShareCont = document.getElementById('close-share-cont');
let ShareCat = document.getElementById('share-category');
ShareCont.addEventListener('click', () => {
    ShareCat.style.display = "flex";
});
CloseShareCont.addEventListener('click', () => {
    ShareCat.style.display = "none";

});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        ShareCat.style.display = "none";
    }
});


// get the url on the browser
const currentURL = window.location.href;
console.log(currentURL);
document.getElementById('ShadowCraft').value = currentURL;

// copy the link
const copyLinkButton = document.getElementById('copy-Link');
const inputElement = document.getElementById('ShadowCraft');

copyLinkButton.addEventListener('click', () => {
    // Select the text in the input field
    inputElement.select();
    
    try {
        // Copy the selected text to the clipboard
        document.execCommand('copy');
        console.log('Link copied to clipboard: ' + inputElement.value);
        let linkCopy = document.getElementById('link-copied');
        linkCopy.innerHTML = "Link copied to clipboard!";

        setTimeout( () => {
            linkCopy.innerHTML = "";
        },2000)

    } catch (err) {
        console.error('Failed to copy: ', err);
    }

    // Deselect the input field
    inputElement.setSelectionRange(0, 0);
});

document.getElementById('donate_icon').addEventListener('click', function(){
    document.getElementById('donate_con').classList.add('show_donate_con');
});

document.getElementById('close_donate_con').addEventListener('click', function(){
    document.getElementById('donate_con').classList.remove('show_donate_con');
});

