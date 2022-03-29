function calc(){
    var sum = parseInt(document.getElementById("maths").value) + parseInt(document.getElementById("sci").value) + parseInt(document.getElementById("eng").value) + parseInt(document.getElementById("hin").value) + parseInt(document.getElementById("ssci").value);
    console.log(sum);
    var percentage = sum / 2;
    console.log(percentage);
    var a = parseFloat(document.getElementById("exper").value) / 100;
    var totalmarksrequired = a * 400;
    var marksneededmore = totalmarksrequired - sum;
    var marksineachsubjects = marksneededmore / 5;
    console.log(marksineachsubjects)
    if(marksineachsubjects === undefined | marksineachsubjects === NaN){
        document.getElementById("result").innerHTML = `Error! Please enter all fields`
    }
    else{
        document.getElementById("result").innerHTML = `You need to score approximately ${marksineachsubjects} in each subject to reach your goal percentage when the weightage of term 1 is 50%`
    }
}
