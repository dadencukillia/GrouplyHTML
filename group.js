function init(groupClickEvent) {
    showByAttribute(getActiveTab().getAttribute("frame_name"));
    Array.from(document.querySelector(".group .panel").children).forEach((el, index) => {
        el.addEventListener("click", () => {
            groupClickEvent?res=groupClickEvent(el, index, el.getAttribute("frame_name"), getActiveTab()):null;
            res?console.log("Clicked!"):null;
            activateTab(index)
        });
    });
}
function showByAttribute(value) {
    document.querySelector(".group .frame>#"+value).style.display = "block";
}
function getActiveTab() {
    return document.querySelector(".group .panel>#tab.active");
}
function hideAllFrames() {
    Array.from(document.querySelector(".group .frame").children).forEach(el => {
        el.style.display = "none";
    });
}
function activateTab(index) {
    Array.from(document.querySelector(".group .panel").children).forEach(el => {
        el.className = "";
    });
    Array.from(document.querySelector(".group .panel").children)[index].className = "active";
    hideAllFrames();
    showByAttribute(Array.from(document.querySelector(".group .panel").children)[index].getAttribute("frame_name"));
}
init((el, index, attr, before) => {
    console.log(index+" "+attr+" "+before.getAttribute("frame_name"));
    return true;
});