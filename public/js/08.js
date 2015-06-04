function fizzbuzz(a){
  result = a;
  if(a % 15 == 0){
    result = ("fizzbuzz")
  }else if(a % 3 == 0){
    result = ("fizz")
  }else if(a % 5 == 0){
    result = ("buzz")
  }
  return result;
}
