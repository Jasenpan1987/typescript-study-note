import "jquery";

// tsc -w: make the compiler to watch the directory
// tsc -init: create the tsconfig.json

/** tsconfig.json
 * {
        "compilerOptions": {
            "module": "commonjs",
            "target": "es5",
            "noImplicitAny": false,
            "sourceMap": false
        },
        "exclude": [
            "node_modules", // which files will be ignored, beside, all the files in this forder will be compile

        ],
        "files": [
            "app.ts", // the file that will be compiled in this forder
            "./node_modules/@types/jquery/index.d.ts" // also include the jquery into account
        ]
    }
 */

$("#root").css("background-color", "blue");