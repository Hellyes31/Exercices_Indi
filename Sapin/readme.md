# 🎄 Générateur de Sapin en JavaScript  

## 1. Énoncé  
Nous allons utiliser les **boucles** et les **imbrications de boucles** pour construire un beau sapin, roi des forêts 🎄.  

👉 Objectif : afficher un sapin directement dans la console, en utilisant uniquement **JavaScript**.  

**Contraintes** :  
- Langage : **JavaScript**  
- Utiliser un maximum de **fonctions** pour structurer le code  
- Respecter les étapes de construction  

A la fin de l’exercice, votre fonction devra afficher un sapin comme ci-dessous:
````markdown
       + 
      /|\
     /*|*\
    /**|**\
    /*o|**\
   /***|***\
  /**+*|*o**\
  /****|****\
 /***o*|**+**\
/*o*+**|***o**\
      ###
      ###
      ###
````

---

## 2. Étapes  

### Étape 1 : Un triangle d’étoiles  
Commencez par générer un simple triangle en utilisant des `/`, `*`, `|`, et `\`.  

Exemple :  
````markdown
    +
   /|\
  /*|*\
 /**|**\
/***|***\x
````


---

### Étape 2 : Sapin à étages  
Créez une fonction `afficherSapin(etages, hauteur_etage)` qui affichera un sapin avec plusieurs étages.  

Exemple :  
```js
afficherSapin(3, 3);
```
```markdown
     +
    /|\
   /*|*\
  /**|**\
   /*|*\
  /**|**\
 /***|***\
  /**|**\
 /***|***\
/****|****\
```
---

### Étape 3 : Sapin de salon 🎄

Ajoutez un tronc et des décorations (o et +) en plus des *.

Exemple final :
````markdown
       + 
      /|\
     /*|*\
    /**|**\
    /*o|**\
   /***|***\
  /**+*|*o**\
  /****|****\
 /***o*|**+**\
/*o*+**|***o**\
      ###
      ###
      ###
````
---
## 3. Utilisation

Git clone le projet puis ouvrir via vscode (besoin de node.js également)

👉 Pour personnaliser ton sapin, il suffit de modifier l’appel à la fonction :
```js
afficherPointeSapin(nbEtages, hauteurEtage, espaces);
```
- nbEtages : nombre d’étages du sapin (ex. 5)

- hauteurEtage : hauteur de chaque étage (ex. 3)

- espaces : décalage (backspace) pour centrer le sapin (ex. 10)

Exemples :
```js
afficherPointeSapin(3, 4, 8);  // Sapin plus petit
afficherPointeSapin(6, 5, 12); // Sapin plus grand

```
