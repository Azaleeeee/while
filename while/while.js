"use strict";

//          WHILE
/**
 * Declarer une varaible a qui est egale a 3
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal a 8 on arrete la boucle 
 * si a est egal a 7 on revient au debut de la boucle 
 * on console log(a)
 */
let chrono=3;
while(chrono<9){
    chrono++
    if(chrono==7){
        continue    //continue la boucle
    }
    if(chrono==8){
        break
    }
    console.log(chrono);
}
console.log('Jai cassé la boucle au bout de '+chrono+" tours");
