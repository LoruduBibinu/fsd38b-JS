
function sumTTC(p1, p2, p3, tva = 0.2) {
    /* if (isNaN(parseFloat(prix1)) || isNaN(parseFloat(prix2)) || isNaN(parseFloat(prix3)) || isNaN(parseFloat(tva))) {
        return new Error('Erreur de type')
    } */

    const total_ttc = parseFloat( (p1 + p2 + p3) * (tva + 1) );
    
    /* if (total_ttc) {
        return total_ttc;
    } else {
        return new Error('Erreur de type');
    } */

    // Version factorisée
    return !isNaN(total_ttc) ? total_ttc : new Error('Erreur de type')
}

// ===========

const priceHT = [100.50, "fds", 55.7];
sumTTC(...priceHT, 0.2) //?