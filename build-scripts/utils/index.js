import { execSync } from 'child_process';

export function execTerminalCommand(command) {
  const stdout = execSync(command);

  console.log(stdout.toString().trim());
}
