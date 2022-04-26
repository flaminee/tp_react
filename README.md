
# Lancer le TP 

Exécutez `npm start`
 [http://localhost:3000](http://localhost:3000) 

##Structure du TP

les 3 composants demander, Beer BeerList et About se trouve
dans le package components

**BeerList**

Dans beerList on a 3 variables :

```  
const [value, setValue] = React.useState(''); 
const [beers, setList] = React.useState(init);
const [counter, setCouter] = React.useState(init.length);
```  

**value** : corresponds au nom de la bière qu'on veut ajouter </br>
**beers** : corresponds à la liste de bière </br>
**counter** : sert à donner un id unique à chaque bière 


On a 3 fonction :

**handleChange** : qui sert à modifier la valeur de value  </br>
**handleSubmit** : qui ajoute une bière à la liste de nom value </br>
**handleClick** : qui sert à supprimer une bière de la liste </br>