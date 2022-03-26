const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');



module.exports = {
    entry: {                //точка входа (откуда брать файлі)
        main: path.resolve(__dirname, './src/index.js'),   //берем с папки

          },

    output: {       //куда вигружаем
        path: path.resolve(__dirname, './dist'),    //указали папку выгрузки
         filename: '[name].bandle.js' //имя файла в который выгружаем
    },

    plugins: [new CleanWebpackPlugin(),    //удаляет предыдущие файлы в dist
        new HtmlWebpackPlugin({
        title: 'event ticket',   //название страницы в HTML
        template: path.resolve(__dirname, "./src/temlate.html"),     //откуда берем данные для рендера стрницы
        filename: 'index.html',   //куда скинуть файл после обработки  в папку dist
        inject: "body", //вставить в боди        
    }),
    new webpack.HotModuleReplacementPlugin(),
       ],
    
    module: {
    rules: [  //правила для работы с модулями  --весь JS  обработается babel
            {                 // /......./-синтаксис регулярного выражения , \. -разделитель точки, $-конец строки
                test: /\.js$/,  //все файлы с которыми работаем должны заканчиватся на .js
                exclude: "/node_modules/",   //исключить из проверки всех файлов папку node_modules
                use: [ "babel-loader"],     //с помощю какого лодера делаем все правила : test, exclude
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,   //  i-игнорирует регистр в названии(типы обрабатываемых картинок)
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,  //работа со шрифтами и инлайн svg
                type: 'asset/inline',
              },
              {
                  test: /\.(scss|css)$/, //работа с scss или css
                  use: ["style-loader", "css-loader", "postcss-loader","sass-loader" ]  //через такие пакеты в таком порядку как записано с права на лево
              },
              {
                test: /\.hbs$/,
                use: 'handlebars-loader',
              },

        ]
    },
    mode: "development",
    devServer: {
        static: {
          directory: path.resolve(__dirname, './dist'),
        },
        compress: true,
        port: 9000,
        client: {
            progress: true,
          },
      },

}
