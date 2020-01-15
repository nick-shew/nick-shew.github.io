$(document).ready(function () {
    writeFullName();
    $("#actual_content").load("include/experience.html");
    writeContactInfo();
});

function writeContactInfo(){
    writeEmail();
    writePhone();
    writeLinkedIn();
}

function writeFullName() {
    const first = "Nick";
    const last = "Shew";
    $("#full_name").html(`<span class="text-wrapper"><span class="letters">${first} ${last}</span></span>`);
}
function writeEmail() {
    const u = "nicholas.shew";
    const h = "gmail.com";
    const s = encodeURIComponent("Inquiry from Portfolio Website");
    $("#contact_address").html(`<a href="mailto:${u}@${h}?subject=${s}">${u}@${h}</a>`);
}
function writePhone(){
    const ac = "(+1) 614";
    const n ="271-1047";
    $("#contact_pn").html(`${ac}-${n}`);
}
function writeLinkedIn(){
    const url = "https://www.linkedin.com/in/nick-shew/";
    $("#contact_li").html(`<a href="${url}">nick-shew</a>`);
}
