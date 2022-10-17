function ttc(prix_ht, tva = 0.2) {

    if (parseFloat(prix_ht) && parseFloat(tva)) {
        return prix_ht + (prix_ht * tva);
    } else {
        return new Error('Arguments must be floats');
    }
    
}

ttc(100.50, 0.2) //?

ttc("hello", 0.2) //?

parseFloat("dsd15.5") //?

// ===================

function ttc2(ht, tva = 0.2) {
    const result = parseFloat(ht + (ht * tva));

    if (result) {
        return result.toFixed(2);
    } else {
        return new Error('Erreur de type')
    }
}

ttc2("fdsfd") //?


// ======================

function ttc(price, tva = .2) {

    // vérification du type avec parseFloat pour les chiffres avec virgule ou sans virgule
    if ( isNaN(parseFloat(price)) || isNaN(parseFloat(tva)) ) return new Error("Error number price value");

    return Math.floor( ( price * (1 + tva) ) * 100 ) / 100 ; // deux chiffres significatifs après la virgule
}