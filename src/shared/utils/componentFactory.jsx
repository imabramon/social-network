import React from 'react'

export const componentFactory = (data, ComponentBasic) => {
  if (data.length === 0) return null
  return data.map((item, index) => {
    if (!item) return null

    const { key = index, id, ...restItem } = item
    switch (true) {
      case typeof item === 'object':
        return <ComponentBasic key={id ?? key} {...{ ...restItem, id }} />
      default:
        return <ComponentBasic key={id ?? key}>{item}</ComponentBasic>
    }
  })
}
