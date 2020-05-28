const nodeExternals = require("webpack-node-externals");

const path = require("path");

module.exports = () => {
    return {
        context: __dirname,
        mode: "production",
        name: "server",
        node: false,
        entry: [path.join(__dirname, "./src/server/index.js")],
        target: "node",
        output: {
            path: path.join(__dirname, "/dist/server"),
            filename: "bundle.js",
            publicPath: "/dist/",
            libraryTarget: "commonjs2"
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                }
            ]
        }
    };
};
