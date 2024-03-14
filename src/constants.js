export const LANGUAGE_VERSIONS = {
    java: "15.0.2",
    cpp:"10.2.0",
    python: "3.10.0",
    javascript: "18.15.0",
  };

export const CODE_SNIPPETS = {
    javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("John");\n`,
    
    python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
    java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    cpp: `#include <iostream>\nusing namespace std;\nint main() {\ncout << "hello world";\n\treturn 0;\n}\n`
   
  };