function functionAC() {
    document.getElementById("firstLine1").innerHTML = document.getElementById("nums-AC").value
    document.getElementById("screen").innerHTML = document.getElementById("nums-AC").value
}

function functionNegative() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-Negative").value
}
function functionMod() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-Mod").value
}
function functionDivide() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-Divide").value
}
function functionMulti() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-Multi").value
}
function functionMinus() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-Minus").value
}
function functionPlus() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-Plus").value
}

function functionResult() {
    const aa = document.getElementById("firstLine1").textContent
    document.getElementById("screen").textContent = eval(aa)
    // setTimeout(() => { clearScreen() }, 3000);
    setTimeout(() => {clearScreen1()}, 2000);
    setTimeout(() => {clearScreen2()}, 3000);
}
function clearScreen1() {
    document.getElementById("firstLine1").innerHTML = ""
}
function clearScreen2() {
    document.getElementById("screen").innerHTML = ""
}
function functionDot() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-Dot").value
}
function functionDash() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-Dash").value
}

function function0() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-0").value
}
function function1() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-1").value
}
function function2() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-2").value
}
function function3() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-3").value
}
function function4() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-4").value
}
function function5() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-5").value
}
function function6() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-6").value
}
function function7() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-7").value
}
function function8() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-8").value
}
function function9() {
    document.getElementById("firstLine1").textContent += document.getElementById("nums-9").value
}










let numsartı = document.getElementById('numsartı');


numsartı.addEventListener('click', function() {
  let sonuc = document.getElementById('sonuc');
  sonuc.textContent = "+";
});











function topla() {
    let sayi1 = Number(document.getElementById("sayi1").value);
    let sayi2 = Number(document.getElementById("sayi2").value);
  
    document.getElementById("sonuc").textContent = `Sonuç: ${sayi1 + sayi2}`;
  }
  
  function cikar() {
    let sayi1 = Number(document.getElementById("sayi1").value);
    let sayi2 = Number(document.getElementById("sayi2").value);
  
    document.getElementById("sonuc").innerHTML = `Sonuç: ${sayi1 - sayi2}`;
  }
  
  function carp() {
    let sayi1 = Number(document.getElementById("sayi1").value);
    let sayi2 = Number(document.getElementById("sayi2").value);
  
    document.getElementById("sonuc").innerHTML = `Sonuç: ${sayi1 * sayi2}`;
  }
  
  function bol() {
    let sayi1 = Number(document.getElementById("sayi1").value);
    let sayi2 = Number(document.getElementById("sayi2").value);
  
    if (sayi2 !== 0) {
      document.getElementById("sonuc").innerHTML = `Sonuç: ${sayi1 / sayi2}`;
    } else {
      document.getElementById("sonuc").innerHTML = `Sayı sıfıra bölünemez. Hatalı işlem yaptınız.`;
    }
  }
  