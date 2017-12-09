const autobind = context =>
  Object.getOwnPropertyNames(Object.getPrototypeOf(context))
    .forEach(method => context[method] = context[method].bind(context))
;

export default autobind;
