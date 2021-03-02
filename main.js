var currentYear = 2021;
var theirBirthYear = 2010;

var theirFullAge = currentYear - theirBirthYear;

var theirAgeCountingMonths = theirFullAge - 0.7 // 0.7 means if their birthdays in October and it's March rn, meaning they're (10 yrs and 3 months)

var screenOutput =  "They are either " + theirFullAge + " or " + theirAgeCountingMonths;
document.write(screenOutput);