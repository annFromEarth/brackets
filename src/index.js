module.exports = function check(str, bracketsConfig) {

  if (str.length==0) {return true;}
  
  else {

    const Brackets = bracketsConfig.map(x=> x.join().replace(",", "")) ;   /*join bracket pairs in the configs to look for the "central pair" */

    let strNew                                                             /*prepare for the search of matches between the config and the string */
    let i=0;

    function testStringOnce(x) {

        strNew = x.replace(Brackets[i], "");
        i++;
        if (i==Brackets.length) {return strNew;}                           /*all the brackets config checked once*/
        else return testStringOnce(strNew);                                /*if not -- continue*/
    }

     if (testStringOnce(str).length == str.length) {return false;}         /*string not empty and nothing more to replace*/
     else return check(strNew, bracketsConfig);                            /*start again - this time another brackets config might be in the center*/
} }
