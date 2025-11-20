'use strict';

hexo.extend.generator.register('custom_cats_tags', function (locals) {
    const fs = require('fs');
    const path = require('path');

    const categoriesPath = path.join(hexo.source_dir, 'categories/index.md');
    const tagsPath = path.join(hexo.source_dir, 'tags/index.md');

    // 自动生成分类页
    if (!fs.existsSync(categoriesPath)) {
        fs.writeFileSync(categoriesPath,
`---
title: 分类
type: categories
---
`);
        hexo.log.info('[auto] 生成 categories/index.md 完成');
    }

    // 自动生成标签页
    if (!fs.existsSync(tagsPath)) {
        fs.writeFileSync(tagsPath,
`---
title: 标签
type: tags
---
`);
        hexo.log.info('[auto] 生成 tags/index.md 完成');
    }
});
