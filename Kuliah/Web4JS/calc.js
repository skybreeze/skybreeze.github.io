var i1, i2, i3, res, grade;
//-----------------NO 1-----------------------
function cek(){
    i1 = document.getElementById('input1').value;
    grade = document.getElementById('grade');
    if (i1 < 0){ grade.innerHTML = 'nilai nya Salah (y)'; }
    else if(i1 <= 40){ grade.innerHTML = 'nilai '+i1+' gradenya <span style="font-weight:bold;">E<span>'; }
    else if(i1 <= 55){ grade.innerHTML = 'nilai '+i1+' gradenya <span style="font-weight:bold;">D<span>'; }
    else if(i1 <= 60){ grade.innerHTML = 'nilai '+i1+' gradenya <span style="font-weight:bold;">C<span>'; }
    else if(i1 <= 65){ grade.innerHTML = 'nilai '+i1+' gradenya <span style="font-weight:bold;">BC<span>'; }
    else if(i1 <= 70){ grade.innerHTML = 'nilai '+i1+' gradenya <span style="font-weight:bold;">B<span>'; }
    else if(i1 <= 80){ grade.innerHTML = 'nilai '+i1+' gradenya <span style="font-weight:bold;">AB<span>'; }
    else if(i1 <= 100){ grade.innerHTML = 'nilai '+i1+' gradenya <span style="font-weight:bold;">A<span>'; }
    else { grade.innerHTML = 'Nilai nya Salah (y)'; }
}

//----------------NO2---------------------------
res = document.getElementById('res');
function prep(){
    i2 = parseInt(document.getElementById('input21').value);
    i3 = parseInt(document.getElementById('input22').value);
}
function plus(){
    prep();
    res.value = i2 + i3;
}
function minus(){
    prep();
    res.value = i2 - i3;
}
function multiply(){
    prep();
    res.value = i2 * i3;
}
function divide(){
    prep();
    res.value = i2 / i3;
}
function pkt(){
    prep();
    res.value = Math.pow(i2,i3);
}