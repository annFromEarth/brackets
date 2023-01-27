module.exports = function check(str, bracketsConfig) {

  const Brackets = bracketsConfig.map(x=> x.join().replace(",", "")) ;

  
if (str.length==0) {return true;}

else {
  let strNew 
  let i=0;

  function testStringOnce(x) {

      strNew = x.replace(Brackets[i], "");
      i++;
      if (i==Brackets.length) {return strNew;}   /* all the brackets config checked once*/
      else return testStringOnce(strNew);        /* if not -- continue*/

  }

   if (testStringOnce(str).length == str.length) {return false;}  /*string not empty and nothing more to replace*/
   else return check(strNew, bracketsConfig);    /* start from the beginning - as this time another brackets config might be in the center*/

} }
