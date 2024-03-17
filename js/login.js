const users = [
    { usuario1: "Monte", password: "admin123", role: "admin" },
    { usuario2: "Gerardo", password: "123456", role: "usuario" }
];

function entrar(){
    const usu = document.getElementById('usuario').value;
    const cont = document.getElementById('contraseña').value;
    
    if(usu == 'Gerardo' && cont == '123456'){
        window.location.href = '../index.html';
    }
    else{
        alert('Usuario o contraseña incorrecta')
    }
    
}

