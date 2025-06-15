module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
module.exports = function (api) {
  api.cache(true);

  const presets = [ '@vue/cli-plugin-babel/preset' ];
  const plugins = [ '@babel/plugin-syntax-import-attributes' ];

  return {
    presets,
    plugins
  };
}
