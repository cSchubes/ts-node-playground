import http from "http";
import fs from "fs";
import { area  } from "./TestModule"

function Student(name, gpa){
    this.name = name;
    this.gpa = gpa;
}

Student.prototype.getGPA = function(){
    return this.gpa;
}

class StudentClass {
    private name: string;
    private gpa: number;
    constructor(name, gpa){
        this.name = name;
        this.gpa = gpa;
    }
    
    public getGPA(){
        return this.gpa;
    }

    public getName(){
        return this.name;
    }

}

class Startup {
    public static main(): number {
        console.log('Hello, World');
        var test = new StudentClass("Carson", 1.0);
        console.log(test.getGPA().toPrecision(2));
        console.log(area(5));
        return 0;
    }
}

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello, World\n');
}).listen(8081);

Startup.main();