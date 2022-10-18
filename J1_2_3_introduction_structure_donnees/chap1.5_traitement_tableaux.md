# Traiter efficacement des tableaux en JS

---

## La méthode classique

Le traitement classique d'un tableau en JS peut se faire de façon **impérative**.

Par exemple, si on souhaite mettre en majuscules tous les éléments d'un tableau dans un autre tableau, on peut procéder de la sorte :

```js
const fruits = ['Pêches', 'Pommes', 'Poires', 'Abricot'];

const fruits_majuscules = [];

for (let i = 0; i < fruits.length; i++) {
    fruits_majuscules[i] = fruits[i].toUpperCase();
}

console.log( fruits_majuscules );
// Contient : ['PÊCHES', 'POMMES', 'POIRES', 'ABRICOT'];
```

Cette méthode ne pose pas particulièrement de problèmes et fonctionne plutôt bien en règle générale.

Cependant, elle est un peu verbeuse et nécessite plus d'attention : il ne faut pas se tromper dans les index ni dans la condition de la boucle `for`.

De plus, si on a besoin de refaire le même traitement de mise en majuscules d'autres tableaux, il faudra ré-écrire la boucle et feraire l'assignation dans un nouveau tableau.

Bref, c'est pas la joie.

---

## La méthode `.forEach`

Le standard ECMA-262 qui définit JavaScript depuis de nombreuses années stipule que tous les tableaux disposent d'une méthode appelée `.forEach()`.

Cette méthode accepte une **fonction** en argument, qui sera appelée avec chaque valeur du tableau d'origine.

Exemple d'utilisation :

```js
const fruits = ['Pêches', 'Pommes', 'Poires', 'Abricots'];

fruits.forEach(fruit => {
    console.log(`J'aime les ${fruit} !`);
});

/* Résultat :

    J'aime les Pêches !
    J'aime les Pommes !
    J'aime les Poires !
    J'aime les Abricots !
*/
```

Si on observe, on voit que la fonction qui est passée à `.forEach` est la suivante :

```js
fruit => {
    console.log(`J'aime les ${fruit} !`);
}

// Note: Elle peut aussi s'écrire en version longue comme ceci :

function (fruit) {
    console.log(`J'aime les ${fruit} !`);
}
```

Cette fonction est donc appelée sur chaque élément du tableau `fruits` sur lequel on fait un `.forEach()`, et la valeur de chaque fruit lui est passée dans l'argument `fruit`.

---

## La méthode `.map`

De la même manière que `.forEach()`, tous les tableaux disposent aussi d'une méthode `.map()`

Cette méthode accepte une fonction en argument, qui sera en charge de **transformer** chaque valeur du tableau d'origine.

Exemple d'utilisation :

```js
const fruits = ['Pêches', 'Pommes', 'Poires', 'Abricot'];

const fruits_majuscules = fruits.map(fruit => fruit.toUpperCase());

// fruits_majuscules = ['PÊCHES', 'POMMES', 'POIRES', 'ABRICOT'];
```

Décomposons l'instruction :

```js
fruits.map( … );
```

On utilise la méthode `.map` disponible sur tous les tableaux JS afin de **transformer** le tableau `fruits`.

La fonction (fléchée) de transformation passée à `.map` est la suivante :

```js
fruit => fruit.toUpperCase();
```

> Notez qu'on pourrait la traduire en version longue comme ceci :
> ```js
> function (fruit) {
>    return fruit.toUpperCase();
> }
> ```

On indique donc à `.map` de transformer le tableau `fruits` d'origine en utilisant la fonction de mise en majuscule sur chaque élément :

```js
const fruits_majuscules = fruits.map(fruit => fruit.toUpperCase());
```

On obtient un nouveau tableau que l'on peut stocker immédiatement dans une variable.

La véritable force du mapping est que l'on peut enchaîner les opérations de transformation les unes à la suite des autres :

```js
const fruits = ['Pêches', 'Pommes', 'Poires', 'Abricot'];

const new_fruits = fruits.map(fruit => fruit.toUpperCase())
                         .map(fruit => "**" + fruit + "**");

// new_fruits = ['**PÊCHES**', '**POMMES**', '**POIRES**', '**ABRICOT**'];
```

---

## La méthode `.filter`

Tout comme `.map`, il est possible d'utiliser la méthode `.filter` dans le but de filtrer les éléments d'un tableau selon une condition précise.

Admettons que l'on souhaite supprimer tous les fruits comprenant la lettre `i`, on pourrait procéder de la sorte avec la programmation impérative :

```js
const fruits = ['Pêches', 'Pommes', 'Poires', 'Abricot'];

const fruits_filtered = [];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].includes("i") === false) {
        fruits_filtered.push(fruits[i]);
    }
}

// fruits_filtered = ['Pêches', 'Pommes'];
```

Cela fonctionne, mais encore une fois c'est très verbeux et difficile à lire.

La seule chose que l'on souhaite finalement faire est de **filtrer** le tableau **`fruits`** selon une condition particulière.

Avec la méthode `.filter` il est possible d'écrire la même chose de façon fonctionnelle :

```js
const fruits = ['Pêches', 'Pommes', 'Poires', 'Abricot'];

const fruits_filtered = fruits.filter(fruit => fruit.includes("i") === false);

// fruits_filtered = ['Pêches', 'Pommes']; 😎
```

Ici, la méthode `.filter` accepte en paramètre la fonction fléchée suivante :

```js
fruit => fruit.includes("i") === false
```

> Que l'on peut traduire en version longue par :
> ```js
> function (fruit) {
>    return fruit.includes("i") === false;
> }
> ```

La valeur retournée exprime la condition de filtrage :

- Si la condition renvoie `true`, la valeur est ajoutée au tableau final
- Si la condition renvoie `false`, la valeur n'est pas ajoutée au tableau final

En conclusion, lorsqu'on fait ceci :

```js
fruits.filter(fruit => fruit.includes("i") === false)
```

, on indique que l'on souhaite obtenir un nouveau tableau à partir de `fruits` pour lequel les éléments valident la condition exprimée par la fonction.

Encore une fois, l'avantage est que l'on peut tout enchaîner :

```js
const fruits = ['Pêches', 'Pommes', 'Poires', 'Abricot'];

const new_fruits = fruits.filter(fruit => fruit.length <= 6)
                         .filter(fruit => fruit.includes("o"))
                         .map(fruit => fruit.toUpperCase());

// new_fruits = ["POMMES", "POIRES"]
```

- `fruit => fruit.length <= 6` : Ne conserve que les éléments de longueur inférieure ou égale à 6
- `fruit => fruit.includes("o")` : Ne conserve que les éléments contenant la lettre "o"
- `fruit => fruit.toUpperCase()` : Transforme les éléments en majuscule



