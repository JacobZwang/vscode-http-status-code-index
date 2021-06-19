import * as vscode from "vscode";
import statuses from "./statuses";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "http-status-code-index.search",
    () => {
      vscode.window
        .showQuickPick(
          statuses.map((status) => ({
            label: status.code,
            description: status.phrase,
            detail: status.description,
          })),
          {
            matchOnDescription: true,
            matchOnDetail: true,
          }
        )
        .then((item) => {
          const editor = vscode.window.activeTextEditor;

          if (item && editor?.selection.isEmpty) {
            const pos = vscode.window.activeTextEditor?.selection.active;

            if (pos) {
              editor?.edit((textEditor) => {
                textEditor.insert(pos, item.label);
              });
            }
          }
        });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
