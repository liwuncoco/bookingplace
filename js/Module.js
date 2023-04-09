export function OpenMenu() {
    let Menu = document.getElementById("menu");
    Menu.onclick = function() {
        document.getElementById("PhoneMenu").style.display = "block";
    }
}

export function CloseMenu() {
    let Close = document.getElementById("close");
    Close.onclick = function() {
        document.getElementById("PhoneMenu").style.display = "none";
    }
}

export function Years() {
    let Years = new Date().getFullYear();
    document.getElementById("Year").textContent = Years;
}
