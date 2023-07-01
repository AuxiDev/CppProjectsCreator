// C++ Projects Creator
// Copyright (c) 2023 A.U.X.I
// Licensed under the MIT License.

const vscode = require("vscode");
const path = require("path");
const fs = require("fs");

function activate(context) {
    let disposable = vscode.commands.registerCommand(
        "extension.createCppProject",
        () => {
            const rootPath = vscode.workspace.rootPath;
            if (!rootPath) {
                vscode.window.showErrorMessage(
                    "Please open a folder before running this command."
                );
                return;
            }

            const srcPath = path.join(rootPath, "src");
            const vsPath = path.join(rootPath, ".vscode");
            const buildPath = path.join(rootPath, "build");
            const tasksJsonPath = path.join(vsPath, "tasks.json");
            const mainCppPath = path.join(srcPath, "main.cpp");

            try {
                fs.mkdirSync(srcPath);
                fs.mkdirSync(buildPath);
                fs.mkdirSync(vsPath);

                const tasksJsonTemplatePath = path.join(
                    __dirname,
                    "tasks.json.template"
                );
                const mainCppTemplatePath = path.join(
                    __dirname,
                    "main.cpp.template"
                );

                const tasksJsonContent = fs.readFileSync(
                    tasksJsonTemplatePath,
                    "utf8"
                );
                const mainCppContent = fs.readFileSync(
                    mainCppTemplatePath,
                    "utf8"
                );

                fs.writeFileSync(tasksJsonPath, tasksJsonContent);
                fs.writeFileSync(mainCppPath, mainCppContent);

                vscode.window.showInformationMessage(
                    "C++ project structure created successfully."
                );
            } catch (error) {
                vscode.window.showErrorMessage(
                    "An error occurred while creating the project structure."
                );
            }
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
