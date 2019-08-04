import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.closeAll', () => {
        vscode.commands.executeCommand('workbench.action.closeEditorsInGroup');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}