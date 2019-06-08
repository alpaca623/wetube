const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

// 노란 경고문을 없애주기 위해 실행시 입력되는 설정을 가져온다.
const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  // webpack 빌딩 시작을 위해 사용해야하는 webpack 모듈들을 가리킨다.
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    // test에 해당하는 파일을 만나면 use에 있는 로더를 실행한다.
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      // scss 파일을 찾으면 css파일로 변환한다.
      /**
       * 1. scss파일을 찾는다.
       * 2. css텍스트로 변환한다.
       * 3. css텍스트를 파일로 추출시킨다.(extract-text-webpack-plugin 이용)
       */
      {
        test: /\.(scss)$/,
        use: ExtractCSS.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [autoprefixer({ browsers: "cover 99.5%" })];
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
