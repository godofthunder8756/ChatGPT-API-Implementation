const disclosureModal = new bootstrap.Modal(document.getElementById('disclosureModal'), {});

function promptCheck() {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        document.getElementById('submitPrompt').click();
    };
}

function onPageLoad() {
    let disclosureCookie = getDisclosureCookie();

    if (disclosureCookie == "false") {
        disclosureModal.show();
    }
}

function createDisclosureCookie() {
    document.cookie = "disclosureAgreed=" + "false";
    let cookie = document.cookie;
    return "false";
}

function acceptDisclosureCookie() {
    document.cookie = "disclosureAgreed=" + "true";
}

function getDisclosureCookie() {
    let name = "disclosureAgreed=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return createDisclosureCookie();
}

function ModalClose()
{
    acceptDisclosureCookie();
    disclosureModal.hide();
}

function ModalRedirectUser()
{
    window.location = ('https://go.ajgco.com/');
}

// For snapping to input box
window.setFocus = function (element) {
element.focus();
};
