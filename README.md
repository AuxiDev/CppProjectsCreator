# C++ Project Creator README

This is the official documentation of the "C++ Project Creator" extension
created by A.U.X.I

It helps you to generate & compile your C++ Project providing cool settings & features!
Read the whole documentation to find out more!

## Features

The C++ Project Creator extension provides a convenient way to generate a C++ project structure and compile the project!

-   **Project Structure Generation:** Easily create a basic C++ project structure with the necessary folders and files.

-   **Task Automation:** Compile your project quickly. You can also customize every setting for compilation!

-   **Customizable Templates:** Modify the default project structure to suit your specific requirements.

Here is an example of the generated C++ project structure:

```
MyCppProject/
├── src/
│ ├── main.cpp
│ ├── your_files.cpp
├── build/
```

## Requirements

The C++ Project Creator extension has the following requirements:

-   Visual Studio Code version 1.60.0 or later.
-   The compiler of your choice if you want to compile your project.

## Extension Settings

The C++ Project Creator extension does provide additional VS Code settings.

-   `Cpp Project Creator: Compiler Command Prefix`  
    Choose your compiler command prefix. (For example: msvc, g++)  
    Standard: g++

-   `Cpp Project Creator: Compiler Args`  
    Edit or set your own compiler arguments.  
    We support: gcc, clang, msvc, g++  
    **You can also add your own! Make sure that the prefix matches!**

-   `Cpp Project Creator: Cpp File Template`
    Set your own look of the `main.cpp` file.
    We already included a standard look.

## Usage

1. Open Visual Studio Code.

2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the command palette.

3. Search for and select the `Create C++ Project` command.

4. Choose a location on your filesystem where you want to create the C++ project.

5. The C++ project structure will be generated, including the necessary folders and files.

6. Now write your program. :)

7. To compiler your project, use one of the provided buttons located the the top right corner or bottom left corner. You can also press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the command palette and then search for `Run C++ Project`.

8. You can edit your compiler settings via. `Cpp Project Creator: Compiler Args` && `Cpp Project Creator: Compiler Command Prefix`.

## Known Issues

There are currently no known issues with the C++ Project Creator extension. If you encounter any problems or have suggestions for improvement, please submit an issue on the extension's GitHub repository.

## Release Notes

### 0.3.0 - Major Update - July, 14th 2023

##### New Features

-   Introducing the "C++ File Template" setting: You can now customize the content of the pre-generated `main.cpp` file.
-   Added a new prompt which will ask you if you want to overwrite an existing project structure.

##### Quality of Life Improvements

-   Enhanced project generation: If the folder structure already exists, you will now be asked if you want to overwrite it. Before you got an error message.
-   Adjusted some error messages to provide more information on what you should do to resolve the problem.

##### Changes

-   Removed main.cpp.template: Not needed anymore since the user can now choose more easily how the `main.cpp` file should look.
-   Enhanced descriptions: Improved various descriptions to align with new updates and changes, ensuring seamless integration.

##### Bug Fixes

-   Addressed minor bugs and resolved any known issues to ensure a smoother user experience.

### 0.2.2 - Minor Update - July, 1st 2023

##### Quality 4 Life Improvements

-   Added a logo

### 0.2.1 - Minor Update - July, 1st 2023

##### Quality 4 Life Improvements

-   Added a temporar logo
-   Added CHANGELOG.md for VS Code

### 0.2.0 - Major Update - July, 1st 2023

##### New Features

-   Introducing the "Compiler Command Prefix" setting: You can now customize the prefix of your compiler command. The default is "g++".
-   Added the "Compiler Arguments" setting: Edit the arguments used by the compiler. We have included some default arguments, but you are free to modify them to fit your needs.
-   Two new buttons for compiling your project: You'll find these buttons conveniently located next to the list of opened files and at the bottom left of the editor.
-   Added a command for compiling your project: Use the command to trigger the build process easily or use the new buttons.

##### Quality of Life Improvements

-   Enhanced error messages: Error messages are now more informative and helpful in troubleshooting any issues that may occur during the compilation process.
-   New terminal instance for compilation: A new terminal window will be opened specifically for compiling your project, providing a cleaner and more focused experience.

##### Changes

-   Removed tasks.json: All the build task configurations are now handled internally, removing the need for an external tasks.json file.
-   Removed .vscode folder: The extension now manages its internal configuration and structure, eliminating the need for the .vscode folder.

##### Bug Fixes

-   Addressed minor bugs and resolved any known issues to ensure a smoother user experience.

### 0.1.1 - Fixes - June, 30th 2023

-   Fixed issues related to templates
-   Fixed tasks.json
-   Moved tasks.json to .vscode

### 0.1.0 - Major Update - June, 30th 2023

-   Beta release of the C++ Project Creator extension.

For more information, visit the [GitHub repository](https://github.com/AuxiDev/CppProjectsCreator) of the C++ Project Creator extension.

---
