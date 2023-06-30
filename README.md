# C++ Project Creator README

This is the official documentation of the "C++ Project Creator" extension
created by A.U.X.I

## Features

The C++ Project Creator extension provides a convenient way to generate a C++ project structure with a `tasks.json` file. Key features of the extension include:

-   **Project Structure Generation:** Easily create a basic C++ project structure with the necessary folders and files.

-   **Task Automation:** Generate a `tasks.json` file preconfigured with common build and run tasks, allowing you to quickly compile and execute your C++ code.

-   **Customizable Templates:** Modify the default project structure and task configurations to suit your specific requirements.

Here is an example of the generated C++ project structure:

```
MyCppProject/
├── src/
│ ├── main.cpp
│ ├── your_files.cpp
├── build/
├── tasks.json
```

## Requirements

The C++ Project Creator extension has the following requirements:

-   Visual Studio Code version 1.60.0 or later.

## Extension Settings

The C++ Project Creator extension does not contribute any additional VS Code settings.

## Usage

1. Open Visual Studio Code.

2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the command palette.

3. Search for and select the "Create C++ Project" command.

4. Choose a location on your filesystem where you want to create the C++ project.

5. Enter a name for your project and press Enter.

6. The C++ project structure will be generated, including the necessary folders and files.

7. To build and run your C++ code, open the `tasks.json` file and modify the build and run configurations as needed. Then, use the VS Code task runner to compile and execute your code.

## Known Issues

There are currently no known issues with the C++ Project Creator extension. If you encounter any problems or have suggestions for improvement, please submit an issue on the extension's GitHub repository.

## Release Notes

### 0.1.0

-   Beta release of the C++ Project Creator extension.

For more information, visit the [GitHub repository](https://github.com/AuxiDev/CppProjectsCreator) of the C++ Project Creator extension.

---
