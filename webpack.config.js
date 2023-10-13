const path = require('path')

module.exports = {
  entry: './script/background.js',  // Archivo de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'script'),
    publicPath: '/',
    filename: 'bundle.js' // Nombre del archivo de salida después de la compilación
  },

  devtool: 'cheap-module-source-map',
  mode: "development",
  devServer: {
    contentBase: './dist', // Carpeta base para servir archivos estáticos
  }
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "script-loader"
  //       }
  //     }
  //   ]
  // }
};