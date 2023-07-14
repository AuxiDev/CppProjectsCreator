// C++ Projects Creator
// Copyright (c) 2023 A.U.X.I
// Licensed under the MIT License.

const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const { StatusBarAlignment } = vscode;
const json5 = require("json5");

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
        async () => {
            const cppFileTemplate = vscode.workspace
                .getConfiguration("cppProjectCreator")
                .get("cppFileTemplate");

            const rootPath = vscode.workspace.rootPath;
            if (!rootPath) {
                vscode.window.showErrorMessage(
                    "Please open a folder before running this command."
                );
                return;
            }

            // Paths
            const srcPath = path.join(rootPath, "src");
            const buildPath = path.join(rootPath, "build");
            const mainCppPath = path.join(srcPath, "main.cpp");

            // Ask for deletion if structure already exists
            if (fs.existsSync(buildPath) || fs.existsSync(srcPath)) {
                const confirmDelete = await vscode.window.showWarningMessage(
                    "The project structure already exists. Do you want to delete it and proceed?",
                    "Delete and Proceed",
                    "Cancel"
                );

                if (confirmDelete !== "Delete and Proceed") {
                    vscode.window.showInformationMessage("Operation canceled.");
                    return;
                }

                // Delete existing files
                try {
                    fs.unlinkSync(mainCppPath);
                    fs.rmdirSync(srcPath);
                    fs.rmdirSync(buildPath);
                } catch (error) {
                    vscode.window.showErrorMessage(
                        "An error occurred while attempting to delete the existing structure. Please verify if there are other programs currently utilizing the files and directories."
                    );
                    return;
                }
            }

            // Create structure
            try {
                fs.mkdirSync(srcPath);
                fs.mkdirSync(buildPath);
                fs.writeFileSync(mainCppPath, cppFileTemplate, "utf8");

                vscode.window.showInformationMessage(
                    "C++ project structure created successfully."
                );
            } catch (error) {
                vscode.window.showErrorMessage(
                    "An error occurred while attempting to delete the existing structure. Please verify if there are other programs currently utilizing your directory."
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
                    `Invalid or missing compiler arguments for '${preferredCompiler}'. Please check your settings!`
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
