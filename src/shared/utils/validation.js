const withMsg = (value, message) => ({ value, message })

export const required = (message) => ({
  static: {
    required: message,
  },
})

export const isEmail = (message) => ({
  static: {
    // eslint-disable-next-line no-useless-escape
    pattern: withMsg(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message),
  },
})

export const isNotEmpty = (message) => ({
  dynamic: () => (val) => {
    if (val.length === 0) return message
    return null
  },
})

export const inRange = (min, max) => (message) => ({
  static: {
    minLength: withMsg(min, message),
    maxLength: withMsg(max, message),
  },
})

export const isSameAs = (inputName) => (message) => ({
  dynamic: (watch) => (val) => {
    if (watch(inputName) !== val) return message
    return null
  },
})

function isValidHttpUrl(string) {
  try {
    URL(string)
  } catch (_) {
    return false
  }

  return true
}

export const isUrl = (message) => ({
  dynamic: () => (val) => {
    if (!val) return null
    if (!isValidHttpUrl(val)) return message

    return null
  },
})

export const withReactHookValidation = (watch, rules = []) => {
  const ruleset = rules.reduce(
    (acc, rule) => {
      if ('static' in rule) {
        acc.static = { ...acc.static, ...rule.static }
      }
      if ('dynamic' in rule) {
        acc.dynamic = [...acc.dynamic, rule.dynamic(watch)]
      }

      return acc
    },
    { static: {}, dynamic: [] }
  )

  const config = {
    ...ruleset.static,
    validate: (val) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const validateFn of ruleset.dynamic) {
        const ans = validateFn(val)
        if (ans !== undefined) return ans
      }

      return null
    },
  }

  return config
}
