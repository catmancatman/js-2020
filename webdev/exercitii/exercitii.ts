interface Masina {
    greutate: Number
    kilometraj: Number
    sasiu: string
    start () : void
}
interface Conducere {
    merge ( kilometrii: Number)
}

interface Tehnic {
    sasiu: string
}



class BMW implements Masina, Tehnic {
    greutate: Number
    kilometraj: Number
    sasiu: string
    start ( ) : void {

    }
}

class Dacia implements Masina, Conducere {
    greutate: Number
    kilometraj: Number
    sasiu: string
    constructor(){
        this.greutate = 0
        this.kilometraj = 0
    }
    merge ( kilometrii: Number) {
        this.kilometraj = +this.kilometraj + +kilometrii
    }
    start ( ){

    }
}

class Mecanic {
    repara (masina: Masina) {
        masina.start()
    }
}

let o_dacie = new Dacia ()
o_dacie.merge(30)


