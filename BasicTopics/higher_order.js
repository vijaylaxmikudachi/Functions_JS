//Example1
function salary(num){
    return num*0.7;
}
setTimeout(salary,3000);

const mysalaries = [50,40,60,20,300,400];
mysalaries.filter(n => n >50);

//Example2
function x(){
    console.log("Namaste!");
}
function y(){
    x();
}
