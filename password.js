const generatePassword = (length) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@_';
  const specialSymbols = '@_';
  const numbers = '0123456789';
  let password = '';
  let hasUppercase = false;
  let hasSpecialSymbol = false;
  let hasNumber = false;

  while (password.length < length || !hasUppercase || !hasSpecialSymbol || !hasNumber) {
    const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));

    if (!hasUppercase && /[A-Z]/.test(randomChar)) {
      password += randomChar;
      hasUppercase = true;
    } else if (!hasSpecialSymbol && specialSymbols.includes(randomChar)) {
      password += randomChar;
      hasSpecialSymbol = true;
    } else if (!hasNumber && numbers.includes(randomChar)) {
      password += randomChar;
      hasNumber = true;
    } else if (password.length < length) {
      password += randomChar;
    }
  }

  return password;
};

const generateOTP = (length) => {
  const numbers = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return otp;
};

function generatePasswordAndDisplay() {
  const paslen = parseInt(prompt("Enter length of password"));

  if (paslen < 8) {
    document.getElementById('result').textContent = "Error: Password length should be at least 8 characters";
    return;
  }

  const password = generatePassword(paslen);
  document.getElementById('result').textContent = "Your password is: " + password;
}

function generateOTPAndDisplay() {
  const otplen = parseInt(prompt("Enter length of OTP"));
  const otp = generateOTP(otplen);
  document.getElementById('result').textContent = "Your OTP is: " + otp;
}
