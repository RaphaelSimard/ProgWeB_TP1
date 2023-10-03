class Couleur {

    constructor(couleur, type, codeRGBA, codeHex) {
        this._couleur = couleur;
        this._type = type;

        //Aurait pu être un objet Code
        this._codeRGBA = codeRGBA;
        this._codeHex = codeHex;
    }

    get couleur() {
        return this._couleur;
    }

    set couleur(value) {
        this._couleur = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get codeRGBA() {
        return this._codeRGBA;
    }

    set codeRGBA(value) {
        this._codeRGBA = value;
    }

    get codeHex() {
        return this._codeHex;
    }

    set codeHex(value) {
        this._codeHex = value;
    }

   toString(){
        return "couleur : " + this._couleur +
            ", type : " + this._type +
            ", code RGBA : " + this._codeRGBA +
            ", code Hex : " + this._codeHex;
   }
}