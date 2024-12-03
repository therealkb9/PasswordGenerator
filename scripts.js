document.getElementById('generateBtn').addEventListener('click', generatePassword);

function generatePassword() {
  const length = document.getElementById('passwordLength').value;
  const includeUppercase = document.getElementById('includeUppercase').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSymbols = document.getElementById('includeSymbols').checked;

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  let characters = lowercase;
  if (includeUppercase) characters += uppercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById('passwordOutput').value = password;
}

