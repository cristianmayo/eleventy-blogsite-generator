const _ = require("lodash");

module.exports = function(config) {
    config.setUseGitIgnore(true);
    config.addPassthroughCopy("./src/assets/**/*");

    config.addNunjucksFilter("take", (collection, count) => collection.slice(0, count || 10));
    config.addCollection("postsByYear", (collection) => {
        return _.chain(collection.getAllSorted())
            .filter((post) => post.url && post.inputPath.startsWith('./src/blog/'))
            .groupBy((post) => post.date.getFullYear())
            .toPairs()
            .reverse()
            .value();
        });
    config.addCollection("postsByCategory", (collection) => {
        return _.chain(collection.getAllSorted())
            .filter((post) => post.url && post.inputPath.startsWith('./src/blog/'))
            .groupBy((post) => post.data.category)
            .toPairs()
            .reverse()
            .value();
        });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}