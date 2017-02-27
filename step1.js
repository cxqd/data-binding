function Observer(data) {
  this.data = data;
  this.walk(data);
}

const op = Observer.prototype;

const hOP = Object.prototype.hasOwnProperty;

op.walk = function(data) {
  for (var key in data) {
    if (hOP.call(data, key)) {
      const value = data[key];

      if (typeof i === 'object') {
        new Observer(value);
      }

      this.convert(key, value);
    }
  }
};

op.convert = function(key, value) {
  Object.defineProperty(this.data, key, {
    get: function() {
      console.log(`你访问了 ${key}`);
      return value;
    },
    set: function(newValue) {
      console.log(`你设置了 ${key}，新的值为 ${newValue}`)
      value = newValue;
    },
    enumerable: true,
    configurable: true,
  });
};

const app1 = new Observer({
  name: 'youngwind',
  age: 25
});

const app2 = new Observer({
  university: 'bupt',
  major: 'computer'
});

// 要实现的结果如下：
app1.data.name; // 你访问了 name
app1.data.age = 100;  // 你设置了 age，新的值为100
app2.data.university; // 你访问了 university
app2.data.major = 'science';  // 你设置了 major，新的值为 science