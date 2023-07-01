// C++ Projects Creator
// Copyright (c) 2023 A.U.X.I
// Licensed under the MIT License.

const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const { StatusBarAlignment } = vscode;

function activate(context) {
    const runButton = vscode.window.createStatusBarItem(
        StatusBarAlignment.Left,
        100
    );
    runButton.text = "$(triangle-right) Run C++ Project";
    runButton.command = "extension.runCppBuildTask";
    runButton.tooltip = "Run C++ Project";
    runButton.show();

    let createProjectDisposable = vscode.commands.registerCommand(
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
            const buildPath = path.join(rootPath, "build");
            const mainCppPath = path.join(srcPath, "main.cpp");

            try {
                fs.mkdirSync(srcPath);
                fs.mkdirSync(buildPath);

                const mainCppTemplatePath = path.join(
                    __dirname,
                    "main.cpp.template"
                );

                const mainCppContent = fs.readFileSync(
                    mainCppTemplatePath,
                    "utf8"
                );

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

    let runBuildTaskDisposable = vscode.commands.registerCommand(
        "extension.runCppBuildTask",
        () => {
            const preferredCompiler = vscode.workspace
                .getConfiguration("cppProjectCreator")
                .get("compilerCommandPrefix", "g++")
                .trim();

            const compilerArgsSetting = vscode.workspace
                .getConfiguration("cppProjectCreator")
                .get("compilerArgs");

            let selectedArgs = [];

            if (
                compilerArgsSetting &&
                typeof compilerArgsSetting === "object"
            ) {
                selectedArgs = compilerArgsSetting[preferredCompiler];
            }

            if (!selectedArgs) {
                vscode.window.showErrorMessage(
                    `Invalid or missing compiler arguments for '${preferredCompiler}'.`
                );
                return;
            }

            const buildCommand = `${preferredCompiler} ${selectedArgs.join(
                " "
            )}`;

            vscode.window
                .createTerminal({
                    name: "C++ Project",
                    cwd: vscode.workspace.rootPath,
                })
                .sendText(buildCommand, true);
        }
    );

    context.subscriptions.push(createProjectDisposable, runBuildTaskDisposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
