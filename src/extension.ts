// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as moment from 'moment';
import { ViewColumn } from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "datedfile" is now active!');

    let makeLogbook = vscode.commands.registerCommand('datedfile.logbook_today', () => {
        let date = new Date();
        let config = vscode.workspace.getConfiguration("datedfile");
        let fmt = config.get("logbook_filename_format", "YYYY/MM--MMMM/YYYY-MM-DD");
        let hfmt = config.get("logbook_header_format", "YYYY-MM-DD dddd");
        let datestr = (moment(date)).format(fmt);
        let header = `# ${(moment(date)).format(hfmt)}\n\n@logbook @work`;
        let template = config.get("logbook_template", "");
        let direc = config.get("directory_logbook", "");

        if (!direc) {
            vscode.window.showErrorMessage("Must set config: datedfile.directory");
            return;
        }
        let file = path.join(direc, `${datestr.toLowerCase()}.md`);

        if (!fs.existsSync(file)) {
            fs.appendFileSync(file, header);
            if (template != "") {
                template.split("\n").forEach(element => {
                    fs.appendFileSync(file, template);
                });

            }
        }

        vscode.workspace.openTextDocument(file).then((doc) =>
            vscode.window.showTextDocument(doc, ViewColumn.Active)
        );
    });

    context.subscriptions.push(makeLogbook);
}

// this method is called when your extension is deactivated
export function deactivate() { }
