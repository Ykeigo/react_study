function ChangeParaToDate() {
  document.getElementById("eid_date").innerHTML = Date();
}

function constTest() {
  const a = true;
  a = false;
  console.log(a);
}

function arrowTest() {
  const person = (f, l) => ({
    first: f,
    last: l,
  });
  console.log(person(oy, ke));
}

function destructureTest() {
  const l = ({ firstName }) => {
    console.log(`firstname is ${firstName}`);
  };
  const p = {
    firstName: "hoge",
    lastName: "huga"
  };
  console.log(l(p));
}

