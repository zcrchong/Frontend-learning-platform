// 用于在打包时删除文件中忘记删除的console.log
export const CR_RemoveConsolePlugin = {
  apply(compiler: any) {
    compiler.hooks.emit.tap('CR_RemoveConsolePlugin', (compilation: any) => {
      for (const name in compilation.assets) {
        // 过滤出 js 文件
        if (
          name.endsWith('.js') ||
          name.endsWith('.ts') ||
          name.endsWith('.vue') ||
          name.endsWith('.jsx') ||
          name.endsWith('.tsx')
        ) {
          // 替换代码中的 console.log
          const source = compilation.assets[name].source();
          const replacedSource = source.replace(/console\.log\(.+?\)/g, '');
          compilation.assets[name] = {
            source: () => replacedSource,
            size: () => replacedSource.length,
          };
        }
      }
    });
  },
};
