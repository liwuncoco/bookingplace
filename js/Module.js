export function OpenMenu() {
    let Menu = document.getElementById("menu");
    Menu.onclick = function() {
        document.getElementById("PhoneMenu").style.display = "block";
        
    }
}
export function OpenSubForm() {
    let Btn = document.getElementById("BtnGolf");
    Btn.onclick = function() {
        document.getElementById("SubForm").style.display = "block";
        // 偵聽物件：視窗捲軸物件
        window.document.body.scrollTop = 0;
        window.document.documentElement.scrollTop = 0;
    }   
}

export function CloseMenu() {
    let Close = document.getElementById("close");
    Close.onclick = function() {
        document.getElementById("PhoneMenu").style.display = "none";
    }
}

export function CloseSubForm() {
    let Close = document.getElementById("closeForm");
    Close.onclick = function() {
        document.getElementById("SubForm").style.display = "none";
    }

}

export function Years() {
    let Years = new Date().getFullYear();
    document.getElementById("Year").textContent = Years;
}
