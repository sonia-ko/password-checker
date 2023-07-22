type PasswordStrengthType = {
  level: "strong" | "medium" | "easy";
  contains: {
    letters: boolean;
    symbols: boolean;
    numbers: boolean;
  };
};

const checkPasswordStrength = (password: string): PasswordStrengthType => {
  const lettersRegex = /\p{L}/u;
  const symbolsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/;
  const numbersRegex = /\d/;

  let passwordLevel = 0;

  let passwordStrength = {
    // level: 0,
    contains: {
      letters: lettersRegex.test(password),
      symbols: symbolsRegex.test(password),
      numbers: numbersRegex.test(password),
    },
  };

  if (passwordStrength.contains.letters) {
    passwordLevel++;
  }
  if (passwordStrength.contains.symbols) {
    passwordLevel++;
  }
  if (passwordStrength.contains.numbers) {
    passwordLevel++;
  }

  if (passwordLevel <= 1) {
    return { ...passwordStrength, level: "easy" };
  }

  if (passwordLevel < 3) {
    return { ...passwordStrength, level: "medium" };
  }

  return { ...passwordStrength, level: "strong" };
};

export default checkPasswordStrength;
