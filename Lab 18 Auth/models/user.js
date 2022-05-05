modelue.exports = class User {
    constructor(nuevo_usuario, nuevo_password, nuevo_nombre){
        this.usuario = nuevo_usuario;
        this.passwrd = nuevo_password;
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el objeto
    save() {
        usuarios.push(this);
        console.log(usuarios);
    }


    static login(usuario,password) {
        return true;
    }
}