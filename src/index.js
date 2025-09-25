//!======================================================
setTimeout(function timeout() {
  console.log("1");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("2");
  resolve();
});

p.then(function () {
  console.log("3");
});

console.log("4");
//!======================================================
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
//!======================================================
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);
//!======================================================
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });
setTimeout(() => console.log("1"), 1000);
myPromise(1000).then((res) => console.log("2"));
setTimeout(() => console.log("3"), 100);
myPromise(2000).then((res) => console.log("4"));
setTimeout(() => console.log("5"), 2000);
myPromise(1000).then((res) => console.log("6"));
setTimeout(() => console.log("7"), 1000);
myPromise(5000).then((res) => console.log("8"));
//!======================================================
//!======================================================
//!======================================================
setTimeout(() => {
  console.log(1);
}, 0);
new Promise((resolve, reject) => {
  console.log(2);
  resolve(null);
}).then((v) => {
  console.log(3);
});
console.log(4);
//!======================================================
setTimeout(function () {
  console.log("s1");
}, 0);
setTimeout(function () {
  console.log("s2");
}, 1000);
new Promise(function (resolve) {
  console.log("p1");
  resolve();
  console.log("p2");
}).then(function () {
  console.log("p3");
});
console.log("w1");
async function test1() {
  console.log("a1");
  await test2();
  console.log("a2");
}
async function test2() {
  console.log("a3");
}
test1();
console.log("w2");
//!======================================================
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });
//!======================================================
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Start");
    resolve("success");
  }, 5000);
});

const start = Date.now();
console.log("w1");

promise.then((res) => {
  console.log(res, Date.now() - start);
});

promise.then((res) => {
  console.log(res, Date.now() - start);
});
//!======================================================
console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
});

new Promise((resolve, reject) => {
  console.log(4);
  resolve(5);
}).then((data) => {
  console.log(data);

  Promise.resolve()
    .then(() => {
      console.log(6);
    })
    .then(() => {
      console.log(7);

      setTimeout(() => {
        console.log(8);
      }, 0);
    });
});

setTimeout(() => {
  console.log(9);
});

console.log(10);
//!======================================================
//!======================================================
//!======================================================
Promise.resolve("1")
  .then((data) => {
    console.log(data);
  })

  .then((data) => {
    console.log(data);
    return "2";
  })

  .then((data) => {
    console.log(data);
  });
//!======================================================
Promise.reject(1)
  .then((data) => {
    console.log(data);
  })
  .then(null, (data) => console.log(data))
  .then(() => console.log("ok"));
//!======================================================
Promise.reject().then(
  (data) => console.log("ok"),
  (data) => console.log("error")
);
//!======================================================

Promise.resolve("1")
  .then(null)
  .then((data) => console.log(data));
//!======================================================
Promise.reject("Api Error")
  .then((data) => console.log("ok"))
  .catch((error) => {
    console.log(error);
    return "1";
  })
  .then((data) => {
    console.log(data);
  });
//!======================================================
Promise.reject()
  .catch(() => {
    console.log("error1");
    return Promise.reject();
  })

  .catch(() => {
    console.log("error2");
  });
//!======================================================
Promise.resolve()
  .then((data) => {
    throw new Error("Api Error");
    return 1;
  })
  .then((data) => console.log("ok"))

  .catch((error) => {
    console.log(error.message);
    return "2";
  })

  .then((data) => {
    console.log(data);
  });
//!======================================================
Promise.resolve().then(() => {
  throw new Error("Api Error");
});

setTimeout(() => {
  console.log("setTimeout");
}, 1000);
//!======================================================
Promise.reject("Api Error")
  .catch(null)
  .then((data) => console.log("ok"))
  .catch((error) => console.log(error))
  .then((data) => console.log("ok"));
//!======================================================
Promise.resolve()
  .then(() => {
    return "1";
  })

  .finally((data) => {
    console.log(data);
    return "2";
  })

  .then((data) => console.log(data));
//!======================================================
Promise.reject().finally((data) => {
  console.log("finally");
});
//!======================================================
Promise.resolve()
  .then(() => console.log(1))
  .then(() => console.log(2));

Promise.resolve()
  .then(() => console.log(11))
  .then(() => console.log(12));
//!======================================================
Promise.resolve()
  .then(() => console.log(1))
  .then(() => {
    console.log(2);
    throw new Error();
  })
  .catch(() => console.log(3))
  .then(() => console.log(4));

Promise.resolve()
  .then(() => console.log(11))
  .then(() => {
    console.log(12);
    throw new Error();
  })
  .catch(() => console.log(13))
  .then(() => console.log(14));
//!======================================================
const foo = () => {
  Promise.resolve().then(() => foo());
};

foo();
//!======================================================
