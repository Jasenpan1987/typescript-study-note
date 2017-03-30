var path = require("path");

module.exports = {
    entry: "./script.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\$.ts/,
                exclude: /node_modules/
            }
        ]
    }
}