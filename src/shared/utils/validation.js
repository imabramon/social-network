const withMsg = (value, message) => ({ value, message });

export const required = (message) => ({
  static: {
    required: message,
  },
});

export const isEmail = (message) => ({
  static: {
    pattern: withMsg(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message),
  },
});

export const isNotEmpty = (message) => ({
  dynamic: () => (val) => {
    if (val.length === 0) return message;
  },
});

export const inRange = (min, max) => (message) => ({
  static: {
    minLength: withMsg(min, message),
    maxLength: withMsg(max, message),
  },
});

export const isSameAs = (inputName) => (message) => ({
  dynamic: (watch) => (val) => {
    if (watch(inputName) !== val) return message;
  },
});

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return true;
}

export const isUrl = (message) => ({
  dynamic: () => (val) => {
    if (!isValidHttpUrl(val)) return message;
  },
});

export const withReactHookValidation = (watch, rules = []) => {
  const ruleset = rules.reduce(
    (acc, rule) => {
      if ('static' in rule) {
        acc.static = { ...acc.static, ...rule.static };
      }
      if ('dynamic' in rule) {
        acc.dynamic = [...acc.dynamic, rule.dynamic(watch)];
      }

      return acc;
    },
    { static: {}, dynamic: [] },
  );

  const config = {
    ...ruleset.static,
    validate: (val) => {
      for (const validateFn of ruleset.dynamic) {
        const ans = validateFn(val);
        if (ans !== undefined) return ans;
      }
    },
  };

  return config;
};
