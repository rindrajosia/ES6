/*****************************
** Constante en majuscule ?
** importance: 4
* Examinez le code suivant :

const birthday = '18.04.1982';
const age = someCode(birthday);

* Ici nous avons une constante date birthday et l’age est calculé à partir de birthday
* avec l’aide d’un code (il n’est pas prévu pour être court, et parce que les détails n’ont pas d’importance ici).

* Serait-il juste d’utiliser des majuscules pour birthday? Pour age? Ou même pour les deux ?

const BIRTHDAY = '18.04.1982'; // créer en majuscule ?
const AGE = someCode(BIRTHDAY); // créer en majuscule ?

*/

const BIRTHDAY = '18.04.1982'; // Oui doit être en majuscule
const AGE = someCode(BIRTHDAY); // Non, doit être en miniscule puisque la valeur de AGE ne sera connue qu'apres execution de la foncton someCode()
