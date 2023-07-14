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
