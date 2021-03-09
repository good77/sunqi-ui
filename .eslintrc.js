module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': true 
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  'parserOptions': {
    'ecmaVersion': 12
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'indent':[2, 2],
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-multiple-empty-lines': [1, {'max': 2}], //空行最多不能超过2行
    'array-bracket-spacing': [2, 'never'], //是否允许非空数组里面有多余的空格
    'brace-style': [1, '1tbs'], //大括号风格
    'callback-return': 1, //避免多次调用回调什么的
    'camelcase': 2, //强制驼峰法命名
    'comma-dangle': [2, 'never'], //对象字面量项尾不能有逗号
    'comma-spacing': 2, //逗号前后的空格
    'comma-style': [2, 'last'], //逗号风格，换行时在行首还是行尾
    'consistent-this': [2, 'that'], //this别名
    'curly': [2, 'all'], //必须使用 if(){} 中的{}
    'default-case': 2, //switch语句最后必须有default
    'new-cap': 2, //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    'new-parens': 2, //new时必须加小括号
    'one-var': 1, //连续声明
    'operator-linebreak': [2, 'after'], //换行时运算符在行尾还是行首
    'semi': [2, 'always'] //语句强制分号结尾
  }
};
