const regex = {
  at: {
    example: /@example\s{([^}]+)}/,
    linkImg: /@link_img\s{([^}]+)}/,
    linkName: /@link_name\s{([^}]+)}/
  },
  icon: /(?<=@icon\(\")(.*)(?=\"\))/,
  class: {
    name: /class\s(\w+)/
  },
  className: /class_name\s(.*)/,
  constant: {
    name: /const\s(\w+)/
  },
  default: /(?<==[\s\S]).*?(?=\:\s|$)/,
  enum: {
    name: /enum\s(\w+)/,
    values: /\{([^\}]+)\}/
  },
  extends: /extends\s(.*)/,
  function: {
    name: /func\s(\w+)/,
    typed: {
      parameters: {
        inferredTypeName: /(\w+[\s|\S]):/
      },
      returnType: /->(.*):/
    },
    static: /^static/
  },
  inferredType: /:=([\s|\S]*)/,
  markdown: {
    list: /^(\-|\*|\+|\d+\.)/
  },
  parameters: /(?<=@\w)\(([^\)]+)\)/,
  signal: {
    name: /signal\s(\w+)/
  },
  type: /:([\s|\S][^\s]+)/,
  variable: {
    name: /var\s(\w+)/,
    set: /(?<=set\s\=\s)(.*)(?=$|\:)/,
    get: /(?<=get\s\=\s)(.*)(?=$|\:)/
  }
}

module.exports = regex
