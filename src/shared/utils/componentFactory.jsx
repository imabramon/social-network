import React from 'react'

export const componentFactory = (data, ComponentBasic) =>
  data.map((item, index) => {
    const { key = index, id, ...restItem } = item
    switch (true) {
      case typeof item === 'object':
        return <ComponentBasic key={id ?? key} {...{ ...restItem, id }} />
      default:
        return <ComponentBasic key={id ?? key}>{item}</ComponentBasic>
    }
  })
