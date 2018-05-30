"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
function Student(name, gpa) {
    this.name = name;
    this.gpa = gpa;
}
Student.prototype.getGPA = function () {
    return this.gpa;
};
class StudentClass {
    constructor(name, gpa) {
        this.name = name;
        this.gpa = gpa;
    }
    getGPA() {
        return this.gpa;
    }
    getName() {
        return this.name;
    }
}
class Startup {
    static main() {
        console.log('Hello, World');
        var test = new StudentClass("Carson", 1.0);
        console.log(test.getGPA().toPrecision(2));
        console.log(area(5));
        return 0;
    }
}
http_1.default.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, World\n');
}).listen(8081);
Startup.main();
//# sourceMappingURL=HelloWorld.js.map